import express from 'express';
import mysql from 'mysql';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import {parseData} from './parse.mjs';

dotenv.config();

// sequel connection 
// I am hard coding in the information here instead of using the .env function because, for whatever reason, it leads to errors...
var con = mysql.createConnection({
    host: "database-1.cfahjwyzytn4.us-east-2.rds.amazonaws.com",
    user: "phillab",
    password: "N4WTHU7f3u2a9Bx",
    database: "factive_experiment",
    port: "3306",
    // socketPath: '/var/run/mysqld/mysqld.sock',
  });
// try to connect
con.connect(function(err) {
  if (err) throw err;
  console.log("Connected to database!");
});
  
// express app
const app = express();

//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// serving the server the index.html file 
app.use(express.static('public'));

// if we receive a "get" request from the path "./", then we will send the message receiving
app.get('/', (req, res) => {
    console.log("in get");
}); 

// post sends information as well... 
// if we receieve a post request from the path "./data", then we will do the following...
app.post('/data', (req, res) => {
    var messages = parseData(req.body.data[0], req.body.data[1]);
    var data = messages[0]
    var info = messages[1]
    // to the information_table
    con.query(info, function (err, result) {
      if (err) console.log(err);
      else console.log("Data recorded in information");
    });
    // to the data table
    for (var row in data){
        const msg = data[row];
        con.query(msg, function (err, result) {
            if (err) console.log(err);
            else console.log("Data recorded in data");
        });
    }
});


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Listening on Port: ${PORT}`);
});
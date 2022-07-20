
/* so we are going to return an array with string and another array of strings corresponding 
to insert to the information and data tables */
function parseData(info, data) {
    // sort through the data to construct data array with participants responses
    var data_array = [];
    for (var i = 0; i < data.length; i++){
        var id = data[i][0] ;
        var context = data[i][1];
        var condition = data[i][2]; 
        var status = data[i][3];
        // remove apostrophes as they mess up sql insert 
        var question = data[i][4];
        question = question.replace(/'/g, '');

        var answer = data[i][5];
        var correct = data[i][6];
        var rt = data[i][7];
        var data_message = `INSERT INTO data_table (id, context, q_condition, q_type, question, answer, correct, rt) VALUES ('${id}', '${context}', '${condition}', '${status}', '${question}', '${answer}', '${correct}', '${rt}');`
        data_array.push(data_message);
    }
    //create information array  
    var age = info.age;
    var gender = info.gender; 
    var id = info.id; 
    var race = info.race; 
    var ethnicity = info.ethnicity;
    var information_message = `INSERT INTO information_table (id, age, race, ethnicity, gender) VALUES ('${id}', '${age}', '${race}', '${ethnicity}', '${gender}');`

    return [data_array, information_message];
}

export {parseData};
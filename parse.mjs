
/* so we are going to return an array with string and another array of strings corresponding 
to insert to the information and data tables */
function parseData(info, data) {
    // sort through the data to construct data array with participants responses
    var data_array = [];
    for (var i = 0; i < data.length; i++){
        var id = data[i][0] ;
        var context = data[i][1];
        var condition = data[i][2]; 
        // remove apostrophes as they mess up sql insert 
        var question = data[i][3];
        console.log(question);
        question = question.replace(/'/g, '');
        console.log(question);
        var answer = data[i][4];
        var correct = data[i][5];
        var rt = data[i][6];
        var data_message = `INSERT INTO data (id, context, q_condition, question, answer, correct, rt) VALUES('${id}', '${context}', '${condition}', '${question}', '${answer}', '${correct}', '${rt}');`;
        data_array.push(data_message);
    }
    //create information array  
    var age = info.age;
    var handedness = info.handedness; 
    var language = info.language; 
    var nationality = info.nationality; 
    var residence = info.residence; 
    var gender = info.gender; 
    var education = info.education; 
    var id = info.id; 

    var information_message = `INSERT INTO information_table (id, age, handedness, language, nationality, residence, gender, education) VALUES ('${id}', '${age}', '${handedness}', '${language}', '${nationality}', '${residence}', '${gender}', '${education}');`
    console.log(information_message);
    return data_array;


    // console.log(info);
    // console.log(data);
}

export {parseData};
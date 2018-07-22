console.log('Notes.js working');

const fs1 = require('fs')

var Add = (name, email, phone) => {
    var names = [];
    var name1 = {
        name,
        email,
        phone
    };
     try{
         
    var namesString = fs1.readFileSync('names.json');
    names = JSON.parse(namesString);
     } 
     catch (e) {

     }

     var duplicateName = names.filter(() =>  names.name === name)
     if( duplicateName === 0){
     names.push(name1);
    fs1.writeFileSync('names.json', JSON.stringify(names));
     }
};


module.exports = {
    Add
};
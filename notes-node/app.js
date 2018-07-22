console.log('App starting app.js');


const fs = require('fs');

const os=require('os')
const _ = require('lodash')
const yargs = require('yargs')
const notes=require('./notes')

const argv=yargs.argv;
var command = process.argv[2]
console.log('Command: ', command)
console.log('Process:', process.argv);
console.log('Yargs:', argv);


if(command==='add'){
notes.addNote(argv.title, argv.body)
    
}else if(command==='list'){
   notes.getAll();
}
else if(command === 'read')
{
           notes.readDetails(argv.firstname, argv.lastname)    
}
    else{
    console.log('not recognized');
    
}






// var user=os.userInfo()

// console.log(user);

// console.log(notes.addnote());

// console.log('result:', notes.add(2,-8))


// console.log(_.isString(true))
// console.log(_.isString('o'))

// var filteredArray = _.uniq(['vikas', 1, 'vikas'])
// console.log(filteredArray)

// const fs=require('fs');
// fs.appendFile('greetings.txt','Hello World' + user.username + '!' + notes.age+ '.', function (err) {
// if (err) {
// console.log('una');

// }
// }
// );



console.log('pp starting app.js');


const fs = require('fs');

const yargs = require('yargs')
const names=require('./names')

const nameOption = {
    describe: 'Name of user',
    demand: true,
    alias: 'f'
}

const emailOption = {
    describe: 'email of the user',
    demand: true,
    alias: 'e'
}

const phoneOption = {
    
        describe : 'Phone number of user',
        demand : true,
        alias: 'p'
    
}
const args=yargs.
command('add', 'Adding a new user', {
    fullname:nameOption,
    email :emailOption, 

    phone : phoneOption
})
.command('remove', 'removing a user', {
    fullname: nameOption })
    .command('get', 'getting a user', {
        fullname: nameOption,
    })
    .command('all', 'All users info', {
        fullname: nameOption
    })

.help().
argv;
var command = args._[0]

console.log('Yargs:', args);


if(command==='add'){
var name=names.addUser(args.fullname, args.email, args.phone);
if(name){
    console.log('user added');
    
    console.log(` USER DETAIILS:::  Name:  ${name.fullname} Email: ${name.email} Phone: ${name.phone} `)
}else{
    console.log('User already in');

    
}
}

if (command === 'remove') {
 var remove =   names.removeUser(args.fullname);
 var msg = remove ? 'user removed' : 'user not removed'
// if(true){
//     console.log('user removed');
    
// }else {
//     console.log('User does not exist');
    
// }
console.log(msg)
 
}

if (command === 'get') {
  var add =  names.getUser(args.fullname);
  console.log(`Name is: ${add.fullname}`)
}

if (command === 'all') {
    var getall = names.getAll();
    console.log(`Users: ${getall.length}`)
    getall.forEach((name) => 
    console.log(`Name: ${name.fullname}`) 

   );
}
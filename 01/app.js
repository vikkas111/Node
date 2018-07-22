console.log('App starting app.js');

const fs = require('fs');
const _ = require('lodash');

const yargs = require('yargs')
const names = require('./names')

const argv = yargs.argv;
var command = argv._[0];
console.log('Command: ', command);
var command = process.argv

console.log('Name: ', argv)

if(command === 'add'){
    names.Add(argv.name, argv.email, argv.phone)
}


console.log('starting notes.js');
const fs = require('fs');
var addNote= (title, body) => {
    var notes = [];
  var note = {
    title,
    body
  };

  try {
    var notesString = fs.readFileSync('notes-data.json');
    notes = JSON.parse(notesString);
  } catch (e) {

  }

  var duplicateNotes = notes.filter((note) => note.title === title);

  if (duplicateNotes.length === 0) {
    notes.push(note);
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
  }
}

var getAll = () =>{
    console.log('Getting all the notes')
}

var readDetails = (firstname, lastname) => {
    console.log('FullName:' , firstname, lastname);
    
}
module.exports = {
    addNote,
    getAll,
    readDetails
}

// module.exports.addnote= () =>{

//     console.log('addNote');
//     return 'new note'
    
// };

// module.exports.add=(a,b) =>
// {
//    return a+b;
// }

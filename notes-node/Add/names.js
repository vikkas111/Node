console.log('names.js working');

const fs = require('fs')

var fetchUser = () => {
    try{
         
        var namesString = fs.readFileSync('names.json');
        return JSON.parse(namesString);
         } 
         catch (e) {
          return [];
         }
};

var saveUser = (names) => {
    fs.writeFileSync('names.json', JSON.stringify(names));

}


var addUser = (fullname, email, phone) => {
    var names = fetchUser();
    var name = {
        fullname,
        email,
        phone
    };
   

     var duplicateName = names.filter((name) =>  name.fullname === fullname)
     if( duplicateName.length === 0){
     names.push(name);
     saveUser(names)
     return name
     }
};

var removeUser = (fullname) => {
    var names= fetchUser();
    var filterRemoveName = names.filter((name) => name.fullname !== fullname);
    saveUser(filterRemoveName);
    console.log(`${names.length} ${filterRemoveName.length}`)

}


var getUser = (fullname) => {
    var names = fetchUser();
    var filterGetUser = names.filter((name) => name.fullname == fullname)
    return filterGetUser[0];
}

var getAll = () => {
    return fetchUser();
}


module.exports = {
    addUser,
    removeUser,
    getUser,
    getAll
};
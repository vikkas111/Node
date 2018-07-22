var getUser = (id, allback) => {
    var user = {
       id:id,
       name:'vikas'
    };
    allback(user)
}
getUser(22, (vikkas) => {
    console.log(vikkas)
})
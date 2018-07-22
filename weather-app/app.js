const request = require('request')

request ({
    url: 'http://maps.googleapis.com/maps/api/geocode/json?address=1105%20prairie%20view%20dr%20iowa',
    json: true
}, (error, response, body) => 
console.log(body))
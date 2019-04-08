const express = require('express');

var app = express();
app.use(express.static(__dirname + '/public'));
app.get('/', (req, res) => {
    /*
    Have two argument :
    Request is calling the request that are coming in
    Respond is a data what you want to send and more
    */
});

app.listen(3000 , function () {
    console.log("Server starting up !");
});
var express = require('express');
var app = express();
var fs = require("fs");
var bodyParser = require('body-parser');

//enable CORS for request verbs
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Content-Type", "application/json");
    res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE, OPTIONS");
    next();
});

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

//Handle GET method for listing all users
app.get('/fake', function (req, res) {
    fs.readFile(__dirname + "/" + "data.json", 'utf8', function (err, data) {
        console.log(data);
        res.send(data);
    });
})

var server = app.listen(37337, function () {

    var host = server.address().address
    var port = server.address().port

    console.log("Example app listening at http://%s:%s", host, port)

})  
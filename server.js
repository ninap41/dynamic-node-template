// require express
var express = require("express");
var path = require("path");
var session = require('express-session'); //added session goes here
var bodyParser = require('body-parser');
var app = express();

app.use('/favicon.ico', express.static('favicon.ico'));

var serverSide = require('./serverSide.js');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/static'));


app.use(session({secret: 'keep it secret keep it safe'})); //use session
app.set('views', path.join(__dirname, './views')); //set dependences
app.set('view engine', 'ejs');

// var mongoose = require('mongoose'); // Here comes the goose REQUIRE IT
// mongoose.connect('mongodb://localhost/Mongoose_Dash1'); // database
// mongoose.Promise = global.Promise;

var url = require('url');
var base_href = ''


//ROUTES BEGIN Main Pages ___________________________________________________________________________________

app.get('/', function(req, res) {
    base_href = req.get('host')
    console.log(base_href)
    res.render('pages/index', {viewName: 'index', object: serverSide.testObj, base_hrefs : base_href });
})

app.get('/first', function(req, res) {
    res.render('pages/first/first',  {viewName: 'first', base_hrefs : base_href});
})
app.get('/second', function(req, res) {
    res.render('pages/second/second', {viewName: 'second', base_hrefs : base_href});
})

app.get('/third', function(req, res) {
    res.render('pages/third/third', {viewName: 'third', base_hrefs : base_href});
})

app.listen(8000, function() {
 console.log("IT'S RUNNING ON 8000 WOOOO");
});
const express = require("express");
const app = express();
app.use(express.static('./'));
app.set('view engine', 'html')
app.get('/', function(req, res) {
    res.render('login.html')
});
app.get('/', function(req, res) {
    res.render('home')
});
app.get('/newComplaint', function(req, res) {
    res.render('newComplaint')
});
app.get('/solved', function(req, res) {
    res.render('solved')
});


var server = app.listen(3000, function() {
    console.log("App is running");
})
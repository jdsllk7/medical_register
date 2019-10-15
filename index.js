var cookieParser = require('cookie-parser');
var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();
app.use(cookieParser());
app.set('View engine', 'ejs');
app.use('/public', express.static('public'));

//ADD SERVICE WORKER
app.get("/sw.js", function (req, res) {
    res.header("Content-Type", "text/javascript");
    res.sendFile(path.join(__dirname, "/sw.js"));
});


//JS SESSIONS
app.use(session({
    secret: 'secret101Mimi',
    resave: true,
    saveUninitialized: true
}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


//DISPLAY REGISTER PAGE
app.get('/', function (request, response) {
    response.sendFile(path.join(__dirname + '/register.html'));
});

app.get('/records', function (request, response) {
    console.log(request.cookies.email + " Saved as Cookie");
    response.render('records.ejs', { email: request.cookies.email });
});
app.get('/setCookie', function (request, response) {
    response.cookie('email', request.query.email, { maxAge: 31556952000});
    console.log(request.cookies.email + " Saved as Cookie"); 
    response.redirect('/records');
});

app.get('/sensorData', function (request, response) {
    response.cookie('pulse', request.query.pulse, { maxAge: 31556952000});
    console.log(request.cookies.pulse); 
    response.render('sensorRecords.ejs', { email: request.cookies.pulse });
});

app.get('/fallback', function (request, response) {
    response.sendFile(path.join(__dirname + '/fallback.html'));
});

app.get('/emailSent', function (request, response) {
    console.log("Medical Data sent to " + request.cookies.email);
    response.redirect('/records');
});

app.get('/icon', function (request, response) {
    response.sendFile(path.join(__dirname + '/public/img/Clip2.ico'));
});








//LISTEN TO PORT
var port = process.env.PORT || 3000;
app.listen(port, function () {
    console.log('Running localhost:3000');
});
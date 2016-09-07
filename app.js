var express 	     = require("express"); 
var load    	     = require("express-load"); 
var path 		     = require('path'); 
var session 	     = require('express-session'); 
var bodyParser       = require('body-parser'); 
var expressValidator = require('express-validator'); 
var http             = require('http'); 
var passport         = require('passport'); 
var app 		     = express(); 

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(expressValidator()); 
app.use(session({secret : 'sometext', resave: true, saveUninitialized: true}));
//app.use(cookieSession()); // Express cookie session middleware 
app.use(passport.initialize());   // passport initialize middleware
app.use(passport.session());   

app.use(express.static(path.join(__dirname, '/public')));

app.set('views', __dirname + '/views'); 
app.engine('html', require('ejs').renderFile); 
app.set('view engine', 'ejs'); 

//A maneira mais bonita de carregas coisas no express. 
load('config'). 
then('models'). 
then('controllers'). 
then('routes'). 
into(app); 

var port = process.env.PORT || 80; 
app.set('port', port); 
http.createServer(app).listen(port); 

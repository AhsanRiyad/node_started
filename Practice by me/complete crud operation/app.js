//declaration
var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookieParser');
var exSession = require('express-session');
var login = require.main.require('./controller/login');
var logout = require.main.require('./controller/logout');
var home = require.main.require('./controller/home');
var app = express();
var port = 3000;



//configuration
app.set('view engine' , 'ejs');



//middlewares
app.use(exSession({secret: ' Riyad' , saveUninitialized: true , resave: false}));
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use('/login' , login);
app.use('/home' , home);
app.use('logout' , logout);


//route
app.get('/' , function(){
	res.send('Index Page');
});


//server startup
app.listen(port , ()=> console.log('server started at port + ' + port));
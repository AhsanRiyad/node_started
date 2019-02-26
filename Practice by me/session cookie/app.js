//declaration
var express = require('express');
var exSession = require('express-session');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var login = require.main.require('./controller/login');
var home = require.main.require('./controller/home');
var app = express();
var port = 3000;


//configuration
app.set('view engine' , 'ejs');


//middlewares
app.use(exSession({secret: 'riyad' , saveUninitialized: true , resave: false}));

app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use('/login' , login);
app.use('/home' , home);

//routes
app.get('/' , (req, res)=>res.send('index page'));


app.get('/setCookie' , function(req, res){
	res.cookie('cookie1' , 'first cookie');
	res.send('done');
})


app.get('/viewCookie' , function(req, res){
	res.send(req.cookies['cookie1']);

})

app.get('/rmCookie' , function(req, res){
	res.clearCookie('cookie1');
	res.send('done');
})

app.listen(port , function(){
	console.log('server started at '+ port);
})



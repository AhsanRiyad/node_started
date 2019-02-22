var fs = require('fs');
var express = require('express');
var app = express();
var port = 3000;

app.get('/', function(req, res){
	console.log('Welcome to express Js');
	//res.send('Welcome to express JS');
	fs.createReadStream('index.html').pipe(res);
	//res.sendFile('index.html');
});
app.get('/home', function(req, res){
	fs.createReadStream('home.html').pipe(res);
});

app.get('/contact', function(req, res){
	fs.createReadStream('contact.html').pipe(res);
});

app.listen(port, function(){
	console.log(`Example app listening on port ${port}!`);
});
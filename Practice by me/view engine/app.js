var express = require('express');
var student = require.main.require('./student');
var app = express();
var port = 3000;

app.set('view engine' , 'ejs');

app.use('/student' , student);


app.get('/' , function(req, res){
	res.render('index');
})

app.listen(port, function(){
	console.log('server started at port no ' + port );
})
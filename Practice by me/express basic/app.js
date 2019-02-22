var fs = require('fs');
var express = require('express');
var app = express();
var port = 3000;


app.get('/' , function(req, res){
	console.log('welcome to express');
	// res.send('welcome to express js');

	//res.write('hello express'); //writing to console and for http module, wirtes on web page


	fs.createReadStream('index.html').pipe(res);



});




app.listen(port , function(){
	console.log('example app listening on port'+port);
})
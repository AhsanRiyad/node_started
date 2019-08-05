var fs = require('fs');
var express = require('express');
var app = express();
var port = 3000;
var mysql = require('mysql');

app.get('/basic_testing' , function(req, res){
	console.log('welcome to express');
	// res.send('welcome to express js');

	//res.write('hello express'); //writing to console and for http module, wirtes on web page


	

	var con = mysql.createConnection({
	  host: "127.0.0.1",
	  user: "frieomkc_riyad",
	  password: "01919448787",
	  database: "frieomkc_laravel"
	});

	con.connect(function(err) {
	  if (err) throw err;
	  con.query("SELECT * FROM products", function (err, result, fields) {
	    if (err) throw err;
	    console.log(result);
	    res.send(result);
	  });
	});










	//fs.createReadStream('index.html').pipe(res);



});




app.listen(port , function(){
	console.log('example app listening on port'+port);
})
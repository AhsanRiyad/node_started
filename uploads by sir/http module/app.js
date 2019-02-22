var http = require('http');
var fs = require('fs');

/*var server = http.createServer(function(req, res){

});*/

//var server = http.createServer((req, res)=>console.log('test'));

var server = http.createServer(requestHandler);

function requestHandler(req, res){

	//console.log(req.url);
	//console.log(req.method);
	
	if(req.url == "/"){
		//res.write('welcome');
		//res.end();

		fs.createReadStream('index.html').pipe(res);
		
		 /*fs.readFile('index.html', function(err, data){
		 	res.write(data);
		 	res.end();
		 });*/	

	}else if (req.url == "/contact"){

		/*res.writeHead(200,{'content-type': 'text/plain'});
		res.write('<h1>welcome home!</h1>');
		res.end();*/
		fs.createReadStream('contact.html').pipe(res);
	}else{
		res.write('404 Bad request');
		res.end();
	}
}

server.listen(1234);
console.log("server started at 1234...");
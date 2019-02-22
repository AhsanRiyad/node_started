var fs = require('fs');
var http = require('http');
var port = 3000;

var server = http.createServer(requestHandler);

//console.log(req.url);
//console.log(req.method);


function requestHandler(req, res){
	console.log('inside the server variable');
	
	if(req.url=="/"){
		res.write("hellow world");
		res.end();
	}

	else if(req.url=="/home")
	{
		fs.createReadStream('index.html').pipe(res);
	}
	else if(req.url=="/other"){
		fs.readFile('index.html' , function(err,data){
			res.write(data);
			res.end();
		});
	}
	else if(req.url=="/plainText")
	{
		res.writeHead(200,{'content-type': 'text/plain'});
		res.write('<h1>this is inside h1 tage</h1>');
		res.end();

	}

}

server.listen(port);

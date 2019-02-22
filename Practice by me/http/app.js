var fs = require('fs');
var http = require('http');
var port = 3000;

var server = http.createServer(requestHandler);

server.set('case sensitive routing', false);

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

	else if(req.url=="/plainText")
	{
		res.writeHead(200,{'content-type': 'text/plain'});
		res.write('<h1>this is inside h1 tage</h1>');
		res.end();

	}

}

server.listen(port);

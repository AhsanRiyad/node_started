var mysql = require('mysql');

var config = {
	host: '127.0.0.1',
	user: 'root',
	password: '',
	database: 'node'
};

//var connection = "";

function getConnection(callback){
	console.log(1);
	connection = mysql.createConnection(config);
	console.log(2);
	connection.connect(function(err){
		if(err){

			console.log(err.stack);
		}
		console.log(3);
		console.log('connection id is: '+ connection.threadId);
	});
	console.log(4);
	callback(connection);
	console.log(5);
}

module.exports= {
	getResult: function(sql, callback){		
		getConnection(function(connection){
			console.log('query 0');
			connection.query(sql, function(err, result){		
			
			if(err){
					callback([]);
				}else{
					console.log('query');
					callback(result);
				}
			});

			connection.end(function(error){
				console.log('connection ending ...');
				//console.log('connection ending ...');
			});
		});
	},
	execute: function(sql, callback){		
		getConnection(function(connection){
			connection.query(sql, function(err, status){		
		
				if(err){
					callback(false);
				}else{
					callback(status);
				}
			});

			connection.end(function(error){
				console.log('connection ending ...');
				//console.log('connection ending ...');
			});
		});
	}
}





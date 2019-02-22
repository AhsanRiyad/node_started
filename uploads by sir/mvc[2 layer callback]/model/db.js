var mysql = require('mysql');
var config = {
		host: 'localhost',
		user: 'root',
		password: '',
		database: 'node'
	};

var connection = "";

function getConnection (){
	connection = mysql.createConnection(config);
	connection.connect(function(err){
		if(err){
			console.log(err.stack);
		}
		console.log('connection id is: '+ connection.threadId);
	});
	return connection;
}


module.exports = {
	getResults : function(sql, callback){
		connection = getConnection();
		connection.query(sql, function(error, results){
			if(error){
				callback([]);
			}else{
				callback(results);
			}
		});
	}
};

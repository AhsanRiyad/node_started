//a very good example to call a procedure


var mysql = require('mysql');


var config = {
	host: '127.0.0.1' , 
	user: 'root' , 
	password: '',
	database: 'ff'
};

var sql = 'CALL filterTodo';

connection = mysql.createConnection(config);
connection.query(sql, function(err, result)
{
	if(err)
	{
		console.log('error');
	}else{
		console.log(result[0][0].u_type);
	}


});
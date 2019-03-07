//a very good example to call a procedure


/*
working example
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


});*/




/* multistatement query with stored procedure and  INOUT parameter

var mysql = require('mysql');
var opts = {
  	host: '127.0.0.1' , 
	user: 'root' , 
	password: '',
	database: 'ff',
	multipleStatements: true
};

var pool = mysql.createPool(opts);
pool.getConnection(function(err, conn) {
  conn.query('DROP PROCEDURE IF EXISTS pp; CREATE PROCEDURE pp(INOUT i INT, IN j INT) BEGIN SET i = 10+j; END;');
  conn.query('SET @test = 1; call pp(@test, 123); SELECT @test as inout_i', function(err, rows) {
    console.log(rows);
  });
});
*/










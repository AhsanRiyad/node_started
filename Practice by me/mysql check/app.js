var mysql = require('mysql');

var config = {
	host: '127.0.0.1',
	user: 'root',
	password: '',
	database: 'node_project',
	multipleStatements: true
};


function getConnection(){
	var connection = mysql.createConnection(config);
	connection.connect(function(err){
		if(err){
			console.log(err.stack);
		}
		console.log('connection id is: '+ connection.threadId);
	});
	return connection;
}



//var pool  = mysql.createPool(config);

//var sql = 'select * from products; select * from user';


var sql = "INSERT INTO `visit`(`product_id`, `user_id`, `user_ip`, `hit_count`) VALUES (1,2,'123',100); INSERT INTO `g_user_name`(`g_u_id`, `u_type`, `first_name`, `last_name`, `counter`) VALUES (1,'user','ahsan','riyad','counter');"

var connection = mysql.createConnection(config);
connection.connect(function(err){
		if(err){
			console.log(err.stack);
		}
		console.log('connection id is: '+ connection.threadId);
	});

connection.query(sql, function(err , result){
	console.log(result);


});


console.log('hellow world');








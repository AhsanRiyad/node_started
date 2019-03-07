//a very good example to call a procedure


var mysql = require('mysql');


var config = {
	host: '127.0.0.1' , 
	user: 'root' , 
	password: '',
	database: 'ff',
	multipleStatements: true
};

var pool = mysql.createPool(config);
pool.getConnection(function(err, conn) {
  conn.query('select * from g_user');
  conn.query('select g_u_email from g_user', function(err, rows) {
    console.log(rows);
  });
});




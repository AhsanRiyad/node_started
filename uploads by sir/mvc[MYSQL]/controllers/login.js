var express = require('express');
var mysql = require('mysql');
var router = express.Router();

router.get('/', (req, res)=>{
	res.render('login/index');
});

router.post('/', (req, res)=>{
	//res.render('login/index');

	var connection = mysql.createConnection({
		host: 'localhost',
		user: 'root',
		password: '',
		database: 'node'
	});

	connection.connect(function(err){
		if(err){
			console.log(err.stack);
		}
		console.log('connection id is: '+ connection.threadId);
	});
	
	var sql = "select * from user where username='"+req.body.uname+"' and password='"+req.body.password+"'";

	connection.query(sql, function(err, result){
		
		if(result.length > 0){
			req.session.name = req.body.uname;
			res.redirect('/home');
		}else{
			res.render("login/index");
		}
	});
});

module.exports = router;
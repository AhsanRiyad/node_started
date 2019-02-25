var express = require('express');
var mysql = require('mysql');
var router = express.Router();

//ROUTES
router.post('/', function(req, res){
	//console.log(req.body.uname);

	var connection = mysql.createConnection({
		host: '127.0.0.1',
		user: 'root',
		password: '',
		database: 'node'
	});

	connection.connect(function(err){
		if(err){
			console.log('connection error: '+err.stack);
		}else{
			console.log('connection id: '+connection.threadId);
		}
	});

	var sql = "select * from user where username='"+req.body.uname+"' and password='"+req.body.password+"'";
	connection.query(sql, function(error, result){

		console.log(result);
		if(result.length > 0){
			req.session.un = req.body.uname;
			res.redirect('/home');
		}else{
			res.redirect('/login');
		}
	});
});

router.get('/', function(req, res){
	//res.send('hello from express JS');

	res.render('login/index');
});

module.exports = router;







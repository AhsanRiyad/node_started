var express = require('express');
var mysql = require('mysql');
var router = express.Router();


//ROUTES

router.get('/', function(req, res){

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

	//var userList = "";
	var sql = "select * from user";
	connection.query(sql, function(error, result){

		if(error == null){
			//console.log(result);
			userList = result;
			// /console.log(result[0]);
			/*for(var i=0; i < result.length; i++){
				console.log(result[i]);
			}*/
		}
	});

	if(req.session.un != null){
		res.render('home/index', {uList: userList});
	}else{
		res.redirect('/login');
	}

});

module.exports = router;







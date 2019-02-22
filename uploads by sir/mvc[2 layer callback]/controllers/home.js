var express = require('express');
var mysql = require('mysql');
var router = express.Router();

router.get('/', (req, res)=>{

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
	
	var sql = "select * from user";
	
	connection.query(sql, function(err, results){
	
		if(results.length > 0){
		
			if(req.session.name != null){
				var user = {
					name: req.session.name,
					uList: results
				};
				//console.log(user);
				res.render('home/index', user);
			}else{
				res.redirect('/login');
			}
		}
	});

});


module.exports = router;
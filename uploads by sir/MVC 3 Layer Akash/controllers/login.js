var express = require('express');
var db = require.main.require('./model/db');
var router = express.Router();

//ROUTES
router.get('/', function(req, res){
	res.render('login/index');
});

router.post('/', function(req, res){
	
		var sql = "select * from user where username='"+req.body.uname+"' and password='"+req.body.password+"'";
		
		db.getResults(sql, function(results){
			if(results.length > 0){
				req.session.un = req.body.uname;
				res.redirect('/home');
			}else{
				res.redirect('/login');
			}		
		});

		//console.log(results);
});

module.exports = router;







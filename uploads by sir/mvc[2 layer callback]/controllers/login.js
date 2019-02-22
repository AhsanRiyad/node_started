var express = require('express');
var db = require.main.require('./model/db');
var router = express.Router();

router.get('/', (req, res)=>{
	res.render('login/index');
});

router.post('/', (req, res)=>{
	//res.render('login/index');
		var sql = "select * from user where username='"+req.body.uname+"' and password='"+req.body.password+"'";
		db.getResults(sql, function(results){
			if(results.length > 0){
				req.session.name = req.body.uname;
				res.redirect('/home');
			}else{
				res.render("login/index");
			}
		});
});

module.exports = router;
var express = require('express');
var db = require.main.require('./model/db');
var router = express.Router();


//ROUTES
router.get('/', function(req, res){

	var sql = "select * from user";
	
	db.getResults(sql, function(results){
		
		if(req.session.un != null){
			var data = {
				name: req.session.un,
				uList: results
			};

			res.render('home/index', data);
		}else{
			res.redirect('/login');		
		}
	});
});

module.exports = router;







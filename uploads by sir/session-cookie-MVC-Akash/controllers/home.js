var express = require('express');
var router = express.Router();


//ROUTES

router.get('/', function(req, res){

	if(req.session.un != null){
		res.render('home/index', {name: req.session.un});
	}else{
		res.redirect('/login');
	}

});

module.exports = router;







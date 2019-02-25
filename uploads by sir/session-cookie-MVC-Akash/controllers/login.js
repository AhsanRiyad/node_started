var express = require('express');
var router = express.Router();


//ROUTES
router.post('/', function(req, res){
	console.log(req.body.uname);

	if(req.body.uname == req.body.password){
		req.session.un = req.body.uname;
		res.redirect('/home');
	}else{
		res.redirect('/login');
	}
});

router.get('/', function(req, res){
	//res.send('hello from express JS');

	res.render('login/index');
});

module.exports = router;







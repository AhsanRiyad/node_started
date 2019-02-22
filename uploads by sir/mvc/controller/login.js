var express =
 require('express');
var router = express.Router();

router.get('/', (req, res)=>{
	res.render('login/index');
});

router.post('/', (req, res)=>{
	//res.render('login/index');

	if(req.body.uname == req.body.password){
		req.session.name = req.body.uname;
		res.redirect('/home');
	}else{
		res.render("/login/index");
	}
});

module.exports = router;
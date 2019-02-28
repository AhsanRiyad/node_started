var express = require('express');
var userModel = require.main.require('./model/user-model');
var router = express.Router();


router.get('*' , function(req,res, next){
	if(req.session.name! = null)
	{
		next();
	}else{
		res.redirect('/login');
	}
});
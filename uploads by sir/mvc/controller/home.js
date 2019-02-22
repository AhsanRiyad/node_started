var express = require('express');
var router = express.Router();

router.get('/', (req, res)=>{

	res.render('home/index', {name: req.session.name});
});


module.exports = router;
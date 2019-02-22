var express = require('express');
var router = express.Router();


http://localhost/employee/create

router.get('/student', function(req, res){
	var data = {
		name :'alamin',
		id:'12----1',
		obj2: {
			version: '1',
			date: '12/12/1'
		}
	};
	res.render('index', data);
});

module.exports = router;



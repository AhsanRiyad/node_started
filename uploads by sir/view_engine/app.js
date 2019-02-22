var student = require('./student');
var express = require('express');
var app = express();

app.set('view engine', 'ejs');

app.use('/student', student);
 
/*app.get('/home/:id', function(req, res){
	res.send('welcome home!'+req.params.id);
});*/

app.listen(3000, function(){
	console.log('server started at 3000...');
})
var db = require('./db');

module.exports={

	get: function(userId, callback){
		var sql = "select * from user where id="+userId;

		db.getResult(sql, function(result){
			callback(result);
		});
	},
	getAll: function(callback){
		var sql = "select * from user";
		db.getResult(sql, function(results){
			callback(results);
		});
	},
	validate: function(user, callback){
		var sql = "select * from user where username='"+user.uname+"' and password='"+user.password+"'";

		db.getResult(sql, function(result){
			callback(result);
		});
	},
	insert: function(user, callback){
		var sql = "insert into user values (null, '"+user.uname+"','"+user.password+"','"+user.type+"')";
		db.execute(sql, function(status){
			callback(status);
		});
	},
	update: function(user, callback){
		var sql = "update user set username='"+user.uname+"',password='"+user.password+"', type='"+user.type+"' where id="+user.id;
		db.execute(sql, function(status){
			callback(status);
		});
	},
	delete: function(userId, callback){
		var sql = "delete from user where id="+userId;
		db.execute(sql, function(status){
			callback(status);
		});
	},
}




/*var obj = {
	name: "Riyad",
	home : "kurigram"
}

module.exports = obj;*/




/*var obj = {
	name: "Riyad",
	home : "kurigram"
}


module.exports = obj.name;*/

"use strict"

var obj = {
	name: "Riyad",
	home : "kurigram",
	getResult: function(result){
		return result;
	}
}

module.exports.stdName = obj.name;
module.exports.stdHome = obj.home;
module.exports.stdResult = obj.getResult;






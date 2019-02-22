var fs = require('fs');


fs.writeFileSync('hellow.txt' , 'this is just for testing purpose');


var data = fs.readFileSync('hellow.txt').toString();


console.log(data);
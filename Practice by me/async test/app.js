var i = function(){
	console.log('function i');

}


async function a(i){

setTimeout(function(){
	console.log('waiting for time out');
} , 2000);


i();

}


a(i).then(()=>{alert('hello');});
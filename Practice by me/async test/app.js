
//promise example

/*function createPost(){
	return new Promise((resolve, reject)=>{

		setTimeout(()=>{
			console.log('1');

		const error = true;

		if(!error){
			resolve();
		}else{
			reject('error');
		}
	} , 2000);

	});
}
createPost().then(()=>{console.log('hello');}).catch(err=>{console.log('error is '+ err)}) ; */



//promise all


/*const promise1 = Promise.resolve('promise 1');
const promise2 = 'promise 2';
const promise3 = new Promise((res, rej)=>{setTimeout(res , 2000 , 'promise 3')});
const promise4 = new Promise((res, rej)=>{setTimeout(res , 1000 , 'promise 4')});


Promise.all([promise1, promise2, promise3, promise4]).then((values)=>console.log(values));*/



//async await works on later version

/*function b(){
	console.log('inside timeout');
}

async function init(){

	await b();

	console.log('outside timeout');
}


init();*/



/*
function inside funciton calling

function createPost(){
	return new Promise((resolve, reject)=>{

		setTimeout(()=>{
			console.log('1');

		const error = true;

		if(!error){
			resolve();
		}else{
			reject('error');
		}
	} , 2000);

	});
}



function f2(f1){
createPost().then(()=>{console.log('hello');}).catch(err=>{console.log('error is '+ err + f1)}) ;
}

f2('I know');*/


/*
better example
f2('hi' , function(param){
	console.log(param);

});


function f1(){
	return new Promise(function(){
		console.log('hellow world');
	});

}


function f2(val , callback){
	f1().then(callback('condition done: '+val));
}

*/

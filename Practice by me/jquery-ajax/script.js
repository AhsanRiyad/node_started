$(document).ready(function(){


	var json = [
	{
		"name" : "abc",
		"age":"22",
		"email":"riyad298@gmail.com"
	},

	{
		"name" : "rfafr",
		"age":"22",
		"email":"riyad298@gmail.com"
	},

	{
		"name" : "abc",
		"age":"22",
		"email":"riyad298@gmail.com"
	}

	];


	var a = {
		"name" : "abc",
		"age":"22",
		"email":"riyad298@gmail.com"
	}

	var obj = JSON.stringify(json);

	$("#button").on('click' , function(){
		 // var i = $('#input').val();
		 // alert(i);


		 $.ajax({
			url: 'abc.php',
			method: 'POST',
			data: {'mydata': obj},
			success: function(reply){
					// var reply = JSON.parse(response);

					alert(reply[1].name);
			},
			error: function(error){

			}
	});





	});



})



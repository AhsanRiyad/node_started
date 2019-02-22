"use strict"

$(document).ready(function(){


	/*$('button').on('click', function(){

		$('.abc').html($('input[type=text]').val());
		
	});*/

	var json = [
		{
			"name": "abc",
			"age": 12,
			"email": "abc@example.com"
		},
		{
			"name": "abc",
			"age": 12,
			"email": "abc@example.com"
		},
		{
			"name": "abc",
			"age": 12,
			"email": "abc@example.com"
		}
	];


/*	$('#datepicker').datepicker({
		minDate: -20,
		maxDate: "+1M +10D"
	});*/

/*	$('#select').autocomplete({
		source: ['abc', 'xyz', 'pqr']
	});*/

/*	var array = ['abc', 'xyz', 'pqr'];
	$('#select').autocomplete({
		source: array
	});*/

/*	function getData(){
		return ['abc', 'xyz', 'pqr'];	
	}
	
	$('#select').autocomplete({
		source: getData()
	});*/	

/*	$('#select').autocomplete({
		source: 'list.php'
	});*/

	var a = {
		"name": "abc",
		"age": 12,
		"email": "abc@example.com"
	};

	var obj = JSON.stringify(a);

	$('button').click(function(){

		$.ajax({
			url: 'abc.php',
			method: 'POST',
			data: {'mydata': obj},
			success: function(response){
					//var obj= JSON.parse(response);
					alert(response.name);
			},
			error: function(error){

			}
	});
		
	});

});









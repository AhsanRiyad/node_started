<?php
	
	$obj = $_POST['mydata'];

	$data = json_decode($obj);

	//echo $data->name;
	//echo $data;

	header("content-type: application/json"); // parsing in the js file is not required if it is written.

	$json_data = json_encode($data);

	echo $json_data;


?>
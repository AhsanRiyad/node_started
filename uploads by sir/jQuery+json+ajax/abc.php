<?php

	$obj = $_POST['mydata'];
	
	$json = json_decode($obj);

	header("content-type: application/json");	
	echo json_encode($json);;
?>
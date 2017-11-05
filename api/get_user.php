<?php

require ("./connectdb.php"); 

$id = $_GET['id'];

$sql = "SELECT * FROM tbl_users WHERE id = $id";
$result = $conn->query($sql);

$jsonData = array();
	while ($array = $result->fetch_assoc()) {
	    $jsonData[] = $array;
	}
	echo json_encode($jsonData, JSON_PRETTY_PRINT);

?>
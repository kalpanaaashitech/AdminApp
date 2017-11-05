<?php

require ("./connectdb.php"); 

$userid = $_GET['userid'];

$postid = $_GET['postid'];

$sql = "SELECT * FROM tbl_what_post_answers WHERE post_id = $postid AND userid = $userid ";
$result = $conn->query($sql);

$jsonData = array();
	while ($array = $result->fetch_assoc()) {
	    $jsonData[] = $array;
	}
	echo json_encode($jsonData, JSON_PRETTY_PRINT);

?>
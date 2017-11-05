<?php

require ("./connectdb.php"); 

$id = $_GET['id'];

$sql = "SELECT * FROM tbl_cities WHERE id = $id";
$result = $conn->query($sql);

$jsonData = array();
	while ($array = $result->fetch_assoc()) {


		$jsonData[] = array(
			'id' => $array['id'],
			'name' => $array['name'],
			'state_id' => $array['state_id']
	);

	}
	echo json_encode($jsonData, JSON_PRETTY_PRINT);

?>
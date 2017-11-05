<?php

require ("./connectdb.php"); 

$sql = "SELECT id,inscube_name,active,is_deleted 
        FROM tbl_users 
        WHERE active = '0' AND is_deleted = '1' AND blocked = '0'";
$result = $conn->query($sql);

$jsonData = array();
	while ($array = $result->fetch_assoc()) {
		$array = array_map('utf8_encode', $array);
	    $jsonData[] = $array;
	}
	echo json_encode($jsonData, JSON_PRETTY_PRINT);

?>
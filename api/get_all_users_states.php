<?php

require ("./connectdb.php"); 

$sql = "SELECT DISTINCT(m.state_id) AS state_id, u.name AS state_name  
        FROM tbl_users  AS m 
        JOIN `tbl_states` AS u ON m.state_id = u.id 
        WHERE m.active = '0' AND m.is_deleted = '1' AND m.blocked = '0' AND m.state_id != '0'";
$result = $conn->query($sql);

$jsonData = array();
	while ($array = $result->fetch_assoc()) {
		$array = array_map('utf8_encode', $array);
		$row_array = array();
		$row_array['state_id'] = $array['state_id'];
		$row_array['state_name'] = $array['state_name'];
		$state_id = $array['state_id'];

		$limit=mysqli_num_rows($conn->query("SELECT state_id FROM tbl_users WHERE state_id = $state_id"));

        $row_array['count'] = $limit; 
		 
      array_push($jsonData, $row_array);
	}
	echo json_encode($jsonData, JSON_PRETTY_PRINT);

?>
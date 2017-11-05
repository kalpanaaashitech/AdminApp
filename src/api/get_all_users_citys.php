<?php

require ("./connectdb.php"); 

$sql = "SELECT DISTINCT(m.city_id) AS city_id, u.name AS city_name  
        FROM tbl_users  AS m 
        JOIN `tbl_cities` AS u ON m.city_id = u.id 
        WHERE m.active = '0' AND m.is_deleted = '1' AND m.blocked = '0' AND m.city_id != '0'";
$result = $conn->query($sql);

$jsonData = array();
	while ($array = $result->fetch_assoc()) {
		$array = array_map('utf8_encode', $array);
		$row_array = array();
		$row_array['city_id'] = $array['city_id'];
		$row_array['city_name'] = $array['city_name'];
		$city_id = $array['city_id'];

		$limit=mysqli_num_rows($conn->query("SELECT city_id FROM tbl_users WHERE city_id = $city_id"));

        $row_array['count'] = $limit; 
		 
      array_push($jsonData, $row_array);
	}
	echo json_encode($jsonData, JSON_PRETTY_PRINT);

?>
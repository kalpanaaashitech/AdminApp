<?php

require ("./connectdb.php"); 

$sql = "SELECT DISTINCT(m.country_id) AS country_id, u.name AS country_name  
        FROM tbl_users  AS m 
        JOIN `tbl_countries` AS u ON m.country_id = u.id 
        WHERE m.active = '0' AND m.is_deleted = '1' AND m.blocked = '0' AND m.country_id != '0'";
$result = $conn->query($sql);

$jsonData = array();
	while ($array = $result->fetch_assoc()) {
		$array = array_map('utf8_encode', $array);
		$row_array = array();
		$row_array['country_id'] = $array['country_id'];
		$row_array['country_name'] = $array['country_name'];
		$country_id = $array['country_id'];

		$limit=mysqli_num_rows($conn->query("SELECT country_id FROM tbl_users WHERE country_id = $country_id"));

        $row_array['count'] = $limit; 
		 
      array_push($jsonData, $row_array);
	}
	echo json_encode($jsonData, JSON_PRETTY_PRINT);

?>
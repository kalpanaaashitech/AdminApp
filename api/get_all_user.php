<?php

require ("./connectdb.php"); 

$limitid = $_GET['id'];

$sql = "SELECT * FROM tbl_users 
        WHERE active = '0' AND is_deleted = '1' AND blocked = '0' 
        LIMIT ".$limitid.",12";
$result = $conn->query($sql);


$limit = mysqli_num_rows($result); 
if ($limit < "12") { $continues = "0";}
else { $continues = "1"; }


$jsonData = array();
	while ($array = $result->fetch_assoc()) {
		$array = array_map('utf8_encode', $array);
	    $jsonData[] = array(
        'id' => $array['id'],
        'create_uid' => $array['create_uid'],
        'write_uid' => $array['write_uid'],
        'create_date' => $array['create_date'],
        'write_date' => $array['write_date'],
        'email' => $array['email'],
        'password' => $array['password'],
        'first_name' => $array['first_name'],
        'last_name' => $array['last_name'],
        'inscube_name' => $array['inscube_name'],
        'day' => $array['day'],
        'month' => $array['month'],
        'year' => $array['year'],
        'gender' => $array['gender'],
        'mobile' => $array['mobile'],
        'job' => $array['job'],
        'company' => $array['company'],
        'country_id' => $array['country_id'],
        'state_id' => $array['state_id'],
        'city_id' => $array['city_id'],
        'image' => $array['image'],
        'summary' => $array['summary'],
        'active' => $array['active'],
        'see_profile' => $array['see_profile'],
        'is_profile_completed' => $array['is_profile_completed'],
        'pass_reset_id' => $array['pass_reset_id'],
        'email_privacy' => $array['email_privacy'],
        'mobile_privacy' => $array['mobile_privacy'],
        'post_privacy' => $array['post_privacy'],
        'email_verify' => $array['email_verify'],
        'explainer' => $array['explainer'],
        'is_deleted' => $array['is_deleted'],
        'oauth_provider' => $array['oauth_provider'],
        'oauth_uid' => $array['oauth_uid'],
        'locale' => $array['locale'],
        'continues' => $continues
	);
	}
	echo json_encode($jsonData, JSON_PRETTY_PRINT);

?>
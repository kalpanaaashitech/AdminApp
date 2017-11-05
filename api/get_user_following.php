<?php

require ("./connectdb.php"); 

$id = $_GET['id'];

$sql = "SELECT * FROM tbl_users_follow WHERE follow_user_id = '$id'";

$result = $conn->query($sql);

$jsonData = array();
        while ($array = $result->fetch_assoc()) {

            $array = array_map('utf8_encode', $array);

                $user_id = $array['user_id'];

                  $sql2 = "SELECT m.*, s.name AS state_name, c.name AS city_name, u.name AS country_name 
                           FROM tbl_users AS m
                           JOIN `tbl_countries` AS u ON m.country_id = u.id 
                           JOIN `tbl_cities` AS c ON m.city_id = c.id
                           JOIN `tbl_states` AS s ON m.state_id = s.id  
                           WHERE m.id = '$user_id' AND m.is_deleted = '1'";         
                    $ans_qry = $conn->query($sql2);
                    while ($ans_fet = $ans_qry->fetch_assoc())
                    { 
                         $row_array1 = array();
                            $row_array1['id'] = $ans_fet['id'];
                            $row_array1['first_name'] = $ans_fet['first_name'];
                            $row_array1['last_name'] = $ans_fet['last_name'];
                            $row_array1['inscube_name'] = $ans_fet['inscube_name'];
                            $row_array1['email'] = $ans_fet['email'];
                            $row_array1['job'] = $ans_fet['job'];
                            $row_array1['company'] = $ans_fet['company'];
                            $row_array1['image'] = $ans_fet['image'];
                            $row_array1['active'] = $ans_fet['active'];
                            $row_array1['blocked'] = $ans_fet['blocked'];

                        array_push($jsonData, $row_array1);
                    }
        
        }
        echo json_encode($jsonData, JSON_PRETTY_PRINT);

?>
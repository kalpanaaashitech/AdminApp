<?php

require ("./connectdb.php"); 

$sql = "SELECT email, COUNT(email) AS count
        FROM tbl_users
        WHERE email != '' AND active = '0' AND is_deleted = '1' AND blocked = '0'
        GROUP BY email ";

$result = $conn->query($sql);

$jsonData = array();
            $i = 1;
        while ($array = $result->fetch_assoc()) {

            $array = array_map('utf8_encode', $array);

            if ($array['count'] > '1') {

                $row_array = array();
                $row_array['id'] = $i;
                $row_array['count'] = $array['count'];
                $row_array['email'] = $array['email'];
                $row_array['users'] = array();

                $count = $array['count'];
                $email = $array['email'];

                  $sql2 = "SELECT m.*, s.name AS state_name, c.name AS city_name, u.name AS country_name 
                           FROM tbl_users AS m
                           JOIN `tbl_countries` AS u ON m.country_id = u.id 
                           JOIN `tbl_cities` AS c ON m.city_id = c.id
                           JOIN `tbl_states` AS s ON m.state_id = s.id  
                           WHERE m.email = '$email' AND m.active = '0' AND m.is_deleted = '1' AND m.blocked = '0'";         
                    $ans_qry = $conn->query($sql2);
                    while ($ans_fet = $ans_qry->fetch_assoc())
                    { 
                        $id = $ans_fet['id'];
                        $posts = mysqli_num_rows($conn->query("SELECT id FROM tbl_what_post WHERE user_id = '$id' AND post_type !='8' AND post_type !='5' AND post_type !='0' AND post_type !='11' AND post_type !='12'"));
                        $answers = mysqli_num_rows($conn->query("SELECT * FROM tbl_what_post_answers WHERE user_id = '$id' "));
                        $questions = mysqli_num_rows($conn->query("SELECT id FROM tbl_what_post WHERE user_id = '$id' AND post_type ='8' "));
                        $opinions = mysqli_num_rows($conn->query("SELECT id FROM tbl_what_post WHERE user_id = '$id' AND post_type ='5' "));
                        $must_dos = mysqli_num_rows($conn->query("SELECT id FROM tbl_what_post WHERE user_id = '$id' AND post_type ='11' "));
                        $try_its = mysqli_num_rows($conn->query("SELECT id FROM tbl_what_post WHERE user_id = '$id' AND post_type ='12' "));
                        $emots = mysqli_num_rows($conn->query("SELECT id FROM tbl_what_post_comments_user WHERE user_id = '$id' "));

                            $row_array1['id'] = $ans_fet['id'];
                            $row_array1['first_name'] = $ans_fet['first_name'];
                            $row_array1['last_name'] = $ans_fet['last_name'];
                            $row_array1['inscube_name'] = $ans_fet['inscube_name'];
                            $row_array1['day'] = $ans_fet['day'];
                            $row_array1['month'] = $ans_fet['month'];
                            $row_array1['year'] = $ans_fet['year'];
                            $row_array1['gender'] = $ans_fet['gender'];
                            $row_array1['mobile'] = $ans_fet['mobile'];
                            $row_array1['email'] = $ans_fet['email'];
                            $row_array1['job'] = $ans_fet['job'];
                            $row_array1['company'] = $ans_fet['company'];
                            $row_array1['country_id'] = $ans_fet['country_id'];
                            $row_array1['country_name'] = $ans_fet['country_name'];
                            $row_array1['state_id'] = $ans_fet['state_id'];
                            $row_array1['state_name'] = $ans_fet['state_name'];
                            $row_array1['city_id'] = $ans_fet['city_id'];
                            $row_array1['city_name'] = $ans_fet['city_name'];
                            $row_array1['image'] = $ans_fet['image'];
                            $row_array1['summary'] = $ans_fet['summary'];
                            $row_array1['posts_count'] = $posts ;
                            $row_array1['answers'] = $answers ;
                            $row_array1['emots'] = $emots ;
                            $row_array1['questions'] = $questions ;
                            $row_array1['opinions'] = $opinions ;
                            $row_array1['try_its'] = $try_its ;
                            $row_array1['must_dos'] = $must_dos;

                            array_push($row_array['users'], $row_array1);
                    }
            array_push($jsonData, $row_array);
            $i++;
           }   
        
        }
        echo json_encode($jsonData, JSON_PRETTY_PRINT);

?>
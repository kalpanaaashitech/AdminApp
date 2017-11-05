<?php

require ("./connectdb.php"); 


          $sql = "SELECT m.*, s.name AS state_name, c.name AS city_name, u.name AS country_name 
                   FROM tbl_users AS m
                   JOIN `tbl_countries` AS u ON m.country_id = u.id 
                   JOIN `tbl_cities` AS c ON m.city_id = c.id
                   JOIN `tbl_states` AS s ON m.state_id = s.id  
                   WHERE is_deleted = '1' AND blocked = '1' ";         
            $qry = $conn->query($sql);

            $jsonData = array();

            while ($array = $qry->fetch_assoc())
            { 

                $array = array_map('utf8_encode', $array);


                $id = $array['id'];
                $posts = mysqli_num_rows($conn->query("SELECT id FROM tbl_what_post WHERE user_id = '$id' AND post_type !='8' AND post_type !='5' AND post_type !='0' AND post_type !='11' AND post_type !='12'"));
                $answers = mysqli_num_rows($conn->query("SELECT * FROM tbl_what_post_answers WHERE user_id = '$id' "));
                $questions = mysqli_num_rows($conn->query("SELECT id FROM tbl_what_post WHERE user_id = '$id' AND post_type ='8' "));
                $opinions = mysqli_num_rows($conn->query("SELECT id FROM tbl_what_post WHERE user_id = '$id' AND post_type ='5' "));
                $must_dos = mysqli_num_rows($conn->query("SELECT id FROM tbl_what_post WHERE user_id = '$id' AND post_type ='11' "));
                $try_its = mysqli_num_rows($conn->query("SELECT id FROM tbl_what_post WHERE user_id = '$id' AND post_type ='12' "));
                $emots = mysqli_num_rows($conn->query("SELECT id FROM tbl_what_post_comments_user WHERE user_id = '$id' "));
                    
                    $row_array = array();

                    $row_array['id'] = $array['id'];
                    $row_array['first_name'] = $array['first_name'];
                    $row_array['last_name'] = $array['last_name'];
                    $row_array['inscube_name'] = $array['inscube_name'];
                    $row_array['day'] = $array['day'];
                    $row_array['month'] = $array['month'];
                    $row_array['year'] = $array['year'];
                    $row_array['gender'] = $array['gender'];
                    $row_array['mobile'] = $array['mobile'];
                    $row_array['email'] = $array['email'];
                    $row_array['job'] = $array['job'];
                    $row_array['company'] = $array['company'];
                    $row_array['country_id'] = $array['country_id'];
                    $row_array['country_name'] = $array['country_name'];
                    $row_array['state_id'] = $array['state_id'];
                    $row_array['state_name'] = $array['state_name'];
                    $row_array['city_id'] = $array['city_id'];
                    $row_array['city_name'] = $array['city_name'];
                    $row_array['image'] = $array['image'];
                    $row_array['summary'] = $array['summary'];
                    $row_array['active'] = $array['active'];
                    $row_array['posts_count'] = $posts ;
                    $row_array['answers'] = $answers ;
                    $row_array['emots'] = $emots ;
                    $row_array['questions'] = $questions ;
                    $row_array['opinions'] = $opinions ;
                    $row_array['try_its'] = $try_its ;
                    $row_array['must_dos'] = $must_dos ;

            array_push($jsonData, $row_array);
        }
        echo json_encode($jsonData, JSON_PRETTY_PRINT);

?>
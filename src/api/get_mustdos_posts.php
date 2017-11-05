<?php

require ("./connectdb.php"); 

header("Access-Control-Allow-Origin: *");

	$sql = "SELECT m.*, u.first_name, u.last_name, u.image as user_image
         	FROM `tbl_what_post` AS m 
	        JOIN `tbl_users` AS u ON m.user_id = u.id 
	        WHERE post_type = '4'  
		    ORDER BY id DESC LIMIT 0,10 "; 
	$result = $conn->query($sql);
    $json_response = array();
    while ($row = $result->fetch_assoc())
    {
        $row_array = array();
		$row_array['id'] = $row['id'];
		$row_array['post_type'] = $row['post_type'];
		$row_array['question'] = $row['question'];
		$row_array['contents'] = $row['contents'];
		$row_array['invite'] = $row['invite'];
		$row_array['application_det'] = $row['application_det'];
		$row_array['link'] = $row['link'];
		$row_array['image_what_if'] = $row['image_what_if'];
		$row_array['user_id'] = $row['user_id'];
		$row_array['user_name'] = $row['first_name']." ".$row['last_name'];
		$row_array['user_image'] = $row['user_image'];
		$row_array['shared_from'] = $row['shared_from'];
		$row_array['answer_id'] = $row['answer_id'];
		$row_array['answer_ques_id'] = $row['answer_ques_id'];
		$row_array['community_id'] = $row['community_id'];
		$row_array['stories_id'] = $row['stories_id'];
		$row_array['latitude'] = $row['latitude'];
		$row_array['longitude'] = $row['longitude'];
		$row_array['time'] = $row['time'];
		$row_array['story_type'] = $row['story_type'];
		$row_array['show_post_type'] = $row['show_post_type'];
		$row_array['option1'] = $row['option1'];
		$row_array['option2'] = $row['option2'];
		$row_array['debatetype'] = $row['debatetype'];
		$row_array['friends'] = $row['friends'];
		$row_array['categories'] = $row['categories'];
		$row_array['groups'] = $row['groups'];
		$row_array['updated_at'] = $row['updated_at'];
		$row_array['suggestions'] = $row['suggestions'];
		$row_array['active'] = $row['active'];
		$row_array['images'] = array();
		$row_array['answers'] = array();
		$row_array['comments'] = array();
		$row_array['category'] = array();
		$row_array['questions'] = array();
		$row_array['opinions'] = array();
		$row_array['tryit'] = array();
		$row_array['mustdo'] = array();
		$row_array['question_user_follow'] = array();
        $post_id = $row['id'];  



		$sql1 = "SELECT * FROM tbl_what_post_images 
		         WHERE post_id = $post_id 
				 ORDER BY id asc"; 
		$img_qry = $conn->query($sql1);
        while ($img_fet = $img_qry->fetch_assoc())
        { 

			$image_array['id']=$img_fet['id'];
			$image_array['post_id']=$img_fet['post_id'];
			$image_array['image']=$img_fet['image'];
			$image_array['options']=$img_fet['options'];
			$image_array['supports']= array();
			$image_array['opinions']= array();
			$option_id = $img_fet['id'];

		  
			
				$sql_sup = "SELECT c.id, c.option_id, c.user_id, u.first_name, u.last_name
				FROM `tbl_what_post_images` AS m 
				JOIN `tbl_what_post_images_options` AS c ON m.id = c.option_id 
				JOIN `tbl_users` AS u ON c.user_id = u.id 
				WHERE c.option_id = $option_id 
				ORDER BY c.id desc ";

				$img_sup_qry = $conn->query($sql_sup);
				while ($img_sup_fet = $img_sup_qry->fetch_assoc())
				{
					$image_array['supports'][] = array(
							'id' => $img_sup_fet['id'],
							'option_id' => $img_sup_fet['option_id'],
                            'user_id' => $img_sup_fet['user_id'],
							'user_name' => $img_sup_fet['first_name']." ".$img_sup_fet['last_name']
					);
				}


				$img_opi = "SELECT c.id, c.option_id, c.opinions, u.first_name, u.last_name
				FROM `tbl_what_post_images` AS m 
				JOIN `tbl_what_post_images_opinions` AS c ON m.id = c.option_id 
				JOIN `tbl_users` AS u ON c.user_id = u.id 
				WHERE c.option_id = $option_id  
				ORDER BY c.id desc ";

				$img_opi_qry = $conn->query($img_opi);
				while ($img_opi_fet = $img_opi_qry->fetch_assoc())
				{
					$image_array['opinions'][] = array(
							'id' => $img_opi_fet['id'],
							'option_id' => $img_opi_fet['option_id'],
							'opinions' => $img_opi_fet['opinions'],
							'user_name' => $img_opi_fet['first_name']." ".$img_opi_fet['last_name']
					);
				}
		


			array_push($row_array['images'],$image_array);

		}




		$sql2 = "SELECT * FROM tbl_what_post_answers 
		         WHERE post_id = $post_id 
				 ORDER BY id desc"; 
				 
		$ans_qry = $conn->query($sql2);
        while ($ans_fet = $ans_qry->fetch_assoc())
        {
            $row_array['answers'][] = array(
					'id' => $ans_fet['id'],
					'post_id' => $ans_fet['post_id'],
					'user_id' => $ans_fet['user_id'],
					'answer' => $ans_fet['answer'],
            );
		}



	$sql3 = "SELECT *
	         FROM `tbl_what_post_comments` 
			 WHERE post_id = $post_id 
			 ORDER BY id desc ";

		$com_qry = $conn->query($sql3);
        while ($com_fet = $com_qry->fetch_assoc())
        {  

			$comment_array['id'] = $com_fet['id'];
			$comment_array['post_id'] = $com_fet['post_id'];
			$comment_array['comments'] = $com_fet['comments'];
			$comment_array['comment_users']= array();
			$comment_id = $com_fet['id'];
			 

			$comment_users= "SELECT e.id, e.comment_id, e.user_id, u.first_name, u.last_name
		         FROM `tbl_what_post_comments_user` AS e 
				 JOIN `tbl_users` AS u ON e.user_id = u.id
				 WHERE e.comment_id = $comment_id";
			$comment_users_qry = $conn->query($comment_users);
			while ($comment_users_fet = $comment_users_qry->fetch_assoc())
			{
				$comment_array['comment_users'][] = array(
				'id' => $comment_users_fet['id'],
				'comment_id' => $comment_users_fet['comment_id'],
				'user_id' => $comment_users_fet['user_id'],
				'first_name' => $comment_users_fet['first_name'],
				'last_name' => $comment_users_fet['last_name'],
				);		
						
			}
			array_push($row_array['comments'],$comment_array);
		}





	    $sql4 = "SELECT e.id, e.post_id, e.user_id, e.category_id, u.name 
		         FROM `tbl_what_post_category` AS e 
				 JOIN `tbl_categories` AS u ON e.category_id = u.id 
				 WHERE e.post_id = $post_id";

		$cat_qry = $conn->query($sql4);
        while ($cat_fet = $cat_qry->fetch_assoc())
        {
			$row_array['category'][] = array(
			'id' => $cat_fet['id'],
			'post_id' => $cat_fet['post_id'],
			'user_id' => $cat_fet['user_id'],
			'category_id' => $cat_fet['category_id'],
			'categoryname' => $cat_fet['name'],
			);		
					
		}
		


		$sql5 = "SELECT e.*, u.first_name, u.last_name, u.image as user_image
		        FROM tbl_what_post AS e 
				JOIN `tbl_users` AS u ON e.user_id = u.id 
				WHERE e.stories_id = $post_id 
				AND e.post_type ='8'  
				ORDER BY e.id desc "; 
		$post_ques = $conn->query($sql5);
		while ($post_ques_fet = $post_ques->fetch_assoc())
        {
			$question_array['id'] = $post_ques_fet['id'];
			$question_array['post_type'] = $post_ques_fet['post_type'];
			$question_array['question'] = $post_ques_fet['question'];
			$question_array['user_id'] = $post_ques_fet['user_id'];
			$question_array['user_name'] = $post_ques_fet['first_name']." ".$post_ques_fet['last_name'];
			$question_array['user_image'] = $post_ques_fet['user_image'];
			$question_array['shared_from'] = $post_ques_fet['shared_from'];
			$question_array['stories_id'] = $post_ques_fet['stories_id'];
			$question_array['time'] = $post_ques_fet['time'];
			$question_array['show_post_type'] = $post_ques_fet['show_post_type'];
			$question_array['updated_at'] = $post_ques_fet['updated_at'];
			$question_array['active'] = $post_ques_fet['active'];
			$question_array['images']= array();
			$question_post_id = $post_ques_fet['id'];

			$qus_img = "SELECT * FROM tbl_what_post_images 
					WHERE post_id = $question_post_id 
					ORDER BY id asc"; 
			$qus_img_qry = $conn->query($qus_img);
			while ($qus_img_fet = $qus_img_qry->fetch_assoc())
			{ 

				$question_array['images'][] = array(
					'id' => $qus_img_fet['id'],
					'post_id' => $qus_img_fet['post_id'],
					'image' => $qus_img_fet['image']
			    );
		   } 

			array_push($row_array['questions'],$question_array);

	   }

	   
		$sql6 = "SELECT e.*, u.first_name, u.last_name, u.image as user_image
		        FROM tbl_what_post AS e 
				JOIN `tbl_users` AS u ON e.user_id = u.id 
				WHERE e.stories_id = $post_id 
				AND e.post_type ='5'  
				ORDER BY e.id desc ";
			$post_opinion = $conn->query($sql6);
			while ($post_opi_fet = $post_opinion->fetch_assoc())
			{
				$opinions_array['id'] = $post_opi_fet['id'];
				$opinions_array['post_type'] = $post_opi_fet['post_type'];
				$opinions_array['question'] = $post_opi_fet['question'];
				$opinions_array['user_id'] = $post_opi_fet['user_id'];
				$opinions_array['user_name'] = $post_opi_fet['first_name']." ".$post_opi_fet['last_name'];
				$opinions_array['user_image'] = $post_opi_fet['user_image'];
				$opinions_array['shared_from'] = $post_opi_fet['shared_from'];
				$opinions_array['stories_id'] = $post_opi_fet['stories_id'];
				$opinions_array['time'] = $post_opi_fet['time'];
				$opinions_array['show_post_type'] = $post_opi_fet['show_post_type'];
				$opinions_array['updated_at'] = $post_opi_fet['updated_at'];
				$opinions_array['active'] = $post_opi_fet['active'];

				array_push($row_array['opinions'],$opinions_array);

			}




		$sql7 = "SELECT m.id, m.user_id, m.post_id, u.first_name, u.last_name
				FROM `tbl_ques_users_follow` AS m 
				JOIN `tbl_users` AS u ON m.user_id = u.id 
				WHERE m.post_id = $post_id 
				ORDER BY m.id desc  ";

		$ques_follow_qry = $conn->query($sql7);
		while ($ques_follow_fet = $ques_follow_qry->fetch_assoc())
		{
			$row_array['question_user_follow'][] = array(
					'id' => $ques_follow_fet['id'],
					'post_id' => $ques_follow_fet['post_id'],
					'user_name' => $ques_follow_fet['first_name']." ".$ques_follow_fet['last_name']
			);
		}

		
		$sql8 = "SELECT e.*, u.first_name, u.last_name, u.image as user_image
                 FROM tbl_what_post as e
                 JOIN `tbl_users` AS u ON e.user_id = u.id 
	        	 WHERE e.stories_id = $post_id 
				 AND e.post_type ='12'  
				 ORDER BY e.id desc "; 
		$post_tryit = $conn->query($sql8);
		while ($post_tryit_fet = $post_tryit->fetch_assoc())
		{
			$tryit_array['id'] = $post_tryit_fet['id'];
			$tryit_array['post_type'] = $post_tryit_fet['post_type'];
			$tryit_array['question'] = $post_tryit_fet['question'];
            $tryit_array['user_id'] = $post_tryit_fet['user_id'];
            $tryit_array['user_name'] = $post_tryit_fet['first_name']." ".$post_tryit_fet['last_name'];
            $tryit_array['user_image'] = $post_tryit_fet['user_image'];
			$tryit_array['shared_from'] = $post_tryit_fet['shared_from'];
			$tryit_array['stories_id'] = $post_tryit_fet['stories_id'];
			$tryit_array['time'] = $post_tryit_fet['time'];
			$tryit_array['show_post_type'] = $post_tryit_fet['show_post_type'];
			$tryit_array['updated_at'] = $post_tryit_fet['updated_at'];
			$tryit_array['active'] = $post_tryit_fet['active'];
			$tryit_array['images']= array();
			$tryit_post_id = $post_tryit_fet['id'];

			$tryit_img = "SELECT * FROM tbl_what_post_images 
					WHERE post_id = $tryit_post_id 
					ORDER BY id asc"; 
			$tryit_img_qry = $conn->query($tryit_img);
			while ($tryit_img_fet = $tryit_img_qry->fetch_assoc())
			{ 

				$tryit_array['images'][] = array(
					'id' => $tryit_img_fet['id'],
					'post_id' => $tryit_img_fet['post_id'],
					'image' => $tryit_img_fet['image']
				);
		} 

			array_push($row_array['tryit'],$tryit_array);

		}
		



		$sql9 = "SELECT e.*, u.first_name, u.last_name, u.image as user_image
                FROM tbl_what_post as e
                JOIN `tbl_users` AS u ON e.user_id = u.id 
	        	WHERE e.stories_id = $post_id 
			    AND e.post_type ='11'  
		        ORDER BY e.id desc "; 
			$post_mustdo = $conn->query($sql9);
			while ($post_mus_fet = $post_mustdo->fetch_assoc())
			{
				$mustdo_array['id'] = $post_mus_fet['id'];
				$mustdo_array['post_type'] = $post_mus_fet['post_type'];
				$mustdo_array['question'] = $post_mus_fet['question'];
                $mustdo_array['user_id'] = $post_mus_fet['user_id'];
                $mustdo_array['user_name'] = $post_mus_fet['first_name']." ".$post_mus_fet['last_name'];
                $mustdo_array['user_image'] = $post_mus_fet['user_image'];
				$mustdo_array['shared_from'] = $post_mus_fet['shared_from'];
				$mustdo_array['stories_id'] = $post_mus_fet['stories_id'];
				$mustdo_array['time'] = $post_mus_fet['time'];
				$mustdo_array['show_post_type'] = $post_mus_fet['show_post_type'];
				$mustdo_array['updated_at'] = $post_mus_fet['updated_at'];
				$mustdo_array['active'] = $post_mus_fet['active'];

				array_push($row_array['mustdo'],$mustdo_array);

			}

        array_push($json_response, $row_array);
    }
    echo json_encode($json_response,  JSON_PRETTY_PRINT);



?>
<?php 
header("Access-Control-Allow-Origin: *");
header('Content-Type: application/json');

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "zadmin_inscube";

$conn = new mysqli($servername, $username, $password, $dbname);
?>
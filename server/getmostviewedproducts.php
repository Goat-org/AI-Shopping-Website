<?php
include('connection.php');
$stmt = $conn->prepare("SELECT * FROM products ORDER BY fldproductmostviewed DESC LIMIT 4");
if($stmt->execute()){
  $mostviewedproducts = $stmt->get_result();// This is an array
}
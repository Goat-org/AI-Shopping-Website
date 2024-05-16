<?php
include('connection.php');
$stmt = $conn->prepare("SELECT * FROM products ORDER BY fldproductmostsold DESC LIMIT 4");
if($stmt->execute()){
  $mostsoldproducts = $stmt->get_result();// This is an array
}
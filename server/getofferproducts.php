<?php
include('connection.php');
<<<<<<< HEAD
$stmt = $conn->prepare("SELECT * FROM products ORDER BY fldproductid DESC LIMIT 1");
=======

$stmt = $conn->prepare("SELECT * FROM products ORDER BY fldproductid DESC LIMIT 1");

>>>>>>> 26e69de870d2baedd1981e00d0ed48f3a3184a49
if($stmt->execute()){
  $offerproducts = $stmt->get_result();// This is an array
}
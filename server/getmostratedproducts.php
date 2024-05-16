<?php
include('connection.php');
$stmt = $conn->prepare("SELECT * FROM products ORDER BY fldproductmostrated DESC LIMIT 4");
if($stmt->execute()){
  $mostratedproducts = $stmt->get_result();// This is an array
}
<?php
include('adminconnection.php');
//1. View Product Sellers Product Details
if(isset($_GET['fldproductid']) && isset($_GET['fldproductsellersid'])){
  $productid = $_GET['fldproductid'];
  $productsellersid = $_GET['fldproductsellersid'];
  $stmt1 = $conn->prepare("SELECT * FROM products WHERE fldproductid=? AND fldproductsellersid=?");
  $stmt1->bind_param("ii",$productid, $productsellersid);
  $stmt1->execute();
  // This is an array of 1 product seller
  $editproductsellers = $stmt1->get_result();
}
else if($_POST['admineditproductsellersproductbtn']){//Edit Product Sellers Details
  $productid = $_POST['fldproductsellersid'];
  $productname = $_POST['fldproductname'];  
  $productdepartment = $_POST['fldproductdepartment'];
  $productcategory = $_POST['fldproductcategory'];
  $producttype = $_POST['fldproducttype'];
  $productcolor = $_POST['fldproductcolor'];
  $productgender = $_POST['fldproductgender'];
  $productsize = $_POST['fldproductsize'];
  $productstock = $_POST['fldproductstock'];
  $productdescription = $_POST['fldproductdescription'];
  $productprice = $_POST['fldproductprice'];
  $productdiscount = $_POST['fldproductdiscount'];
  $productdiscountcode = $_POST['fldproductdiscountcode'];

  $stmt = $conn->prepare("UPDATE products SET fldproductname=?,fldproductdepartment=?,fldproductcategory=?,fldproducttype=?,fldproductcolor=?,fldproductgender=?,fldproductsize=?,fldproductstock=?,fldproductdescription=?,fldproductprice=?, fldproductdiscount=?,fldproductdiscountcode=? WHERE fldproductsellersid=?");

  $stmt->bind_param('ssssssssssssi',$productname,$productdepartment,$productcategory,$producttype,$productcolor,$productgender,$productsize,$productstock,$productdescription,$productprice,$productdiscount,$productdiscountcode,$productsellersid);
  
  if($stmt->execute()){
    header('location: ../admin/adminproductsellers.php?editmessage=Product Updated Succesfully!');
  }
  else{
    header('location: ../admin/adminproductsellers.php?errormessage=Error Occured, Try Again.');
  }
}
else{//no product sellers id was given
  header('location: ../admin/adminproductsellers.php?errormessage=Something went wrong!');
}
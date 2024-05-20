<?php
session_start();
//if user has already registered then take user to account page
if(isset($_SESSION['logged_in'])){
  header('location: account.php');
  exit;
}
include('server/getregistration.php');
?>
<!DOCTYPE html>
	<html lang="en">
		<head>
			<meta charset="utf-8">
			<meta name="viewport" content="width=device-width, initial-scale=1.0">
			<title>NSSA STORE</title>
			<link rel="stylesheet" type="text/css" href="assets/styles/styledefault.css">
			<link rel="stylesheet" type="text/css" href="assets/styles/stylecart.css">
			<link rel="stylesheet" type="text/css" href="assets/styles/styletrackorderbanner.css">
			<link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,200;0,300;0,400;0,500;1,200;1,300&display=swap" rel="stylesheet">
			<link rel="stylesheet" type="text/css" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
			<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.0/jquery.min.js"></script>
			<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
			<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
		</head>
	  <body>

	  <div class="header">
		  <div class="container">
		    <div class="navbar">
			    <div class="logocontainer">
				    <a href="index.php"><img class="logo" src="assets/images/WhatsApp Image 2024-05-16 at 20.22.35_819aecad.jpg" alt="Snow" align="left"></a>
			    </div>
			    <nav>
						<ul id="menuitems">
							<li class="exitmenutogglebtn" id="nav-exit" onclick="menutoggle()"><a href="#">X</a></li>
							<li class="active"><a href="index.php"><img id="navbaricons" src="assets/images/bx-home.svg" alt="Snow">Home</a></li>
							<li class="active"><a href="about.php"><img id="navbaricons" src="assets/images/bx-info-square.svg" alt="Snow">About</a></li>
							<li class="active" id="departmentitems" onclick="departmentsmenutoggle()"><a href="#"><img id="navbaricons" src="assets/images/bx-store-alt.svg" alt="Snow">Shop Departments</a></li>
							<li class="active"><a href="contact.php"><img id="navbaricons" src="assets/images/bx-phone.svg" alt="Snow">Contact</a></li>
							<li class="active"><a href="sellers/adminlogin.php" target="_blank" rel="noopener noreferrer"><img id="navbaricons" src="assets/images/bx-network-chart.svg" alt="Snow">Sell on NSSA</a></li>
							<li class="active"><a href="#"><img id="navbaricons" src="assets/images/bx-buildings.svg" alt="Snow">Careers</a></li>
				    </ul>
					</nav>
					<!---------------Account Image---------------->
					<a href="login.php" style="margin-right: 3%;"><img id="accountpic" class="accountpic" src="assets/images/accounticon_pic.png" alt="Snow" width="30px" height="32px" align="left"></a>
					<!---------------Cart Image---------------->
					<a href="cart.php"><img id="cart-pic" class="cartpic" src="assets/images/cartpic.png" alt="Snow" width="30px" height="30px" align="left">
					<?php if(isset($_SESSION['totalquantity']) && $_SESSION['totalquantity'] != 0) { ?>
						<span class="cartquantity"><?php echo $_SESSION['totalquantity']; ?></span>
					<?php } ?></a>

					<!-- Menu icon -->
					<img src="assets/images/menu.png" alt="Snow" class="menu-icon" onclick="menutoggle()" align="center">
				</div>

				<!-------- Departments Navbar ------->
				<div class="departmentsnavbar" id="departmentsnavbar">
					<nav class="departmentsnav">
						<ul class="departmentsnavitems">
						  <li class="departmentsactive" onclick="closeallmenutoggle()"><a id="departmentsexitmenutogglebtn" href="#">Close</a></li>
							<li class="departmentsactive" id="departmentsnavlist"><a href="products.php?fldproductdepartment=Automotive">Automotive</a></li>
							<li class="departmentsactive" id="departmentsnavlist"><a href="products.php?fldproductdepartment=DIY">DIY</a></li>
							<li class="departmentsactive" id="departmentsnavlist"><a href="products.php?fldproductdepartment=Baby, Toddler & Kids">Baby, Toddler & Kids</a></li>
							<li class="departmentsactive" id="departmentsnavlist"><a href="products.php?fldproductdepartment=Health, Beauty & Personal Care">Health, Beauty & Personal Care</a></li>
							<li class="departmentsactive" id="departmentsnavlist"><a href="products.php?fldproductdepartment=Sports">Sports</a></li>
							<li class="departmentsactive" id="departmentsnavlist"><a href="products.php?fldproductdepartment=Outdoors">Outdoors</a></li>
							<li class="departmentsactive" id="departmentsnavlist"><a href="products.php?fldproductdepartment=Healthy Living">Healthy Living</a></li>
							<li class="departmentsactive" id="departmentsnavlist"><a href="products.php?fldproductdepartment=Clothing, Shoes & Accessories">Clothing, Shoes & Accessories</a></li>
							<li class="departmentsactive" id="departmentsnavlist"><a href="products.php?fldproductdepartment=Electronics & Devices">Electronics & Devices</a></li>
							<li class="departmentsactive" id="departmentsnavlist"><a href="products.php?fldproductdepartment=Garden, Pool & Patio">Garden, Pool & Patio</a></li>
							<li class="departmentsactive" id="departmentsnavlist"><a href="products.php?fldproductdepartment=Home & Appliances">Home & Appliances</a></li><li class="departmentsactive" id="departmentsnavlist"><a href="products.php?fldproductdepartment=Home & Furniture">Home & Furniture</a></li>
							<li class="departmentsactive" id="departmentsnavlist"><a href="products.php?fldproductdepartment=Household Essentials">Household Essentials</a></li>
							<li class="departmentsactive" id="departmentsnavlist"><a href="products.php?fldproductdepartment=Office, Stationary & Books">Office, Stationary & Books</a></li>
							<li class="departmentsactive" id="departmentsnavlist"><a href="products.php?fldproductdepartment=Party Ocassions">Party Ocassions</a></li>
							<li class="departmentsactive" id="departmentsnavlist"><a href="products.php?fldproductdepartment=Pets">Pets</a></li>
							<li class="departmentsactive" id="departmentsnavlist"><a href="products.php?fldproductdepartment=Liquor">Liquor</a></li>
							<li class="departmentsactive" id="departmentsnavlist"><a href="products.php?fldproductdepartment=Sweets & Snacks">Sweets & Snacks</a></li>
						</ul>
					</nav>
				</div>

				<!---- Voice Recognition AI Search --->
				<div class="voicerecognitioncontainer">
          <img src="assets/images/voicerecognitionicon_pic.png" class="btn" id="voicerecognitionbtn"/>
					<p id="result"></p>
					<p id="voicerecognitionhelplink">Need Help?<a href="voicerecognitionhelp.php">Voice Command List</a><p>
        </div>

				<!------ Js for Voice Recognition Output ----->
				<script src="js/getvoicerecognitionoutput.js"></script>

				<!------ Js for Toggle Menu ----->
				<script src="js/getheadertogglemenu.js"></script>
			</div>
		</div>
<!--------- registration-page ------------>
<section class="my-5 py-5">
	<div class="container text-center mt-3 pt-5">
		<h2 class="form-weight-bold">Registration</h2>
		<hr class="max-auto">
	</div>
	<div class="registrationcontainer">
		<form id="registrationform" method="POST" action="registration.php">
			<p style="color: red;"><?php if(isset($_GET['error'])){ echo $_GET['error'];} ?></p>
			<div class="form-group">
				<label>First Name
				  <input type="text" class="form-control" id="registrationfirstname" name="flduserfirstname" placeholder="First Name" required/>
				</label>
			</div>
			<div class="form-group">
				<label>Last Name
					<input type="text" class="form-control" id="registrationlastname" name="flduserlastname" placeholder="Last Name" required/>
				</label>
			</div>
			<div class="form-group">
				<label>Addressline1
					<input type="text" class="form-control" id="registrationaddressline1" name="flduseraddressline1" placeholder="Addressline1" required/>
				</label>
			</div>
			<div class="form-group">
				<label>Addressline2
					<input type="text" class="form-control" id="registrationaddressline2" name="flduseraddressline2" placeholder="Addressline2"/>
				</label>
			</div>
			<div class="form-group">
				<label>Postal Code
					<input type="text" class="form-control" id="registrationpostalcode" name="flduserpostalcode" placeholder="Postalcode" required/>
				</label>
			</div>
			<div class="form-group">
				<label>City
					<input type="text" class="form-control" id="registrationcity" name="fldusercity" placeholder="City" required/>
				</label>
			</div>
			<div class="form-group">
				<label>Country
					<select class="form-control" id="registrationcountry" name="fldusercountry" size="1" value="" required>
						<option value="">Select Country..</option>
						<option value="Australia">Australia</option>
						<option value="Britain">Britain</option>
						<option value="China">China</option>
						<option value="Egypt">Egypt</option>
						<option value="England">England</option>
						<option value="France">France</option>
						<option value="Germany">Germany</option>
						<option value="Italy">Italy</option>
						<option value="Mauritius">Mauritius</option>
						<option value="Mexico">Mexico</option>
						<option value="Nigeria">Nigeria</option>
						<option value="Portugal">Portugal</option>
						<option value="Russia">Russia</option>  
						<option value="South_Africa">South Africa</option>
						<option value="Thailand">Thailand</option>
						<option value="USA">USA</option>
					</select>
				</label>
			</div>
			<div class="form-group">
				<label>Phone Number
					<input type="text" class="form-control" id="registrationphonenumber" name="flduserphonenumber" placeholder="Phone Number" required/>
				</label>
			</div>
			<div class="form-group">
				<label>Email
					<input type="text" class="form-control" id="registrationemail" name="flduseremail" placeholder="Email" required/>
				</label>
			</div>
			<div class="form-group">
				<label>ID Number
					<input type="text" class="form-control" id="registrationidnumber" name="flduseridnumber" placeholder="ID Number" required/>
				</label>
			</div>
			<div class="form-group">
				<label>Password
					<input type="password" class="form-control" id="registrationpassword" name="flduserpassword" placeholder="Password" required/>
				</label>
			</div>
			<div class="form-group">
				<label>Confirm Password
					<input type="password" class="form-control" id="registrationconfirmpassword" name="flduserconfirmpassword" placeholder="Confirm Password" required/>
				</label>
			</div>
			<div class="form-group">
				<input type="hidden" name="flduserimage" value="unknownimage.png" required/>
				<button type="submit" name="registrationbtn" class="btn" required>Register</button>
				<p style="font-size: small">Do you have an account?<a id="loginurl" href="login.php">Login Here</a></p>
			</div>
		</form>
	</div>
</section>


<?php

include('layouts/footer.php');
	
?>
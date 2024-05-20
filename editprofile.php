<?php
session_start();
//if user is not logged in then take user to login page
if(!isset($_SESSION['logged_in'])){
  header('location: login.php');
  exit;
}
include('server/geteditprofile.php');
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
<!--------- Edit Profile Page--------->
<section id="editprofile" class="editprofile container my-5 py-3" style="margin-bottom: 100px">
	<div class="container mt-2">
		<h2 class="font-weight-bold text-center">Your Profile</h2>
		<hr class="mx-auto">
	</div>
  <!------------- Website Messages----------->
  <p style="color: red; font-weight: bold; text-align: center" class="text-center"><?php if(isset($_GET['error'])){ echo $_GET['error']; }?></p>
  <p style="color: green" class="text-center"><?php if(isset($_GET['message'])){ echo $_GET['message']; }?></p>
  
	<div class="editprofiletablecontainer">
    <!--------- edit profile form ------------>
    <div class="max-auto container" >
      <div class="editprofiletable">
        <?php foreach($editprofile as $profile){?>
        <img style="width: 140px; height: 140px; border-radius: 50%" src="<?php if(isset($profile['flduserimage'])){ echo "assets/images/". $profile['flduserimage']; }else{ echo "assets/images/unknownimage.png"; } ?>">
        <p><?php echo $profile['flduserfirstname']; echo " "; echo $profile['flduserlastname']; ?></p>
        <p><?php echo $profile['flduseraddressline1']; ?></p>
        <p><?php echo $profile['flduserpostalcode']; ?></p>
        <p><?php echo $profile['fldusercity']; ?></p>
        <p><?php echo $profile['fldusercountry']; ?></p>
        <p><?php echo $profile['flduseremail']; ?></p>
        <p><?php echo $profile['flduserphonenumber']; ?></p>
      </div>
      <form id="editprofileimageform" enctype="multipart/form-data" method="POST" action="editprofile.php" style="text-align: center;">
        <div class="form-group">
          <label>Profile Image
            <input type="file" class="form-control" name="flduserimage"  required/>
          </label>
          <input type="hidden" name="flduserid" value="<?php echo $profile['flduserid']; ?>" required/>
          <input form="editprofileimageform" class="editprofileuploadbtn" name="editprofileimagebtn" type="submit" value="Upload" required/>
        </div>
      </form>
      <form id="editprofilephonenumberform" method="POST" action="editprofile.php" style="text-align: center;">
        <div class="form-group">
          <label>Profile Phone Number
            <input type="text" class="form-control" name="flduserphonenumber" value="<?php echo $profile['flduserphonenumber']; ?>"  required/>
          </label>
          <input type="hidden" name="flduserid" value="<?php echo $profile['flduserid']; ?>" required/>
          <input form="editprofilephonenumberform" class="editprofileverifybtn" name="editprofilephonenumberbtn" type="submit" value="Verify" required/>
        </div>
      </form>
      <form id="editprofileemailform" method="POST" action="editprofile.php" style="text-align: center;">
        <div class="form-group">
          <label>Profile Email
            <input type="disabled" class="form-control" name="flduseremail" value="<?php echo $profile['flduseremail']; ?>"/>
          </label>
          <input type="hidden" name="flduserid" value="<?php echo $profile['flduserid']; ?>" required/>
          <input form="editprofileemailform" class="editprofileverifybtn" name="editprofileemailbtn" type="submit" value="Verify" required/>
        </div>
      </form>
      <form id="editprofileform" method="POST" action="editprofile.php" style="text-align: center;">
        <div class="form-group">
          <label>Profile First Name
            <input type="text" class="form-control" name="flduserfirstname" value="<?php echo $profile['flduserfirstname']; ?>"/>
          </label>
        </div>
        <div class="form-group">
          <label>Profile Last Name
            <input type="text" class="form-control" name="flduserlastname" value="<?php echo $profile['flduserlastname']; ?>"/>
          </label>
        </div>
        <div class="form-group">
          <label>Profile Address Line 1
            <input type="text" class="form-control" name="flduseraddressline1" value="<?php echo $profile['flduseraddressline1']; ?>"/>
          </label>
        </div>
        <div class="form-group">
          <label>Profile Address Line 2
            <input type="text" class="form-control" name="flduseraddressline2" value="<?php echo $profile['flduseraddressline2']; ?>"/>
          </label>
        </div>
        <div class="form-group">
          <label>Profile Postal Code
            <input type="text" class="form-control" name="flduserpostalcode" value="<?php echo $profile['flduserpostalcode']; ?>"/>
          </label>
        </div>
        <div class="form-group">
          <label>Profile City
            <input type="text" class="form-control" name="fldusercity" value="<?php echo $profile['fldusercity']; ?>"/>
          </label>
        </div>
        <div class="form-group">
          <label>Profile Country
            <input type="text" class="form-control" name="fldusercountry" value="<?php echo $profile['fldusercountry']; ?>"/>
          </label>
        </div>
        <div class="form-group">
          <input type="hidden" name="flduserid" value="<?php echo $profile['flduserid']; ?>" required/>
          <input form="editprofileform" class="editprofilebtn" name="editprofilebtn" type="submit" value="Update" style="width: fit-content;" required/>
          <a id="helpurl" href="Help.php"><br>Need Help?</a>
        </div>
        </form>
      <?php }?>
    </div>
  </div>
</section>
</body>
</html>
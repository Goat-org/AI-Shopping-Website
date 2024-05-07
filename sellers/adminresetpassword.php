<?php
session_start();
//if user has already logged in then take user to Admin Dashboard page
if(isset($_SESSION['productsellerslogged_in'])){
  header('location: dashboard.php');
  exit;
}
include('adminserver/getadminresetpassword.php');
?>
<!DOCTYPE html>
	<html lang="en">
		<head>
			<meta charset="utf-8">
			<meta name="viewport" content="width=device-width, initial-scale=1.0">
			<title>NSSA ADMIN RESET PASSWORD</title>
			<link rel="stylesheet" type="text/css" href="adminassets/adminstyles/adminstyledefault.css">
			<link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,200;0,300;0,400;0,500;1,200;1,300&display=swap" rel="stylesheet">
			<link rel="stylesheet" type="text/css" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
		</head>
	  <body>
		<!--------- reset password page ------------>
		<section class="my-5 py-5">
			<div class="container text-center mt-3 pt-5">
				<h2 class="form-weight-bold">Reset Password</h2>
				<hr class="max-auto">
			</div>
			<div class="max-auto container">
				<form id="resetpasswordform" method="POST" action="adminresetpassword.php">
					<p style="color: red;"><?php if(isset($_GET['error'])){ echo $_GET['error'];} ?></p>
					
					<div class="form-group">
						<label>Email
							<input type="text" class="form-control" id="resetemail" name="fldproductsellersemail" placeholder="Email" required/>
						</label>
					</div>
					<div class="form-group">
						<label>Password
							<input type="password" class="form-control" id="resetpasswordpassword" name="fldproductsellerspassword" placeholder="Password" required/>
						</label>
					</div>
					<div class="form-group">
						<label>Confirm Password
							<input type="password" class="form-control" id="resetpasswordconfirmpassword" name="fldproductsellersconfirmpassword" placeholder="Confirm Password" required/>
						</label>
					</div>
					<div class="form-group">
						<button type="submit" name="productsellersresetpasswordbtn" class="btn" id="resetpasswordbtn" required>Reset Password</button>
					</div>
				</form>
			</div>
		</section>
<?php
include('adminlayouts/adminfooter.php');
?>



			<!--------- Admin-login-page ------------>
			<section class="logincontainer">
				<div><br><br><br>
					<h2 class="form-weight-bold" style="text-align: center; font-family: verdana">Welcome NSSA Admin Login</h2>
				</div>
				
				<div>
					<div class="loginformcontainer">
							<h1 style="color: red">No Unauthorized Personnel.<br>Trespassers Will Be Tracked.</h1>
						
						<form id="loginform" method="POST" action="adminlogin.php">
							<p style="color: red" class="text-center"><?php if(isset($_GET['error'])){ echo $_GET['error']; }?></p>
							<p style="color: green" class="text-center"><?php if(isset($_GET['message'])){ echo $_GET['message']; }?></p>
							<div class="form-group">
								<label>Email</label><br>
								<input type="text" class="form-control" id="loginemail" name="fldadminemail" placeholder="Email" required/>
							</div>
							<div class="form-group">
							<label>Password</label><br>
								<input type="password" class="form-control" id="loginpassword" name="fldadminpassword" placeholder="Password" required/>
							</div>
							<div class="form-group">
								<button type="submit" name="adminloginbtn" class="btn" id="loginbtn" required>Login</button><br>
								<p style="font-size: small">Can't sign in?<a id="forgotpasswordurl" href="adminresetpassword.php">Forgot Password</a></p><br>
								<p style="font-size: small">Don't have account?<a id="registerurl" href="adminregistration.php">Register</a></p>
								<a id="helpurl" href="adminloginhelp.php">Help?</a>
							</div>
						</form>
					</div>
				</div>
			</section>



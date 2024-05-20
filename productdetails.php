<?php
session_start();
include('server/getproductreviews.php');
include('server/getproductdetails.php');
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
<!--------- single product details ------------> 
<div class="small-container">
	<!------------- Website Messages----------->
	<p style="color: red; font-weight: bold; text-align: center" class="text-center"><?php if(isset($_GET['error'])){ echo $_GET['error']; }?></p>
	<p style="color: green" class="text-center"><?php if(isset($_GET['message'])){ echo $_GET['message']; }?></p>
	<div class="row">
		<?php while($row = $product->fetch_assoc()) { ?>
			<div class="col-2">
				<img class = "shop-item-image" src="assets/images/<?php echo $row['fldproductimage']; ?>" alt="Snow" width="50%" id="ProductImg">
				<div class="small-img-row">
					<div class="small-img-col">
						<img src="assets/images/<?php echo $row['fldproductimage1']; ?>" alt="Snow" width="100%" class="small-img">
					</div>
					<div class="small-img-col">
						<img src="assets/images/<?php echo $row['fldproductimage2']; ?>" alt="Snow" width="100%" class="small-img">
					</div>
					<div class="small-img-col">
						<img src="assets/images/<?php echo $row['fldproductimage3']; ?>" alt="Snow" width="100%" class="small-img">
					</div>
					<div class="small-img-col">
						<img src="assets/images/<?php echo $row['fldproductimage4']; ?>" alt="Snow" width="100%" class="small-img">
					</div>
				</div>
			</div>
			<div class="col-2">
				<p>Home / Product-Details</p>
				<h1 class = "shop-item-title"><?php echo $row['fldproductname']; ?></h1>
				<h4 class = "shop-item-price" style="margin-left: 10px; font-size: large">R <?php $discount = $row['fldproductdiscount']*100; if(isset($row['fldproductprice'])){ echo $row['fldproductprice']." / ".$discount."% OFF"; }else{ echo $row['fldproductprice']; } ?></h4><br>
				<h4 class = "shop-item-stock" style="margin-left: 10px; color: red; font-weight: bold"><?php echo $row['fldproductstock']; ?> left in stock</h4><br>
				<?php if($row['fldproductmostrated'] == 0) { ?>
				<div class="rating">
					<i class="fa fa-star-o"></i>
					<i class="fa fa-star-o"></i>
					<i class="fa fa-star-o"></i>
					<i class="fa fa-star-o"></i>
					<i class="fa fa-star-o"></i>
				</div>
				<?php }else if($row['fldproductmostrated'] == 1) { ?>
					<div class="rating">
						<i class="fa fa-star"></i>
						<i class="fa fa-star-o"></i>
						<i class="fa fa-star-o"></i>
						<i class="fa fa-star-o"></i>
						<i class="fa fa-star-o"></i>
					</div>
				<?php }else if($row['fldproductmostrated'] == 2) { ?>
					<div class="rating">
						<i class="fa fa-star"></i>
						<i class="fa fa-star"></i>
						<i class="fa fa-star-o"></i>
						<i class="fa fa-star-o"></i>
						<i class="fa fa-star-o"></i>
					</div>
				<?php }else if($row['fldproductmostrated'] == 3) { ?>
					<div class="rating">
						<i class="fa fa-star"></i>
						<i class="fa fa-star"></i>
						<i class="fa fa-star"></i>
						<i class="fa fa-star-o"></i>
						<i class="fa fa-star-o"></i>
					</div>
				<?php }else if($row['fldproductmostrated'] == 4) { ?>
					<div class="rating">
						<i class="fa fa-star"></i>
						<i class="fa fa-star"></i>
						<i class="fa fa-star"></i>
						<i class="fa fa-star"></i>
						<i class="fa fa-star-o"></i>
					</div>
				<?php }else if($row['fldproductmostrated'] == 5) { ?>
					<div class="rating">
						<i class="fa fa-star"></i>
						<i class="fa fa-star"></i>
						<i class="fa fa-star"></i>
						<i class="fa fa-star"></i>
						<i class="fa fa-star"></i>
					</div>
				<?php }else { ?>
					<div class="rating">
						<i class="fa fa-star-o"></i>
						<i class="fa fa-star-o"></i>
						<i class="fa fa-star-o"></i>
						<i class="fa fa-star-o"></i>
						<i class="fa fa-star-o"></i>
					</div>
				<?php } ?>

				<form name="productdetailsform" method="POST" action="productdetails.php">
					<input type="hidden" name="fldproductid" value="<?php echo $row['fldproductid']; ?>"/>
					<input type="hidden" name="fldproductsellersid" value="<?php echo $row['fldproductsellersid']; ?>"/>
					<input type="hidden" name="fldproductimage" value="<?php echo $row['fldproductimage']; ?>"/>
					<input type="hidden" name="fldproductname" value="<?php echo $row['fldproductname']; ?>"/>
					<input type="hidden" name="fldproductprice" value="<?php echo $row['fldproductprice']; ?>"/>
					<input type="number" name="fldproductquantity" value="<?php if($row['fldproductstock']!=0){ echo "1"; }else{ echo "0"; }?>" min="<?php if($row['fldproductstock']!=0){ echo "1"; }else{ echo "0"; }?>" max="<?php echo $row['fldproductstock']; ?>"/>
					<input type="hidden" name="fldproductdiscount" value="<?php echo $row['fldproductdiscount']; ?>"/>
					<input type="hidden" name="fldproductstock" value="<?php echo $row['fldproductstock']; ?>"/><br>
					<?php if($row['fldproductstock']!=0){ ?>
						<button type="submit" name="addtocartbtn" class="btn btn-primary shop-item-button" id="addtocartbtn">Add To Cart</button><br>
						<button type="submit" name="buynowbtn" class="btn btn-primary shop-item-button" id="buynowbtn">Buy Now</button>
					<?php } ?>

					<h3>Product Details <i class="fa fa-indent"></i></h3><br>
					<p><?php echo $row['fldproductdescription']; ?></p><br>
				  <?php }?>
			  </form>

				<h3>Product Reviews <i class="fa fa-indent"></i></h3><br>
				<!--------- Display Product Reviews --------->
				<section id="productreviews" class="productreviews container my-5 py-3" style="color: grey">
					<table class="reviewdisplaycontainer">
						<tr>
							<th>Country</th>
							<th>Reviews</th>
							<th>Ratings</th>
							<th>Status</th>
							<th>Name</th>
							<th>Review Date</th>
						</tr>
						<?php while($row = $productreviews->fetch_assoc()) { ?>
						<tr>
							<td>
								<span><?php echo $row['fldusercountry'];?></span>
							</td>
							<td>
								<span><?php echo $row['fldproductreviewcomment']; ?></span>
							</td>
							<td>
								<span>
									<?php if($row['fldproductreviewrating'] == 0) { ?>
										<div class="rating">
											<i class="fa fa-star-o"></i>
											<i class="fa fa-star-o"></i>
											<i class="fa fa-star-o"></i>
											<i class="fa fa-star-o"></i>
											<i class="fa fa-star-o"></i>
										</div>
									<?php }else if($row['fldproductreviewrating'] == 1) { ?>
										<div class="rating">
											<i class="fa fa-star"></i>
											<i class="fa fa-star-o"></i>
											<i class="fa fa-star-o"></i>
											<i class="fa fa-star-o"></i>
											<i class="fa fa-star-o"></i>
										</div>
									<?php }else if($row['fldproductreviewrating'] == 2) { ?>
										<div class="rating">
											<i class="fa fa-star"></i>
											<i class="fa fa-star"></i>
											<i class="fa fa-star-o"></i>
											<i class="fa fa-star-o"></i>
											<i class="fa fa-star-o"></i>
										</div>
									<?php }else if($row['fldproductreviewrating'] == 3) { ?>
										<div class="rating">
											<i class="fa fa-star"></i>
											<i class="fa fa-star"></i>
											<i class="fa fa-star"></i>
											<i class="fa fa-star-o"></i>
											<i class="fa fa-star-o"></i>
										</div>
									<?php }else if($row['fldproductreviewrating'] == 4) { ?>
										<div class="rating">
											<i class="fa fa-star"></i>
											<i class="fa fa-star"></i>
											<i class="fa fa-star"></i>
											<i class="fa fa-star"></i>
											<i class="fa fa-star-o"></i>
										</div>
									<?php }else if($row['fldproductreviewrating'] == 5) { ?>
										<div class="rating">
											<i class="fa fa-star"></i>
											<i class="fa fa-star"></i>
											<i class="fa fa-star"></i>
											<i class="fa fa-star"></i>
											<i class="fa fa-star"></i>
										</div>
									<?php }else { ?>
										<div class="rating">
											<i class="fa fa-star-o"></i>
											<i class="fa fa-star-o"></i>
											<i class="fa fa-star-o"></i>
											<i class="fa fa-star-o"></i>
											<i class="fa fa-star-o"></i>
										</div>
									<?php } ?>
								</span>
							</td>
							<td>
								<span>Member</span>
							</td>
							<td>
								<span><?php echo $row['flduserfirstname']; ?></span>
							</td>
							<td>
								<span><?php echo $row['fldproductreviewdate']; ?></span>
							</td>
						</tr>
						<?php }?>
					</table><br><br>
					<div class="reviewcontainer">
						<h3>Submit Review For The Product</h3>
						<hr>
						<form name="productreviewform" method="POST" action="productdetails.php?fldproductid=<?php echo $_GET['fldproductid'];?>&message=Updated Review Succesfully!">
							<div class="row">
								<div class="reviewrating">
									<input type="radio" id="star5" name="fldproductmostrated" value="5">
									<label for="star5"></label>
									<input type="radio" id="star4" name="fldproductmostrated" value="4">
									<label for="star4"></label>
									<input type="radio" id="star3" name="fldproductmostrated" value="3">
									<label for="star3"></label>
									<input type="radio" id="star2" name="fldproductmostrated" value="2">
									<label for="star2"></label>
									<input type="radio" id="star1" name="fldproductmostrated" value="1">
									<label for="star1"></label>
								</div>
								<div class="form-group">
									<label>Review
										<input type="text" class="form-control" name="fldproductreviewcomment" placeholder="write comment here..." required/>
									</label>
								</div>
								<div class="form-group">
									<input type="hidden" name="fldproductid" value="<?php echo $_GET['fldproductid']; ?>"/>
									<input type="hidden" name="flduserid" value="<?php if(isset($_SESSION['flduserid'])){echo $_SESSION['flduserid'];} ?>"/>
									<button type="submit" name="productreviewbtn" class="btn" id="productreviewbtn" required>Submit Review..</button>
								</div>
							</div>
						</form>
					</div>
					<div class="page-btn1">
						<span class="page-item <?php if($pagenumber <= 1){ echo 'disabled';} ?>"><a class="page-link" href="<?php if($pagenumber <= 1){ echo '#';}else{ echo "productdetails.php?fldproductid=".$productid."&pagenumber=".($pagenumber - 1);} ?>">Prev</a></span>

						<span class="page-item"><a class="page-link" href="<?php echo "productdetails.php?fldproductid=".$productid."&pagenumber=1"; ?>">1</a></span>
						<span class="page-item"><a class="page-link" href="<?php echo "productdetails.php?fldproductid=".$productid."&pagenumber=2"; ?>">2</a></span>

						<?php if($pagenumber >= 3) { ?>
							<span class="page-item"><a class="page-link" href="#">...</a></span>
							<span class="page-item"><a class="page-link" href="<?php echo "productdetails.php?fldproductid=".$productid."&pagenumber=".$pagenumber; ?>"><?php echo $pagenumber; ?></a></span>
						<?php } ?>

						<span class="page-item <?php if($pagenumber >= $totalnumberofpages){ echo 'disabled';} ?>"><a class="page-link" href="<?php if($pagenumber >= $totalnumberofpages){ echo '#';}else{ echo "productdetails.php?fldproductid=".$productid."&pagenumber=".($pagenumber + 1);} ?>">Next</a></span>
					</div>
				</section>
		  </div>
	</div>
</div>    

<!----------title------------>
<div class="small-container">
	<div class="row row-2">
		<h2>Related Products</h2>
		<p>View More</p>
	</div>
</div>


<!---------Related Products----------->
<div class="small-container">
	<div class="row">

		<?php include('server/getrandomproducts.php'); ?>

		<?php while($row = $randomproducts->fetch_assoc()) { ?>

		<div class="col-4">
			<a href="<?php echo "productdetails.php?fldproductid=".$row['fldproductid']."&fldproductmostviewed=1"; ?>"><img src="assets/images/<?php echo $row['fldproductimage']; ?>" alt="Snow"></a>
			<a href="<?php echo "productdetails.php?fldproductid=".$row['fldproductid']."&fldproductmostviewed=1"; ?>"><h4><?php echo $row['fldproductname']; ?></h4></a>
			<?php if($row['fldproductmostrated'] == 0) { ?>
				<div class="rating">
					<i class="fa fa-star-o"></i>
					<i class="fa fa-star-o"></i>
					<i class="fa fa-star-o"></i>
					<i class="fa fa-star-o"></i>
					<i class="fa fa-star-o"></i>
				</div>
			<?php }else if($row['fldproductmostrated'] == 1) { ?>
				<div class="rating">
					<i class="fa fa-star"></i>
					<i class="fa fa-star-o"></i>
					<i class="fa fa-star-o"></i>
					<i class="fa fa-star-o"></i>
					<i class="fa fa-star-o"></i>
				</div>
			<?php }else if($row['fldproductmostrated'] == 2) { ?>
				<div class="rating">
					<i class="fa fa-star"></i>
					<i class="fa fa-star"></i>
					<i class="fa fa-star-o"></i>
					<i class="fa fa-star-o"></i>
					<i class="fa fa-star-o"></i>
				</div>
			<?php }else if($row['fldproductmostrated'] == 3) { ?>
				<div class="rating">
					<i class="fa fa-star"></i>
					<i class="fa fa-star"></i>
					<i class="fa fa-star"></i>
					<i class="fa fa-star-o"></i>
					<i class="fa fa-star-o"></i>
				</div>
			<?php }else if($row['fldproductmostrated'] == 4) { ?>
				<div class="rating">
					<i class="fa fa-star"></i>
					<i class="fa fa-star"></i>
					<i class="fa fa-star"></i>
					<i class="fa fa-star"></i>
					<i class="fa fa-star-o"></i>
				</div>
			<?php }else if($row['fldproductmostrated'] == 5) { ?>
				<div class="rating">
					<i class="fa fa-star"></i>
					<i class="fa fa-star"></i>
					<i class="fa fa-star"></i>
					<i class="fa fa-star"></i>
					<i class="fa fa-star"></i>
				</div>
			<?php }else { ?>
				<div class="rating">
					<i class="fa fa-star-o"></i>
					<i class="fa fa-star-o"></i>
					<i class="fa fa-star-o"></i>
					<i class="fa fa-star-o"></i>
					<i class="fa fa-star-o"></i>
				</div>
			<?php } ?>
			<p>R <?php echo $row['fldproductprice']; ?></p>
		</div>

		<?php } ?>
	</div>
</div>

<!----------js for product gallery ---------->
<script>
	var ProductImg = document.getElementById("ProductImg");
	var SmallImg = document.getElementsByClassName("small-img");

	    SmallImg[0].onclick = function()
	    {
	        ProductImg.src = SmallImg[0].src;	
	    }
	    SmallImg[1].onclick = function()
	    {
	        ProductImg.src = SmallImg[1].src;	
	    }
	    SmallImg[2].onclick = function()
	    {
	        ProductImg.src = SmallImg[2].src;	
	    }
	    SmallImg[3].onclick = function()
	    {
	        ProductImg.src = SmallImg[3].src;	
	    }
</script>

<?php

include('layouts/footer.php');

?>
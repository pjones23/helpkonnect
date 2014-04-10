<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8">

		<!-- Always force latest IE rendering engine (even in intranet) & Chrome Frame
		Remove this if you use the .htaccess -->
		<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">

		<title>HelpKonnect</title>
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<!-- Bootstrap -->
        <!--
		<link href="/Utilities/bootstrap/css/bootstrap.min.css" rel="stylesheet">
		<link href="/1_UI_Layer/css/cover.css" rel="stylesheet">
		<link href="/1_UI_Layer/css/helpkonnect.css" rel="stylesheet">
		<link href="/1_UI_Layer/css/signin.css" rel="stylesheet">
        -->
		<!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
		<!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
		<!--[if lt IE 9]>
		<script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
		<script src="https://oss.maxcdn.com/libs/respond.js/1.3.0/respond.min.js"></script>
		<![endif]-->
	</head>

	<body>

		<div class="site-wrapper" style="text-align:center">

					<div class="inner cover">
						<h1 class="cover-heading">Helpkonnect</h1>
						<p >
							Search. Connect. Collaborate.
						</p>
						<p>
							<form id="signinForm" class="form-signin" role="form" >
								<h4 class="form-signin-heading">Please sign in</h4>
								<p id="AccountFoundStatus" style="display: none;">
									Your account was not found. Please Try Again.
								</p>
								<input id="signinEmail" type="email" class="form-control" placeholder="Email address" required autofocus>
								<input id="signinPassword" type="password" class="form-control" placeholder="Password (Disabled for beta)" disabled="true">
								<!-- required // insert this attribute after beta-->
								<!-- <label class="checkbox">
								<input type="checkbox" value="remember-me">
								Remember me </label> -->
								<button class="btn btn-lg btn-primary btn-block" style="background-color: rgb(204,204,0); color:black;" type="submit">
									Sign in
								</button>
								<p class="text-muted">
									OR
								</p>
								<button class="btn btn-lg btn-primary btn-block" onclick="navigateToNewUser('');" role="button" style="background-color: rgb(204,204,0); color:black;">Sign up today</button>
								<br />
								<a href="#" class="btn btn-lg btn-default btn-block">Learn more</a>
							</form>

						</p>
					</div>

					<div class="mastfoot">
						<div class="inner">
							<footer>
								<p>
									&copy; 2014 Helpkonnect, Inc. &middot; <a href="#">Privacy</a> &middot; <a href="#">Terms</a>
								</p>
							</footer>
						</div>
					</div>

		</div>

	</body>
</html>

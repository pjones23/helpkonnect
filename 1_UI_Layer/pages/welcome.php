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
		<link href="../../Utilities/bootstrap/css/bootstrap.min.css" rel="stylesheet">
		<link href="../../1_UI_Layer/css/cover.css" rel="stylesheet">
		<link href="../../1_UI_Layer/css/helpkonnect.css" rel="stylesheet">
		<link href="../../1_UI_Layer/css/signin.css" rel="stylesheet">

		<!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
		<!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
		<!--[if lt IE 9]>
		<script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
		<script src="https://oss.maxcdn.com/libs/respond.js/1.3.0/respond.min.js"></script>
		<![endif]-->
	</head>

	<body>

		<div class="site-wrapper">

			<div class="site-wrapper-inner">

				<div class="cover-container">

					<div class="inner cover">
						<h1 class="cover-heading">Helpkonnect</h1>
						<p class="lead">
							Search. Connect. Collaborate.
						</p>
						<p class="lead">
							<form class="form-signin" role="form" onsubmit="loginUser(); return false;">
								<h4 class="form-signin-heading">Please sign in</h4>
								<input id="signinEmail" type="email" class="form-control" placeholder="Email address" required autofocus>
								<input id="signinPassword" type="password" class="form-control" placeholder="Password (Disabled for beta)" disabled="true"> <!-- required // insert this attribute after beta--> 
								<!-- <label class="checkbox">
								<input type="checkbox" value="remember-me">
								Remember me </label> -->
								<button class="btn btn-lg btn-primary btn-block" style="background-color: rgb(204,204,0); color:black;" type="submit">
									Sign in
								</button>
								<p class="text-muted"> OR </p>
								<a class="btn btn-lg btn-primary btn-block" href="#" role="button" style="background-color: rgb(204,204,0); color:black;">Sign up today</a>
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

			</div>

		</div>

		<!-- Include all compiled plugins (below), or include individual files as needed -->
		<script src="../../Utilities/bootstrap/js/bootstrap.min.js"></script>
	</body>
</html>

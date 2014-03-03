<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<title>Help Konnect</title>
		<link rel="stylesheet" href="http://code.jquery.com/mobile/1.2.0/jquery.mobile-1.2.0.min.css" />
		<script src="http://code.jquery.com/jquery-1.8.2.min.js"></script>
		<script src="http://code.jquery.com/mobile/1.2.0/jquery.mobile-1.2.0.min.js"></script>

		<script>
			// $('#loadingdiv').hide();
			// console.log("beginning script");
			// $.ajaxSetup({
			//   beforeSend: function() {
			// console.log("beforeSend");
			//      $('#loadingdiv').show()
			//   },
			//   complete: function(){
			// console.log("beforeSend");
			//      $('#loadingdiv').hide()
			//   },
			//   success: function() {}
			// });
			/*
			 $(document).bind('mobileinit', function() {
			 $.mobile.loader.prototype.options.text = "loading";
			 $.mobile.loader.prototype.options.textVisible = false;
			 $.mobile.loader.prototype.options.theme = "a";
			 $.mobile.loader.prototype.options.html = "";
			 });

			 $.mobile.loading('show', {
			 text : 'foo',
			 textVisible : true,
			 theme : 'z',
			 html : ""
			 });
			 */
		</script>

		<!-- <script src="/Utilities/paypal-button.min.js"></script> -->
		<script src="/Utilities/sandbox-paypal-button.min.js"></script>
		<script src="/1_UI_Layer/js/mailHelper.js"></script>

		<script src="/2_Business_Logic_Layer/BusinessEntities/user.js"></script>
		<script src="/2_Business_Logic_Layer/BusinessEntities/service.js"></script>
		<script src="/2_Business_Logic_Layer/BusinessEntities/serviceStatus.js"></script>

		<script src="/1_UI_Layer/js/loginProcesses.js"></script>

		<!-- Scripts for New User -->
		<script src="/1_UI_Layer/js/newUserPage.js"></script>

		<!-- Scripts for Settings -->
		<script src="/1_UI_Layer/js/settingsPage.js"></script>

		<!-- Scripts for Check In -->

		<!-- Scripts for Search -->
		<script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAa_Tt6cQ7UqiWMk9fVb7iKbeKaAwYeRoE&sensor=true"></script>
		<script src="/1_UI_Layer/js/searchPage.js"></script>

		<!-- Scripts for Offered Services -->
		<script src="/1_UI_Layer/js/serviceOfferedPage.js"></script>

		<!-- Scripts for Requested Services -->
		<script src="/1_UI_Layer/js/serviceRequestsPage.js"></script>

	</head>
	<body>
		<div id="fb-root"></div>
		<script src="/1_UI_Layer/js/fb_auth.js"></script>
		<!-- ---------------------------------------------------------------------------------------- -->
		<?php
		include $_SERVER["DOCUMENT_ROOT"] . 'ChromePhp.php';
		?>

		<!-- Welcome -->
		
		<div data-role="page" id="login">
		<?php
		include 'welcome.php';
		?>
		</div>
		
		<!-- Home -->
		<div data-role="page" id="home">
			<?php
			include 'home.php';
			?>
		</div>

		<!-- New User -->
		<div data-role="page" id="newUser">
			<?php
			include 'newUser.php';
			?>
		</div>

		<div data-role="page" id="search" data-dom-cache="true">
			<?php
			include 'search.php';
			?>
		</div>

		<div data-role="dialog" data-url="page-dialog" id="page-dialog">
			<?php
			include 'searchServiceDialog.php';
			?>
		</div>

		<div data-role="dialog" data-url="page-subdialog" id="page-subdialog">
			<?php
			include 'searchServiceSubDialog.php';
			?>
		</div>

		<div data-role="dialog" data-url="setting_dialog" id="setting_dialog">
			<?php
			include 'settings.php';
			?>
		</div>

		<div data-role="page" id="serviceRequests" data-dom-cache="true">
			<?php
			include 'serviceRequests.php';
			?>
		</div>

		<div data-role="dialog" data-url="request-Option-dialog" id="request-Option-dialog">
			<?php
			include 'requestedService.php';
			?>
		</div>

		<div data-role="page" id="servicesOffered" data-dom-cache="true">
			<?php
			include 'servicesOffered.php';
			?>
		</div>

		<div data-role="dialog" data-url="addServiceDialog" id="addServiceDialog">
			<?php
			include 'addService.php';
			?>
		</div>

		<div data-role="dialog" data-url="editServiceDialog" id="editServiceDialog">
			<?php
			include 'editService.php';
			?>
		</div>

		<div data-role="dialog" data-url="authorizeRequestDialog" id="authorizeRequestDialog">
			<?php
			include 'authorizeRequest.php';
			?>
		</div>

	</body>
</html>
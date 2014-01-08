/**
 * @author PerronJones
 */

var loginStatus = "";
// Additional JS functions here
window.fbAsyncInit = function() {
	FB.init({
		appId : '484869228225082', // App ID
		channelUrl : '//www.helpkonnect.com/channel.php', // Channel File
		status : true, // check login status
		cookie : true, // enable cookies to allow the server to access the session
		xfbml : true // parse XFBML
	});

	// Additional init code here
	
};

function getFBLoginStatus() {

	FB.getLoginStatus(function(response) {
		if (response.status === 'connected') {
			// connected
			console.log("connected");
			loginStatus = "connected";

			//now set the current user
			FB.api('/me', function(response) {
				console.log(response);
				
				var userExists = doesUserExist(response);
				
				if(userExists){
					initiateCurrentUser(response);
					setTimeout(function() {
						$.mobile.changePage("#home");
					}, 250);
				}
				else{
					navigateToNewUser(response);
				}

			});

		} else if (response.status === 'not_authorized') {
			// not_authorized
			console.log("not_authorized");
			loginStatus = "not_authorized";
			login();
		} else {
			// not_logged_in
			console.log("not_logged_in");
			loginStatus = "not_logged_in";
			login();
		}
	}, true);

}

function login() {
	FB.login(function(response) {
		if (response.authResponse) {
			// connected
			console.log("connected");

			getFBLoginStatus();

		} else {
			// cancelled
			console.log("cancelled");
		}
	}, {scope: 'email'});
};

function logout() {
	FB.logout(function(response) {
		console.log('User is now logged out');
		
		setTimeout(function() {
			window.location.href = "http://www.helpkonnect.com";
		}, 250);
	});
};

// Load the SDK Asynchronously
( function(d) {
		var js, id = 'facebook-jssdk', ref = d.getElementsByTagName('script')[0];
		if (d.getElementById(id)) {
			return;
		}
		js = d.createElement('script');
		js.id = id;
		js.async = true;
		js.src = "//connect.facebook.net/en_US/all.js";
		ref.parentNode.insertBefore(js, ref);
	}(document));

/*
 function setLoginButton() {
 console.log("setting log in");
 var btn = document.getElementById('LogBtn');
 $('#LogBtn').click(function() {
 login();
 });
 $('#LogBtn .ui-btn-text').text("Log In");
 }

 function setLogoutButton() {
 console.log("setting log out");
 $('#LogBtn').click(function() {
 logout();
 });
 $('#LogBtn .ui-btn-text').text("Log Out");
 }
 */
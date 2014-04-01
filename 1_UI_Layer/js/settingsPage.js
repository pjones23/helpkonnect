/**
 * @author PerronJones
 */

$(document).on('pageshow', '#setting_dialog', function(event, ui) {
	console.log("Settings page loaded!");
	initializeSettingsFields();

});

function navigateToSettings() {

	//initializeSettingsFields();

	$.mobile.changePage("#setting_dialog", {
		role : "dialog",
		allowSamePageTransition : true
	});

}

function initializeSettingsFields() {
	console.log("initializing fields");
	var currentUser = getCurrentUser();

	$('input#firstNameInput').val(currentUser.FirstName);
	$('input#lastNameInput').val(currentUser.LastName);
	$('input#emailInput').val(currentUser.Email);
	$('input#phoneInput').val(currentUser.Phone);

	//set paypal radio button
	if (currentUser.UsePayPal == "1") {
		$('input#yesPayPal').attr("checked", true).checkboxradio("refresh");
		$('input#noPayPal').attr("checked", false).checkboxradio("refresh");
	} else {
		$('input#yesPayPal').attr("checked", false).checkboxradio("refresh");
		$('input#noPayPal').attr("checked", true).checkboxradio("refresh");
	}

	$('input#PayPalEmail').val(currentUser.PayPalEmail);

	//set request alert options
	if (currentUser.EmailAlert == "1") {
		$('input#emailAlertBox').attr("checked", true).checkboxradio("refresh");
	} else {
		$('input#emailAlertBox').attr("checked", false).checkboxradio("refresh");
	}

	if (currentUser.SMSAlert == "1") {
		$('input#smsAlertBox').attr("checked", true).checkboxradio("refresh");
	} else {
		$('input#smsAlertBox').attr("checked", false).checkboxradio("refresh");
	}

	console.log("done initializing fields");

}

function SaveSettingsAndExit() {
	/*
	 * Check for phone numver if using sms
	 * check for email address if using email
	 * check for paypal email if using paypal
	 */
	var currentUser = getCurrentUser();

	console.log("saving");
	var firstName = $('input#firstNameInput').val();
	var lastName = $('input#lastNameInput').val();
	var email = $('input#emailInput').val();
	var phone = $('input#phoneInput').val();
	var usePayPal = $('input#yesPayPal').is(':checked');
	var payPalEmail = $('input#PayPalEmail').val();
	var useEmail = $('input#emailAlertBox').is(':checked');
	var useSMS = $('input#smsAlertBox').is(':checked');

	/*
	 * Check for phone numver if using sms
	 * check for email address if using email
	 * check for paypal email if using paypal
	 */
	var saveUser = true;

	if (usePayPal == true && (payPalEmail == null || payPalEmail.length < 1)) {
		saveUser = false;
		alert("You must enter a PayPal Email Address if you want to use PayPal to receive payments.");
	}

	if (useEmail == true && (email == null || email.length < 1)) {
		saveUser = false;
		alert("You must enter an email address if you want to receive email alerts.");
	}

	if (useSMS == true && (phone == null || phone.length < 1)) {
		saveUser = false;
		alert("You must enter a phone number if you want to receive SMS alerts.");
	}
/*
	console.log(firstName);
	console.log(lastName);
	console.log(email);
	console.log(phone);
	console.log(usePayPal);
	console.log(payPalEmail);
	console.log(useEmail);
	console.log(useSMS);
*/
	if (saveUser == true) {
		//updateUser(currentUser.UserID, currentUser.FirstName, currentUser.LastName, currentUser.Email, currentUser.Phone, currentUser.Latitude, currentUser.Longitude);
		updateUser(currentUser.UserID, null, firstName, lastName, email, phone, currentUser.Latitude, currentUser.Longitude, usePayPal ? 1 : 0, payPalEmail, useEmail ? 1 : 0, useSMS ? 1 : 0);
		console.log("resetting currentUser");
		setTimeout(function() {
			setCurrentUser(currentUser.UserID);
			console.log("exiting");
			alert("Your settings have been saved.");

			//acts as the back button
			$.mobile.back();
		}, 500);

	}
}

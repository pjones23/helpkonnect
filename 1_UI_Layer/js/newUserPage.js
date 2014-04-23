/**
 * @author PerronJones
 */

/*
 * Navigate to the create new user page
 */
function navigateToNewUser(userEmail) {

	$.mobile.changePage("#newUser");

	initializeNewUserFields(userEmail);

}

/*
 $(document).on('pageshow', '#setting_dialog', function(event, ui) {
 console.log("Settings page loaded!");
 initializeSettingsFields();

 });
 */

/*
 * initializes the field to be populated by a new user
 */
function initializeNewUserFields(userEmail) {
	console.log("initializing new user fields");

	$('input#newUser_emailInput').val(userEmail);

	//set paypal radio button

	$('input#newUser_yesPayPal').attr("checked", false).checkboxradio("refresh");
	$('input#newUser_noPayPal').attr("checked", true).checkboxradio("refresh");

	//set request alert options

	$('input#newUser_emailAlertBox').attr("checked", true).checkboxradio("refresh");

	$('input#newUser_smsAlertBox').attr("checked", false).checkboxradio("refresh");

	console.log("done initializing new user fields");

}

/*
 * creates the new user
 * sets the current user
 * navigate to the home page
 */
function createUserAndContinue() {
	/*
	 * Check for phone numver if using sms
	 * check for email address if using email
	 * check for paypal email if using paypal
	 */

	console.log("creating");
	var firstName = $('input#newUser_firstNameInput').val();
	var lastName = $('input#newUser_lastNameInput').val();
	var email = $('input#newUser_emailInput').val();
	var phone = $('input#newUser_phoneInput').val();
	var usePayPal = $('input#newUser_yesPayPal').is(':checked');
	var payPalEmail = $('input#newUser_PayPalEmail').val();
	var useEmail = $('input#newUser_emailAlertBox').is(':checked');
	var useSMS = $('input#newUser_smsAlertBox').is(':checked');
	//var id = $('input#newUser_FBid').val();

	/*
	 * Check for phone numver if using sms
	 * check for email address if using email
	 * check for paypal email if using paypal
	 */
	var saveUser = true;
	if ((email == null || email.length < 1)) {
		saveUser = false;
		alert("An email address is required.");
	}

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

	//console.log(id);
	console.log(firstName);
	console.log(lastName);
	console.log(email);
	console.log(phone);
	console.log(usePayPal);
	console.log(payPalEmail);
	console.log(useEmail);
	console.log(useSMS);

	// create the user and continue to the home page if all the information is valid
	if (saveUser == true) {

		var newUserExists = doesUserExist(email);

		if (newUserExists[0] && newUserExists[1] != null) {
			$('#AccountExistsStatus').attr("style", "color: red;");
		} else {
			$('#AccountExistsStatus').attr("style", "display: none;");
			var newUserID = createUser(null, firstName, lastName, email, phone, usePayPal ? 1 : 0, payPalEmail, useEmail ? 1 : 0, useSMS ? 1 : 0);
			console.log("resetting currentUser");
			setTimeout(function() {
				console.log(newUserID.UserID);
				setCurrentUser(newUserID.UserID);
				console.log("exiting");
				//check if new user has been created, by checking if it has been created in database
				alert("Your profile has been created.");
				$.mobile.changePage("#home");

				//if it has, set as current user and continue

				//if not retry

			}, 500);
		}

	}
}

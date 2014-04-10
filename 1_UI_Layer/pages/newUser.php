<div data-role="header">
	<h1>New User</h1>
</div>

<div data-role="content" style="text-align:center">
	<p>
		Welcome to Help Konnect!
	</p>
	<div data-role="fieldcontain">
		<fieldset data-role="controlgroup">
			<label for="newUser_firstNameInput"> First Name </label>
			<input name="" id="newUser_firstNameInput" placeholder="First Name" value="" type="text">
		</fieldset>
	</div>
	<div data-role="fieldcontain" id="newUser_lastNameInput">
		<fieldset data-role="controlgroup">
			<label for="newUser_lastNameInput"> Last Name </label>
			<input name="" id="newUser_lastNameInput" placeholder="Last Name" value="" type="text">
		</fieldset>
	</div>
	<div data-role="fieldcontain" id="newUser_emailInput">
		<fieldset data-role="controlgroup">
			<label for="newUser_emailInput"> Email </label>
			<input name="" id="newUser_emailInput" placeholder="Email" value="" type="email">
		</fieldset>
	</div>
	<div data-role="fieldcontain" id="newUser_phoneInput">
		<fieldset data-role="controlgroup">
			<label for="newUser_phoneInput"> Phone # </label>
			<input name="newUser_phoneInput" id="newUser_phoneInput" placeholder="Phone #" value="" type="tel">
		</fieldset>
	</div>
	<div id="newUser_PayPalOption" data-role="fieldcontain">
		<fieldset data-role="controlgroup" data-type="horizontal">
			<legend>
				Would you like to use PayPal for receiving payments?
			</legend>
			<input id="newUser_yesPayPal" name="newUser_yesPayPal" value="YES" type="radio">
			<label for="newUser_yesPayPal"> Yes </label>
			<input id="newUser_noPayPal" name="newUser_noPayPal" value="NO" type="radio">
			<label for="newUser_noPayPal"> No </label>
		</fieldset>
	</div>
	<div data-role="fieldcontain" id="newUser_PayPayEmail">
		<fieldset data-role="controlgroup">
			<label for="newUser_PayPalEmail"> PayPal Email (optional) </label>
			<input name="" id="newUser_PayPalEmail" placeholder="PayPal Email (optional)" value="" type="email">
		</fieldset>
	</div>
	<div id="newUser_requestAlertInput" data-role="fieldcontain">
		<fieldset data-role="controlgroup" data-type="vertical">
			<legend>
				How would you prefer to receive service request alerts?
			</legend>
			<input id="newUser_emailAlertBox" name="email" type="checkbox">
			<label for="newUser_emailAlertBox"> Email </label>
			<input id="newUser_smsAlertBox" name="sms" type="checkbox">
			<label for="newUser_smsAlertBox"> SMS/text </label>
		</fieldset>
	</div>
	<p id="AccountExistsStatus" style="display: none;">
		An account with this email already exists.<br />Please enter a different email.
	</p>
	<a id="CreateUserBtn" data-role="button" onclick="createUserAndContinue();"> Create </a>
	<a id="CancelUserBtn" data-role="button" data-rel="back"> Cancel </a>

	<input name="" id="newUser_FBid" placeholder="" value="" type="hidden">

</div>

<div data-role="footer">
	&nbsp;
</div>
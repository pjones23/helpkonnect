<div data-role="header">
	<h1>Settings</h1>
</div>

<div data-role="content" style="text-align:center">
	<div data-role="fieldcontain">
		<fieldset data-role="controlgroup">
			<label for="firstNameInput"> First Name </label>
			<input name="" id="firstNameInput" placeholder="First Name" value="" type="text">
		</fieldset>
	</div>
	<div data-role="fieldcontain" id="lastNameInput">
		<fieldset data-role="controlgroup">
			<label for="lastNameInput"> Last Name </label>
			<input name="" id="lastNameInput" placeholder="Last Name" value="" type="text">
		</fieldset>
	</div>
	<div data-role="fieldcontain" id="emailInput">
		<fieldset data-role="controlgroup">
			<label for="emailInput"> Email </label>
			<input name="" id="emailInput" placeholder="Email" value="" type="email">
		</fieldset>
	</div>
	<div data-role="fieldcontain" id="phoneInput">
		<fieldset data-role="controlgroup">
			<label for="phoneInput"> Phone # </label>
			<input name="" id="phoneInput" placeholder="Phone #" value="" type="tel">
		</fieldset>
	</div>
	<div id="PayPalOption" data-role="fieldcontain">
		<fieldset data-role="controlgroup" data-type="horizontal">
			<legend>
				Would you like to use PayPal for receiving payments?
			</legend>
			<input id="yesPayPal" name="" value="YES" type="radio">
			<label for="yesPayPal"> Yes </label>
			<input id="noPayPal" name="" value="NO" type="radio">
			<label for="noPayPal"> No </label>
		</fieldset>
	</div>
	<div data-role="fieldcontain" id="PayPayEmail">
		<fieldset data-role="controlgroup">
			<label for="PayPalEmail"> PayPal Email (optional) </label>
			<input name="" id="PayPalEmail" placeholder="PayPal Email (optional)" value="" type="email">
		</fieldset>
	</div>
	<div id="requestAlertInput" data-role="fieldcontain">
		<fieldset data-role="controlgroup" data-type="vertical">
			<legend>
				How would you prefer to receive service request alerts?
			</legend>
			<input id="emailAlertBox" name="email" type="checkbox">
			<label for="emailAlertBox"> Email </label>
			<input id="smsAlertBox" name="sms" type="checkbox">
			<label for="smsAlertBox"> SMS/text </label>
		</fieldset>
	</div>
	<a id="SaveSettings" data-role="button" onclick="SaveSettingsAndExit();"> Save </a>
	<a id="CancelSettings" data-role="button" data-rel="back"> Cancel </a>
</div>

<div data-role="footer">
	&nbsp;
</div>
<div data-role="header">
	<h1 id="requestOptionDialogName">Requested Service</h1>
</div>
<div data-role="content">
	<span> <img id="serviceOwnerPic" style="float: left;" /> <h2 id="requestOptionDialogRequestedServiceOwner" style="margin-left: 30%;"> Service Owner Name </h2> </span>
	<p id="requestOptionDialogRequestedServiceDescription">
		Service Description
	</p>
	<p id="requestOptionDialogRequestedServiceCost">
		Cost of Service
	</p>

	<div id="connectedPaidBoxes" data-role="fieldcontain">
		<fieldset data-role="controlgroup" data-type="vertical">
			<legend></legend>
			<input id="connectedBox" type="checkbox">
			<label for="connectedBox"> Connected </label>
			<input id="paidBox" type="checkbox">
			<label for="paidBox"> Paid </label>
		</fieldset>
	</div>

	<div id="PayPalBtnDiv" style="text-align: center;">

	</div>

	<div style="text-align: center;">
		<a id="cancelRequestBtn" data-role="button" data-inline="true" data-transition="slidefade"> Cancel </a>
		<a id="deleteRequestBtn" data-role="button" data-inline="true" data-transition="slidefade"
		data-theme="e"> Delete </a>
	</div>

</div>
<div data-role="footer">
	&nbsp;
</div>
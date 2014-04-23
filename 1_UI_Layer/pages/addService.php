<div data-role="header">
	<h1>Add Service</h1>
</div>
<div data-role="content">
	<div data-role="fieldcontain" id="addDescriptionField">
		<fieldset data-role="controlgroup">
			<label for="addDescriptionField"> Description </label>
			<input name="" id="addDescriptionField" placeholder="Description" value="" type="text">
		</fieldset>
	</div>
	<div data-role="fieldcontain" id="addCostField">
		<fieldset data-role="controlgroup">
			<label for="addCostField"> Cost (currency: USD - do not include the dollar sign, &quot;$&quot;): </label>
			<input name="" id="addCostField" placeholder="Cost (USD - do not include dollar sign, $)" value="" type="text">
		</fieldset>
	</div>
	<div style="text-align: center;">
		<a id="addServiceSaveBtn" data-role="button" data-inline="true" data-theme="b" onclick="addService();"
		> Add </a>
		<a id="addServiceCancelBtn" data-role="button" data-inline="true" onclick="$.mobile.back();"> Cancel </a>
	</div>
</div>
<div data-role="footer">
	&nbsp;
</div>
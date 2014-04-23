<div data-role="header">
	<h1>Edit Service</h1>
</div>
<div data-role="content">
	<div data-role="fieldcontain" id="editDescriptionField">
		<fieldset data-role="controlgroup">
			<label for="editDescriptionField"> Description </label>
			<input name="" id="editDescriptionField" placeholder="Description" value="" type="text">
		</fieldset>
	</div>
	<div data-role="fieldcontain" id="editCostField">
		<fieldset data-role="controlgroup">
			<label for="editCostField"> Cost (currency: USD - do not include the dollar sign, &quot;$&quot;): </label>
			<input name="" id="editCostField" placeholder="Cost (USD - do not include dollar sign, $)" value="" type="text">
		</fieldset>
	</div>
	<br />
	<div>
		<ul id="specificServiceRequestsListView" data-role="listview" data-divider-theme=""
		data-inset="false">

		</ul>
	</div>
	<br />
	<div style="text-align: center;">
		<a id="editServiceSaveBtn" data-role="button" data-theme="b"
		> Save </a>
		<a id="editServiceCancelBtn" data-role="button" data-inline="true" onclick="$.mobile.back();"> Cancel </a>
		<a id="editServiceDeleteBtn" data-role="button" data-inline="true" data-theme="e" > Delete </a>
	</div>
</div>
<div data-role="footer">
	&nbsp;
</div>
<div data-theme="a" data-role="header">
	<a id="LogBtn" data-role="button" data-theme="b" onclick="logout();" data-icon="star" data-iconpos="left"
	class="ui-btn-right">Log Out</a>
	<h3> Help Konnect </h3>
</div>
<div data-role="content">
	<div data-role="content" style="text-align:center">
		<a data-rel="dialog" href="#setting_dialog" data-role="button" data-icon="gear" data-inline="true" >Settings</a>
		<br />
		<a onclick="obtainLocation();" data-role="button" data-icon="check" data-inline="true" >Check In</a>
	</div>
</div>

<div data-theme="a" data-role="footer" data-position="fixed">
	<div data-role="navbar" data-iconpos="top">
		<ul>
			<li>
				<a onclick="navigateToSearchPage();" data-transition="slidefade" data-theme="" data-icon=""> Search for Service </a>
			</li>
			<li>
				<a onclick="navigateToServicesOfferedPage();" data-transition="slidefade" data-theme="" data-icon=""> My Offered Services </a>
			</li>
			<li>
				<a onclick="navigateToRequestsPage();" data-transition="slidefade"  data-theme="" data-icon=""> My Requested Services </a>
			</li>
		</ul>
	</div>
</div>
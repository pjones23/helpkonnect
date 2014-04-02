<div data-role="panel" id="homeNavPanel" data-position="right" data-display="reveal" >
	<!-- panel content goes here -->
		<ul>
			<li>
				<a onclick="navigateToServicesOfferedPage();" data-transition="slidefade" data-theme="" data-icon=""> My Offered Services </a>
			</li>
			<li>
				<a onclick="navigateToRequestsPage();" data-transition="slidefade"  data-theme="" data-icon=""> My Requested Services </a>
			</li>
            <li>
				<a data-rel="dialog" href="#setting_dialog" data-transition="slidefade" data-theme="" data-icon=""> Account Settings </a>
			</li>
            <li>
				<a onclick="logout();" data-transition="slidefade"  data-theme="" data-icon=""> Log Out </a>
			</li>
		</ul>
</div>

<div data-theme="a" data-role="header">
	<a id="LogBtn" data-role="button" data-theme="b" onclick="operatePanel();" data-icon="bars" data-iconpos="notext"
	class="ui-btn-right"></a>
	<h3> Help Konnect </h3>
</div>

<?php
	include 'search.php';
?>

<div data-role="content" style="text-align:center">
	<a onclick="obtainLocation();updateUserLocationOnMap();" data-role="button" data-icon="check" data-inline="true" >Check In</a>
</div>


<div data-theme="a" data-role="footer" data-position="fixed">

</div>
<div data-theme="a" data-role="header">
	<a data-rel="back" data-icon='back' data-transition="slide" data-iconpos="notext" class="ui-btn-left"></a>
	<a data-role="button" data-inline="true" href="#home" data-icon="home" data-theme="c" 
	data-iconpos="left"> Home </a>
	<h3> Help Konnect </h3>
</div>

<div id="searchPageContent" data-role="content">
	<div data-role="fieldcontain">
		<fieldset data-role="controlgroup">
			<label for="searchInput"> </label>
			<input name="" id="searchInput" placeholder="" value="" type="search">
		</fieldset>

		<a onclick="createMarkers();" data-role="button">Location</a>
	</div>
	<div id="map-canvas"></div>

	<div data-role="dialog" id="userServicesDialog" data-theme="a" >
		<a href="#" data-rel="back" data-role="button" data-theme="a" data-icon="delete" data-iconpos="notext" class="ui-btn-right">Close</a>

		<ul data-role="listview" data-inset="true" style="min-width:210px;" data-theme="b" >
			<li data-role="divider" data-theme="a">
				Popup API
			</li>
			<li data-corners="false" data-shadow="false" data-iconshadow="true" data-wrapperels="div" data-icon="arrow-r" data-iconpos="right" data-theme="b" class="ui-btn ui-btn-icon-right ui-li-has-arrow ui-li ui-btn-up-b">
				<div class="ui-btn-inner ui-li">
					<div class="ui-btn-text">
						<a href="options.html" class="ui-link-inherit">Options</a>
					</div><span class="ui-icon ui-icon-arrow-r ui-icon-shadow">&nbsp;</span>
				</div>
			</li>
			<li data-corners="false" data-shadow="false" data-iconshadow="true" data-wrapperels="div" data-icon="arrow-r" data-iconpos="right" data-theme="b" class="ui-btn ui-btn-icon-right ui-li-has-arrow ui-li ui-btn-up-b">
				<div class="ui-btn-inner ui-li">
					<div class="ui-btn-text">
						<a href="methods.html" class="ui-link-inherit">Methods</a>
					</div><span class="ui-icon ui-icon-arrow-r ui-icon-shadow">&nbsp;</span>
				</div>
			</li>
			<li data-corners="false" data-shadow="false" data-iconshadow="true" data-wrapperels="div" data-icon="arrow-r" data-iconpos="right" data-theme="b" class="ui-btn ui-btn-up-b ui-btn-icon-right ui-li-has-arrow ui-li ui-corner-bottom ui-li-last">
				<div class="ui-btn-inner ui-li">
					<div class="ui-btn-text">
						<a href="events.html" class="ui-link-inherit">Events</a>
					</div><span class="ui-icon ui-icon-arrow-r ui-icon-shadow">&nbsp;</span>
				</div>
			</li>
		</ul>
	</div>

</div>

<div data-theme="a" data-role="footer" data-position="fixed">
	&nbsp;
</div>


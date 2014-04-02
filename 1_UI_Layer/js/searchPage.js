/**
 * @author PerronJones
 */

var map;
var markers = [];
var services = [];

function initialize() {
	console.log("Initializing Google map");
	var mapOptions = {
		//set the default center location to Tech Tower
		center : new google.maps.LatLng(33.772457, -84.394699),
		zoom : 16,
		mapTypeId : google.maps.MapTypeId.ROADMAP
	};
	var mapCanvas = document.getElementById("map-canvas");
	var mapCanvasParent = mapCanvas.parentNode;
	//mapCanvas.style.width = mapCanvasParent.style.width;
	mapCanvas.style.width = "100%";
	var newHeight = screen.availHeight * 0.5;
	mapCanvas.style.height = newHeight + "px";
	map = new google.maps.Map(mapCanvas, mapOptions);
    updateUserLocationOnMap();
}

function updateUserLocationOnMap() {

	//clear existing markers
	clearMarkers();

	var currentUser = getCurrentUser();
	var currentUserPosition;
	if (currentUser != null) {
		currentUserPosition = [currentUser.Latitude, currentUser.Longitude];
	} else {
		//set the location to Tech Tower
		currentUserPosition = [33.772457, -84.394699];
	}

	var newPosition = new google.maps.LatLng(currentUserPosition[0], currentUserPosition[1]);
	/*
	 var infowindow = new google.maps.InfoWindow({
	 map: map,
	 position: newPosition,
	 content: 'You are here.'
	 });
	 */
	var marker = new google.maps.Marker({
		position : newPosition,
		map : map,
		animation : google.maps.Animation.BOUNCE, //or DROP
		title : 'You are here.'
	});

	markers.push(marker);

	setMarkers();

	map.setCenter(newPosition);
	map.setZoom(16);

}

function clearMarkers() {
	//clear existing markers
	console.log("clearing");
	if (markers != null && markers.length > 0) {
		for (var i = 0; i < markers.length; i++) {
			console.log(markers[i]);
			markers[i].setMap(null);
		};
	}
	markers = [];
}

function setMarkers() {
	//set existing markers
	console.log("setting");
	if (markers != null && markers.length > 0) {
		for (var i = 0; i < markers.length; i++) {
			console.log(markers[i]);
			markers[i].setMap(map);
		};
	}
}

function navigateToSearchPage() {
	markers = [];
	removeMapDiv();

	createMapDiv();

	var user = getCurrentUser();
	console.log("changeToSearchPage");
	console.log(user);
	$.mobile.changePage("#search");

}


$(document).on('pageshow', '#search', function(event, ui) {
	console.log("Search page loaded!");
	if (map == null) {
		initialize();
	}

});

function createMapDiv() {
	$('#searchPageContent').append('<div id="map-canvas"></div>');
}

function removeMapDiv() {
	map = null;
	$('#map-canvas').remove();
}

//creates markers for services.
//The title of the markers will be in the following format: <service id>-<service owner id>-<service requester id>
function createMarkers() {
	clearMarkers();
    
    updateUserLocationOnMap();
    
	services = [];

	var currentUser = getCurrentUser();

	var searchInput = $('#searchInput').val();
	console.log(searchInput);
	services = readAllServicesByDescription(searchInput);
	var users = [];

	if (services != null && services.length > 0) {
		//create a marker for each user by creating a list of unique users,
		//then creating a marker for each unique user

		console.log(users);

		for (var i = 0; i < services.length; i++) {
			console.log(services[i].Description);
			//get user from database in order to get the location
			var owner = readUser(services[i].UserID);
			var servicePosition = new google.maps.LatLng(owner.Latitude, owner.Longitude);

			//create a marker and push it on to the markers array
			var marker = new google.maps.Marker({
				position : servicePosition,
				map : map,
				animation : google.maps.Animation.DROP,
				//title : services[i].ServiceID + "-" + owner.UserID + "-" + currentUser.UserID
				title : owner.UserID
			});

			google.maps.event.addListener(marker, 'click', function() {
				createServiceChoiceDialog(this.title);
			});

			markers.push(marker);
		};

		//set the markers on the map
		//setMarkers();
	} else {
		console.log("no search results");
	}
}

function createServiceChoiceDialog(chosenMarker) {

	console.log(chosenMarker);
	var chosenMarkerUserID = chosenMarker;
	var chosenMarkerUser = readUser(chosenMarkerUserID);
	var chosenMarkerName = chosenMarkerUser.FirstName + " " + chosenMarkerUser.LastName;

	//set name on dialog
	$('#servicesChoiceDialogName').text(chosenMarkerName);

	$.mobile.changePage("#page-dialog", {
		role : "dialog",
		allowSamePageTransition : true
	});

	var currentUser = getCurrentUser();

	var filteredServices = [];

	$('#servicesListView').empty();
	if (services != null && services.length > 0) {
		for (var i = 0; i < services.length; i++) {

			if (chosenMarkerUserID == services[i].UserID) {
				filteredServices.push(services[i]);
				//$('#servicesListView').append('<li><a onclick="createServicePageWindow('+services[i]+', '+ currentUser +')">' +services[i].Description+ '</a></li>');
				$('#servicesListView').append('<li><a onclick="createServicePageWindow(' + services[i].ServiceID + ', ' + currentUser.UserID + ', &quot;' + chosenMarkerName + '&quot;)">' + services[i].Description + '</a></li>');

			}
		}
	}
	$('#servicesListView').listview('refresh');

	//$('#servicesListView').empty().append('<li><a data-rel="dialog" href="#page-subdialog">Test</a></li><li><a data-rel="dialog" href="#page-subdialog">Test2</a></li>').listview('refresh');

}

function createServicePageWindow(serviceID, userID, userName) {
	console.log("inside createServicePageWindow");
	console.log(serviceID);
	console.log(userID);

	var requestingUserID = userID;
	var selectedService;

	for (var i = 0; i < services.length; i++) {

		if (serviceID == services[i].ServiceID) {
			selectedService = services[i];
		}
	}

	//modify services dialog
	modifyServiceDialog(selectedService, userName);

	//modify the request button's onclick funtionality
	$('#serviceRequestBtn').click(function() {
		createServiceRequest(selectedService.ServiceID, selectedService.UserID, requestingUserID);
		return false;
	});

	$.mobile.changePage("#page-subdialog", {
		role : "dialog",
		allowSamePageTransition : true
	});

}

function modifyServiceDialog(service, serviceOwnerName) {
	console.log("inside modifyServiceDialog");
	var description = service.Description;
	var cost = service.Cost;

	$('#servicesChoiceSubDialogName').text(serviceOwnerName);
	$('#SubDialogServiceDescription').text(description);
	$('#SubDialogServiceCost').text("Cost of Service: $" + cost);
}

function createServiceRequest(serviceID, serviceOwnerID, serviceRequesterID) {
	console.log("inside createServiceRequest");
	console.log("service:" + serviceID);
	console.log("owner: " + serviceOwnerID);
	console.log("requester: " + serviceRequesterID);
	
	var serviceOwner = readUser(serviceOwnerID);
	var serviceRequester = readUser(serviceRequesterID);
	var service = readService(serviceID);

	createServiceStatus(serviceID, serviceOwnerID, serviceRequesterID);

	//send SMS or email of requesting status
	var subject = "HelpKonnect Message: " + serviceRequester.FirstName + " " + serviceRequester.LastName + " has requested your help."
	var message = serviceRequester.FirstName + " " + serviceRequester.LastName + " has requested your service: \n\"" + service.Description + "\"\nPlease log into HelpKonnect to review this request.";
	alertUser(serviceOwner.Email, serviceOwner.Phone, serviceOwner.EmailAlert, serviceOwner.SMSAlert, subject, message);

	//go back
	$.mobile.back();

}

//SMS message
/*
 * String messageHeading = "**HelpConnect Message**\n";
 * String message = messageHeading + sendingUser.getFirstName() + " " + sendingUser.getLastName() +
 * " has requested your service: \n\"" + service.getDescription() + "\"\nPlease log into HelpConnect
 * to review this request.";
 */


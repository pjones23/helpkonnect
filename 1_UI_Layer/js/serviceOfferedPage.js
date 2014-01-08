/**
 * @author PerronJones
 */

/**
 * @author PerronJones
 */

function navigateToServicesOfferedPage() {

	console.log("changeToServicesOfferedPage");

	$.mobile.changePage("#servicesOffered");

}

function addService() {
	var currentUser = getCurrentUser();
	console.log("Adding Service");

	var description = $('input#addDescriptionField').val();
	var cost = $('input#addCostField').val();

	console.log(description);
	console.log(cost);

	createService(currentUser.UserID, description, cost);
	setTimeout(function() {
		alert("Service has been created.");
		$.mobile.back();
	}, 500);

}


$('#servicesOffered').live('pageshow', function(event, ui) {
	console.log("services offered page loaded!");
	populateServicesOfferedList();
});

function populateServicesOfferedList() {

	var currentUser = getCurrentUser();

	var services = readAllServicesByUser(currentUser.UserID);

	$('#offeredServicesListView').empty();
	if (services != null && services.length > 0) {
		for (var i = 0; i < services.length; i++) {
			//$('#requestedServicesListView').append('<li><a onclick="createServicePageWindow(' + services[i].ServiceID + ', ' + currentUser.UserID + ', &quot;' + chosenMarkerName + '&quot;)">' + services[i].Description + '</a></li>');
			$('#offeredServicesListView').append('<li><a onclick="populateEditServicesDialog(' + services[i].ServiceID + ', ' + currentUser.UserID + ', &quot;' + services[i].Description + '&quot;, &quot;' + services[i].Cost + '&quot;)">' + services[i].Description + '</a></li>');

		}
	}
	$('#offeredServicesListView').listview('refresh');

}

function populateEditServicesDialog(serviceID, serviceOwnerID, description, cost) {

	console.log("initializing fields");

	console.log(serviceID);
	console.log(serviceOwnerID);
	$('input#editDescriptionField').val(description);
	$('input#editCostField').val(cost);

	//set click function for save and delete buttons
	$('#editServiceSaveBtn').unbind('click');
	$('#editServiceDeleteBtn').unbind('click');

	$('#editServiceSaveBtn').click(function() {
		console.log("Saving Service");
		var editedDescription = $('input#editDescriptionField').val();
		var editedCost = $('input#editCostField').val();

		updateService(serviceID, serviceOwnerID, editedDescription, editedCost);
		setTimeout(function() {
			alert("Service has been saved.");
			//acts as the back button
			$.mobile.back();
		}, 500);

	});

	$('#editServiceDeleteBtn').click(function() {
		console.log("executing delete");
		deleteService(serviceID);
		setTimeout(function() {
			alert("Service has been removed");
			//acts as the back button
			$.mobile.back();
		}, 500);

	});

	//change to dialog
	$.mobile.changePage("#editServiceDialog", {
		role : "dialog",
		allowSamePageTransition : true
	});

	populateSpecificServiceRequestsList(serviceID);

}

function populateSpecificServiceRequestsList(serviceID) {
	console.log("inside populateSpecificServiceRequestsList");

	var serviceRequests = readAllServiceStatusesByService(serviceID);

	$('#specificServiceRequestsListView').empty();
	if (serviceRequests != null && serviceRequests.length > 0) {
		for (var i = 0; i < serviceRequests.length; i++) {
			var serviceRequester = readUser(serviceRequests[i].RequesterUserID);
			var serviceRequesterName = serviceRequester.FirstName + " " + serviceRequester.LastName;

			var connected = serviceRequests[i].IsConnected;
			var paid = serviceRequests[i].IsPaid;

			var listItemString = "";
			var onclickParameterString = "";

			if (connected == "1") {
				if (paid == "1") {
					listItemString = serviceRequesterName + " has paid this service.";

				} else {
					listItemString = "You approved the request by " + serviceRequesterName;
					onclickParameterString = "onclick=\"createSpecificRequestAuthorizationDialog(" + serviceRequests[i].ServiceStatusID + ", " + serviceID + ", '" + listItemString + "', 'pay');\"";

				}
			} else {
				listItemString = serviceRequesterName + " has requested this service.";
				onclickParameterString = "onclick=\"createSpecificRequestAuthorizationDialog(" + serviceRequests[i].ServiceStatusID + ", " + serviceID + ", '" + listItemString + "', 'approve');\"";

			}

			//$('#requestedServicesListView').append('<li><a onclick="createServicePageWindow(' + services[i].ServiceID + ', ' + currentUser.UserID + ', &quot;' + chosenMarkerName + '&quot;)">' + services[i].Description + '</a></li>');
			$('#specificServiceRequestsListView').append('<li><a ' + onclickParameterString + ' >' + listItemString + '</a></li>');

		}
	} else {
		$('#specificServiceRequestsListView').append('<li><p>No requests for the service.</p></li>');
	}
	$('#specificServiceRequestsListView').listview('refresh');

}

function createSpecificRequestAuthorizationDialog(serviceStatusID, serviceID, listItemString, option) {

	console.log("inside createSpecificRequestAuthorizationDialog");
	console.log(serviceStatusID);
	console.log(option);

	$('#authorizeRequestYesBtn').unbind('click');
	$('#authorizeRequestNoBtn').unbind('click');

	$('#requestDescription').text(listItemString);

	if (option == "approve") {
		$('#authorizeRequestDialogQuestion').text("Would you like to approve this request and offer your help?");

		$('#authorizeRequestYesBtn').click(function() {
			updateServiceStatus(serviceStatusID, 1, 0);
			console.log("Accepting Request");
			setTimeout(function() {
				alert("Request has been approved.");

				var serviceStatus = readServiceStatus(serviceStatusID);
				var serviceOwner = readUser(serviceStatus.ServiceOwnerID);
				var serviceRequester = readUser(serviceStatus.RequesterUserID);
				var service = readService(serviceID);

				var ownerContactInfoString = "";
				if (serviceOwner.EmailAlert == "1") {

					ownerContactInfoString = "Email: " + serviceOwner.Email
					if (serviceOwner.SMSAlert == "1") {
						ownerContactInfoString = "Email: " + serviceOwner.Email + "\nPhone: " + serviceOwner.Phone;
					}
				} else {
					if (serviceOwner.SMSAlert == "1") {
						ownerContactInfoString = "Phone: " + serviceOwner.Phone;
					}
					else{
						ownerContactInfoString = "User has not provided contact information or has chosen to not receive alerts through email and phone."
					}
				}
				
				var requesterContactInfoString = "";
				if (serviceRequester.EmailAlert == "1") {

					requesterContactInfoString = "Email: " + serviceRequester.Email
					if (serviceRequester.SMSAlert == "1") {
						requesterContactInfoString = "Email: " + serviceRequester.Email + "\nPhone: " + serviceRequester.Phone;
					}
				} else {
					if (serviceRequester.SMSAlert == "1") {
						requesterContactInfoString = "Phone: " + serviceRequester.Phone;
					}
					else{
						requesterContactInfoString = "User has not provided contact information or has chosen to not receive alerts through email and phone."
					}
				}

				//send SMS or email of approval status to requester
				var subject = "HelpKonnect Message: " + serviceOwner.FirstName + " " + serviceOwner.LastName + " has approved your request."
				var message = serviceOwner.FirstName + " " + serviceOwner.LastName + " has approved your request for the following service:\n\"" + service.Description + "\"\nPlease log into HelpKonnect to review this approval.\n"
				 + "Here is the contact information for " + serviceOwner.FirstName + " " + serviceOwner.LastName + ":\n" + ownerContactInfoString +"\nUse this information to arrange a meeting and payment options.";
				alertUser(serviceRequester.Email, serviceRequester.Phone, serviceRequester.EmailAlert, serviceRequester.SMSAlert, subject, message);

				//send SMS or email of other user details to owner
				var subject = "HelpKonnect Message: You have approved the request from " + serviceRequester.FirstName + " " + serviceRequester.LastName + "."
				var message = "You have approved the request from " + serviceRequester.FirstName + " " + serviceRequester.LastName + " for your service:\n\"" + service.Description + "\"\nPlease log into HelpKonnect to review this approval.\n"
				+  "Here is the contact information for " + serviceRequester.FirstName + " " + serviceRequester.LastName + ":\n" + requesterContactInfoString +"\nUse this information to arrange a meeting and payment options.";
				alertUser(serviceOwner.Email, serviceOwner.Phone, serviceOwner.EmailAlert, serviceOwner.SMSAlert, subject, message);

				//acts as the back button
				$.mobile.back();

				populateSpecificServiceRequestsList(serviceID);

			}, 500);
		});

		$('#authorizeRequestNoBtn').click(function() {
			console.log("Rejecting Request");

			//delete request
			deleteServiceStatus(serviceStatusID);
			setTimeout(function() {
				alert("Request has been rejected and removed.");
				//acts as the back button
				$.mobile.back();

				populateSpecificServiceRequestsList(serviceID);

			}, 500);

		});

	} else if (option == "pay") {
		$('#authorizeRequestDialogQuestion').text("Has the user paid for the service?");

		$('#authorizeRequestYesBtn').click(function() {
			console.log("Marking as paid");
			updateServiceStatus(serviceStatusID, 1, 1);
			setTimeout(function() {
				alert("Service has been marked as paid.");
				//acts as the back button
				$.mobile.back();

				populateSpecificServiceRequestsList(serviceID);
			}, 500);
		});

		$('#authorizeRequestNoBtn').click(function() {
			$.mobile.back();

		});

	} else {
		$.mobile.back();
	}

	$.mobile.changePage("#authorizeRequestDialog", {
		role : "dialog",
		allowSamePageTransition : true
	});

}


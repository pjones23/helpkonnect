/**
 * @author PerronJones
 */

function navigateToRequestsPage() {

	console.log("changeToRequestsPage");

	$.mobile.changePage("#serviceRequests");

}


$('#serviceRequests').live('pageshow', function(event, ui) {
	console.log("requests page loaded!");
	populateServiceRequestList();
});

function populateServiceRequestList() {

	var currentUser = getCurrentUser();

	var serviceRequests = readAllServiceStatusesByServiceRequester(currentUser.UserID);

	$('#requestedServicesListView').empty();
	if (serviceRequests != null && serviceRequests.length > 0) {
		for (var i = 0; i < serviceRequests.length; i++) {
			var serviceOwner = readUser(serviceRequests[i].ServiceOwnerID);
			var service = readService(serviceRequests[i].ServiceID);
			var serviceOwnerName = serviceOwner.FirstName + " " + serviceOwner.LastName;

			var listItemDescription = serviceOwnerName + ": " + service.Description;
			//$('#requestedServicesListView').append('<li><a onclick="createServicePageWindow(' + services[i].ServiceID + ', ' + currentUser.UserID + ', &quot;' + chosenMarkerName + '&quot;)">' + services[i].Description + '</a></li>');
			$('#requestedServicesListView').append('<li><a onclick="createRequestedServicePreviewDialog(' + serviceRequests[i].ServiceStatusID + ', ' + serviceOwner.UserID + ', &quot;' + service.Description + '&quot;, ' + service.ServiceID + ', ' + service.Cost + ');">' + listItemDescription + '</a></li>');

		}
	}
	$('#requestedServicesListView').listview('refresh');

}

function createRequestedServicePreviewDialog(serviceStatusID, serviceOwnerID, serviceDescription, serviceID, serviceCost) {

	console.log("inside createRequestedServicePreviewDialog");
	console.log(serviceStatusID);
	console.log(serviceOwnerID);
	console.log(serviceDescription);
	console.log(serviceID);

	var serviceStatus = readServiceStatus(serviceStatusID);
	var serviceOwner = readUser(serviceOwnerID);

	//profile pic (put this in img src)
	var imgSrc = "https://graph.facebook.com/" + serviceOwnerID + "/picture";
	$('#serviceOwnerPic').attr("src", imgSrc);
	//https://graph.facebook.com/1114080786/picture

	$('#requestOptionDialogRequestedServiceOwner').text(serviceOwner.FirstName + " " + serviceOwner.LastName);
	$('#requestOptionDialogRequestedServiceCost').text("$" + serviceCost.toFixed(2));

	$('#cancelRequestBtn').unbind('click');
	$('#authorizeRequestNoBtn').unbind('click');

	$('#cancelRequestBtn').click(function() {
		//acts as the back button
		$.mobile.back();
	});

	$('#deleteRequestBtn').click(function() {
		console.log("executing delete");
		deleteServiceStatus(serviceStatusID);
		setTimeout(function() {
			alert("Request has been removed");
			//acts as the back button
			$.mobile.back();
		}, 500);

	});

	//set name on dialog
	$('#requestOptionDialogRequestedServiceDescription').text(serviceDescription);

	$.mobile.changePage("#request-Option-dialog", {
		role : "dialog",
		allowSamePageTransition : true
	});

	//create paypal button
	var paypalDiv = document.getElementById('PayPalBtnDiv');
	paypalDiv.innerHTML = "";

	//check if users are connected
	if (serviceStatus.IsConnected == "0") {
		//set message to connect be pay
		$('#PayPalBtnDiv').append("<p>The user must approve your request before you have the option to pay for the service.<br />(i.e. You have to be &quot;connected&quot; (refer to &quot;Connected&quot; checkbox above))<p/>");
	} else {
		//now check if service has been paid for
		if (serviceStatus.IsPaid == "1") {
			$('#PayPalBtnDiv').append("<p>Thank you for your payment!<p/>");
		} else {
			//If not paid, check if user allows payment through payPal
			if (serviceOwner.UsePayPal == "0") {
				$('#PayPalBtnDiv').append("<p>This individual does not offer payment through PayPal.<br />You must pay with cash. <p/>");
			} else {
				var service = readService(serviceID);

				//If user does allow payment, append the button
				$('#PayPalBtnDiv').append("<p>Pay with PayPal by clicking the &quot;buy now&quot; button OR you can pay with cash.<p/>");
				/*
				 var payPalData ={
				 data_name : "HelpKonnect service: " + serviceDescription,
				 data-amount : service.Cost,
				 data-currency: "USD",
				 data-quantity : "1",
				 data-shipping : "0.00",
				 data-tax : "0.00",
				 data-size : "large"
				 };
				 console.log(payPalData);
				 PAYPAL.apps.ButtonFactory.create(serviceOwner.PayPalEmail, payPalData, "buynow", paypalDiv);
				 */

				var strCode = "the javascript code I want to insert";
				var payPalScript = document.createElement('script');
				payPalScript.type = 'text/javascript';
				//payPalScript.src = "/Utilities/paypal-button.min.js?merchant=" + serviceOwner.PayPalEmail;
				payPalScript.src = "/Utilities/sandbox-paypal-button.min.js?merchant=" + serviceOwner.PayPalEmail;
				payPalScript.setAttribute("data-button", "buynow");
				payPalScript.setAttribute("data_name", "HelpKonnect service: " + serviceDescription);
				payPalScript.setAttribute("data-amount", service.Cost);
				payPalScript.setAttribute("data-currency", "USD");
				payPalScript.setAttribute("data-quantity", "1");
				payPalScript.setAttribute("data-shipping", "0.00");
				payPalScript.setAttribute("data-tax", "0.00");
				payPalScript.setAttribute("data-size", "large");
				payPalScript.setAttribute("data-callback", "http://www.helpkonnect.com/Utilities/paypal-IPN.php");
				var scriptPos = document.getElementById('PayPalBtnDiv');
				scriptPos.appendChild(payPalScript);

			}
		}
	}

	//format connected and paid check boxes
	$("input#connectedBox").checkboxradio('disable').checkboxradio("refresh");
	;
	$("input#paidBox").checkboxradio('disable').checkboxradio("refresh");
	;

	if (serviceStatus.IsConnected == "1") {
		$('input#connectedBox').attr("checked", true).checkboxradio("refresh");
	} else {
		$('input#connectedBox').attr("checked", false).checkboxradio("refresh");
	}

	if (serviceStatus.IsPaid == "1") {
		$('input#paidBox').attr("checked", true).checkboxradio("refresh");
	} else {
		$('input#paidBox').attr("checked", false).checkboxradio("refresh");
	}

	//$('#servicesListView').empty().append('<li><a data-rel="dialog" href="#page-subdialog">Test</a></li><li><a data-rel="dialog" href="#page-subdialog">Test2</a></li>').listview('refresh');

}


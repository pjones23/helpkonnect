/**
 * @author PerronJones
 */

var currentUser;


function setCurrentUser(userID){
	
	//check if user exist. if the user does not exist, then create the user. 
	//necessary fields needed for creation (firstName, lastName, email, phone, latitude, longitude)
	//If the user does exist, then set the current user.
	//Also, update the position.
	
	var user = readUser(userID);
	//var user = readUser(1232);
	
	if(user != null){
		console.log("user exists");
		console.log(user);
		
		//update position
		currentUser = user;
		//obtainLocation(); //The position is updated automatically when this method is called.
		obtainLocationFromInitialization();
	}
	else{
		console.log("user does NOT exist");
		console.log(user);
	}
	
}

function getCurrentUser()
{
	return currentUser;
}

function obtainLocation() {
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(locationSuccess, locationError);
	} else {
		alert("Geolocation is not supported by this browser.");
	}
}

function locationSuccess(location) {
	console.log("location: " + location);
	
	currentUser.Latitude=location.coords.latitude;
	currentUser.Longitude=location.coords.longitude;
	
	updateUser(currentUser.UserID, currentUser.FirstName, currentUser.LastName, currentUser.Email, currentUser.Phone, location.coords.latitude, location.coords.longitude, currentUser.UsePayPal, currentUser.PayPalEmail, currentUser.EmailAlert, currentUser.SMSAlert);
	alert("Your location has been updated successfully!");
}

function locationError(error) {
	switch(error.code) {
		case error.PERMISSION_DENIED:
			alert("User denied the request for Geolocation.");
			break;
		case error.POSITION_UNAVAILABLE:
			alert("Location information is unavailable.");
			break;
		case error.TIMEOUT:
			alert("The request to get user location timed out.");
			break;
		case error.UNKNOWN_ERROR:
			alert("An unknown error occurred.");
			break;
	}
	
	alert("Your location update has failed! Please try again.");
}

function obtainLocationFromInitialization() {
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(locationSuccessFromInitialization, locationError);
	} else {
		alert("Geolocation is not supported by this browser.");
	}
}

function locationSuccessFromInitialization(location) {
	console.log("location: " + location);
	
	currentUser.Latitude=location.coords.latitude;
	currentUser.Longitude=location.coords.longitude;
	
	updateUser(currentUser.UserID, currentUser.FirstName, currentUser.LastName, currentUser.Email, currentUser.Phone, location.coords.latitude, location.coords.longitude, currentUser.UsePayPal, currentUser.PayPalEmail, currentUser.EmailAlert, currentUser.SMSAlert);
	//no alert
}

/*
 * ----------------------------------------------------------------------------------------------------
 * ----------------------------------------------------------------------------------------------------
 * ----------------------------------------------------------------------------------------------------
 */

function createUser(id, firstName, lastName, email, phone, usePayPal, payPalEmail, emailAlert, SMSAlert) {
	//re visit and finish when working on front end
	var user = new User(id, firstName, lastName, email, phone, null, null, usePayPal, payPalEmail, emailAlert, SMSAlert);
	user.create();
}

function readUser(userID) {
	//re visit and finish when working on front end
	var user = new User(userID, null, null, null, null, null, null);
	var promise = user.read();
	
	//reset user
	user = null;
	
	promise.success(function(data) {
		console.log("attempt: " + data.success)
		user = data;
	});

	console.log(user);
	return user;
}

function readAllUsers() {
	//re visit and finish when working on front end
	var users = new User(null, null, null, null, null, null, null);
	var promise = users.readAll();

	//reset users
	users = null;
	
	promise.success(function(data) {
		users = data;
	});

	console.log(users);
	return users;
}

function updateUser(userID, firstName, lastName, email, phone, latitude, longitude, usePayPal, payPalEmail, emailAlert, SMSAlert) {
	//re visit and finish when working on front end
	var user = new User(userID, firstName, lastName, email, phone, latitude, longitude, usePayPal, payPalEmail, emailAlert, SMSAlert);
	user.update();
}

function deleteUser(userID) {
	//re visit and finish when working on front end
	var user = new User(userID, null, null, null, null, null, null);
	user.deleteUser();
}

/*
 * ----------------------------------------------------------------------------------------------------
 * ----------------------------------------------------------------------------------------------------
 * ----------------------------------------------------------------------------------------------------
 */

function User(userID, firstName, lastName, email, phone, latitude, longitude, usePayPal, payPalEmail, emailAlert, SMSAlert) {
	this.userID = userID;
	this.firstName = firstName;
	this.lastName = lastName;
	this.email = email;
	this.phone = phone;
	this.latitude = latitude;
	this.longitude = longitude;
	this.usePayPal = usePayPal;
	this.payPalEmail = payPalEmail;
	this.emailAlert = emailAlert;
	this.SMSAlert = SMSAlert;

	this.create = function() {
		return $.ajax({
			url : "user",
			data : {
				'UserID' : this.userID,
				'FirstName' : this.firstName,
				'LastName' : this.lastName,
				'Email' : this.email,
				'Phone' : this.phone,
				'Latitude' : this.latitude,
				'Longitude' : this.longitude,
				'UsePayPal' : this.usePayPal,
				'PayPalEmail' : this.payPalEmail,
				'EmailAlert' : this.emailAlert,
				'SMSAlert' : this.SMSAlert

			},
			context : document.body,
			async : false,
			type : 'POST',
			dataType : "json",
			success : function(data) {
				console.log("Data Success");
				console.log(data);
			},
			error : function(jqXHR, textStatus, errorThrown) {
				console.log("Status: " + textStatus);
				console.log("Error: " + errorThrown);
			}
		});
	}

	this.read = function() {
		return $.ajax({
			url : "user/" + this.userID,
			context : document.body,
			async : false,
			dataType : "json",
			success : function(data) {
				console.log("Data Success");
				console.log(data);
			},
			error : function(jqXHR, textStatus, errorThrown) {
				console.log("Status: " + textStatus);
				console.log("Error: " + errorThrown);
			}
		});
	}

	this.readAll = function() {
		return $.ajax({
			url : "user",
			context : document.body,
			async : false,
			dataType : "json",
			success : function(data) {
				console.log("Data Success");
				console.log(data);
			},
			error : function(jqXHR, textStatus, errorThrown) {
				console.log("Status: " + textStatus);
				console.log("Error: " + errorThrown);
			}
		});
	}

	this.update = function() {
		return $.ajax({
			url : "user/" + this.userID,
			context : document.body,
			async : false,
			headers : {
				'X-HTTP-Method-Override' : 'PUT'
			},
			type : 'POST',
			data : {
				'UserID' : this.userID,
				'FirstName' : this.firstName,
				'LastName' : this.lastName,
				'Email' : this.email,
				'Phone' : this.phone,
				'Latitude' : this.latitude,
				'Longitude' : this.longitude,
				'UsePayPal' : this.usePayPal,
				'PayPalEmail' : this.payPalEmail,
				'EmailAlert' : this.emailAlert,
				'SMSAlert' : this.SMSAlert
			},
			dataType : "json",
			success : function(data) {
				console.log("Data Success");
				console.log(data);
			},
			error : function(jqXHR, textStatus, errorThrown) {
				console.log("Status: " + textStatus);
				console.log("Error: " + errorThrown);
			}
		});
	}

	this.deleteUser = function() {
		return $.ajax({
			url : "user/" + this.userID,
			context : document.body,
			async : false,
			type : 'DELETE',
			dataType : "json",
			success : function(data) {
				console.log("Data Success");
				console.log(data);
			},
			error : function(jqXHR, textStatus, errorThrown) {
				console.log("Status: " + textStatus);
				console.log("Error: " + errorThrown);
			}
		});

	}
}
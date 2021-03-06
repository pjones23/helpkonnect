/**
 * @author PerronJones
 */

var currentUser;

/*
 * sets the current user for use throughout the application
 */
function setCurrentUser(userID){
	
	//check if user exist. if the user does not exist, then create the user. 
	//necessary fields needed for creation (firstName, lastName, email, phone, latitude, longitude)
	//If the user does exist, then set the current user.
	//Also, update the position.
	console.log("user.js(setCurrentUser): userID: " + userID);
	var user = readUser(userID);
	//var user = readUser(1232);
	
	if(user != null){
		console.log("user exists");
		console.log(user);
		
        //set session User ID
        $.ajax({
			url : "sess",
			data : {
				'UserID' : userID

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

/*
 * refreshes the current user if the page is reload
 */
function refreshCurrentUser()
{
    console.log("inside refreshCurrentUser");
    // will return -1 if there is no user session
    var promise = $.ajax({
		url : "sess",
		context : document.body,
		async : false,
		type : 'GET',
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
    
    // get the returned user ID
	var userID = null;
	
	promise.success(function(data) {
		console.log("attempt: " + data.success)
		userID = data;
	});
    
    // if user has session, set the current user, if not, go back to sign in page
    if(userID >= 0){
        // set the current user
        setCurrentUser(userID);
        if(window.location.href == "http://beta.helpkonnect.com"){ // window.location.href = "http://www.helpkonnect.com";
            console.log("Going to home");
            $.mobile.changePage("#home");
        }
    }
    else{
        // go back to home page sign in
        console.log(userID);
        //window.location.href = "http://www.helpkonnect.com";
        window.location.href = "http://beta.helpkonnect.com";
    }
}

/*
 * returns the current user
 */
function getCurrentUser()
{     
	return currentUser;
}

/*
 * obtains the user's location using HTML5's geolocation
 */
function obtainLocation() {
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(locationSuccess, locationError);
	} else {
		alert("Geolocation is not supported by this browser.");
	}
}

/*
 * sets the current user's location upon the successful gathering of location
 */
function locationSuccess(location) {
	console.log("location: " + location);
	
	currentUser.Latitude=location.coords.latitude;
	currentUser.Longitude=location.coords.longitude;
	
	updateUser(currentUser.UserID, null, currentUser.FirstName, currentUser.LastName, currentUser.Email, currentUser.Phone, location.coords.latitude, location.coords.longitude, currentUser.UsePayPal, currentUser.PayPalEmail, currentUser.EmailAlert, currentUser.SMSAlert);
	alert("Your location has been updated successfully!");
}

/*
 * alerts upon failed gathering of location
 */
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

/*
 * obtains the user's location when the home page is being initialized
 */
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
	
	updateUser(currentUser.UserID, null, currentUser.FirstName, currentUser.LastName, currentUser.Email, currentUser.Phone, location.coords.latitude, location.coords.longitude, currentUser.UsePayPal, currentUser.PayPalEmail, currentUser.EmailAlert, currentUser.SMSAlert);
	//no alert
}

/*
 * ----------------------------------------------------------------------------------------------------
 * ----------------------------------------------------------------------------------------------------
 * ----------------------------------------------------------------------------------------------------
 */

function createUser(FBuserID, firstName, lastName, email, phone, usePayPal, payPalEmail, emailAlert, SMSAlert) {
	//re visit and finish when working on front end
	var user = new User(null, FBuserID, firstName, lastName, email, phone, null, null, usePayPal, payPalEmail, emailAlert, SMSAlert);
	var promise = user.create();
	
	userID = null;
	promise.success(function(data) {
		console.log("attempt: " + data.success)
		userID= data;
	});
	
	return userID;
}

function readUserByEmail(email) {
	//re visit and finish when working on front end
	var user = new User(null, null, null, null, email, null, null, null, null, null, null, null);
	var promise = user.read("Email", user.email);
	
	//reset user
	user = null;
	
	promise.success(function(data) {
		console.log("attempt: " + data.success)
		user = data;
	});

	console.log(user);
	return user;
}

function readUser(userID) {
	//re visit and finish when working on front end
	var user = new User(userID, null, null, null, null, null, null, null, null, null, null, null);
	var promise = user.read("ID", user.userID);
	
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
	var users = new User(null, null, null, null, null, null, null, null, null, null, null, null);
	var promise = users.readAll();

	//reset users
	users = null;
	
	promise.success(function(data) {
		users = data;
	});

	console.log(users);
	return users;
}

function updateUser(userID, FBuserID, firstName, lastName, email, phone, latitude, longitude, usePayPal, payPalEmail, emailAlert, SMSAlert) {
	//re visit and finish when working on front end
	var user = new User(userID, FBuserID, firstName, lastName, email, phone, latitude, longitude, usePayPal, payPalEmail, emailAlert, SMSAlert);
	user.update();
}

function deleteUser(userID) {
	//re visit and finish when working on front end
	var user = new User(userID, null, null, null, null, null, null, null, null, null, null, null);
	user.deleteUser();
}

/*
 * ----------------------------------------------------------------------------------------------------
 * ----------------------------------------------------------------------------------------------------
 * ----------------------------------------------------------------------------------------------------
 */

function User(userID, FBUserID, firstName, lastName, email, phone, latitude, longitude, usePayPal, payPalEmail, emailAlert, SMSAlert) {
	this.userID = userID;
	this.FBUserID = FBUserID;
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
				'FBUserID' : this.FBUserID,
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

	this.read = function(action, searchItem) {
		return $.ajax({
			url : "user/" + searchItem,
			context : document.body,
			async : false,
			headers : {
				'X-HTTP-Method-Override' : 'GET'
			},
			type : 'POST',
			data : {
				'Action' : action,
				'SearchItem' : searchItem
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
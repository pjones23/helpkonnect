/**
 * @author PerronJones
 */

/*
 * Logs the user in upon the form being submitted
 */
$('#signinForm').submit(function(event){
    // cancels the form submission
    event.preventDefault();

    // do whatever you want here
    console.log("submitted");
    loginUser();
    return false;
});

/*
 * logs the user in and navigates to the home page
 */
function loginUser() {
	
	var email = $('#signinEmail').val();
	
	var userExists = doesUserExist(email);

	if (userExists[0] && userExists[1] != null) {
		$('#AccountFoundStatus').attr("style","display: none;");
		
		initiateCurrentUser(userExists[1]);
		$.mobile.changePage("#home");
	} else {
		$('#AccountFoundStatus').attr("style","color: red;");
	}
	
}

/*
 * Checks if the user has an account
 */
function doesUserExist(email) {
	var user = readUserByEmail(email);

	if (user != null) {
		return [true, user];
	} else {
		return [false, null];
	}

}

/*
 function doesUserExist(user){
 var user = readUser(user.id);

 if(user != null){
 return true;
 }
 else{
 return false;
 }

 }
 */

/*
 * initializes the current user for use throughout the rest of the application
 */
function initiateCurrentUser(user) {
	console.log("loginProcesses.js(initiateCurrentUser): initiating current user");
	console.log("loginProcesses.js(initiateCurrentUser): " + user);
	console.log("loginProcesses.js(initiateCurrentUser): " + user.UserID);

	setCurrentUser(user.UserID);

}

/*
 * logs out the user
 */
function logout(){
    $.ajax({
		url : "sess",
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
    window.location.href = "http://beta.helpkonnect.com";
}

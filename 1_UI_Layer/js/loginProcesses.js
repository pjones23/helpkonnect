/**
 * @author PerronJones
 */

function loginUser() {
	var email = $('#signinEmail').val();
	
	console.log(email);
	
	var userExists = doesUserExist(email);

	if (userExists[0]) {
		
		initiateCurrentUser(userExists[1]);
		$('body').fadeOut(500,function newpage() {console.log("welcome");$.mobile.changePage("#home");console.log("home");$('body').fadeIn();});
		console.log("loginProcesses.js (loginUser): " + userExists[1].UserID);
	} else {
		navigateToNewUser(response);
	}
	
}

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
function initiateCurrentUser(user) {
	console.log("loginProcesses.js(initiateCurrentUser): initiating current user");
	console.log("loginProcesses.js(initiateCurrentUser): " + user);
	console.log("loginProcesses.js(initiateCurrentUser): " + user.UserID);

	setCurrentUser(user.UserID);

}

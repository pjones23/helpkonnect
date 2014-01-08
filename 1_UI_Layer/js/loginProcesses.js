/**
 * @author PerronJones
 */

function doesUserExist(user){
	var user = readUser(user.id);
	
	if(user != null){
		return true;
	}
	else{
		return false;
	}
	
}

function initiateCurrentUser(user)
{
	console.log("initiating current user");
	console.log(user);
	
	setCurrentUser(user.id);
	
}

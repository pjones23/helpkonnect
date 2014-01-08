<?php
	include_once $_SERVER["DOCUMENT_ROOT"] . "/3_Data_Access_Layer/DataAccess/db_helper.php";
	
	class userRepository{
		

		function createUser($userID, $firstName, $lastName, $email, $phone, $latitude, $longitude, $usePayPal, $payPalEmail, $emailAlert, $SMSAlert) {
			
			$dbQuery = sprintf("INSERT INTO `HelpConnectUser` (`UserID`, `FirstName`, `LastName`, `Email`, `Phone`, `Latitude`, `Longitude`, `UsePayPal`, `PayPalEmail`, `EmailAlert`, `SMSAlert`) VALUES ('%s', '%s', '%s', '%s', '%s', '%s', '%s', '%s', '%s', '%s', '%s');", 
				mysql_real_escape_string($userID),
				mysql_real_escape_string($firstName), 
				mysql_real_escape_string($lastName), 
				mysql_real_escape_string($email), 
				mysql_real_escape_string($phone), 
				mysql_real_escape_string($latitude),
				mysql_real_escape_string($longitude), 
				mysql_real_escape_string($usePayPal), 
				mysql_real_escape_string($payPalEmail), 
				mysql_real_escape_string($emailAlert), 
				mysql_real_escape_string($SMSAlert));
		
			$result = getDBResultInserted($dbQuery, 'UserID');
		
			header("Content-type: application/json");
			echo json_encode($result);
		}
		
		function readUser($userID) {
		
			$dbQuery = sprintf("SELECT * FROM `HelpConnectUser` WHERE `UserID`='%s';", mysql_real_escape_string($userID));
		
			$result=getDBResultRecord($dbQuery);
			header("Content-type: application/json");
			echo json_encode($result);
		}
		
		function readAllUsers() {
			
			$dbQuery = sprintf("SELECT * FROM `HelpConnectUser`;");
		
			$result = getDBResultsArray($dbQuery);
			header("Content-type: application/json");
			echo json_encode($result);
		}
		
		
		function updateUser($userID, $firstName, $lastName, $email, $phone, $latitude, $longitude, $usePayPal, $payPalEmail, $emailAlert, $SMSAlert) {
		
			$dbQuery = sprintf("UPDATE `HelpConnectUser` SET `FirstName`='%s',`LastName`='%s',`Email`='%s',`Phone`='%s',`Latitude`='%s',`Longitude`='%s',`UsePayPal`='%s',`PayPalEmail`='%s',`EmailAlert`='%s',`SMSAlert`='%s' WHERE `UserID`='%s';", 
				mysql_real_escape_string($firstName), 
				mysql_real_escape_string($lastName), 
				mysql_real_escape_string($email), 
				mysql_real_escape_string($phone), 
				mysql_real_escape_string($latitude), 
				mysql_real_escape_string($longitude),
				mysql_real_escape_string($usePayPal), 
				mysql_real_escape_string($payPalEmail), 
				mysql_real_escape_string($emailAlert), 
				mysql_real_escape_string($SMSAlert), 
				mysql_real_escape_string($userID));
		
			$result = getDBResultAffected($dbQuery);
		
			header("Content-type: application/json");
			echo json_encode($result);
		}
		
		function deleteUser($userID) {
		
			$dbQuery = sprintf("DELETE FROM `HelpConnectUser` WHERE `UserID` = '%s';", mysql_real_escape_string($userID));
			$result = getDBResultAffected($dbQuery);
		
			header("Content-type: application/json");
			echo json_encode($result);
		}

	}
	
?>
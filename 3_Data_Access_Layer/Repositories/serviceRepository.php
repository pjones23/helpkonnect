<?php

include_once $_SERVER["DOCUMENT_ROOT"] . "/3_Data_Access_Layer/DataAccess/db_helper.php";

class serviceRepository {

	function createService($userID, $description, $cost) {

		$dbQuery = sprintf("INSERT INTO `HelpConnectService` (`UserID`, `Description`, `Cost`) VALUES ('%s', '%s', '%s');", mysql_real_escape_string($userID), mysql_real_escape_string($description), mysql_real_escape_string($cost));

		$result = getDBResultInserted($dbQuery, 'ServiceID');

		header("Content-type: application/json");
		echo json_encode($result);
	}

	function readService($serviceID) {

		$dbQuery = sprintf("SELECT * FROM `HelpConnectService` WHERE `ServiceID`='%s';", mysql_real_escape_string($serviceID));

		$result = getDBResultRecord($dbQuery);
		header("Content-type: application/json");
		echo json_encode($result);
	}

	function readAllServicesController($action, $searchItem){
		if($action == "User"){
			$this->readAllServicesByUser($searchItem);
		}
		else if($action == "Description"){
			$this->readAllServicesByDescription($searchItem);
		}
		else{
			$this->readAllServices();
		}
	}
	
	function readAllServices() {

		$dbQuery = sprintf("SELECT * FROM `HelpConnectService`;");
		$result = getDBResultsArray($dbQuery);

		header("Content-type: application/json");
		echo json_encode($result);
	}

	function readAllServicesByUser($userID) {
		$dbQuery = sprintf("SELECT * FROM `HelpConnectService` WHERE `UserID`='%s';", mysql_real_escape_string($userID));
		$result = getDBResultsArray($dbQuery);

		header("Content-type: application/json");
		echo json_encode($result);
	}

	function readAllServicesByDescription($description) {
				
		if($description != null && $description != "" )	{
			$description = strtolower($description);	
			$keywords = explode(" ", $description);
			
			$dbQuery = sprintf("SELECT * FROM `HelpConnectService` WHERE LOWER(`Description`) LIKE '%s'", "%" . mysql_real_escape_string($keywords[0]) . "%");
			
			for ($i=1; $i < count($keywords); $i++) { 
				$dbQuery .= sprintf(" OR LOWER(`Description`) LIKE '%s'", "%" . mysql_real_escape_string($keywords[$i]) . "%");
			}
			
			$dbQuery .= sprintf(";");
			
			$result = getDBResultsArray($dbQuery);
	
			header("Content-type: application/json");
			echo json_encode($result);
			
		}
	}

	function updateService($serviceID, $description, $cost) {

		$dbQuery = sprintf("UPDATE `HelpConnectService` SET `Description`='%s',`Cost`='%s' WHERE `ServiceID`='%s';", mysql_real_escape_string($description), mysql_real_escape_string($cost), mysql_real_escape_string($serviceID));

		$result = getDBResultAffected($dbQuery);

		header("Content-type: application/json");
		echo json_encode($result);
	}

	function deleteService($serviceID) {

		$dbQuery = sprintf("DELETE FROM `HelpConnectService` WHERE `ServiceID` = '%s';", mysql_real_escape_string($serviceID));
		$result = getDBResultAffected($dbQuery);

		header("Content-type: application/json");
		echo json_encode($result);
	}

}
?>
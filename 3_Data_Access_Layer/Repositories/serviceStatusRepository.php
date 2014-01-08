<?php

include_once $_SERVER["DOCUMENT_ROOT"] . "/3_Data_Access_Layer/DataAccess/db_helper.php";

class serviceStatusRepository {

	function createServiceStatus($serviceID, $serviceOwnerID, $requesterUserID) {

		$dbQuery = sprintf("INSERT INTO `HelpConnectServiceStatus` (`ServiceID`, `ServiceOwnerID`, `RequesterUserID`) VALUES ('%s', '%s', '%s');", mysql_real_escape_string($serviceID), mysql_real_escape_string($serviceOwnerID), mysql_real_escape_string($requesterUserID));

		$result = getDBResultInserted($dbQuery, 'ServiceStaID');

		header("Content-type: application/json");
		echo json_encode($result);
	}

	function readServiceStatus($serviceStatusID) {

		$dbQuery = sprintf("SELECT * FROM `HelpConnectServiceStatus` WHERE `ServiceStatusID`='%s';", mysql_real_escape_string($serviceStatusID));

		$result = getDBResultRecord($dbQuery);
		header("Content-type: application/json");
		echo json_encode($result);
	}

	function readAllServiceStatusesController($action, $searchItem) {
		
		if ($action == "Service") {
			$this -> readAllServiceStatusesByService($searchItem);
		} else if ($action == "Owner") {
			$this -> readAllServiceStatusesByServiceOwner($searchItem);
		} else if ($action == "Requester") {
			$this -> readAllServiceStatusesByServiceRequester($searchItem);
		} else {
			$this -> readAllServiceStatuses();
		}
	}

	function readAllServiceStatuses() {

		$dbQuery = sprintf("SELECT * FROM `HelpConnectServiceStatus`;");

		$result = getDBResultsArray($dbQuery);
		header("Content-type: application/json");
		echo json_encode($result);
	}

	function readAllServiceStatusesByService($serviceID) {

		$dbQuery = sprintf("SELECT * FROM `HelpConnectServiceStatus` WHERE `ServiceID`='%s';", mysql_real_escape_string($serviceID));

		$result = getDBResultsArray($dbQuery);
		header("Content-type: application/json");
		echo json_encode($result);
	}

	function readAllServiceStatusesByServiceOwner($serviceOwnerID) {

		$dbQuery = sprintf("SELECT * FROM `HelpConnectServiceStatus` WHERE `ServiceOwnerID`='%s';", mysql_real_escape_string($serviceOwnerID));

		$result = getDBResultsArray($dbQuery);
		header("Content-type: application/json");
		echo json_encode($result);
	}

	function readAllServiceStatusesByServiceRequester($serviceRequesterID) {

		$dbQuery = sprintf("SELECT * FROM `HelpConnectServiceStatus` WHERE `RequesterUserID`='%s';", mysql_real_escape_string($serviceRequesterID));

		$result = getDBResultsArray($dbQuery);
		header("Content-type: application/json");
		echo json_encode($result);
	}

	function updateServiceStatus($serviceStatusID, $isConnected, $isPaid) {

		$dbQuery = sprintf("UPDATE `HelpConnectServiceStatus` SET `IsConnected`='%s',`IsPaid`='%s' WHERE `ServiceStatusID`='%s';", mysql_real_escape_string($isConnected), mysql_real_escape_string($isPaid), mysql_real_escape_string($serviceStatusID));

		$result = getDBResultAffected($dbQuery);

		header("Content-type: application/json");
		echo json_encode($result);
	}

	function deleteServiceStatus($serviceStatusID) {

		$dbQuery = sprintf("DELETE FROM `HelpConnectServiceStatus` WHERE `ServiceStatusID` = '%s';", mysql_real_escape_string($serviceStatusID));
		$result = getDBResultAffected($dbQuery);

		header("Content-type: application/json");
		echo json_encode($result);
	}

}
?>
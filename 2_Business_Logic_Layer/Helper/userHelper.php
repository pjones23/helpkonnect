<?php

function storeCurrentUserInSession($id) {
	$sid = session_id();
	if ($sid) {
		ChromePhp::log("Session exists!");
	} else {
		ChromePhp::log("Starting session!");
		//session_start();
	}

}

function retrieveCurrentUserInSession() {
	$sid = session_id();
	if ($sid) {
		ChromePhp::log("Session exists!");
		if (isset($_SESSION['userID'])) {
			$id = $_SESSION['userID'];
			ChromePhp::log($id);
		} else {
			ChromePhp::log("No Session for user");
		}

	} else {
		ChromePhp::log("No Session for user");
	}

}
?>
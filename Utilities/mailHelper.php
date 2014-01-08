<?php

require_once "/opt/lampstack-5.4.10-0/php/lib/php/Mail.php";
require_once "/opt/lampstack-5.4.10-0/php/lib/php/twilio-twilio-php-c1ad9c4/Services/Twilio.php";

function sendEmail($to, $subject, $message) {
	try {
		//$to = "someone@example.com";
		//$subject = "Test mail";
		//$message = "Hello! This is a simple email message.";
		//$from = "<from.gmail.com>";
		//$to = "<to.yahoo.com>";
		$from = "perron.jones@gmail.com";
		$to = $to;
		$subject = $subject;
		$body = $message;

		$host = "ssl://smtp.gmail.com";
		$port = "465";
		$username = "perron.jones@gmail.com";
		//<> give errors
		$password = "pjonesGT";

		$headers = array('From' => $from, 'To' => $to, 'Subject' => $subject);
		$smtp = Mail::factory('smtp', array('host' => $host, 'port' => $port, 'auth' => true, 'username' => $username, 'password' => $password));

		$mail = $smtp -> send($to, $headers, $body);

		if (PEAR::isError($mail)) {
			echo("<p>" . $mail -> getMessage() . "</p>");
		} else {
			echo("<p>Message successfully sent!</p>");
		}
		ChromePhp::log("Mail Sent.");
	} catch (Exception $e) {
		ChromePhp::log('Caught exception: ' . $e -> getMessage());
	}
}

function sendSMS($to, $subject, $message) {
	try {

		$to = "+1" . $to;
		ChromePhp::log($to);

		$AccountSid = "AC3b9dd3c4da77c4df12c9e25474a5ac89";
		$AuthToken = "b8fc75cb0d486153b92560ee1016d487";

		// Step 3: instantiate a new Twilio Rest Client
		$client = new Services_Twilio($AccountSid, $AuthToken);

		$sms = $client -> account -> sms_messages -> create("+17065509584", $to, $message);

		// Display a confirmation message on the screen
		ChromePhp::log("Sent SMS");
	} catch (Exception $e) {
		ChromePhp::log('Caught exception: ' . $e -> getMessage());
	}

}
?>
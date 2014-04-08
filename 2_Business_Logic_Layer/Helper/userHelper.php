<?php

function storeCurrentUserInSession($id) {
    // change to sessions in future. Using cookie for demo purposes
    setcookie("hkuid", $id, time()+3600);
    /*
    ChromePhp::log("Session User ID: " . $id);
	$_SESSION['userID'] = $id;
    ChromePhp::log("Session variable: " . $_SESSION['userID']);
    if (isset($_COOKIE[session_name()])) {
        ChromePhp::log("Session Exists");
        ChromePhp::log($_COOKIE[session_name()]);
        ChromePhp::log(session_id());
    }
    */
}

function retrieveCurrentUserInSession() {
    // change to sessions in future. Using cookie for demo purposes
    $userID = -1;
    /*
    session_name();
	session_start();
    ChromePhp::log("Session variable: " . $_SESSION['userID']);
    if (isset($_SESSION['userID']))
    {
        $userID = $_SESSION['userID'];
    }
    ChromePhp::log("Session User ID: " . $userID);
    
    if (isset($_COOKIE[session_name()])) {
        ChromePhp::log("Session Exists");
        ChromePhp::log($_COOKIE[session_name()]);
        ChromePhp::log(session_id());
        
    }
    */
    if(isset($_COOKIE["hkuid"])){
        $userID = $_COOKIE["hkuid"];
    }
    ChromePhp::log("Cookies User ID: " . $userID);
    echo $userID;
    
}


function removeCurrentUserInSession() {
    // change to sessions in future. Using cookie for demo purposes
    
    /*
    setcookie("hkuid", "", time()-3600); sets the expiration time 3600 seconds (one hour) in the past. The trick is that this references the time on the server while the cookie expiration is dependent on the time of the host running the browser. If there is a mismatch of time between the two hosts, it is possible that a cookie may not expire. However, using a time of ’1′ indicates an expiration time of one second after midnight, January 1st, 1970, which is the earliest possible expiration time.
    */
    setcookie("hkuid", "", 1);
}

?>
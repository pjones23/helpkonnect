/**
 * @author PerronJones
 */

function alertUser(email, phone, emailAlert, smsAlert, subject, message) {
	

	console.log("email: " + emailAlert);
	console.log("sms: " + smsAlert);

	if (emailAlert == "1") {

		sendEmail(email, subject, message);
		if (smsAlert == "1") {
			//send SMS
            console.log("sending text to " + phone);
			sendSMS(phone, subject, message);
		}
	} else {
		if (smsAlert == "1") {
			//send SMS
            console.log("sending text to " + phone);
			sendSMS(phone, subject, message);
		}
	}
}

function sendEmail(to, subject, message) {
	console.log("Sending email");
	return $.ajax({
		url : "mail",
		data : {
			'To' : to,
			'Subject' : subject,
			'Message' : message
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

function sendSMS(to, subject, message) {
	console.log("Sending email");
	return $.ajax({
		url : "sms",
		data : {
			'To' : to,
			'Subject' : subject,
			'Message' : message
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


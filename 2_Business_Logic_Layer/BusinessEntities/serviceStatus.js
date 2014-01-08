/**
 * @author PerronJones
 */

/**
 * @author PerronJones
 */

function createServiceStatus(serviceID, serviceOwnerID, serviceRequesterID) {
	//re visit and finish when working on front end
	var serviceStatus = new ServiceStatus(null, serviceID, serviceOwnerID, serviceRequesterID, null, null);
	serviceStatus.create();
}

function readServiceStatus(serviceStatusID) {
	//re visit and finish when working on front end
	var serviceStatus = new ServiceStatus(serviceStatusID, null, null, null, null, null);
	var promise = serviceStatus.read();
	
	//reset service status
	serviceStatus = null;
	
	promise.success(function(data) {
		serviceStatus = data;
	});
	
	console.log(serviceStatus);
	return serviceStatus;
}

function readAllServiceStatuses() {
	//re visit and finish when working on front end
	var serviceStatuses = new ServiceStatus(null, null, null, null, null, null);
	var promise = serviceStatuses.readAll("All", null);
	
	//reset service statuses
	serviceStatuses = null;
	
	promise.success(function(data){
		serviceStatuses = data;
	});
	
	console.log(serviceStatuses);
	return serviceStatuses;
}

function readAllServiceStatusesByService(serviceID) {
	//re visit and finish when working on front end
	var serviceStatuses = new ServiceStatus(null, null, null, null, null, null);
	var promise = serviceStatuses.readAll("Service", serviceID);
	
	//reset service statuses
	serviceStatuses = null;
	
	promise.success(function(data){
		serviceStatuses = data;
	});
	
	console.log(serviceStatuses);
	return serviceStatuses;
}

function readAllServiceStatusesByServiceOwner(serviceOwnerID) {
	//re visit and finish when working on front end
	var serviceStatuses = new ServiceStatus(null, null, null, null, null, null);
	var promise = serviceStatuses.readAll("Owner", serviceOwnerID);
	
	//reset service statuses
	serviceStatuses = null;
	
	promise.success(function(data){
		serviceStatuses = data;
	});
	
	console.log(serviceStatuses);
	return serviceStatuses;
}

function readAllServiceStatusesByServiceRequester(serviceRequesterID) {
	//re visit and finish when working on front end
	var serviceStatuses = new ServiceStatus(null, null, null, null, null, null);
	var promise = serviceStatuses.readAll("Requester", serviceRequesterID);
	
	//reset service statuses
	serviceStatuses = null;
	
	promise.success(function(data){
		serviceStatuses = data;
	});
	
	console.log(serviceStatuses);
	return serviceStatuses;
}

function updateServiceStatus(serviceStatusID, isConnected, isPaid) {
	//re visit and finish when working on front end
	var serviceStatus = new ServiceStatus(serviceStatusID, null, null, null, isConnected, isPaid);
	serviceStatus.update();
}

function deleteServiceStatus(serviceStatusID) {
	//re visit and finish when working on front end
	var serviceStatus = new ServiceStatus(serviceStatusID, null, null, null, null, null);
	serviceStatus.deleteServiceStatus();
}

/*
 * ----------------------------------------------------------------------------------------------------
 * ----------------------------------------------------------------------------------------------------
 * ----------------------------------------------------------------------------------------------------
 */

function ServiceStatus(serviceStatusID, serviceID, serviceOwnerID, serviceRequesterID, isConnected, isPaid) {
	this.serviceStatusID = serviceStatusID;
	this.serviceID = serviceID;
	this.serviceOwnerID = serviceOwnerID;
	this.serviceRequesterID = serviceRequesterID;
	this.isConnected = isConnected;
	this.isPaid = isPaid;

	this.create = function() {
		return $.ajax({
			url : "status",
			data : {
				'ServiceID' : this.serviceID,
				'ServiceOwnerID' : this.serviceOwnerID,
				'RequesterUserID' : this.serviceRequesterID
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

	this.read = function() {
		return $.ajax({
			url : "status/" + this.serviceStatusID,
			context : document.body,
			async : false,
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

	this.readAll = function(action, searchItem) {
		console.log("action: " + action);
		console.log("searchItem: " + searchItem);
		
		return $.ajax({
			url : "status",
			context : document.body,
			async : false,
			headers : {
				'X-HTTP-Method-Override' : 'GET'
			},
			type : 'POST',
			data : {
				'Action' : action,
				'SearchItem' : searchItem
			},
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

	this.update = function() {
		return $.ajax({
			url : "status/" + this.serviceStatusID,
			context : document.body,
			async : false,
			headers : {
				'X-HTTP-Method-Override' : 'PUT'
			},
			type : 'POST',
			data : {
				'IsConnected' : this.isConnected,
				'IsPaid' : this.isPaid
			},
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

	this.deleteServiceStatus = function() {
		return $.ajax({
			url : "status/" + this.serviceStatusID,
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

	}
}
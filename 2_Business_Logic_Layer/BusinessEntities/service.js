/**
 * @author PerronJones
 */

function createService(userID, description, cost) {
	//re visit and finish when working on front end
	var service = new Service(null, userID, description, cost);
	service.create();
}

function readService(serviceID) {
	//re visit and finish when working on front end
	var service = new Service(serviceID, null, null, null);
	var promise = service.read();

	//reset service
	service = null;
	
	promise.success(function(data) {
		service = data;
	});
	
	console.log(service);
	return service;
}

function readAllServices() {
	//re visit and finish when working on front end
	var services = new Service(null, null, null, null);
	var promise = services.readAll("All", null);
	
	//reset services
	services = null;
	
	promise.success(function(data){
		services = data;
	});
	
	console.log(services);
	return services;
}

function readAllServicesByUser(userID) {
	//re visit and finish when working on front end
	var services = new Service(null, null, null, null);
	var promise = services.readAll("User", userID);
	
	//reset services
	services = null;
	
	promise.success(function(data){
		services = data;
	});
	
	console.log(services);
	return services;
}

function readAllServicesByDescription(description) {
	//re visit and finish when working on front end
	var services = new Service(null, null, null, null);
	var promise = services.readAll("Description", description);
	
	//reset services
	services = null;
	
	promise.success(function(data){
		services = data;
	});
	
	console.log(services);
	return services;
}

function updateService(serviceID, userID, description, cost) {
	//re visit and finish when working on front end
	var service = new Service(serviceID, userID, description, cost);
	service.update();
}

function deleteService(serviceID) {
	//re visit and finish when working on front end
	var service = new Service(serviceID, null, null, null);
	service.deleteService();
}

/*
 * ----------------------------------------------------------------------------------------------------
 * ----------------------------------------------------------------------------------------------------
 * ----------------------------------------------------------------------------------------------------
 */

function Service(serviceID, userID, description, cost) {
	this.serviceID = serviceID;
	this.userID = userID;
	this.description = description;
	this.cost = cost;

	this.create = function() {
		return $.ajax({
			url : "service",
			data : {
				'UserID' : this.userID,
				'Description' : this.description,
				'Cost' : this.cost
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
			url : "service/" + this.serviceID,
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
		return $.ajax({
			url : "service",
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
			url : "service/" + this.serviceID,
			context : document.body,
			async : false,
			headers : {
				'X-HTTP-Method-Override' : 'PUT'
			},
			type : 'POST',
			data : {
				'ServiceID' : this.serviceID,
				'Description' : this.description,
				'Cost' : this.cost
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

	this.deleteService = function() {
		return $.ajax({
			url : "service/" + this.serviceID,
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
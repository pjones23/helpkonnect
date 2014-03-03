<?php

include_once '3_Data_Access_Layer/Repositories/userRepository.php';
include_once '3_Data_Access_Layer/Repositories/serviceRepository.php';
include_once '3_Data_Access_Layer/Repositories/serviceStatusRepository.php';
include_once 'Utilities/mailHelper.php';
include_once '2_Business_Logic_Layer/Helper/userHelper.php';

    class API{
    	
		/*
		 * -----------------------------------------------------------
		 * ---------------------- User Section -----------------------
		 * -----------------------------------------------------------
		*/  
		 
		 /**
		 * @url POST user
		 */
		function createUser(){
			$userRepo = new userRepository;			
			$userRepo->createUser($_POST['UserID'], $_POST['FirstName'], $_POST['LastName'], $_POST['Email'], $_POST['Phone'], $_POST['Latitude'], $_POST['Longitude'], $_POST['UsePayPal'], $_POST['PayPalEmail'], $_POST['EmailAlert'], $_POST['SMSAlert']);
		}
		 
		 /**
		 * @url GET user
		 */
		function readAllUsers(){
			$userRepo = new userRepository;			
			$userRepo->readAllUsers();
		}
		
		/**
		 * @url GET user/:id
		 */
		function readUser($id = null){
			$userRepo = new userRepository;
			$userRepo->readUserController($_POST['Action'], $_POST['SearchItem']);
		}	
			
		/**
		 * @url DELETE user/:id
		 */
		function deleteUser($id = null){
			$userRepo = new userRepository;			
			$userRepo->deleteUser($id);
		}
		
		/**
		 * @url PUT user/:id
		 */
		function updateUser($id = null){
			$userRepo = new userRepository;			
			$userRepo->updateUser($_POST['UserID'], $_POST['FirstName'], $_POST['LastName'], $_POST['Email'], $_POST['Phone'], $_POST['Latitude'], $_POST['Longitude'], $_POST['UsePayPal'], $_POST['PayPalEmail'], $_POST['EmailAlert'], $_POST['SMSAlert']);
		}



		/*
		 * -----------------------------------------------------------
		 * ---------------------- Service Section --------------------
		 * -----------------------------------------------------------
		*/  
		 
		 /**
		 * @url POST service
		 */
		function createService(){
			$serviceRepo = new serviceRepository;			
			$serviceRepo->createService($_POST['UserID'], $_POST['Description'], $_POST['Cost']);
		}
		 
		 /**
		 * @url GET service
		 */
		function readAllServicesController($action, $searchItem){
			$serviceRepo = new serviceRepository;			
			$serviceRepo->readAllServicesController($_POST['Action'], $_POST['SearchItem']);
		}
		
		/**
		 * @url GET service/:id
		 */
		function readService($id = null){
			$serviceRepo = new serviceRepository;			
			$serviceRepo->readService($id);
		}	
			
		/**
		 * @url DELETE service/:id
		 */
		function deleteService($id = null){
			$serviceRepo = new serviceRepository;			
			$serviceRepo->deleteService($id);
		}
		
		/**
		 * @url PUT service/:id
		 */
		function updateService($id = null){
			$serviceRepo = new serviceRepository;			
			$serviceRepo->updateService($_POST['ServiceID'], $_POST['Description'], $_POST['Cost']);
		}



		/*
		 * -----------------------------------------------------------
		 * ---------------------- Service Status Section -------------
		 * -----------------------------------------------------------
		*/  
		 
		 /**
		 * @url POST status
		 */
		function createServiceStatus(){
			$serviceStatusRepo = new serviceStatusRepository;			
			$serviceStatusRepo->createServiceStatus($_POST['ServiceID'], $_POST['ServiceOwnerID'], $_POST['RequesterUserID']);
		}
		 
		 /**
		 * @url GET status
		 */
		function readAllServiceStatusesController(){
			$serviceStatusRepo = new serviceStatusRepository;			
			$serviceStatusRepo->readAllServiceStatusesController($_POST['Action'], $_POST['SearchItem']);
		}
		
		/**
		 * @url GET status/:id
		 */
		function readServiceStatus($id = null){
			$serviceStatusRepo = new serviceStatusRepository;			
			$serviceStatusRepo->readServiceStatus($id);
		}	
			
		/**
		 * @url DELETE status/:id
		 */
		function deleteServiceStatus($id = null){
			$serviceStatusRepo = new serviceStatusRepository;			
			$serviceStatusRepo->deleteServiceStatus($id);
		}
		
		/**
		 * @url PUT status/:id
		 */
		function updateServiceStatus($id = null){
			$serviceStatusRepo = new serviceStatusRepository;			
			$serviceStatusRepo->updateServiceStatus($id, $_POST['IsConnected'], $_POST['IsPaid']);
		}
		
		


		/*
		 * -----------------------------------------------------------
		 * ---------------------- EMail/SMS -------------
		 * -----------------------------------------------------------
		*/  
		
		/**
		 * @url POST mail
		 */
		function sendEmail(){			
			sendEmail($_POST['To'], $_POST['Subject'], $_POST['Message']);
		}
		
		/**
		 * @url POST sms
		 */
		function sendSMS(){			
			sendSMS($_POST['To'], $_POST['Subject'], $_POST['Message']);
		}
		
		
		/*
		 * -----------------------------------------------------------
		 * ---------------------- Current User Session ---------------
		 * -----------------------------------------------------------
		*/  
		
		/**
		 * @url GET current
		 */
		function getCurrentUser(){
			ChromePhp::log("inside retrieveCurrentUserInSession");
			retrieveCurrentUserInSession();
		}
		 

		
    }

?>
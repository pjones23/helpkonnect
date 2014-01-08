<?php
	
    class SimpleRestTest
	{
		
		/**
		 * @url GET test
		 */
		function index(){
			return "Hello REST";
		}
		
		/**
		 * @url GET test/sum/
		 */
		function sum($n1, $n2){
			return $n1 + $n2;
		}
		
		/**
		 * @url GET test/:id
		 */
		function getSpecific($id = null){
			return $id;
		}
	}
?>
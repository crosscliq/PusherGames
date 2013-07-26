<?php 
require_once('pusherserver/lib/Pusher.php');


Class BaseGame {

var $app_id = '50411';
var $app_key = 'f2b24963b454eac2cfd7';
var $app_secret = '47bc64271eb245aadb71';
var $pusher = null;
	function __construct() {
		$this->pusher = new Pusher( $this->app_key, $this->app_secret, $this->app_id );

	}



}









?>
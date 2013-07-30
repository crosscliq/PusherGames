<?php 



class Hooks {

var  $app_secret;
var  $app_key;
var  $webhook_signature;


	 public function __construct() {

	 	// environmental variable must be set
  		$this->app_secret = getenv('PUSHER_APP_SECRET');
		$this->app_key = $_SERVER['HTTP_X_PUSHER_KEY'];
  		$this->webhook_signature = $_SERVER ['HTTP_X_PUSHER_SIGNATURE'];
	 }

	 public function processHooks() {

	  $body = file_get_contents('php://input');

 	  $expected_signature = hash_hmac( 'sha256', $body, $this->app_secret, false );
 	  	$file =  '';
		  if($this->webhook_signature == $expected_signature) {
		    // decode as associative array
		    $payload = json_decode( $body, true );
		    foreach($payload['events'] as &$event) {
		      $file .= $event;
		    }
		    file_put_contents('hooks.txt', $file);
		    header("Status: 200 OK");
		  }
		  else {
		    header("Status: 401 Not authenticated");
		  }

	 }

}

?>
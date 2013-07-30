<?php

$f3=require('lib/base.php');
$f3->set('AUTOLOAD','pusherserver/lib/');
$f3->config('config.ini');

$app_id = '50411';
$app_key = 'f2b24963b454eac2cfd7';
$app_secret = '47bc64271eb245aadb71';

putenv("PUSHER_APP_SECRET=$app_secret");
putenv("PUSHER_APP_KEY=$app_key");
putenv("PUSHER_APP_ID=$app_id ");



$f3->route('GET /',
	function($f3) {
		echo View::instance()->render('form.htm');
	}
);


$f3->route('GET|POST /hooks', 'Hooks->processHooks' );

$f3->route('GET /game',
	function($f3) {
		echo View::instance()->render('game.htm');
	}
);


$f3->route('GET /lobby',
	function($f3) {


		echo View::instance()->render('lobby.htm');
	}
);

$f3->route('POST /lobby',
	function($f3) {

		F3::set("SESSION.name", $f3->get('POST.name') );
		//echo F3::get("SESSION.test", 'A session exists!!!!');	


		echo View::instance()->render('lobby.htm');
	}
);



$f3->route('GET /controller',
	function($f3) {

		//F3::set("SESSION.test", 'A session exists!!!!');
		//echo F3::get("SESSION.test", 'A session exists!!!!');	
		echo View::instance()->render('controller.htm');
	}
);


$f3->route('POST /controller/input',
	function($f3) {
$app_id = '50411';
$app_key = 'f2b24963b454eac2cfd7';
$app_secret = '47bc64271eb245aadb71';

$pusher = new Pusher( $app_key, $app_secret, $app_id );
		$pusher->trigger('game', $f3->get('POST.key'), 'server knows you pressed '. $f3->get('POST.key'));
		
	}
);


$f3->route('GET /controller/input',
	function($f3) {
		
		$pusher->trigger('game', $f3->get('POST.key'), 'server knows you loaded input ');
		
	}
);


$f3->run();

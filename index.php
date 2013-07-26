<?php

$f3=require('lib/base.php');
$f3->set('AUTOLOAD','pusherserver/lib/');
$f3->config('config.ini');

 

	

$f3->route('GET /',
	function($f3) {
		echo View::instance()->render('form.htm');
	}
);


$f3->route('GET /game',
	function($f3) {
		echo View::instance()->render('game.htm');
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

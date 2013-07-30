var cTimer;  
  Pusher.log = function(message) {
      if (window.console && window.console.log) {
        window.console.log(message);
      }
    };

    var pusher = new Pusher('f2b24963b454eac2cfd7');
    var controller = pusher.subscribe('controller');
    controller.bind('my_event', function(data) {
      alert(data.message);
    });


     var game = pusher.subscribe('game');
    game.bind('event1', function(data) {
    	alert(data);
      $('#game').append(data.something);
    });

	game.bind('stop', function(data) {
     window.clearInterval(cTimer);
    });
	
    game.bind('leftup', function(data) {
		window.clearInterval(cTimer);
		cTimer=setInterval(function(){

			$("#box").css({	top: $("#box").position().top - 1 + "px",left: $("#box").position().left - 1 + "px"});
		},
		10
		);
    });

    game.bind('rightup', function(data) {
		window.clearInterval(cTimer);
		cTimer=setInterval(function(){

			$("#box").css({	top: $("#box").position().top - 1 + "px",left: $("#box").position().left + 1 + "px"});
		},
		10
		);
    });	
	
	
	game.bind('up', function(data) {
		window.clearInterval(cTimer);
		cTimer=setInterval(function(){

			$("#box").css({	top: $("#box").position().top - 1 + "px"});
		},
		10
		);
    });	
	
	
	game.bind('down', function(data) {
		window.clearInterval(cTimer);
		cTimer=setInterval(function(){

			$("#box").css({	top: $("#box").position().top + 1 + "px"});
		},
		10
		);
    });	
	
	game.bind('right', function(data) {
		window.clearInterval(cTimer);
		cTimer=setInterval(function(){

			$("#box").css({	left: $("#box").position().left + 1 + "px"});
		},
		10
		);
    });	
	
	game.bind('left', function(data) {
		window.clearInterval(cTimer);
		cTimer=setInterval(function(){

			$("#box").css({	left: $("#box").position().left - 1 + "px"});
		},
		10
		);
    });	
	
	    game.bind('rightdown', function(data) {
		window.clearInterval(cTimer);
		cTimer=setInterval(function(){

			$("#box").css({	top: $("#box").position().top + 1 + "px",left: $("#box").position().left + 1 + "px"});
		},
		10
		);
    });

    game.bind('leftdown', function(data) {
	    window.clearInterval(cTimer);
		cTimer=setInterval(function(){

			$("#box").css({	top: $("#box").position().top + 1 + "px",left: $("#box").position().left - 1 + "px"});
		},
		10
		);
    });	
	
	
     game.bind('start', function(data) {
      $("#box").css({
    'left': '0', 'top': '0' });

    });

      game.bind('a', function(data) {
      $("#box").css({
    'background-color': '#ffe'});

    });

       game.bind('b', function(data) {
      $("#box").css({
    'background-color': '#345345'});

    });

      

    






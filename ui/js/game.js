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

    game.bind('up', function(data) {
    	$("#box").css({
    top: $("#box").position().top - 10 + "px"});
     
    });

    game.bind('down', function(data) {
    	$("#box").css({
    top: $("#box").position().top + 10 + "px"});
     
    });

    game.bind('left', function(data) {
    	$("#box").css({
    left: $("#box").position().left - 10 + "px"});
     
    });

     game.bind('right', function(data) {
    	$("#box").css({
    left: $("#box").position().left + 10 + "px"});

  	});






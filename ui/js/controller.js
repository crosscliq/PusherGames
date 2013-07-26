 $(document).ready(function() {

 $(".controllerButton").click(function() {
  		console.log('button was pressed');
  		console.log(this.id);
  		call = '/controller/input';
  		console.log(call);
  		$.post(call, { key: this.id, type: 'press'});
	});

  $(window).bind("devicemotion", function(e){
                    var movitBaby = e.originalEvent,
                        acelera = movitBaby.accelerationIncludingGravity,
                        x = acelera.x,
                        y = acelera.y,
                        z = acelera.z;
 
                    $("#game").html(
                        "x = <b>" + x + "</b><br/>" +
                        "y = <b>" + y + "</b><br/>" +
                        "z = <b>" + z + "</b>"
                    );
                });

});
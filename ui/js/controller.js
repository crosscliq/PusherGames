 $(document).ready(function() {

 $(".controllerButton").click(function() {
  		console.log('button was pressed');
  		console.log(this.id);
  		call = '/controller/input';
  		console.log(call);
  		$.post(call, { key: this.id, type: 'press'});
	});

  

});

var x1=x2=y1=y2=0;
var olddirection;
var called =0;
$("#joystick #ball").draggable({
    revert: true,
    revertDuration: 100,

	containment:"#area",
    drag: function (e, ui){
        y2 = ui.position.top;
        x2 = ui.position.left;
        dist = parseInt(Math.sqrt(Math.pow((x2-x1),2)+Math.pow((y2-y1),2)), 10);
        
            ui.position.top = ui.position.top * (1 - (dist / 1000));
            ui.position.left = ui.position.left * (1 - (dist / 1000));
        
    },
    start: function(e, ui) {
	
	    y1 = ui.position.top;
        x1 = ui.position.left;
	
    },
	stop: function(e, ui) {
		called=0;
		call = '/controller/input';
		$.post(call, { key: 'stop', type: 'press'});
	},
    drag: function(event, ui) {
  
	   console.log(ui.position.top +  ' ' + ui.position.left);
		
	    //var xdirection = (x1 > ui.position.left) ? 'left' : 'right';
        //var ydirection = (y1 > ui.position.top) ? 'up' : 'down';
		
		if (ui.position.top < 15 ) { ydirection='up'; }	
		else if (ui.position.top > 25 ) { ydirection='down'; } else { ydirection=''; }	
		
		if (ui.position.left < 30 ) { xdirection='left'; } 
		else if (ui.position.left > 40 ) { xdirection='right'; }	else { xdirection=''; }
		
		console.log('y: ' + ydirection + ' x:' + xdirection);
		var direction=xdirection+ydirection; 
				
	

		if (olddirection!==direction && direction !=='') { 

				console.log(direction);
		
		call = '/controller/input';
  		$.post(call, { key: direction, type: 'press'});

		olddirection=direction;
	
		} 
		
		
    }
});
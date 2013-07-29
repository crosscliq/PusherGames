 $(document).ready(function() {

 $(".controllerButton").click(function() {
  		console.log('button was pressed');
  		console.log(this.id);
  		call = '/controller/input';
  		console.log(call);
  		$.post(call, { key: this.id, type: 'press'});
	});

  

});
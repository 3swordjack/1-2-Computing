$(document).ready(function(){
var plan = '';
  var x = 10;
$('.input').keyup(function(){
  var x = eval($('#in').val());
		if(x<10){ 
          plan ={name:"Standard", cost:"$29.99"};
        }
  else if(x<20){
    plan = {name:"Downloader", cost:"$39.99"};
  }
  else if(x>=20){
    plan = {name:"Serious Gamer", cost:"$49.99"};
  }         
  		$('#plan').text(plan.name);
        $('#cost').text(plan.cost);
	});


});

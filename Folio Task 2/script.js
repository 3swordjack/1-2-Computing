$(document).ready(function(){


$('.input').keyup(function(){
        var sum = eval('0+'+$('#in1').val()+"+"+$('#in2').val()+'+0');
        console.log(sum)
          $('#sum').text(sum)
        $('#avg').text(sum/2);
    });


});

$(document).ready(function(){

//Find todays date
var d = new Date()

//Get the input and output it in the sentance
    $('#name').keyup(function(){
        $('#nameOut').text(' '+$(this).val());
      if($(this).val()==''){$('#nameOut').text('')}
    });


//Get the input year, minus it from the current year, round it and then put it in the sentance
    $('#year').keyup(function(){

    //Put the input text into a variable
        var x = Math.floor(eval(d.getFullYear() +'-'+Math.floor(eval($(this).val()))));
      console.log(Math.floor(eval($(this).val())));
    //If the age is below 120 but 0 or higher allow it otherwise display N/A
        if(x <= 120 && x>=0){$('#ageOut').text(', you will turn '+x+' years old this year');}else{$('#ageOut').text('')};
    });


});

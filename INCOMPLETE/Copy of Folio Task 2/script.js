$(document).ready(function(){
  var total = 0;
  var name = '';
  var avg = 0;
  var pass = '';
  var sent ='';
  var table = document.getElementById('students');

  $('#in4').click(function(){
    total = eval($('#in1').val()+"+"+$('#in2').val()+"+"+$('#in3').val());
    avg = Math.round(total/3);
    if(avg>=50){pass='Pass'}else{pass='Re-Sit'};
    name = $('#nameIn').val();

    var row = table.insertRow(1);

    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    cell1.setAttribute('id','y');
    cell2.setAttribute('id','y');
    cell3.setAttribute('id','y');

    cell1.innerHTML =name;
    cell2.innerHTML =avg;
    cell3.innerHTML =pass;

  });

  $('#y').click(function(){
    console.log('yes');
    document.getElementById("students").deleteRow(this);
  });
});

$(document).ready(function(){
  calculateTotal();

  
  
});

// Generate number from 1 to 10
var numberGenerator = function () {
  var num1 = Math.ceil(Math.random()*10);
  var num2 = Math.ceil(Math.random()*10);
  var numArray = [];
  numArray.push(num1);
  numArray.push(num2);
  return numArray;
}

// Display numbers
var displayNumber = function () {
  var num = numberGenerator();
  console.log(num);

  $('span#num1').text(num[0]);
  $('span#num2').text(num[1]);
  
  //var num1 = document.getElementById('num1');
  //var num2 = document.getElementById('num2');

  //num1.innerHTML = num[0];
  //num2.innerHTML = num[1];
  return num;
}

// Calculate Total
var calculateTotal = function () {
  var num = displayNumber();
  $('.check').click(function() {
    $('.check').not(this).prop('checked', false);
  });
  $(document).on('click', '.plus', function(){
    if($(this).is(':checked')){
      $('.operator').text('+');
      console.log(num[0]+num[1]);
    }
  });
  $(document).on('click', '.minus', function(){
    if($(this).is(':checked')){
      $('.operator').text('-');
      console.log(Math.abs(num[0]-num[1]));
    }
  });
  $(document).on('click', '.multiply', function(){
    if($(this).is(':checked')){
      $('.operator').text('x');
      console.log(num[0]*num[1]);
    }
  });
  $(document).on('click', '.divide', function(){
    if($(this).is(':checked')){
      var divisor = String.fromCharCode(247);
      $('.operator').text(divisor);
      console.log(Math.floor(num[0]/num[1]));
    }
  });
}


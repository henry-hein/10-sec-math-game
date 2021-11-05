$(document).ready(function(){
  // $('.operators').find('.checkbox').click(function(){
  //   console.log(calculateTotal());
  // })
  // operator = 'plus';

  var userInput = {};
  var operator;
  var total = {};
  var time = 10;
  var interval;
  var score = 0;

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
    var answer;
  
    if (operator === 'plus'){
      answer = num[0]+num[1];
    } else if(operator === 'minus'){
      answer = Math.abs(num[0]-num[1]);
    } else if(operator === 'multiply'){
      answer = num[0]*num[1]; 
    } else if(operator === 'divide'){
      answer = Math.floor(num[0]/num[1]);
    }
    return answer;
  }

  // Update Time

  var updateTimeLeft = function (amount) {
    time += amount;
    $('.time').text(time);
  }

  // Update Score
  var updateScore = function(amount){
    score += amount;
    $('.score').text(score);
  }
  
  // Game restart function
  var startGame = function () {
    if (!interval) {
      if (time === 0) {
        console.log('hello');
        updateTimeLeft(10);
      }
      interval = setInterval(function () {
        updateTimeLeft(-1);
        if (time === 0) {
          clearInterval(interval);
          interval = undefined;
          updateTimeLeft(10);
          updateScore(-score);
          $('.output').text('');
          startGame();
        }
      }, 1000);  
    }
  }


  $('.check').click(function() {
    $('.check').not($(this)).prop('checked', false);
  });
  
  $(document).on('click', '.plus', function(){
    if($(this).is(':checked')){
      $('.operator').text('+');
      operator = 'plus';
      total.plus = calculateTotal();
    }
  });
  
  $(document).on('click', '.minus', function(){
    if($(this).is(':checked')){
      $('.operator').text('-');
      operator = 'minus';
      total.minus = calculateTotal();
    }
  });

  $(document).on('click', '.multiply', function(){
    if($(this).is(':checked')){
      $('.operator').text('x');
      operator = 'multiply';
      total.multiply = calculateTotal();
    }
  });

  $(document).on('click', '.divide', function(){
    if($(this).is(':checked')){
      var divisor = String.fromCharCode(247);
      $('.operator').text(divisor);
      operator = 'divide';
      total.divide = calculateTotal();
    }
  });

  $(document).on('change', '.userInput', function() {
      startGame();
      userInput.answer = ($('.userInput').val());
      if(Number(userInput.answer) === total.plus){
        updateTimeLeft(+1);
        updateScore(+1);
        $('.userInput').val('');
        $('.output').text('Correct!');
      } else if (Number(userInput.answer) === total.minus){
        updateTimeLeft(+1);
        updateScore(+1);
        $('.userInput').val('');
        $('.output').text('Correct!');
      } else if (Number(userInput.answer) === total.multiply){
        updateTimeLeft(+1);
        updateScore(+1);
        $('.userInput').val('');
        $('.output').text('Correct!');
      } else if (Number(userInput.answer) === total.divide){
        updateTimeLeft(+1);
        updateScore(+1);
        $('.userInput').val('');
        $('.output').text('Correct!');
      } else {
        $('.userInput').val('');
        $('.output').css("color", "red");
        $('.output').text('Wrong Answer!');
      } 
  });

  $('.plus').trigger('click');  
});

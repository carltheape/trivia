$(document).ready(function(){

	$(".answer").on("mouseover", function () {
    	$(this).css("background-color","darkred");
});
   $(".answer").on("mouseout", function () {
    	$(this).css("background-color","transparent");
});

var music = new Audio('assets/devilgeorgia.mp3')
music.play();

$('.sound').click(function() {
  if (music.paused == false) {
      music.pause();
  } else {
      music.play();
  }
});

var time = 30;
var currentTime = 0;
var click = 0;
var correctAnswer = 0;
var intervalId = "";
var currentQuestion = 0;
 
 function decrement() {
      time--;
      $(".timer").html(time);
      console.log(time);
    if (currentTime == time){
   	$(".timer").html("Time's Up!");
   	intervalId = clearInterval(intervalId);
   	$('.false').hide();
   	setTimeout(function(){ next(); }, 3000);
  }};

function timer(){	time=30;
   	$(".timer").html(time);
   	intervalId = setInterval(decrement, 1000);
    decrement();
   }200
function image(){
	if (currentQuestion == 1){
		$(".imageHolder").html('<img id="hades" src="assets/images/hades.gif" />');
		$('#hades').width(200);
	}
	else if (currentQuestion == 2){
		$(".imageHolder").html('<img id="satan" src="assets/images/satan.gif" />');
		$('#satan').width(200);
	}
	else if (currentQuestion == 3){
		$(".imageHolder").html('<img id="dante" src="assets/images/dante.gif" />');
		$('#dante').width(200);
	}
	else if (currentQuestion == 4){
		$(".imageHolder").html('<img id="puppy" src="assets/images/puppy.gif" />');
		$('#puppy').width(200);
	}
	else if (currentQuestion == 5){
		$(".imageHolder").html('<img id="layers" src="assets/images/layers.gif" />');
		$('#layers').width(200);
	}

	};

function imageWrong(){
	$(".imageHolder").html('<img id="what" src="assets/images/what.gif" />');
	$('#what').width(200);
}

function next(){
	$(".answer").removeClass('true');
	$(".answer").addClass("false");
	$('.timer, .answer, .question').show();
	$(".timer").html("30");
	time=30;
	click = 0;
	if (currentQuestion == 0){
		question1();
		currentQuestion = 1;
		intervalId = setInterval(decrement, 1000);
	    decrement();
	}
	else if (currentQuestion == 1){
		question2();
		currentQuestion = 2;
		intervalId = setInterval(decrement, 1000);
    	decrement();
	}
	else if (currentQuestion == 2){
		question3();
		currentQuestion = 3;
		intervalId = setInterval(decrement, 1000);
    	decrement();
	}
	else if (currentQuestion == 3){
		question4();
		currentQuestion = 4;
		intervalId = setInterval(decrement, 1000);
    	decrement();
	}
	else if (currentQuestion == 4){
		question5();
		currentQuestion = 5;
		intervalId = setInterval(decrement, 1000);
    	decrement();
	}
	else {
		gameOver();
		currentQuestion = 0;
	}};



function question1(){
	$(".question").html(q1.question);
   	$(".ans1 h3:first-child").html(q1.answer);
   	$(".ans1").removeClass("false");
   	$(".ans1").addClass("true");
   	$(".ans2 h3:first-child").html(q1.options [0]);
   	$(".ans3 h3:first-child").html(q1.options [1]);
   	$(".ans4 h3:first-child").html(q1.options [2]);
}

function question2(){
	$(".question").html(q2.question);
   	$(".ans1 h3:first-child").html(q2.options [0]);
   	$(".ans2 h3:first-child").html(q2.options [1]);
   	$(".ans3 h3:first-child").html(q2.answer);
   	$(".ans3").removeClass("false");
   	$(".ans3").addClass("true");
   	$(".ans4 h3:first-child").html(q2.options [2]);
}

function question3(){
	$(".question").html(q3.question);
   	$(".ans1 h3:first-child").html(q3.answer);
   	$(".ans1").removeClass("false");
   	$(".ans1").addClass("true");
   	$(".ans2 h3:first-child").html(q3.options [0]);
   	$(".ans3 h3:first-child").html(q3.options [1]);
   	$(".ans4 h3:first-child").html(q3.options [2]);
}

function question4(){
	$(".question").html(q4.question);
   	$(".ans1 h3:first-child").html(q4.options [0]);
   	$(".ans2 h3:first-child").html(q4.options [1]);
   	$(".ans3 h3:first-child").html(q4.options [2]);
   	$(".ans4 h3:first-child").html(q4.answer);
   	$(".ans4").removeClass("false");
   	$(".ans4").addClass("true");
}

function question5(){
	$(".question").html(q5.question);
   	$(".ans1 h3:first-child").html(q5.options [0]);
   	$(".ans2 h3:first-child").html(q5.options [1]);
   	$(".ans3 h3:first-child").html(q5.answer);
   	$(".ans3").removeClass("false");
   	$(".ans3").addClass("true");
   	$(".ans4 h3:first-child").html(q5.options [2]);
}

function gameOver(){
	$(".timer").html("Again?");
	$(".question").html("You got " + correctAnswer + " out of 5 questions right");
	$('.start').show();
	$('.answer').hide();
	if (correctAnswer == 5){
		$(".imageHolder").html('<img id="rocker" src="assets/images/rocker.gif" />');
		$('#rocker').width(200);
		$(".question").append("<br> ROCK ON!");
	}
	else if (correctAnswer <= 1){
		$(".imageHolder").html('<img id="dunno" src="assets/images/dunno.gif" />');
		$('#dunno').width(200)}

	else $(".imageHolder").html('<img id="robot" src="assets/images/robot.gif" />');
		$('#robot').width(200);
}

var q1 = {
	question: "What is the name of the Greek God of the underworld?",
	options: ["Pluto", "Lucifer", "Azrael"],
	answer: "Hades",
}

var q2 = {
	question: "In the Christian faith, what was Satan's downfall?",
	options: ["Greed", "Lust", "Vengence"],
	answer: "Pride",
}

var q3 = {
	question: "Inferno, written by Dante was part of what epic poem?",
	options: ["Journey to the Center of the Earth", "Heaven & Hell", "Apocolypto"],
	answer: "The Divine Comedy",
}

var q4 = {
	question: "In Greek Mythology, what is the name of the 'Hound of Hades?'",
	options: ["Pluto", "Canin", "Kane"],
	answer: "Cerberus",
}

var q5 = {
	question: "According to Dante, how many layers of Hell are there?",
	options: ["666", "13", "7"],
	answer: "9",
}

   $(".start").on("click", function start() {
   	$(".imageHolder").html("");
   	$('.start').hide();
   	correctAnswer = 0;
   	next();

});
    $(".answer").on("click", function() {

    if ( $(this).hasClass( "false" ) && click == 0){
   	$(".title").html("Wrong!");
   	imageWrong();
   	click = 1;
	time = 0;
	intervalId = clearInterval(intervalId);
   	$('.false').hide();
   	setTimeout(function(){ $(".title").html("Trivia From Hell!"); $(".imageHolder").html(""); next(); }, 4000);
   }
   	if ($( this).hasClass( "true" ) && click == 0){
	$(".title").html("Correct!");
	image();
	click = 1;
	correctAnswer++;
	time = 0;
	intervalId = clearInterval(intervalId);
   	$('.false').hide();
   	setTimeout(function(){ $(".title").html("Trivia From Hell!"); $(".imageHolder").html(""); next(); }, 4000);
   }
});





});  //ready function end
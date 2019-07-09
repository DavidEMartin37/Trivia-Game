var question1 = {
  question: "The series 'Stranger Things' takes place in the town of Hawkins, IN: ",
  answer: "True"
};  
var question2 = {
  question: "In the series 'Stranger Things' the telekinetic girl is called Eleven: ",
  answer: "True"
};  
var question3 = {
  question: "In the series 'Stranger Things' the four main boys play Dungeons and Dragons: ",
  answer: "True"
};  
var question4 = {
  question: "In the series 'Stranger Things' the local police chief is called Hutch: ",
  answer: "False"
};  

var timerId;
var correct = 0;
var incorrect = 0;
var counter = 30;

function clock() {
  counter--;
  $(".display-timer").text(counter + " seconds");
  if (counter === 0) {
    gameOver();
  }
};

function startGame() {
  $("#question1").text(question1.question);
  $("#question2").text(question2.question);
  $("#question3").text(question3.question);
  $("#question4").text(question4.question);
  timerId = setInterval(clock, 1000);
};

function checkResult() {
  if (question1.answer === $("#answer1").val()) {
    correct++;
  }else incorrect++;
  if (question2.answer === $("#answer2").val()) {
    correct++;
  }else incorrect++;
  if (question3.answer === $("#answer3").val()) {
    correct++;
  }else incorrect++;
  if (question4.answer === $("#answer4").val()) {
    correct++;
  }else incorrect++;
};

function gameOver() {
  clearInterval(timerId);
  checkResult();
  $(".display-timer").text("Game Over");
  counter = 30;
  $("#results").html("<div>Correct: " + correct + " Incorrect: " + incorrect + "</div>");
};

$(".start").on("click", startGame); 
$(".submit").on("click", gameOver); 





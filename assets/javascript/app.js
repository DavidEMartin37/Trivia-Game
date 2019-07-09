var question1 = {
  question: "The series 'Stranger Things' takes place in the town of Hawkins, IN: ",
  answer: "true"
};  
var question2 = {
  question: "In the series 'Stranger Things' the telekenetic girl is called Eleven: ",
  answer: "true"
};  
var question3 = {
  question: "In the series 'Stranger Things' the four main boys play Dungeons and Dragons: ",
  answer: "true"
};  
  
var timerId;
var correct = 0;
var incorrect = 0;
var counter = 60;

function clock() {
  counter--;
  $(".display-timer").text(counter + " seconds");
  if (counter === 0) {
    gameOver();
  }
};

function startGame() {
  $("#question1").html(question1.question);
  $("#question2").append(question2.question);
  $("#question3").text(question3.question);
  timerId = setInterval(clock, 1000);
};

function checkResult() {
  if (question1.answer === "true") {
    correct++;
  }else incorrect++;
  if (question2.answer === "true") {
    correct++;
  }else incorrect++;
  if (question3.answer === "true") {
    correct++;
  }else incorrect++;
};

function gameOver() {
  clearInterval(timerId);
  checkResult();
  $(".display-timer").text("Game Over");
  counter = 60;
  $("#answer1").html("<div>Correct: " + correct + "Incorrect: " + incorrect + "</div>");
  $("#answer2").html("<div>Correct: " + correct + "Incorrect: " + incorrect + "</div>");
  $("#answer3").html("<div>Correct: " + correct + "Incorrect: " + incorrect + "</div>");
};

$(".start").on("click", startGame); 
  




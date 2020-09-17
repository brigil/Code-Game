// hook elements for my buttons
var questionDisplayEl = document.querySelector(".questionDisplay")
var timerEl = document.querySelector(".timer")
var resultsEl = document.querySelector(".results")
var quizAnswers = document.querySelector(".answers");



// created dynamic elements for diplay questions and button
var mainDisplay = document.createElement("h3")
var startBtn =document.querySelector(".btn")


// timer
var timer = 60;
// index that goes to next array
var index = 0;


//function that loads main page
function openingPage() {
  //opening page instructios
    mainDisplay.textContent = "WELCOME PLAYER! Have a go at the following code-related questions. Be careful, you only have a 60 second time limit. All incorrect answers will penalize your score/time by ten seconds!"
    //start btn text
    startBtn.textContent = "Start The Game"
    //appended heading and btn 
    questionDisplayEl.append(mainDisplay, startBtn)
  }


// the begining of the quiz and the timer
function startQuiz() {
 timerDisplay()
 nextQuestion()

}
// function that controls the timer
function timerDisplay() {

  timerEl.textContent = timer;

  var questionTimer = setInterval(function(){

timer--

timerEl.textContent = timer;
if ( timer <= 0){
  clearInterval(questionTimer);
}

  },1 * 1000)
}
// function that will display the next questions 
function nextQuestion() {
  var currentQuest = questions[index];
  questionDisplayEl.textContent = " ";
  mainDisplay.textContent = currentQuest.title;
  questionDisplayEl.append(mainDisplay);
  var choicesContainer = document.createElement("div");
  for (let i = 0; i < currentQuest.choices.length; i++){
    var choiceBtn = document.createElement("button");
    choiceBtn.textContent = currentQuest.choices[i];
    choiceBtn.addEventListener("click", checkAnswer);
    choicesContainer.append(choiceBtn);

  }
  questionDisplayEl.append(choicesContainer);

}

function checkAnswer(event) {
  
  var responseText = event.target.textContent;
  

  if (responseText === questions[index].answer) {
      quizAnswers.textContent = "Correct!";
      
      console.log("correct");
      quizAnswers;
  }
  
  else {
    quizAnswers.textContent = "Incorrect!";
      timer = (timer - 10);
      
      console.log("Incorrect");
      quizAnswers;
  }

 
  index++;
  nextQuestion();{
    
  }
}


function showTimer() {
  // display timer to screen
  timerEl.textContent = timer;
  //create setInterval and store it to a var
  


}

//add event listener that starts button
startBtn.addEventListener("click", startQuiz)
//call function for opening page
openingPage();

//save users final results
// display users final results
// ask for users initals
//save users initals in local storage
//display scoreboard

// array of questions




var questions = [
  {
    title: "Commonly used data types DO NOT include:",
    choices: ["a.Strings\n", "b.Booleans", "c.Alerts", "d.Numbers"],
    answer: "c"
  },
  {
    title: "The conditional in an if/else statement is enclosed in ________.:",
    choices: ["a.Quotes", "b.Curly Braces", "c.Parentheses", "d.Square Brackets"],
    answer: "c"
  },
 {
  title: "Arrays in javaScript can be used to store __________.:",   
  choices: ["a.Numbers and strings", "b.Other arrays", "c.Booleans", "d.All of the above"], 
  answer: "d"

},
{
  title: "Sting values must be enclosed within:",
  choices: ["a.Commas", "b.Curly braces", "c.Quotes", "d.Parentheses"],  
  answer: "c"  
},

{
  title: "A very useful tool used during development and debugging for printing content to the debugger is:",   
  choices: ["a.JavaScript", "b.Terminal/bash", "c.For loops", "d.Console.log"],
  answer: "d"
}

];


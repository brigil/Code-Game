// hook elements for my buttons
var questionDisplayEl = document.querySelector(".questionDisplay")
var timerEl = document.querySelector(".timer")
var resultsEl = document.querySelector(".results")


// created dynamic elements for diplay questions and button
var mainDisplay = document.createElement("h3")
var startBtn =document.querySelector(".btn")


// timer
var timer = 90;
// index that goes to next array
var index = 0;


//function that loads main page
function openingPage() {
  //opening page instructios
    mainDisplay.textContent = "Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your score/time by ten seconds!"
    //start btn text
    startBtn.textContent = "Start The Game"
    //appended heading and btn 
    questionDisplayEl.append(mainDisplay, startBtn)
  }
// the beging of the quiz that start the timer
function startQuiz() {

}
// function that controls the timer
function timerDisplay() {

}

function nextQuestion() {

}

function checkAnswer(event) {

}




//add event listener for start button
startBtn.addEventListener("click", startQuiz)
//call function for opening page
openingPage();




// array of questions




var questions = [
  {
    title: "Commonly used data types DO NOT include:",
    choices: ["1.Strings\n", "2.Booleans", "3.Alerts", "4.Numbers"],
    answer: "Alerts"
  },
  {
    title: "The conditional in an if/else statement is enclosed in ________.:",
    choices: ["1.Quotes", "2.Curly Braces", "3.Parentheses", "4.Square Brackets"],
    answer: "Parentheses"
  },
 {
  title: "Arrays in javaScript can be used to store __________.:",   
  choices: ["1.Numbers and strings", "2.Other arrays", "3.Booleans", "4.All of the above"], 
  answer: "All of the above"

},
{
  title: "Sting values must be enclosed within:",
  choices: ["1.Commas", "2.Curly braces", "3.Quotes", "4.Parentheses"],  
  answer: "Quotes"  
},

{
  title: "A very useful tool used during development and debugging for printing content to the debugger is:",   
  choices: ["1.JavaScript", "2.Terminal/bash", "3.For loops", "4.Console.log"],
  answer: "Console.log"
},
];


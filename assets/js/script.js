//variables to keep track of quiz state, currentQuestion, time, timerID
let questionIndex = 0;
//question array *15
let time = questions.length * 15;
let score = 0;
let timer;

//variable to reference DOM elements .getElementByID
let timeEl = document.getElementById("time");
let startBtn = document.getElementById("start");
let questionsDiv = document.getElementById("questions");
let choicesDiv = document.getElementById("choices");
// let startScreenDiv = document.getElementById("start-screen");
//sound effect (ice box)

//Function to start quiz
function startQuiz() {
  //hide start screen
  let startScreen = document.getElementById("start-screen");
  startScreen.style.display = "none";

  //start timer, setInterval() repeatedly calls a function with a fixed time delay between each call.
  //This will make it tock down because it repeatedly calls the clock()
  timer = setInterval(clock, 1000);
  console.log("timer:" + timer);
  //show starting time
  timeEl.textContent = time;
  //call function to get next Question

  nextQuestion();
}

//function to get next Question
function nextQuestion() {
  //get current question from array
  let currentQuestion = questions[questionIndex];
  //update title current question
  let questionsDiv = document.getElementById("question-title");
  //clear out any old question choices
  questionsDiv.innerHTML = "";
  questionsDiv.innerHTML = currentQuestion.title;
  console.log("current question: " + currentQuestion.title)
  //set variable for element to empty sting using innerHTML
  choicesDiv.innerHTML = "";
  //loop over choices
  for (i = 0; i < currentQuestion.choices.length; i++) {
    let choices = currentQuestion.choices[i];

    //create new button using css styling for each choice
    //create Element and set Attribute
    let choiceBtn = document.createElement("button");
    choiceBtn.innerHTML = choices;
    choiceBtn.type = "submit";
    choiceBtn.name = "formBtn";
    choicesDiv.appendChild(choiceBtn);
    console.log("choices: " + choices);
  }
  // btn.addEventListener("click", consol.log ("the button was clicked"));
  choiceBtn.addEventListener("click", function () {
    console.log("you have answered" + choice);
  });

  //attach click event listener to each choice
  //display on the page
}

//function for clicking on question
//check if user guessed wrong
//penalize time

//Display new time on page

//play "wrong"sound effect(icebox)
//else play right sound effect (icebox)

//flash right/wrong feedback on page for half a second

//move to next question

//check if we've run out of time
//if yes then end quiz
//else get the next question

//function to end quiz
//stop timer
//show end screen
//show final score
//hide questions section

// function for clock
function clock() {
  //update time --
  time--;
  //check if user ran out of time, end quiz
  if (time <= 0) {
    endQuiz();
  }
}

//function for Saving highscore
//get value of input box for initials
//make sure value wasn't empty

//format new score object for current user

//save to localstorage
//redirect to highscores.html

//function for check for Enter
//"13" represents the enter key "enter"

//user click button to submit initials

//user onclick button to start quiz
startBtn.addEventListener("click", function () {
  startQuiz();
});

//user onclick of button to select answer

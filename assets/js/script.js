//variables to keep track of quiz state, currentQuestion, time, timerID
let questionIndex = 0;
//question array *15
let time = questions.length * 15;
let score = 0;
let timer;
let choices;
let currentQuestion;
let value;

//variable to reference DOM elements .getElementByID
let timeEl = document.getElementById("time");
let startBtn = document.getElementById("start");
let questionsDiv = document.getElementById("questions");
let choicesDiv = document.getElementById("choices");
let finalScore = document.getElementById("final-score");
let submit = document.getElementById("submit");
// let startScreenDiv = document.getElementById("start-screen");
//sound effect (ice box)
let endScreen = document.getElementById("end-screen");
endScreen.style.display = "none";

let timeWrapper= document.getElementById("timeWrapper");
timeWrapper.style.display = "none";
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
  timeWrapper.style.display = "inline";
  timeEl.textContent = time;
  //call function to get next Question

  nextQuestion();
}

//function to get next Question
function nextQuestion() {
  //get current question from array
  currentQuestion = questions[questionIndex];
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
    choices = currentQuestion.choices[i];

    //create new button using css styling for each choice
    //create Element and set Attribute
    let choiceBtn = document.createElement("button");
    choiceBtn.innerHTML = choices;
    choiceBtn.type = "submit";
    choiceBtn.name = "formBtn";
    choicesDiv.appendChild(choiceBtn);
    console.log("choices: " + choices);

  //get value of button clicked
  choiceBtn.addEventListener("click", event => {
    let target = event.target;
    if (target.matches('button')){
      value = target.innerHTML
      console.log ("the button was clicked " + value);

  };
  checkAnswer();
  })


  };


};

//function for clicking on question
function checkAnswer(){
//check if user guessed wrong
// console.log("click: " + value);

if (value === currentQuestion.answer){
  score ++;
  console.log("Score: " + score);

} else {
  //check if user guessed wrong
  //penalize time
  console.log("time first: " + time)
  time = time - 5;
  console.log("time: " + time);

};
//Display new time on page
timeEl.textContent = time;

questionIndex++;

//flash right/wrong feedback on page for half a second


  // check if we've run out of questions
  //check if we've run out of time
//if yes then end quiz
//else get the next question
  if (questionIndex === questions.length || time === 0) {
    quizEnd();
  } else {
    nextQuestion();
  }

};



//play "wrong"sound effect(icebox)
//else play right sound effect (icebox)


//function to end quiz
function quizEnd(){
  //stop timer
  clearInterval(timer);
  //show end screen
  endScreen.style.display = "inline";
  //show final score
  finalScore.innerHTML = score;
  //hide questions section
  questionsDiv.style.display = "none";

  saveHighscore();
}

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
function saveHighscore(){

//get value of input box for initials
let initials = document.getElementById("initials").value.trim();

console.log("user Score: " + initials);
//make sure value wasn't empty
 if(initials === ""){
  var modal = document.getElementById("myModal");
  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];
  submit.onclick = function() {
  modal.style.display = "block";
  }
  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
  modal.style.display = "none";
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
  }

  }
}


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

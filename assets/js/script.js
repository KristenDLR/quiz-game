//variables to keep track of quiz state, currentQuestion, time, timerID
let quentionIndex
let time
let score = 0;

//variable to reference DOM elements .getElementByID

//sound effect (ice box)

//Function to start quiz
  //hide start screen
  //un-hide questions section
  //start timer
  //show starting time
  //call function to get next Question


//function to get next Question
  //get current questio from array
  //update title current question
  //clear out any old question choices
  //loop over choices
    //create new button using css styling for each choice
      //create Element and set Attribute

      //attach click event listener to each choice
      //display on the page



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
  //update time --

  //check if user ran out of time, end quiz


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

 // either get scores from localstorage or set to empty array

 let stats = document.getElementById("stats");
 let orderList = document.createElement("ol");
 
 function showHighScores(){
   
 // either get scores from localstorage or set to empty array
  let allscores = JSON.parse(window.localStorage.getItem("allscores"));
  console.log("All scores: " + allscores[0].score);

       allscores.sort((a, b) => {
         return b.score -a.score;
       });
   hscores= JSON.stringify(allscores);
   console.log("In Order: " + hscores);
   console.log("all scores: " + allscores[0].initials)
   // sort highscores by score property in descending order
       for(i = 0; i < allscores.length; i++){

         if(i==10) {
            break;
         }else{
     
          let listScores = allscores[i].score;
            console.log("score: " + listScores);
   
           let listNames = allscores[i].initials.toUpperCase();
             console.log("score: " + listScores);
   
          // create li tag for each high score
         // display on page
           
            hsList = document.createElement("li");
            orderList.appendChild(hsList);
            hsList.innerHTML = listNames + " : " + listScores;
            stats.appendChild(orderList);
        }
  
      }
 }

// run function when page loads
showHighScores();
player = "X";
plays_left = 9;
document.getElementById("counter").innerHTML = plays_left

const play = (button) => {
  // alert("you have clicked on : " + button.id)
  if (button.value == "") {
    button.value = player;
    
    if(player == "X"){
      player = "O"
      button.style.backgroundColor = "red"
    } else{
      player = "X";
      button.style.backgroundColor = "blue"
      button.style.color = "white"
    }
    
  } else {
    alert("Please Select an empty box");
  }
  checkWinner();
};


const checkWinner = () => {
  plays_left -=1
  document.getElementById("counter").innerHTML = plays_left

  winner = document.getElementById("winner")
  c1 = document.getElementById("1").value;
  c2 = document.getElementById("2").value;
  c3 = document.getElementById("3").value;

  c4 = document.getElementById("4").value;
  c5 = document.getElementById("5").value;
  c6 = document.getElementById("6").value;

  c7 = document.getElementById("7").value;
  c8 = document.getElementById("8").value;
  c9 = document.getElementById("9").value;



  if (c1 != "") {
    if (c1 == c2 && c1 == c3) {
      winner.innerHTML = "<h1> Winner : " + c1 + "</h1>";
    } 
    else if (c1 == c4 && c1 == c7) {
      winner.innerHTML = "<h1> Winner : " + c1 + "</h1>";
    } 
    else if ( c1 == c5 && c1 == c9) {
      winner.innerHTML = "<h1> Winner : " + c1 + "</h1>";
    }
  } 
  if ( c2 != "" && c2 == c5 && c2 == c8 ) {
    winner.innerHTML = "<h1> winner : " + c2 + "</h1>"
  }
   if (c3 != ""){
    if( c3 == c5 && c3 == c7){
        winner.innerHTML = "<h1> Winner : " + c3 + "</h1>"
    }
    else if(c3 == c6 && c3==c9){
        winner.innerHTML = "<h1> Winner : " + c3 + "</h1>"
    }
  }
   if(c4 != "" && c4 == c5 && c4 == c6){
    winner.innerHTML = "<h1> Winner : " + c4 + "</h1>"
  }
   if(c7 != "" && c7 == c8 && c7 == c9){
    winner.innerHTML = "<h1> Winner : " + c7 + "</h1>"
  }

 if (plays_left < 1 ){  winner.innerHTML = "<h1> DRAW </h1>"} 

};

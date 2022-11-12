var randomNumber1 = Math.floor(Math.random() * 6) + 1;
//random num between 1 - 6

var randomImage = "dice" + randomNumber1 + ".png";

var randomImageSource = "images/" + randomImage;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);


var randomNumber2 = Math.floor(Math.random() * 6) + 1;
//random num between 1 - 6

var randomImage2 = "dice" + randomNumber2 + ".png";

var randomImageSource2 = "images/" + randomImage2;

var image2 = document.querySelectorAll("img")[1];

image1.setAttribute("src", randomImageSource2);

// if (randomNumber1 > randomNumber2){
//     document.querySelector("h1").innerHTML = "Player 1 wins";
// } else if (randomNumber2 > randomNumber1){
//     document.querySelector("h1").innerHTML = "Player 2 wins";
// } else {
//     document.querySelector("h1").innerHTML = "DRAW";
// }

//If player 1 wins
if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
  }
  else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
  }
  else {
    document.querySelector("h1").innerHTML = "Draw!";
  }
  
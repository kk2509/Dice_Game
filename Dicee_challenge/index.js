//alert("working");
function rollDice(){
var randomNumber1 = Math.floor(Math.random() * 6) + 1; // 1-6
var randomDiceImage = "dice" + randomNumber1 + ".png"; // dice1.png - dice6.png
var randomImageSource = "images/" + randomDiceImage; // images/dice1.png - images/dice6.png
document.querySelectorAll("img")[0].setAttribute("src", randomImageSource); // change image source
var randomNumber2 = Math.floor(Math.random() * 6) + 1; // 1-6
var randomDiceImage2 = "dice" + randomNumber2 + ".png"; // dice1.png - dice6.png
var randomImageSource2 = "images/" + randomDiceImage2; // images/dice1.png - images/dice6.png   
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2); // change image source
// if player 1 wins
if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins! 🚩";
}
// if player 2 wins 
else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
}
// if draw
else {
    document.querySelector("h1").innerHTML = "Draw! 🤝";
}
}

// Add the event listener to the button
document.getElementById("rollButton").addEventListener("click", function() {
// Dice1
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomImageSource = "./images/dice" + randomNumber1 + ".png";
var image1  = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource);

// Dice2
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomImageSource2 = "./images/dice" + randomNumber2 + ".png";
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImageSource2);

// Change h1
if(randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player1 Wins";
} else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player2 Wins";
} else {
    document.querySelector("h1").innerHTML = "Draw";
}
})

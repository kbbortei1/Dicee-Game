var randomNumber1 = Math.random();
randomNumber1 = randomNumber1 * 6;
n = Math.floor(randomNumber1) + 1;
console.log(n);

var randomDiceImage = "images/dice" + n + ".png";
document.querySelector(".img1").setAttribute("src",randomDiceImage);


var randomNumber2 = Math.random();
randomNumber2 = randomNumber2* 6;
n1 = Math.floor(randomNumber2) + 1;

var randomDiceImage1 = "images/dice" + n1 + ".png";
document.querySelector(".img2").setAttribute("src", randomDiceImage1);

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
}
else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
}
else {
  document.querySelector("h1").innerHTML = "Draw!";
}

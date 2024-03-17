var randomNumber1 = 0;
var randomNumber2 = 0;

window.onload = refreshMe;

function getRandomNumber() {
  return Math.floor(Math.random() * 6) + 1;
}

function refreshMe() {
  randomNumber1 = getRandomNumber();
  randomNumber2 = getRandomNumber();

  document
    .querySelector(".img1")
    .setAttribute("src", "./images/dice" + randomNumber1 + ".png");

  document
    .querySelector(".img2")
    .setAttribute("src", "./images/dice" + randomNumber2 + ".png");
}

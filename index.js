var randomNumber1 = 0;

window.onload = refreshMe;

function getRandomNumber() {
  return Math.floor(Math.random() * 6) + 1;
}

function refreshMe() {
  randomNumber1 = getRandomNumber();

  document
    .querySelector(".img1")
    .setAttribute("src", "./images/dice" + randomNumber1 + ".png");
}

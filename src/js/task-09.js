const body = document.body;
const textColor = document.querySelector(".color");
const button = document.querySelector(".change-color");

button.addEventListener("click", changeColor);

function changeColor(event) {
  body.style.backgroundColor = getRandomHexColor();
  textColor.textContent = getRandomHexColor()
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

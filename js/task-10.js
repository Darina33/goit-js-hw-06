const controls = document.getElementById("controls");
const input = document.querySelector("[type='number']");
const buttonCreate = controls.querySelector("[data-create]");
const buttonDestroy = controls.querySelector("[data-destroy]");
const boxes = document.getElementById("boxes");



buttonCreate.addEventListener("click", createBoxes);
buttonDestroy.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  amount = input.value;

  for (let i = 0; i < amount; i++) {
    const element = document.createElement("div");
    element.style.width = `${30 + 10 * i}px`
    element.style.height = `${30 + 10 * i}px`
    element.style.backgroundColor = getRandomHexColor();
    boxes.appendChild(element);
  }
}
 
function destroyBoxes() {
  while(boxes.firstChild) {
    boxes.removeChild(boxes.firstChild);
  }
}






function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

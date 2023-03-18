const input = document.getElementById("font-size-control")
const text = document.getElementById("text")

input.addEventListener('input', onSizeControl)

function onSizeControl(event) {
    text.style.fontSize = input.value + "px";
}
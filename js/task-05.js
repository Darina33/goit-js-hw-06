const input = document.getElementById("name-input");
const output = document.getElementById("name-output");

input.addEventListener('input', onInputChahge);

function onInputChahge(event) {
    if (event.currentTarget.value.trim() !== "") {
        output.textContent = event.currentTarget.value;
    }
    else {
       return output.textContent = 'Anonymous';
   }
}



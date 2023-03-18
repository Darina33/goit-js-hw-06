const input = document.getElementById("validation-input")
const length = input.dataset.length;

input.addEventListener('blur', onInputBlur) 

function onInputBlur(event) {
    if (input.value.length < length || input.value.length > length) {
        input.classList.add('invalid')
    } else {
        input.classList.remove('invalid')
        input.classList.add('valid')
    }
}
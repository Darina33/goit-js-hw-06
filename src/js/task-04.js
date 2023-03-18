let counterValue = 0;
const counter = document.getElementById("counter");
const value = document.getElementById("value");
const decrement = counter.firstElementChild;
const increment = counter.lastElementChild;




decrement.addEventListener('click', () => {
counterValue -= 1;
value.innerHTML = counterValue;
})

increment.addEventListener('click', () => {
counterValue += 1;
value.innerHTML = counterValue;
})
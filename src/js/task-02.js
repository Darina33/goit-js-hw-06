const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

for (const ingredient of ingredients) {
  const liEl = document.createElement("li");
  liEl.textContent = ingredient;
  liEl.classList.add('item')
  const listEl = document.getElementById("ingredients");
  listEl.appendChild(liEl);
}

console.log(document.getElementById("ingredients"));


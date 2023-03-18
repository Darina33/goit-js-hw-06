const liItem = document.querySelectorAll(".item")

console.log(`Number of categories: ${liItem.length}`);

liItem.forEach(element => {
    console.log(`Category: ${ element.firstElementChild.textContent }`);
    console.log(`Elements: ${element.lastElementChild.children.length}`)
});
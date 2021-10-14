//1)
const categoriesRef = document.querySelector('#categories');

const itemsEl = categoriesRef.children;
console.log(`Number of categories: ${itemsEl.length}`);

//2)

const titleRef = categoriesRef.querySelectorAll('h2');
titleRef.forEach(text => console.log(`Category: ${text.textContent}`));

const elements = categoriesRef.querySelectorAll('ul');
elements.forEach(elem => {const liElement = elem.children;(console.log(`Elements: ${liElement.length}`))})
// elements.forEach(elem => console.log(`Elements: ${elem.length}`));

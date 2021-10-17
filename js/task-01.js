//1)
const categoriesRef = document.querySelector('#categories');

const itemsEl = categoriesRef.children;
console.log(`Number of categories: ${itemsEl.length}`);

//2)

const elementsItem = categoriesRef.querySelectorAll('.item')
elementsItem.forEach((title) => {
    console.log(`Category: ${title.firstElementChild.textContent}
Elements: ${title.lastElementChild.childElementCount}`);
});


// const titleRef = categoriesRef.querySelectorAll('h2, ul');
// titleRef.forEach(text => console.log(`Category: ${text.textContent}`));
// titleRef.forEach(elem => {const liElement = elem.children;(console.log(`Elements: ${liElement.length}`))});
    
// const elements = categoriesRef.querySelectorAll('ul');
// elements.forEach(elem => {const liElement = elem.children;(console.log(`Elements: ${liElement.length}`))})
// elements.forEach(elem => console.log(`Elements: ${elem.length}`));

// const titleRef = categoriesRef.querySelectorAll('h2');
// titleRef.forEach(text => console.log(`Category: ${text.textContent}`));

// const elements = categoriesRef.querySelectorAll('ul');
// elements.forEach(elem => {const liElement = elem.children;(console.log(`Elements: ${liElement.length}`))})
// elements.forEach(elem => console.log(`Elements: ${elem.length}`));


// const arr = {
//     titleRef: categoriesRef.querySelectorAll('h2'),
//     elements: categoriesRef.querySelectorAll('ul'),
// }



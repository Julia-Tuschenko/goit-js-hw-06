function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const ref = {
  number: document.querySelector("input"),
  btCreate: document.querySelector("[data-create]"),
  btDestroy: document.querySelector("[data-destroy]"),
  boxes: document.querySelector("#boxes"),
 }
 
 const INTIAL_BOX_SIZE = 30;
 const BOX_SIZE_STEP = 10;
 
 let boxSize = INTIAL_BOX_SIZE;
 
 function createBox(amount) {
   for (let i = 1; i <= amount; i += 1) {
     const box = `<div style="width: ${boxSize}px; height: ${boxSize}px; background-color:${getRandomHexColor()};"></div>`;
     ref.boxes.insertAdjacentHTML('beforeend', box);
     boxSize += BOX_SIZE_STEP;
   }
 }
 
 function resetBoxSize() {
   boxSize = INTIAL_BOX_SIZE;
 }
 
 function destroyBox() {
    ref.boxes.innerHTML = '';
 };
 
 ref.btCreate.addEventListener("click", () => {
   createBox( ref.number.value);
 });
 console.log();
 ref.btDestroy.addEventListener("click", () => {
   destroyBox();
    ref.number.value = "";
 });








// const refs = {
//   controlsEl: document.querySelector('#controls'),
//   btnCreate: document.querySelector('button[data-create]'),
//   btnDestroy: document.querySelector('button[data-destroy]'),
//   boxes: document.querySelector('#boxes'),

// }
// refs.btnCreate.addEventListener('click', onCollection)

// function onCollection(evt){
//   const  divConteiner = [evt];

//   const imagesRef  = divConteiner
//   .map(element => 
//     `<div class="div" ${element}></div>`)
//   .join("");

//   return imagesRef;
// };

// const render = document.querySelector('button[data-create]');
// const destroy = document.querySelector('button[data-destroy]');
// const boxes = document.getElementById("#boxes");

// render.addEventListener("click", getAmount);
// destroy.addEventListener("click", destroyBoxes);

// function getAmount() {
//   var amount = +document.querySelector("#controls input").value;
//   createBoxes(amount);
// }

// function createBoxes(amount) {
//   var basicSize = 30;
//   var fragment = document.createDocumentFragment();
//   for (var i = 0; i < amount; i++) {
//     var size = basicSize + i * 10;
//     var div = document.createElement("div");
//     div.style.cssText = `width: ${size}px; height: ${size}px; background-color: rgba( ${random()} , ${random()} , ${random()} )`;
//     fragment.appendChild(div);
//   }
//   boxes.appendChild(fragment);
// }

// function destroyBoxes() {
//   boxes.innerHTML = "";
// }

// function random() {
//   return Math.floor(Math.random() * 256);
// }
























// console.log(refs);
//  const mySet = new Set();

// refs.btnCreate.addEventListener('click', ready);

// const amount=0 ;

// $(document).ready(function() {
//     for(const i = 1; i <= amount; i++) {
//       const div = document.getElementById('test');
//         div.innerHTML = div.innerHTML + '<div id="boxes' + i + ' class="div">new divs</ div>';
//      } 
// });










// const parentDiv = document.getElementById('test');
// for (const i = 1; i > 0; i++ ) {
//   const newDiv = document.createElement('div');
//     newDiv.innerHTML = 'Testing';
//     newDiv.classList.add("div");
//     parentDiv.appendChild(newDiv);
// }


// console.log(parentDiv);


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  controlsEl: document.querySelector('#controls'),
  btnCreate: document.querySelector('button[data-create]'),
  btnDestroy: document.querySelector('button[data-destroy]'),
  boxes: document.querySelector('#boxes'),

}
// console.log(refs);
//  const mySet = new Set();

refs.btnCreate.addEventListener('click', onCreateBoxes);

function onCreateBoxes(){
  createBoxes();
}

const createBoxes = (amount) => {
  const createBoxes = document.createElement("div");
  createBoxes.add(amount);
}

console.log(createBoxes);
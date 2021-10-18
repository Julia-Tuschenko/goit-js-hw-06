function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const amount = 0;


const refs = {
  controlsEl: document.querySelector('#controls'),
  btnCreate: document.querySelector('button[data-create]'),
  btnDestroy: document.querySelector('button[data-destroy]'),
  boxes: document.querySelector('#boxes'),

}
// console.log(refs);
//  const mySet = new Set();

refs.btnCreate.addEventListener('click', onDivAmount);

function onDivAmount(){
  const createBoxes = `<div class="div"></div>`;
  onAmountCreatBoxes();
  return createBoxes * onAmountCreatBoxes;
}

function onAmountCreatBoxes (event){
  if(event){
    amount = event;
  };
}





console.log(onDivAmount);
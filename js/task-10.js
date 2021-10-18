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

refs.btnCreate.addEventListener('click', ready);

const amount=0 ;

$(document).ready(function() {
    for(const i = 1; i <= amount; i++) {
      const div = document.getElementById('test');
        div.innerHTML = div.innerHTML + '<div id="boxes' + i + ' class="div">new divs</ div>';
     } 
});










// const parentDiv = document.getElementById('test');
// for (const i = 1; i > 0; i++ ) {
//   const newDiv = document.createElement('div');
//     newDiv.innerHTML = 'Testing';
//     newDiv.classList.add("div");
//     parentDiv.appendChild(newDiv);
// }


// console.log(parentDiv);


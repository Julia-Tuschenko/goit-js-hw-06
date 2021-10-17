function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const colorBody = document.querySelector('body');
const btnChangeColor = colorBody.querySelector('.change-color');
const spanText = colorBody.querySelector('.color');

console.log(colorBody);


btnChangeColor.addEventListener('click', onColorImprovisation);



function onColorImprovisation(color){
  colorBody.style.backgroundColor = getRandomHexColor(color);
  color = getRandomHexColor();
  spanText.textContent = color;

}

console.log(btnChangeColor);





// function onColorImprovisation(event){
//   colorBody.style.backgroundColor = getRandomHexColor(event);
//   spanText.textContent = colorBody.style.backgroundColor;

// }

// console.log(btnChangeColor);


const fondSizeControl = document.querySelector('#font-size-control');
const textSpan = document.querySelector('#text');

fondSizeControl.value = Number.parseInt(window.getComputedStyle(textSpan).fontSize);

fondSizeControl.addEventListener('input', onInputChangeText);

function onInputChangeText(event){
    textSpan.style.fontSize = event.currentTarget.value + 'px' ;
}







// const fontSizeControl = document.querySelector("#font-size-control");
// const textRef = document.querySelector("#text");
// fontSizeControl.value = Number.parseInt(window.getComputedStyle(textRef).fontSize);

// fontSizeControl.addEventListener('input', onInputChangeText);

// function onInputChangeText(event){
//     textRef.style.fontSize = event.currentTarget.velue + `px`;
// }


// inputForm.addEventListener('input', (elem) => {
//     // elem = inputForm .getAttribute('range');
//     textRef.style.fontSize = parseInt(elem.currentTarget.value);
// }
// );

// console.log(inputForm);

// function textRefFontSize(size){
//     textRefNumber = parseInt(size.value);
//     textRef.value = textRefNumber;
// };


// function onTextRefChange(elem){
//     textRef.style.fontSize = Number(elem);
// }



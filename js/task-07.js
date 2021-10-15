const inputForm = document.querySelector("#font-size-control");
const textRef = document.querySelector("#text");



inputForm.addEventListener('input', (elem) => {
    // elem = inputForm .getAttribute('range');
    textRef.style.fontSize = parseInt(elem.currentTarget.value);
}
);

console.log(inputForm);

// function textRefFontSize(size){
//     textRefNumber = parseInt(size.value);
//     textRef.value = textRefNumber;
// };


// function onTextRefChange(elem){
//     textRef.style.fontSize = Number(elem);
// }



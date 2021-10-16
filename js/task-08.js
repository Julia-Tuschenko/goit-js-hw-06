const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);



function onFormSubmit(event){
event.preventDefault();
const formElements = event.currentTarget.elements;

const email = formElements.email.value;
const password = formElements.password.value;

const formDate = {
    email,
    password,
};

if(email === `` || password === ``){
    alertText(formDate);
}
console.log(formDate);

formFinish();
}

function alertText (){
    window.alert(`Всі поля повинні бути заповнені`);
};

function formFinish(){
    document.getElementById(form).requestFullscreen();
}



// window.alert(`Всі поля повинні бути заповнені`)
// const formData = new FormData(event.currentTarget);
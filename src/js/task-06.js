let inputElem = document.querySelector('#validation-input');
let inputLength = inputElem.dataset.length;

inputElem.addEventListener("blur", event => {
    const text = event.target.value;
    if(text.length < inputLength){
    inputElem.classList.add('invalid');
    inputElem.classList.remove('valid');
}   else {
    inputElem.classList.remove('invalid');
    inputElem.classList.add('valid'); 
    }
});




let outputElem = document.querySelector('#name-output');
let inputElem = document.querySelector('#name-input');

inputElem.addEventListener("input",  onInputChange);

function onInputChange(event){
inputElem !== ' ' ? (outputElem.textContent = event.currentTarget.value) : 'Anonymous';    
};

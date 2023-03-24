let outputElem = document.querySelector('#name-output');
let inputElem = document.querySelector('#name-input');

inputElem.addEventListener("input", (event) => {
outputElem.textContent = event.currentTarget.value;
if(outputElem.textContent == ' '){
outputElem.textContent = 'Anonymous' };    
});

let counterValue = document.querySelector('#value');
let valueElement = Number(document.querySelector('#value').textContent);
const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
decrementBtn.addEventListener("click", event => {
    valueElement -= 1;
    counterValue.innerText = valueElement;
  });
incrementBtn.addEventListener("click", event => {
    valueElement += 1;
    counterValue.innerText = valueElement;
  });
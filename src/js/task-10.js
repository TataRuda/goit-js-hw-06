function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');
const boxes = document.getElementById('boxes');
const amount = document.querySelector('input[type="number"]');

amount.onblur = e => {
console.log(e.target.value)
}

function createBoxes(amount){
  const boxes = [];

  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");

    box.style.width = `${30 + 10 * i}px`;
    box.style.height = `${30 + 10 * i}px`;
    box.style.backgroundColor = getRandomHexColor();

    boxes.push(box);
  }

  return boxes;
}

const destroyBoxes = () => {
	boxes.innerHTML = ''
}

createBtn.addEventListener('click', () => {
	let boxesToAdd = createBoxes(amount.value)
	boxes.append(...boxesToAdd)
})

console.log(amount.value)

destroyBtn.addEventListener('click', () => {
	destroyBoxes.call()
})
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
  };

let size = 20;

const createBoxes = () => {
  for (let i = 0; i < amount.value; i++) {
    const box = document.createElement("div");
    boxes.append(box);
    box.setAttribute(
      "style",
      "width: " +
        (size += 10) +
        "px;" +
        " height: " +
        size +
        "px;" +
        " background-color: " +
        getRandomHexColor()
    );
  }
}

const destroyBoxes = () => {
	boxes.innerHTML = '';
  size = 20;
  amount.value = '';
};

createBtn.addEventListener('click', createBoxes);
destroyBtn.addEventListener('click', destroyBoxes);


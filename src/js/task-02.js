const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

function makeList() {
const list = document.getElementById("ingredients");
let li;
for (let i = 0; i < ingredients.length; i++) {
  li = document.createElement("li");
  li.appendChild(document.createTextNode(ingredients[i]));
  list.appendChild(li);
} 
}
window.onload = makeList;

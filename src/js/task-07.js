const textInput = document.getElementById("text");
const fontSizeInput = document.getElementById("font-size-control");

textInput.style.fontSize = fontSizeInput.value + "px";

fontSizeInput.addEventListener('input', (event) => {
const size = fontSizeInput.value;
textInput.style.fontSize = size + "px";
});

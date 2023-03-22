const textInput = document.getElementById("text");
const fontSizeInput = document.getElementById("font-size-control");

fontSizeInput.addEventListener('input', (event) => {
const size = fontSizeInput.value;
textInput.style.fontSize = size + "px";
});

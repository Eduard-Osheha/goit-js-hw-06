// Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input), 
// підставляє його поточне значення в span#name-output. 
// Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".


// textInput.addEventListener("input", (event) => {
//   output.textContent = event.currentTarget.value;
// });

const inputRef = document.querySelector("#name-input");
const outputRef = document.querySelector("#name-output");

function onInputChange (event) {
  outputRef.textContent = 
    event.currentTarget.value.trim() !== ""
    ? event.currentTarget.value
    : "Anonymous"
}

inputRef.addEventListener("input", onInputChange);

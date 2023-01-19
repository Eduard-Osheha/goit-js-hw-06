// Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input), 
// підставляє його поточне значення в span#name-output. 
// Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".


// textInput.addEventListener("input", (event) => {
//   output.textContent = event.currentTarget.value;
// });

const inputRef = document.querySelector("#name-input");
const outputRef = document.querySelector("#name-output"); 

function onInputChange (event) {
    outputRef.textContent = event.currentTarget.value;
};
 
function onInputIsEmpty(event) {
  inputRef.placeholder !== "Please enter your name"
    ? (outputRef.textContent = event.currentTarget.value)
    : (outputRef.textContent = "Anonymous");
};

inputRef.addEventListener("input", onInputChange);
// inputRef.addEventListener("input", onInputIsEmpty);
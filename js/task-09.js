// Напиши скрипт, який змінює кольори фону елемента <body> через інлайн-стиль по кліку на button.change-color і виводить значення кольору в span.color.

const body = document.body
const changeBgnColorButton = document.querySelector(".change-color");
const currentColorText = document.querySelector(".color");
// body.style.backgroundColor

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function changeColor(event) {
  const currentColor = getRandomHexColor();
  body.style.backgroundColor = currentColor;
  currentColorText.textContent = `${currentColor}`;
}

changeBgnColorButton.addEventListener("click", changeColor);
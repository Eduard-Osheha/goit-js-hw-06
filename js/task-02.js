// Напиши скрипт, який для кожного елемента масиву ingredients:

// Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul#ingredients.


const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const arrayOfNewItems = [];

ingredients.forEach(function (value) {
  const newItem = document.createElement("li");
  newItem.classList.add("item");
  newItem.textContent = value;
  arrayOfNewItems.push(newItem);
});

const listOfIngredient = document.querySelector("#ingredients");
listOfIngredient.append(...arrayOfNewItems);


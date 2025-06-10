// 1. gitElementById():- Selects an element by its id. It returns a single DOM element
const greating = document.getElementById("greating");
console.log(greating.textContent);

// 2. getElementByClassName():- Select elements by the class. It returns a live HTMlCollection (array-like object).
const items = document.getElementsByClassName('item');
console.log(items[0].textContent);

// 3. getElemntByTagName():- Select elements by their tag name. Return a live HTMLCollection.
const para = document.getElementsByTagName('p');
console.log(para[1].textContent);


// 4. querySelector():- Select the first matching element using a CSS selector.
const sepecial = document.querySelector('.container #sepecial')
console.log(sepecial.textContent);

// 5. quesrySelectorAll():- Selects all match element using a CSS selector. Return a NodeList(not live, unlike HTMLCollection)
const menuItems = document.querySelectorAll('.menu-item');
console.log(menuItems);
menuItems.forEach((item) => console.log(item.textContent));
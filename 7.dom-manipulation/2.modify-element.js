// Changing content
const message = document.getElementById("message");
message.textContent = "New Message"; // changes text

message.innerHTML = "<b>New Message 1</b>";

// Updating Attributes
const image = document.getElementById("image");
image.setAttribute("alt", "new image");
image.setAttribute("src", "new.jpg");

console.log(image.getAttribute("src"));

// Manipulating syles:- Use the style property tochange inline styles
const styled = document.getElementById("styled");
styled.style.color = "blue";
styled.style.fontSize = "30px";

// Adding / Removing class
// use classList to addEventListener, remove or toggle classes. 
const box = document.getElementById('box');
box.classList.add('shadow');  // adds 'shadow' class 

box.classList.remove('red-box');  // remove

box.classList.toggle('highlight');  // toggles 'Highlight' class
box.classList.toggle('shadow');  // toggles 'Highlight' class

// Adding & Removing Elements
// use appendChild, removeChild, innerHTML, etc.
const list = document.getElementById("list");
const newItem = document.createElement('li'); // creates a new element
newItem.textContent = "Item 2";
list.appendChild(newItem);  // adds a new item

list.removeChild(list.firstElementChild);  // remve first item

// list.innerHTML = "<li>Item 4</li> <li>Item 5</li>";

const newItem3 = document.createElement('li'); // creates a new element
newItem3.textContent = "Item 3";
list.insertBefore(newItem3, list.firstChild); // insert 'Item 3' before 'Item 2' 

// remove():- remove an element directly
list.remove() // remove the ul
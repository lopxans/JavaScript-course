// 1. Declare three variables: firstName, lastName, and age with appropriate data types.
let firstName = "Sulav";
let lastName = "Tamang";
let age = 23;


// 2. Reassign a let variable and show it in a console.log.
let fruit = "Apple";
fruit = "Mango";
console.log(fruit);


// 3. Try to reassign a const variable and observe what happens.
const pi = 3.14;
// pi = 5.2; // ❌TypeError: Assignment to constant variable.


// 4. Declare a variable using var inside a block (if or for) and access it outside the block.
if (true){
    var message = "Hello from var!";
}
console.log(message); // output: "Hello from var!"


// 5. Declare a variable using let inside a block and try to access it outside the block.
if(true){
    let message1 = "Hello from let!";
}
// console.log(message1); // output: Error


// 6. Use typeof to log the data types of: a string, number, boolean, undefined, and null.
console.log(typeof "Hello");
console.log(typeof 123);
console.log(typeof true);
console.log(typeof undefined);
console.log(typeof null);


// 7. What will happen if you access a var variable before declaring it? Try it.
console.log(x); // undefined (hoisted)
var x = 5;


// 8. What will happen if you access a let or const variable before declaring it? Try it
// console.log(y); // ❌ ReferenceError: Cannot access 'y' before initialization
let y = 10;

// console.log(z); // ❌ ReferenceError: Cannot access 'z' before initialization
const z = 20;


// 9. Create an object named car with properties brand, model, and year using const. Try to modify a property.
const car = {
    brand: "Tesla",
    model: "Cyper Trunk",
    year: 2022,
}
car.year = 2025;
console.log(car);


// 10. Create an array using const and add a new element using .push(). Does it work? Why?
const person = ["Sulav", "Selina", "Sunmaya", "Suren"];
person.push("Raju");
console.log(person);


// 11. Declare the same variable name twice using var — is it allowed? Try the same with let.
var count = 1;
var count = 2; // ✅ Allowed

// let score = 10;
// let score = 20; // ❌ SyntaxError: Identifier 'score' has already been declared



// 12. Write a function where a variable is declared with var and another with let. Log both variables inside and outside the function.
function testScope(){
    var a = 1;
    let b = 3;
    console.log(a); // output: 1
    console.log(b); // output: 3
}
testScope();
// console.log(a); // ❌ ReferenceError
// console.log(b); // ❌ ReferenceError


// 13. Create a variable without using var, let, or const. What kind of scope does it have?
function globalLeak() {
  leaked = "I'm global!";
}
globalLeak();
console.log(leaked); // ✅ Accessible globally (bad practice!)


// 14. Create a variable named greeting and assign "Hello" to it. Then reassign it to "Hi" and log both values.
let greeting = "Hello";
console.log(greeting);
greeting = "Hi";
console.log(greeting);


// 15. Declare a const object inside a function. Can you reassign the object itself inside that function? Try it.
function testConstObject(){
    const people = {name: "Sulav"};
    people.name = "Selin"; // ✅ OK (modifying property)

    // person = { name: "Charlie" }; // ❌ TypeError: Assignment to constant variable.
    console.log(person);
}
testConstObject();


// 16. Write a program to print your name, age, and favorite color using variables.
let name1 = "Sulav Tamang";
let age2 = 23;
let favoriteColor = "Green";
console.log(`Name: ${name1}, Age: ${age2}, Color: ${favoriteColor}`)

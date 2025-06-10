// object destructuring:- Extracts properties from an object into variables
const user = {
    name1: "Sulav",
    age: 23
}
const {name1, age} = user;
console.log(`My name is ${name1}. I'm ${age} old.`);

// Array destructuring:- Extracts values from an array into variables.
const colors = ["Red", "Green", "Blue"];
const [first, second] = colors;
console.log(first, second);
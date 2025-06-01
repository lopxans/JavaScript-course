/* What is an Array in JavaScript?
An array is a special variable that can store multiple values in a single variable. */

// 1. Create Arrays
let numbers = [10, 20, 30]; // Array of numbers
let fruits = ["Apple", "Mango"]; // Array of strings
let mixed = [1, "Hello", true]; // Mixed types
let empty = []; // Empty array

// 2. Access Array Elements
fruits = ["Apple", "Mango", "Banana"];

console.log(fruits[0]); // Apple
console.log(fruits[2]); // Banana

// 3. Change Array Elements
fruits = ["Apple", "Mango", "Banana"];

fruits[1] = "Orange";
console.log(fruits); // ["Apple", "Orange", "Banana"]

/* 4. Add or Remove Elements
    | Method      | Description               |
    | ----------- | ------------------------- |
    | `push()`    | Add at the end            |
    | `pop()`     | Remove from the end       |
    | `unshift()` | Add at the beginning      |
    | `shift()`   | Remove from the beginning | */
fruits = ["Apple", "Mango"];

fruits.push("Banana"); // ["Apple", "Mango", "Banana"]
fruits.pop(); // ["Apple", "Mango"]
fruits.unshift("Lemon"); // ["Lemon", "Apple", "Mango"]
fruits.shift(); // ["Apple", "Mango"]

// 5. Array Length
fruits = ["Apple", "Mango", "Banana"];
console.log(fruits.length); // 3

/* 7. Common Array Methods 
    | Method              | Example                    | Result                          |
    | ------------------- | -------------------------- | ------------------------------- |
    | `includes()`        | `fruits.includes("Apple")` | `true` if found                 |
    | `indexOf()`         | `fruits.indexOf("Mango")`  | returns index or -1             |
    | `join()`            | `fruits.join(", ")`        | turns array into string         |
    | `slice(start, end)` | `fruits.slice(0, 2)`       | new array from index 0 to 1     |
    | `splice()`          | `fruits.splice(1, 1)`      | removes element(s), or adds too |
*/

// 8. Advanced Array Methods
// a. map(): Modify and return a new array
let number = [1, 2, 3];
let doubled = number.map((n) => n * 2); // [2, 4, 6]
console.log(doubled);

// b. filter(): filter base on condidon
let nums = [1, 2, 3, 4, 5];
let even = nums.filter((n) => n % 2 === 0); // [2, 4]
console.log(even);

// c. reduce(): Reduce to a single value
nums = [1, 2, 3, 4, 5];
let total = nums.reduce((sum, num) => sum + num, 0); // 15
console.log(total);

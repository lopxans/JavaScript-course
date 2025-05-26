// Pre-increment:- Icrement the value of the variable before it is used in the expression.
let x = 5;
console.log(++x); // output: 6 (x is incremented before being logged)
console.log(x); // output: 6

// Post-increment:- Increments the value of the variable after it is used in the expression.
x = 5;
console.log(x++); // output: 5 (x is logged first, then incremented)
console.log(x); // output: 6 (x is now incremented)


// Pre-decrement:- Decrement the value of the variable before it is used in the expression.
let y = 5;
console.log(--y); // output: 4 
console.log(y); // output: 4

// Post-decrement:- Decrement the value of the variable after it is used in the expression.
y = 5;
console.log(y--); // output: 5 
console.log(y); // output: 4 


// examples
let a = 3;
let b = ++a +2; // pre-increment: a becomes 4, b = 4 + 2
console.log(a); // output: 4
console.log(b); // output: 6

a = 3;
let c = a++ + 2; // post-increment: a becomes 3, b = 3 + 2
console.log(a); // output: 3
console.log(c); // output: 5

let p = 3;
let q = --a +2; // post-decrement: p becomes 2, q = 2 + 2
console.log(p); // output: 2
console.log(q); // output: 4

p = 3;
let r = a-- +2; // post-decrement: p becomes 3, r = 3 + 2
console.log(p); // output: 3
console.log(r); // output: 5

/* Edge cases
Increment/Decrement on Non-Numeric values
JavaScript automatically converts non-numeric values to numbers when using ++ or --
*/
let str = "5";
str++;
console.log(str); //output: 6 (string "5" is converted to number 5)

let bool = true;
bool++;
console.log(bool); // output: 2

let notNumber = "Hello";
notNumber++;
console.log(notNumber); // output: NaN

// Increment/Decrement with undefined or null:
let val;
val++;
console.log(val); // output: NaN (undefined becomes NaN)

val = null;
val++;
console.log(val); // output: 1 (null is treated as 0)


// Real world apps exaplse
// meaning counters
let cartItems = 0;

// add items to cart 
cartItems++;
console.log(cartItems);

// remove items to cart
cartItems--;
console.log(cartItems);


// array indexing 
let fruits = ['apple', 'banana', 'cherry'];
let index = 0;

// access the first fruit, & then move to the next 
console.log(fruits[index++]); // output: apple
console.log(fruits[index]);  // output: banana

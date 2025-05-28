/* Loops:- 
* Loop in JavaScript are used to execute a block of code reapeatedly until aspecified condition is met. They are essential for tasks like iterating overdata, automating
* repetive actions, or performing calculations.
*/

/* 1. for loop:- 
* Block of code repeatedly...used when number of iterations is known which means Executes a block of code a specific numbers of times. 
* Use Case:- When we know the number os iteratons.
*/
for(let i=1; i<=5; i++){
    console.log("for loop number: ",i);
}

/* 2. while loop:- 
* Executes a block of code as long as the condition is true. 
* Use case: when the number of iterations is not fixed and depends on a condition, such as reading user input until valid. 
*/
let i = 1;
while(i <= 5){
    console.log('while loop number: ', i);
    i++;
}

/* 3. do...while loop:- 
* similar to while, but the block executes at least once, even if the condition is false.
* Use Case: When the code must execute at least once.
*/
i = 1;
do{
    console.log('do...while loop number: ', i);
    i++;
}while(i <= 5);


/* 4. for...in loop:-
* Iterates over the keys/properties of an abject.
* Usecase:- used for objects, but not suitable for arrays
*/
// example 1: with array
const fruits = ["apple", "banana", "cherry"];
for(let fruit in fruits){
    console.log("for...in loop", fruits[fruit]);
}
// example 2: with object
const person1 = {
    name: "Sulav",
    age: 23,
    country: "Nepal",
}
for(let key in person1){
    console.log(key, ":", person1[key]);
}


/* 5. for...of loop:-
* iterates over values in iterable objects like arrays, string, or maps.
* Use Case:- Use for arrays, string or other iterables.
*/
// example 1: with array
const fruits1 = ["apple", "banana", "cherry"];
for(let fruit of fruits1){
    console.log("for of loop: ", fruit);
}

// example 2: with string 
const str = "Hello";
for (let letter of str){
    console.log(letter)
}

// example 3: with map
const user = new Map([
    ["name", "Sulav"],
    ["age", 25],
    ["city", "Kavre"]
]);
for (let [key, value] of user){
    console.log(`${key}: ${value}`);
}

// entries() method returns an iterator that contains both the index and the value.
for(const [index, fruit]  of fruits1.entries()){
    console.log(`Index: ${index}, Value: ${fruit}`);
}

// Advance concepts in loops
// 1. break statement:- Exit the loop immediately when break condition is met.
for(let k=1; k<=10; k++){
    if(k === 6) break;
    console.log(k); // output: 0, 1, 2, 3, 4, 5
}

// 2. continue statement:- Skip the current iteration adn moves to next one.
for(let k=1; k<=10; k++){
    if(k === 6) continue;
    console.log(k); // output: 0, 1, 2, 3, 4, 5, 7, 8, 9, 10
}

// 3. nested loops:- loops within loops
for(let a=1; a<=3; a++){
    for(let b=1; b<=2; b++){
        console.log(`A: ${a}, B: ${b}`);
    }
}


// Real world Eexample: 

/* 1. for loop:-
* We want to display a countdown timmer on a webpage
*/
for(let i=5; i>0; i--){
    console.log("Countdown: ", i);
}
console.log("Go!");


/* 2. while loop
* A user wants to deposit money until their savings reach a target ammout.
*/
let saving = 0;
const target = 500;
while(saving <= target){
    console.log(`Current savings: $${saving}`);
    saving += 100;
}
console.log("Target reached!");


/* 3. do...wile loop:-
* A child insists on playing a game at least once, and then continues as long as they have energy.
*/
let energy = 3;
do{
    console.log("Playing the game...");
    energy--;
}while(energy > 0);
console.log("Game over. I'm tired!");


/* 4. break in a loop:-
* Search for a particular book in a collection and stop when you fint it.
*/
const books = ["Math", "Science", "History", "English"]
const bookToFind = "History";
for(let book of books){
    if(book === bookToFind){
        console.log(`Find the book: ${book}`);
        break;
    }
}

/* 5. continue in a Loop
* print all numbers from 1 to 10 but skip even numbers.
 */
for(let i=1; i<=10; i++){
    if(i % 2 ===0){
        continue;
    }
    console.log(`Odd number: ${i}`);
}

/* Nested Loops
* Print a 3*3 seating arrangement.
 */
for (let row=1; row<=3; row++){
    for(let seat=1; seat<=3; seat++){
        console.log(`Row ${row}, Seat: ${seat}`);
    }
}
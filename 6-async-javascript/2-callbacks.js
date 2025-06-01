/* Callback:-
ans: A callback is function passed as an argument to another function, which is called after tha main task is done.
* JavaScript uses callbacks to handle tasks that take time (like loading, fetching, uploading). */

// Syntax:
function greet(name, callback) {
  console.log("Hello " + name);
  callback(); // Call the callback function
}

function sayBye() {
  console.log("Goodbye!");
}

greet("Sulav", sayBye);
/* Use Cases of Callbacks
  1. Asynchronous operations (like APIs, file reading)
  2. Event handling (clicks, form submit)
  3. Array methods (forEach, map, filter, etc.)
  4. Custom functions needing actions after some process
  5. Promises and async/await are built over callback concepts */

//  Real-World Callback Examples:

// 1. Files Upload Complete
function uploadFile(callback) {
  setTimeout(() => {
    console.log("Files uploaded");
  }, 1000);
}
uploadFile(() => {
  console.log("Show Success message");
});

// 2. User login and Show Dashboard
function loginUser(callback) {
  setTimeout(() => {
    console.log("User Logged in");
    callback();
  }, 1000);
}
loginUser(() => {
  console.log("Show Success message");
});

// 3. Show a simple user data fetch
function fetchUserDAta(userId, callback) {
  setTimeout(() => {
    if (userId) {
        const user = {
            id: userId,
            name: "Ram",
            email: "ram@gmail.com"
        }
        callback(null, user);
    }else{
        callback(new Error('Invalid User ID'), null);
    }
  }, 1000);
}

fetchUserDAta(1, (error, user) => {
  if(error){
    console.log("Error fetching user: ", error);
  }else{
    console.log("User: ", user);
  }
});

// 4.  Logical – Custom Calculator with Callback
function calculator(a, b, operation) {
  return operation(a, b); // logical use
}

function add(x, y) {
  return x + y;
}

function multiply(x, y) {
  return x * y;
}

console.log(calculator(5, 3, add));       // 8
console.log(calculator(5, 3, multiply));  // 15


// 5. Logical – Loop & Callback
function loopAndApply(arr, callback){
  for (let i=0; i<arr.length; i++){
    callback(arr[i]);
  }
}

loopAndApply([1, 2, 3], (item)=>{
  console.log(item *2);
});

// 6. Logical – Validate Input using Callback
function validateInput(input, callback){
  if(typeof input === "string" && input.trim() !== ""){
    callback(true);
  }else{
    callback(false);
  }
}

validateInput("sulav", (isValid)=>{
  console.log(isValid? "valid input" : "Invalid input");
})



/* Summary
| Topic          | Description                                               |
| -------------- | --------------------------------------------------------- |
| **Definition** | Function passed as argument and executed later            |
| **Syntax**     | `function main(callback) { callback(); }`                 |
| **Use Cases**  | Async code, events, array methods, modular logic          |
| **Examples**   | API call, event listener, calculator, looping, validation |   */
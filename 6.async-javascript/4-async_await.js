/* Async & Await:- async/await is a modern way to write asynchronous code. 
It makes code look like it's synchronous (normal code), but it works asynchronously.

It works with Promises, and makes them easir to read and write.
*/

// Syntax:
async function myFunction() {
  try {
    let result = await someAsyncTask();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

/* Use Cases of async/await
1. Fetching API data
2. Waiting for multiple async operations
3. Login/authentication
4. File upload/download
5. Delay-based or dependent tasks */

// Real-World Async/Await Examples:

// Example 1: Real-world – Fetch API Data
const person = {
  username: "sulav",
  age: 23,
  email: "sulav@example.com",
};

async function fetchUser(person) {
  try {
    const response =
      await `Name: ${person.username}, Age: ${person.age}, Email: ${person.email}`;
    console.log(response);
  } catch (error) {
    console.error("Error fetching user:", error);
  }
}

fetchUser(person);

// Example 2: Real-world – Simulate Order Delivery
function placeOrder() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Order delivered!");
    }, 1000);
  });
}

async function handleOrder() {
  console.log("Placing order...");
  const message = await placeOrder();
  console.log(message);
}

handleOrder();

//  Example 3: Logical – Math Power Calculator
function power(base, exponent) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(Math.pow(base, exponent));
    }, 1000);
  });
}
async function calculatePower(params) {
  const result = await power(2, 3);
  console.log("2^3 =", result);
}
calculatePower();

// Example 4: Logical – Validate and Format Name
function formatName(name) {
  return new Promise((resolve, reject) => {
    if (typeof name === "string" && name.trim() !== "") {
      resolve(name.trim().toUpperCase());
    } else {
      reject("Invalid name!");
    }
  });
}

async function proceeName(params) {
  try {
    const name = await formatName("sulav");
    console.log("Formateed name ", name);
  } catch (error) {
    console.log("catch error: ", error);
  }
}
proceeName();

// Example 5: Logical – Await Multiple Tasks
function task(id, delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Task ${id} done`);
    }, delay);
  });
}

async function doTastks() {
  const t1 = await task(1, 1000);
  const t2 = await task(2, 2000);
  const t3 = await task(3, 3000);

  console.log(t1);
  console.log(t2);
  console.log(t3);
}
doTastks();


// Example 6: Logical – Fetch user data
function fetchUserData(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (userId) {
        const user = {
          id: userId,
          name: "Ram",
          email: "ram@gmail.com",
        };
        resolve(user);
      } else {
        reject(new Error("Invalid User ID"), null);
      }
    }, 1000);
  });
}

async function asynTaskOperation() {
  try {
    const result1 = await fetchUserData(1);
    console.log("Result 1: ", result1);
    const result2 = await fetchUserData(2);
    console.log("Result 2: ", result2);
    const result3 = await fetchUserData(3);
    console.log("Result 3: ", result3);
    // const result4 = await Promise.all([]);
  } catch (error) {
    console.log("Catch error: ", error);
  }
}
asynTaskOperation();


// Practice from teacher 
// 1. async function promise 
async function getData() {
  let promise = new Promise((resolve) => {
    setTimeout(() => resolve("Data received"), 5000);
  });

  let result = await promise;
  console.log(result);
}
getData();
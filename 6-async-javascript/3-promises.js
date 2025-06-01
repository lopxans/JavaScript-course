/* Promises:- A Promise is an object that repreents a value that will be available now, later, or never. it hase 3 states:
1. Pending
2. Resolved (Success)
3. Rejected (Error) */
let shouldRun = false;
if (shouldRun) {
  // syntax
  let myPromise = new Promise((resolve, reject) => {
    // async task
    if (success) {
      resolve("Success message");
    } else {
      reject("Error message");
    }
  });
  myPromise
    .then((result) => console.log(result))
    .catch((error) => console.log(error));
}

/* Use Cases of Promises
  1. Fetching data from an API
  2. Reading files (in Node.js)
  3. Waiting for animations
  4. Loading images
  5. Any async logic (like payment, validation, etc.) */

// Real-World Promise Examples

// 1. Fetch Weather Data
function getWeather() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Weather: Sunny");
    }, 2000);
  });
}
getWeather().then((data) => console.log(data));

// 2. Upload Image
function uploadImage() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Imange uploaded");
    }, 2000);
  });
}
uploadImage().then((msg) => console.log(msg));

// 3. Process Payment
function processPayment(amount) {
  return new Promise((resolve, reject) => {
    if (amount > 0) {
      resolve("Payment successful");
    } else {
      reject("Invalid amount");
    }
  });
}
processPayment(500)
  .then((msg) => console.log(msg))
  .catch((error) => console.log(error));

// 4. Fetch user data
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
fetchUserData(123)
  .then((result) => {
    // resolve
    console.log("Result: ", result);
  })
  .catch((err) => {
    // reject
    console.log("Catch error: ", err);
  })
  // optional
  .finally(() => {
    console.log("task finshed");
  });

// Promise.all()
Promise.all([fetchUserData(1), fetchUserData(2), fetchUserData(3)])
  .then((result) => console.log("Result", result))
  .catch((error) => console.log("Error: ", error));

// 5.  Logical – Math Operation
function devide(a, b) {
  return new Promise((resolve, reject) => {
    if (b === 0) {
      reject("Cannot devided by zero");
    } else {
      resolve(a / b);
    }
  });
}

devide(10, 2)
  .then((result) => console.log("Result: ", result))
  .catch((err) => console.log("Error: ", err));

// 6. Logical – Check User Authentication
function login(username, password){
  return new Promise((resolve, reject) => {
    if (username === "Sulav" && password === "sulav123"){
      resolve("Login successful");
    }else{
      reject("Login failed");
    }
  });
}

login("Sulav", "sulav123")
  .then((msg) => console.log("Result: ", msg))
  .catch((err) => console.log("Error: ", err));


// 7. Logical – Multiple Promises with .all()
let p1 = Promise.resolve(10);
let p2 = Promise.resolve(20);
let p3 = Promise.resolve(30);

Promise.all([p1, p2, p3]).then(values => {
  const sum = values.reduce((a, b) => a + b, 0);
  console.log("Sum", sum);
});

/* Summary Table 
  | Topic          | Description                               |
  | -------------- | ----------------------------------------- |
  | **Definition** | Represents async result (success/failure) |
  | **Syntax**     | `new Promise((resolve, reject) => {})`    |
  | **Use Cases**  | API, file system, validation, logic       |
  | **Examples**   | API, order system, divide, login, all     |
*/
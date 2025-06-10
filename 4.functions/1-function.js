/* 1. ✅ What is a Function in JavaScript?
    A function is a block of reusable code that performs a specific task.
    You can define it once and call (use) it many times. */
    //  Syntax:
    function functionName(parameters) {
        // code to be executed
    }
    functionName(); // call function

    // example 1: normal fucntion
    function greet(){
        console.log("Hello world");
    }
    greet();

/* 2. ✅ parameters function:
    * A parameter is like a placeholder for a value you pass into a function.
    * When you call the function, you give it actual values, called arguments. */
    // syntax:
    function functionName1(parameter1, parameter2) {
        // use parameter1 and parameter2
    }
    functionName1() // call function

    // example 1:
    function greet1(name) {
       console.log("Hello, " + name);
    }
    greet1("Sulav"); // Output: Hello, Sulav

    // Example 2: Create User Profile
    function creater(name, age, email){
        console.log(`Name: ${name}`);
        console.log(`Age: ${age}`);
        console.log(`Email: ${email}`);
    }
    creater("Sulav Tamang", 23, "sulav@gmail.com");
    creater("Selin Maharjan", 17, "selin@gmail.com");

    // Example 3: Default Parameters
    function greet3(name = "Guest"){
        console.log(`Hello, ${name}`);
    }
    greet3(); // output: Hello, Guest
    greet3("Sulav"); // output: Hello, Sulav

// 3. ✅ Function expressions: A function expression is when you create a function and assign it to a variable.

    // Example 1: Discount Calculator
    const calculateDiscount = function(price, discountPercent){
        priceWithDiscount = price - (price * discountPercent/100);
        console.log(priceWithDiscount);
    }
    calculateDiscount(10000, 20);

    // Example 2: Display Time with setInterval
    const showTime = function(){
        console.log(new Date().toLocaleDateString());
    }
    setInterval(showTime, 1000); //shows current time every second

    // Example 3: Add Item to Cart
    const addItem = function(item){
        console.log(`${item} has been added to your cart.`);
    }
    addItem("Laptop");
    addItem("Mouse");

// 4. ✅ Arrow function:- An arrow function is a shorter syntax for writing function expressions

    // Example 1: Calculate Final Price
    const getFinalPrice = (price, tax) => price + (price * tax);

    console.log(getFinalPrice(1000, 0.13));  // output: 1130

    // Example 2: Send Message
    const sendMessage = (user, message) => {
        console.log(`Sending "${message}" to ${user}`);
    }
    sendMessage("Sulav", "Your order is confirmed!");

/* 5. ✅ Higher-order functions & callbacks:
    A Higher-Order Function is a function that:
        1.Takes another function as a parameter, or
        2.Returns a function

    This is possible in JavaScript because functions are treated like values (also called "first-class citizens"). 
    
    What is a Callback Function?
    A Callback Function is a function that is passed as an argument to another function, and is called inside that function.*/
    // syntax example:
    function greet4(name, callback){
        console.log(`Hello, ${name}`);
        callback();
    }
    function sayBye(){
        console.log("Goodbye!");
    }
    greet4("Sulav", sayBye);
    
    // Example 1: Custom Callback Function
    function processOrder(customer, callback){
        console.log(`Processing order for ${customer}`);
        callback();
    }
    function thankYou(){
        console.log("Thank you for your purchase!");
    }
    processOrder("Sulav", thankYou);

    // Example 2: Custom Callback Function
    let array1 = [1, 2];
    function processArray(array1, callback){
        for (let i=0; i<array1.length; i++){
            callback(array1[i]);
        }
    }
    processArray(array1, function(num){
        console.log(num * 2);
    }); 

/* 6. ✅ scope & closer:
    * Scope:- Accessiblity of variables (global, local & block)
    * closer:- Function that remembers its outer variables  */
    // let a = 10; // Global
   function outer(){
    let count = 0; // Local
    return function inner(){
        count++;
        console.log(`Count: ${count}`);
        // let x = 3; // block
        }
    }
    let counter = outer(); // `counter` is assigned the inner() function with a closure over `count`
    counter(); // output: Count: 1
    counter(); // output: Count: 2

/* 6. ✅ IIFE (Immediately Invoked Function Expresssion)  */
(function() {
    console.log("IIFE");
})();

/* 6. ✅ Currying:- Currying is the process of transforming a function with multiple arguments into a sequence of functions, each taking one argument.  */
const addNums = a => b => a + b;
console.log(addNums(5)(3));
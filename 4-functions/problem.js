// 20 Real-World JavaScript Function Exercises (with Hints)

//  A. Beginner Level (1–10)
    /* 1. Greet a user by name
    ➤ Create a function sayHello(name) that prints "Hello, [name]!".
    Hint: Use string concatenation or template literals. */
    function sayHello(name){
        console.log(`Hello, ${name}`);
    }
    sayHello("Sulav");  // output: Hello, Sulav

    /* 2. Calculate area of a rectangle
    ➤ Write a function area(length, width) to return area.
    Hint: Multiply length × width. */
    const area = (length, width) => length * width;
    console.log(area(4, 3));  // output: 12

    /* 3. Check if number is even
    ➤ Write isEven(num) to return true if even, false if not.
    Hint: Use % operator. */
    let num = 4;
    function isEvan(num){
        if(num%2 === 0){
            console.log(`${num} is even number.`);
        }else{
            console.log(`${num} is odd number.`);
        }
    }
    isEvan(num);  // output: 4 is even number

    /* 4. Capitalize first letter of a string
    ➤ capitalize("sulav") → "Sulav"
    Hint: Use charAt(0).toUpperCase() and slice(1). */
    function capitalize(str) {
        return str.charAt(0). toUpperCase() +str.slice(1);
    }
    console.log(capitalize("sulav"));  // output: Sulav

    /* 5. Convert Celsius to Fahrenheit
    ➤ celsiusToFahrenheit(c) → Fahrenheit
    Hint: Use formula: F = (C × 9/5) + 32. */
    function celsiusToFahrenheit(celsius) {
        celsius = 0;
        fahrenheit = (celsius* 9/5) + 32;
        console.log(`${celsius}c into ${fahrenheit}f `);
    }
    celsiusToFahrenheit();

    /* 6. Sum all numbers in an array
    ➤ sumArray([1, 2, 3]) → 6
    Hint: Use loop or reduce. */
    function sumArray(arr) {
        for(let i=0; i>=arr.length; i++){
            sum += arr[i];
        }
        console.log(sum);
    }
    sumArray([1, 2, 3])  // output: 6

    /* 7. Reverse a string
    ➤ reverseString("Sulav") → "valuS"
    Hint: Use split, reverse, and join. */

    /* 8. Reverse a string
    ➤ reverseString("Sulav") → "valuS"
    Hint: Use split, reverse, and join. */

    /* 9. 
    Check if string is a palindrome
    ➤ "madam" → true
    Hint: Compare string with its reverse. */

    /* 10. Count vowels in a string
    ➤ countVowels("Sulav") → 2
    Hint: Loop through each letter and match aeiou. */


// B. Intermediate Level (11–15)
    /* 11. Create a calculator function
    ➤ calculate(a, b, operator) → +, -, *, /
    Hint: Use if-else or switch. */

    /* 12. Check prime number
    ➤ isPrime(n) → true/false
    Hint: Check if divisible by any number from 2 to √n. */

    /* 13. Generate random number in a range
    ➤ getRandom(min, max) → random between min & max
    Hint: Use Math.random() formula. */

    /* 14. Repeat a string N times
    ➤ repeatString("Hi", 3) → "HiHiHi"
    Hint: Use repeat() or loop. */

    /* 15. Create a to-do list manager
    ➤ Functions: addTask, listTasks, removeTask
    Hint: Use an array to store tasks. */

//  Advanced Level (16–20)
    /* 16. Create a function using closure for counter
    ➤ const counter = createCounter();
    counter() → 1, counter() → 2
    Hint: Use inner function remembering outer variable. */

    /* 17. Currying for volume of box
    ➤ volume(l)(w)(h) → l * w * h
    Hint: Return function from function. */

    /* 18. Custom map function (higher-order)
    ➤ Create customMap(arr, callback)
    Hint: Loop through array, apply callback. */

    /* 19. Debounce function (simulate)
    ➤ Create debounce(fn, delay)
    Hint: Use setTimeout & clearTimeout to delay function calls. */

    /* 20. Recursive factorial
    ➤ factorial(5) → 120
    Hint: Use recursion: n * factorial(n - 1) */
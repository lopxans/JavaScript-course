/* 
ES6+ Features: ES6(ECMAScript 2015) introduced new syntax and features to JavaScript to make it more modern and developer-friendly. Later Updates (ES7, ES8, etc.) added even more features.
*/

/* 1. let and const:-  block-scoped variable declarations. Replaced var for better scope management.

    eg:
    let a = 5; 
    const pi = 1.14;
*/

/* 
2. arrow() function: Concise syntax for writing functions.

    eg:
    const abc = () => console.log('Hello, world');
*/

/* 
3. Template Literals: Multi-line strings and string interpolation.

    eg:
    abc = `Hello, ${name}` ;
*/

/* 
4. Destructuring: Extract values from arrays/objects into variables.

    eg:
    const [a, b] = [1, 2];
    const [x, y] = [x: 12, y: 20];
*/

/* 
5. Default Parameter: Assign default values to function parameters.

    eg:
    const multiply = (a, b = 1) => a * b;
*/

/* 
6. Spread and Rest Operator: 
- Spread(...): arrays or objects. 
- Rest(...): Collects arguments into an array.

    eg:
    const arr = [1, 2, 3];
    const copy = (...arr);
    const sum = (...args) => args.reduce((a, b) => a + b);
*/

/* 
7. Classes: Introduced in ES6 Object-Oriented Programming.

    eg:
    class Person {
        this.name = name;
    } 
    greet() {
        consol.log(`Hello, ${this.name}`);
    }
*/

/* 
8. Promise and Async/Await: for asynchronouse: operations.

    eg:
    const fetchData = async () => {
        const data = await fetch('https:/api.example.com);
        console.log(data);
    }
*/

/* 
9. Modules: Use impost and export for modular programming.

    eg:
    export const greet() = () => console.log("Hello!");
*/

/* 
10. Symbole Data Type: 
- Unique and immutable promitive data tyoe. 
- create using symbol() function. 
- Guaranteed to be unique, with the same description.

    eg: 
    const sim1 = Symbol(123);
    const sim2 = Symbol(123);

    console.log(sim1 === sim2)  // output: false
*/
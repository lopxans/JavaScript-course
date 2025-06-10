/* What is a Variable?
    A variable is a container for storing data. Think of it like a box where you can store a value and give that box a name. 
    Declaration variabe in JavaScript in three types: var, let and const.
    Each type of variable has specific rules for scope, re-declaration, adn reassignment. */

/* Variable Naming Rules
✅ Can include letters, numbers, _, and $
✅ Cannot start with a number
✅ Cannot use reserved words (like let, var, if, for, etc.) 
*/

/* var
* Introduced: Early JavaScript versions.
* Scope: Function-Scoped (not block-scoped).
* Re-declaration: Allowed in the same Scope.
* Hoisting: HOisted to the top of ites scope but initialized as undefined.
* Use Case: Outdated, avoid using in moden JavaScript.

Example Code:
if(true){
var x= 10;
}
console.log(x); // outputs: 10
*/
var x;
function add(){
    var x = 9;
    if(x < 10){
        console.log(x);
        var x = 20;
    }
}

// hoisting
function add1(){
    var x; // hoisting
    x = 9;
    if(x < 10){
        var x; // hoisting
        console.log(x); // output: 9
        x = 20;
    }
}

/* let
* Introduced: ES6 (2015).
* Scope: Block Scope.
* Re-declaration: Not allowed in the same Scope.
* Reassignment: Not allowed after the initial assignment.
* Hoisting: HOisted but not initialized (throws ReferenceError if accessed before declaration).
* Use Case: Use for fixed values or constants

Example Code:
const x = 10;
x = 20 // Error: Assignment to constant variable
*/
function add2(){
    let x; // hoisting
    x = 9;
    if(x < 10){
        // let x; // hoisting
        console.log(x); // output: 9
        x = 20;
        console.log(x); // output: 20
    }
}

/* const
* Introduced: ES6 (2015).
* Scope: Block Scope.
* Re-declaration: Not allowed.
* Hoisting: HOisted but not initialized (throws ReferenceError if accessed before declaration).
* Use Case: Use when the variable's value needs to change.

Example Code:
if(true){
var x= 10;
}
console.log(x); // Error: x is not defined
*/


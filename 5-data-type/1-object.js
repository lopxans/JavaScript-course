/* 1. What is an Object in JavaScript?
An object is a collection of key-value pairs. It is used to store multiple values in a single variable. */
  /* Where:
  * name, age, isStudent are keys (also called properties).
  I "Sulav", 20, true are values.  */
  const person = {
    name: "Sulav",
    age: 20,
    isStudent: false
  }

// 2. How to Access Object Values
  const p1 = {
    name: "Sulav",
    age: 20,
    isStudent: false
  }
  // Dot notation:
  console.log(`Dot notation: ${p1.name}`); // output: Sulav
  
  // Bracket notation: Use braket notation when the key is stored in a variable.
  console.log(`Bracket notaion: ${p1['age']}`);  // output: true
  

// 3. How to Add, Change, or Delete Properties
  const p2 = {
    name: "Sunmaya Tamang",
    age: 60,
    study: null,
  }
  // Add a new property
  p2.country = "Nepal";

  // Change a property
  p2.age = 61;

  // Delete a property
  delete p2.study;

  // let check output 
  console.log(p2);


/* 4. Object methos & this keyword 
* ojbect:- Functions dedined inside object. they can operate on the onject's properties.
* this keyword:- refers to the object that is calling the method. in bellow example this.firstName refers to p3.lastName. */
const p3= {
  firstName: "Selin",
  lastName: "Maharjan",
  fullName(){
    return `${this.firstName} ${this.lastName}`;
  }
}
console.log(p3.fullName());


/* 5. Arrow functions don't have their own this. Instead, they inherit this from the surrounding (lexical) scope. 
 * Lxical scope refers to the fact that the value of this (or any variable) in a function is determined by where the function is defined, not where it is called. */
const p4 = {
  firstName: "Selin",
  lastName: "Maharjan",
  fullName: () => {
    return `${this.firstName} ${this.lastName}`;  // 'this' refers to the outer scope, not the p4 object
  }
}
console.log(p4.fullName());
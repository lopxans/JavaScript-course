// 1. Spread operators:- Expands elements of an array or object
1   // Array
const arr1 = [1, 2];
const arr2 = [...arr1,3, 4];   // 3 dot is used for copy (...)
console.log(arr2); 

    // Object
const obj = {a:1, b:2};
const obj1 = {b: 2, c:3};
const obj3 = {a:0, ...obj, ...obj1, d:4, c:5};
console.log(obj3);

// 2. Rest Operators:- Collects remaining elecments intro as array or object
function sum(...number){
    return number.reduce((total, num) => total + num, 0);
}
console.log(sum(1, 2, 3, 4, 5));

    // Rest with Regular Parameters
function showInfo(name, age, ...skills) {
  console.log(name);   // "Sulav"
  console.log(age);    // 25
  console.log(skills); // ["HTML", "CSS", "JS"]
}
showInfo("Sulav", 25, "HTML", "CSS", "JS");

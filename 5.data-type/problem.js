// Problem 1:- filter the students by grade
const student = [
    {name: "Alice", grade: "A"},
    {name: "Bob", grade: "B"},
    {name: "Charlie", grade: "A"},
];
const topSdents = student.filter(student => student.grade === "A");
console.log(topSdents);

// Problem 2:- Detrucutre personal information
const person = {personName: "John", age: 28, city: "New York"};
const {personName, city} = person;
console.log(personName);
console.log(city);

// Problem 3:- Use map to create a new array to doublem of the element value of origin array
const numbers = [1, 2, 3];
const double = numbers.map(n => n * 2);
console.log(double);


// 🔸 Objects
// 1. Create a student object with name, age, and grade. Log all properties using dot notation.

// 2. Update an object: Add a new property school and update grade.

// 3. Delete a property: Remove the age property from a student object.

// 4. Loop through object properties using for...in.

// 5. Create an object method that returns the full address of a person.

// 6. Use this keyword in a method to access object properties.

// 7. Use bracket notation to access a property when the key is in a variable.

// 8. Check if a property exists using "propertyName" in object.

// 🔸 Array Basics
// 1. Create an array of your 5 favorite foods and print the second item.

// 2. Update the third item in an array to something new.

// 3. Add a new item to the end of the array using push().

// 4. Remove the first item using shift() and print the updated array.

// 5. Use length to print the number of items in an array.

// 🔸 Common Array Methods
// 1. Check if "Mango" is in your fruits array using includes().

// 2. Find the index of "Apple" using indexOf().

// 3. Join all items of an array into a single string separated by , .

// 4. Use slice() to get the first two elements from an array.

// 5. Use splice() to remove the second item and insert a new one.

// 🔸 Advanced Array Methods
// 1. Use map() to convert an array of Celsius temperatures to Fahrenheit.

// 2. Use filter() to get only even numbers from a number array.

// 3. Use reduce() to calculate the total price from an array of prices.

// 4. Use map() to return array of names from an array of user objects.

// 5. Use filter() to get users over 18 years old from an array of users.

// 🔸 Destructuring
// 1. Object destructuring: Extract name and email from a user object.

// 2. Array destructuring: Extract first and third items from a colors array.

// 🔸 Spread & Rest Operators
// 1. Use spread operator to combine two arrays into one.

// 2. Use spread operator to merge two objects and override one property.

// 3. Use rest operator in a function to accept any number of arguments and return the max value.

// 4. Use rest parameters to collect all hobbies of a person into one array.

// 5. Clone an object and add a new property using spread operator.


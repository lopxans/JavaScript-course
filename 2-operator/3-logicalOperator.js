// Logical Operators

/* 1. AND (&&)
Returns true if both operands are true. */
true && true     // true
true && false    // false
false && false   // false

let a = 5;
let b = 10;
if (a > 0 && b > 0) {
  console.log("Both numbers are positive");
}

/* 2. OR (||)
Returns true if at least one operand is true. */
true || false    // true
false || false   // false

let isAdmin = false;
let isModerator = true;
if (isAdmin || isModerator) {
  console.log("User has access");
}

/* 3. NOT (!)
Negates the value — turns true to false and vice versa. */
!true    // false
!false   // true

let isLoggedIn = false;
if (!isLoggedIn) {
  console.log("Please log in");
}


/* 4. Nullish Coalescing Operator (??)
Returns the right-hand operand only if the left-hand operand is null or undefined. */
let name1 = null;
let displayName = name1 ?? "Guest";  // "Guest"

let count = 0;
let result = count ?? 10;  // 0 (not null or undefined)


/* 5. Optional Chaining (?.)
Allows safe access to nested properties without causing errors if an intermediate property is null or undefined. */
let user = {
  profile: {
    name: "Alice"
  }
};
console.log(user.profile?.name);    // "Alice"
console.log(user.settings?.theme);  // undefined (no error)

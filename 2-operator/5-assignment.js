/* 3. Assignment Operators:- Used to assign values to variables. 
| Operator | Description         | Example                |
| -------- | ------------------- | ---------------------- |
| `=`      | Assign              | `a = 10`               |
| `+=`     | Add and assign      | `a += 5` → `a = a + 5` |
| `-=`     | Subtract and assign | `a -= 5`               |
| `*=`     | Multiply and assign | `a *= 5`               |
| `/=`     | Divide and assign   | `a /= 5`               |
| `%=`     | Modulus and assign  | `a %= 5`               |   */


// combining with other operators:
let x = 5;
x += ++x; // output: 6, then x + 5 = 11
console.log(x); // output: 11

x = 5;
x += x++; // output:x + 5 = 10
console.log(x); // output: 10




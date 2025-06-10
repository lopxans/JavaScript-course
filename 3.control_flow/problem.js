// 30 Real-World JavaScript Control Flow Exercises

// A. Conditional Statements (1–10)

    // 1. Check Driving Eligibility: Input age. Print "Eligible for license" if 18+, else print "Not eligible". 
    let age = 19;

    if(age >= 18){
        console.log("Eligible for license");
    }else{
        console.log("Not eligible");
    }

    // 2. check discount: If purchase > 5000, apply 20% discount, else 10%.
    let purchase = 6000;

    if(purchase >= 5000){
        let totalAmount = purchase - 20/100 * purchase;
        console.log(`Total amount with 20% discount: ${totalAmount}`);
    }else{
        let totalAmount = purchase - 10/100 * purchase;
        console.log(`Total amount with 20% discount: ${totalAmount}`);
    }

    // 3. emperature Checker: Print “Cold”, “Moderate”, or “Hot” based on given temperature.
    let temperature = 17;
    if(temperature < 15){
        console.log("Cold");
    } else if(temperature <= 30){
        console.log("Moderate");
    }else{
        console.log("Hot");
    }

    // 4.User Login System: If username and password match, print "Login successful".
    let userName = "Selin Maharjan";
    let password = "123";

    if(userName === "Selin Maharjan" && password === "123"){
        console.log("User login successful");
    }else{
        console.log("Invalid Password");
    }

    // 5. Even or Odd Number Checker
    let num = 5;
    if(num%2 === 0){
        console.log(`${num} is even number.`);
    }else{
        console.log(`${num} is odd number.`);
    }

    // 6. Grade Calculator: Based on marks (90+ = A, 80–89 = B, etc.)

    // 7. Check if Number is Positive, Negative, or Zero

    // 8. Leap Year Checker

    // 9. Day of the Week: Input number 1–7, print day name using switch.

    // 10. Light Signal Checker: Input: red/yellow/green → Print: Stop/Ready/Go.

// B. Loops (11–25)
    // 11. Print 1 to 100
    
    // 12. Even Numbers from 1 to 50

    // 13. Sum of First N Numbers

    // 14. Print Multiplication Table of a Number

    // 15. Count the Digits of a Number

    // 16. Factorial of a Number

    // 17. Print Elements of an Array

    // 18. Find Maximum in an Array

    // 19. Reverse a String

    // 20. Check if a Number is Prime

    // 21. Count Even and Odd Numbers in Array

    // 22. Check Palindrome (word is same forwards and backwards)

    // 23. Print Fibonacci Series (first 10 terms)

    // 24. Sum of All Array Elements

    // 25. Sum of All Array Elements

// C. Error Handling (26–30)
    // 26. Divide Two Numbers: Use try...catch to avoid crash when dividing by 0.

    // 27. User Input Validator: Throw error if name is empty string or number.

    // 28. File Read Simulator: File Read Simulator

    // 29. JSON Parse Catch: Use try...catch to handle invalid JSON.

    // 30. ATM Withdrawal Simulator: Throw error if balance is insufficient.
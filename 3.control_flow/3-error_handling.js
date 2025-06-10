/* What is Error Handling?
    ansError handling lets you catch and manage errors in your code without crashing the entire program. This makes your code more reliable and user-friendly.
*/
/* Why Use Error Handling?
    ✅ To stop the program from crashing
    ✅ To give user-friendly messages
    ✅ To fix or skip unexpected problems 
*/

/* JavaScript Error Handling Keywords
    try
    catch
    finally
    throw                                */

// 1. try...catch
    // sintax:
    try {
    // code that might cause an error
    } catch (error) {
    // code to handle the error
    }

    // Example 1:
    try{
        let result = x + 5; // x is not defined
    }catch(error){
        console.log("Something went wrong!");
        console.log("Errpr:", error.message);
    }

// 2. finally Block:- The finally block always runs, whether ther's an error or not.
    // Examples:
    try{
        let num = 10 / 0;
    }catch(error){
        console.log("Error occured");
    }finally{
        console.log("This will always run and is optional");
    }

// 3. throw Statement:- You can use throw to create your own error. 
    // Example 1:
    let age = 15;

    try{
        throw "You must be 18 or older";
    }catch(error){
        console.log('Error: ', error)
    }

    // Custom Error Example:-
    function divide(a, b){
        if (b === 0){
            throw new Error("Cannot devide by zero.");
        }
        return a / b;
    }

    try{
        console.log(divide(10, 0));
    }catch(error){
        console.log("Error: catght: ", error.message);
    }
/* Conditional Statements:-
Conditional Statements are used to perform different actions based on different
conditions. they help control the flow of our code based on conditions that evaluate to true or false. */

// 1. if statement 
let age = 18;
if(age >= 18){
    console.log('You are eligible to vote.');
}

// 2. if...else statement
age = 79;
if(age >= 18){
    console.log('You are eligible to vote.');
    console.log(age);
}else{
    console.log('You are not eligible to vote.');
}

// 3. if...else if...else statement
let score = 85;
if(score >= 80){
    console.log("Grade A");
}else if(score >= 60){
    console.log("Grade B");
}else if(score >= 40){
    console.log("Grade C");
}else{
    console.log("Non Grade");
}

// 4. ternary operator (conditional operator)
age = 20;
let message = (age >= 18) ? "You can vote" : "You can't vote";
console.log('message:', message);


// 5. Switch Statement: Used for testing a variable agaist multiple values(case)
let day = 7;
switch(day){
    case 1:
        console.log('Sunday');
        break
    case 2:
        console.log('Monday');
        break
    case 3:
        console.log('Tuesday');
        break
    case 4:
        console.log('Wednesday');
        break
    case 5:
        console.log('Thursday');
        break
    case 6:
        console.log('Friday');
        break
    case 7:
        console.log('Saturday');break
    default:
        console.log("Invalid day");
}

// example
score = 85;
switch(true){
    case (score >= 0 && score >= 80):
        console.log("Grade A");
        break
    case (score >= 0 && score >= 70):
        console.log("Grade B");
        break
    case (score >= 0 && score >= 50):
        console.log("Grade C");
        break
    case (score >= 0 && score < 50):
        console.log("Non Grade");
        break
    default:
        console.log("Ivalid Score");
}

// 6. nested conditonal
age = 79;
let hasId = true
if(age >= 18 && age <= 64){
    console.log('You are eligible to vote.');
    if(hasId){
        console.log('you can enter the voting booth.');
    }else{
        console.log('Id required');
    }
    console.log(age);
}else{
    console.log('You are not eligible to vote.');
}
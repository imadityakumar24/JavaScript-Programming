
/*

    Topic: Understanding Condition Operators in JavaScript
    ------------------------------------------------------

    Condition operators help in decision making.
    Main Types:

    1. if statement → Runs code if condition is true
    2. if-else statement → Runs one block if true, another if false
    3. else-if ladder → Multiple conditions checked in sequence
    4. Ternary operator (?:) → Short form of if-else
    5. switch statement → Matches a value against multiple cases

*/

// Example 1: if
let age = 18;
if (age >= 18) {
    console.log("You are an adult (if example).");
}

// Example 2: if-else
let marks = 40;
if (marks >= 50) {
    console.log("Pass (if-else example).");
} else {
    console.log("Fail (if-else example).");
}

// Example 3: else-if ladder
let score = 75;
if (score >= 90) {
    console.log("Grade A");
} else if (score >= 75) {
    console.log("Grade B");
} else if (score >= 50) {
    console.log("Grade C");
} else {
    console.log("Grade F");
}

// Example 4: Ternary Operator
let number = 7;
let result = (number % 2 === 0) ? "Even Number" : "Odd Number";
console.log("Ternary operator result:", result);

// Example 5: switch statement
let day = 3;
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");
}

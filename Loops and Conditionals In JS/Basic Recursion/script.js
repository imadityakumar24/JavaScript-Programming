
/*
    Topic: Recursion in JavaScript
    ------------------------------

    Recursion = Function calling itself.

    Key Points:
    1. Every recursive function must have a base case 
       (to stop infinite calls).
    2. Used in problems like factorial, Fibonacci, tree traversal, etc.
*/

// Example 1: Factorial using recursion
function factorial(n) {
    if (n === 0) {
        return 1;   // base case
    }
    return n * factorial(n - 1);  // recursive call
}

console.log("Factorial of 5:", factorial(5));



// Example 2: Fibonacci using recursion
function fibonacci(n) {
    if (n <= 1) {
        return n;   // base case
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log("Fibonacci of 6:", fibonacci(6));



// Example 3: Countdown using recursion
function countdown(num) {
    if (num <= 0) {
        console.log("Done!");
        return;  // base case
    }
    console.log(num);
    countdown(num - 1);  // recursive call
}

countdown(5);

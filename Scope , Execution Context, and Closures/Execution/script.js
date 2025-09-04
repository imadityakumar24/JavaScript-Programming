
/*

==================  Execution Context  ======================

JS sabse pehle jaise hi aapka function dekhta hai 
sabse pehle JS banata hai execution context, 
jo do phases mein chalta hai:

1. Memory phase (creation phase)
2. Execution phase

*/

// Example Code

function addNumbers(a, b) {
  // Memory Phase:
  // a, b -> undefined
  // result -> undefined

  var result = a + b;

  // Execution Phase:
  // a = 5, b = 10
  // result = 15

  return result;
}

let x = 5;  // Memory: x -> undefined, Execution: x = 5
let y = 10; // Memory: y -> undefined, Execution: y = 10

let sum = addNumbers(x, y); // function execution context create hoga

console.log("Sum is:", sum);

/*
Step by Step:

1. Global Execution Context (GEC) banta hai
   - Memory phase: variables, functions allocate hote hain (value = undefined)
   - Execution phase: values assign hoti hain

2. Jab function call hota hai (addNumbers)
   - Function Execution Context (FEC) banta hai
   - FEC ke andar bhi memory phase aur execution phase hota hai
   - Jab function return karta hai, FEC delete ho jata hai

3. Code run karne ke baad console mein "Sum is: 15" print hoga
*/

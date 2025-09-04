
/*

================== Closure defination and how variablesa are presereved  ======================



Closures hota hai functon jo ki kisi parent function ke andar ho aur andar wala function return ho rha ho, and returning function use kare parent function ka koi variable

// benifits

1. private 
2. global pollution
3. private counter
4. incapsulation


ye sach hai ki function ke khatam hone pe aapka function and uske variables khatm ho jate hai , par jab bhi clousure banta hai to aapka function aur uska variables ka ek backlink banaya jata hia aur uska naam hota hia ===========  [[environment]] =========== braces braces environment

*/


function sum(a, b) {
    let x = a;
    let y = b;
    return x + y;
}

let total = sum(10, 20);
console.log("Total is : ", total);  // it print 30

// after the return x+y the function sum is deteroy form memory that why it not printing

// console.log("Value of x : ", x);     // not printing
// console.log("Value of y : ", y);     // not printing



// clousures
function abce() {
    let a = 23;
    return function() {
        console.log("value of a inside function : ", a);   // not printing a 
    }
}

let fnc = abce();
fnc();              // now it printing a

// console.log("value of a outside function : ", a);    // not printing a 


console.log("\n\n");


function count() {
    let c = 0;
    return function() {     // ye return function krega
        c++;
        console.log("value of c is :", c);
    }
}

let call = count();     // call ek function ban chuka hai jo return hua ha8 to abb hum ise call kar skte hai
call();
call();
call();


console.log("\n\n");

let anotherCall = count();

anotherCall();
anotherCall();
anotherCall();
anotherCall();
anotherCall();





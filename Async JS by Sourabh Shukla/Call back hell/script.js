/*

========================  callback hell ==============================

Callback Hell in JavaScript happens when we use too many nested callbacks, making the code:

Hard to read
Hard to maintain
Difficult to debug

It usually happens in asynchronous code (like reading files, database calls, or API requests).


How to Avoid Callback Hell:

Use Promises
Use async/await (modern & cleaner)
Break code into modular functions

*/


function f1(fun) {
    fun(5);
}


// Callback Hell
f1(function(value1){
    f2(value1, function(value2) {
        f3(value2, function(vlaue3) {
            f4(value3, function(vlaue4) {
                console.log("all done");
            });
        });
    });
});



// solutions 
// use named funciton , promises, async await


function step1(value1) {
    f2(value1, step2);
}

function step2(value2) {
    f3(value2, step3);
}

function step3(value3) {
    f4(value3, ()=> {
        console.log("all done");
    })
}

f1(step1);
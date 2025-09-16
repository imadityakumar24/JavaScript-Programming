/*

A callback is just a function that you pass as an argument to another function, and then that function calls it later.
It’s called “callback” because it “calls back” the function you gave it.


this concept is used to acherive ashyncronus js

why callbacks ?? 

1. Asynchronous operations

JS primarily single threded . this means it can only execute one task at a time. if a long running operation ( like fetching data from  a server, reading a file or waiting for a timer ) where to block the main thread, the entire browser or node.js applications would frezz and become unresposive

*/


function f1() {
    console.log("hello");
}


f2(f1);


function f2(fun){
    console.log("h");
    fun();
};





// defining function inside the f4 no need to write the funciton name
f4(function() {
    console.log("hello");
});


function f4(func){
    console.log("h");
    func();
};



/*


===============================
   CALLBACK QUEUE & EVENT LOOP
===============================

1. JavaScript is single-threaded.
   → It executes one thing at a time using the Call Stack.

2. When an async task is called (like setTimeout, fetch, event listener):
   → The task is handled by Web APIs (outside the JS engine).
   → After completion, the callback goes into the CALLBACK QUEUE.

3. EVENT LOOP keeps checking:
   → Is the Call Stack empty?
   → If yes, it pushes the first task from the Callback Queue into the Call Stack.

4. Execution Flow:
   - Call Stack → executes synchronous code immediately.
   - Web APIs → handle async operations in background.
   - Callback Queue → holds ready-to-execute async callbacks.
   - Event Loop → moves tasks from queue → stack when stack is free.

Example:
-------------------------------------
console.log("Start");

setTimeout(() => {
    console.log("Async task completed");
}, 2000);

console.log("End");

Output:
Start
End
Async task completed
-------------------------------------

This happens because:
- "Start" and "End" run immediately (stack).
- setTimeout callback waits in Callback Queue.
- Event Loop moves it to stack only after 2 seconds & after stack is free.



*/




/*


===============================
   CALLBACK QUEUE & EVENT LOOP
===============================

1. JavaScript is single-threaded.
   → It executes one thing at a time using the Call Stack.

2. When an async task is called (like setTimeout, fetch, event listener):
   → The task is handled by Web APIs (outside the JS engine).
   → After completion, the callback goes into the CALLBACK QUEUE.

3. EVENT LOOP keeps checking:
   → Is the Call Stack empty?
   → If yes, it pushes the first task from the Callback Queue into the Call Stack.

4. Execution Flow:
   - Call Stack → executes synchronous code immediately.
   - Web APIs → handle async operations in background.
   - Callback Queue → holds ready-to-execute async callbacks.
   - Event Loop → moves tasks from queue → stack when stack is free.

-------------------------------------
Example:
-------------------------------------
console.log("Start");

setTimeout(() => {
    console.log("Async task completed");
}, 2000);

console.log("End");

Output:
Start
End
Async task completed
-------------------------------------

Reason:
- "Start" and "End" run immediately (stack).
- setTimeout callback waits in Callback Queue.
- Event Loop moves it to stack only after 2 seconds & after stack is free.


===============================
   ASCII DIAGRAM (Flow)
===============================

           ┌─────────────────┐
           │   Call Stack    │  <--- executes synchronous code
           └─────────────────┘
                    ▲
                    │
           ┌─────────────────┐
           │   Event Loop    │  <--- keeps checking
           └─────────────────┘
                    ▲
                    │
           ┌─────────────────┐
           │ Callback Queue  │  <--- async callbacks wait here
           └─────────────────┘
                    ▲
                    │
           ┌─────────────────┐
           │    Web APIs     │  <--- timers, fetch, DOM events
           └─────────────────┘

Flow:
1. Code runs in Call Stack.
2. Async tasks handled by Web APIs.
3. After completion → callback goes to Queue.
4. Event Loop moves it → Call Stack when stack is empty.



*/

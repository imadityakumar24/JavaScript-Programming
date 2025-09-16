
/*

// ------------------ ASYNC / AWAIT CONCEPT ------------------

// 1. async keyword:
//    - Declares an asynchronous function.
//    - An async function always returns a Promise.
//    - If you return a value, it is automatically wrapped in a Promise.

// 2. await keyword:
//    - Can only be used inside an async function.
//    - It pauses the execution of the async function until the Promise settles.
//    - Makes async code look synchronous and easier to read.

// 3. Error handling:
//    - Use try...catch with await to handle errors from rejected Promises.


// ------------------ EXAMPLE ------------------

// A function that returns a Promise (simulating data fetch)
function fetchData() {
  return new Promise(resolve => {
    setTimeout(() => resolve(" Data received after 2s"), 2000);
  });
}

// async function (always returns a Promise)
async function getData() {
  console.log("Fetching...");

  // await waits until fetchData() Promise is resolved
  let result = await fetchData();

  // code here runs only after Promise resolves
  console.log(result);
  console.log("Done!");
}

getData();


// Example with error handling
async function getError() {
  try {
    // await waits, but this Promise is rejected
    let result = await Promise.reject(" Something went wrong");
    console.log(result);
  } catch (error) {
    // try...catch handles the rejected Promise
    console.log("Error:", error);
  }
}

getError();


*/


// function expression
// async function by default return promise
let p = async function f1() {
    console.log("hello js");
}


// // it give error becase we can't call due to ee store function in p
// f1();  


p();   // it working fine






function someAPI() {
    let p1 = new Promise(function (resolve, reject) {
        setTimeout(() => {
            console.log("promise is working");
            // resolve();
            // reject();    
            let num = Math.round(Math.random() * 10 + 1);
            if (num % 2 == 0) {
                console.log("resolve is working");
                resolve(num);
            } else {
                console.log("reject is working")
                reject(num);
            }
        }, 5000);
    });

    return p1;
}


function someAPI2() {
    let p2 = new Promise(function (resolve, reject) {
        setTimeout(() => {
            console.log("promise is working in some api 2");
            // resolve();
            // reject();    
            let num = Math.round(Math.random() * 10 + 1);
            if (num % 2 == 0) {
                resolve(num);
                console.log("resolve is working some api 2");
            } else {
                reject(num);
                console.log("reject is working some api 2")
            }
        }, 3000);
    });

    return p2;
}


async function f2() {
    console.log("async function");
    /*

    // now both are working independenty meean the are working asynchronusly

    someAPI();
    someAPI2();

    */

    // agar esa likha means jab tabk someAPI function complete nhi ho jata tab tak someAPI2 nhi chlega
    // await someAPI();
    // someAPI2();


    await someAPI()
        .then((succesful) => {
            console.log("some api 1 Prmise fillfiled : ", succesful)
        },
        (errorMessage) => {
            console.log(" some api 1 Promise rejected :", errorMessage);
        });

    await someAPI2()
        .then((succesful) => {
            console.log("some api 2 Prmise fillfiled : ", succesful)
        },
        (errorMessage) => {
            console.log(" some api 2 Promise rejected :", errorMessage);
        });
}

f2();      
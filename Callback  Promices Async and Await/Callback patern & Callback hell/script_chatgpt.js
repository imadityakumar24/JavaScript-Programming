
// 📌 CALLBACKS
// A callback is a function passed into another function to run later.

function greet(name, callback) {
  console.log("Hello " + name);
  callback(); // calling the callback
}

function sayBye() {
  console.log("Goodbye!");
}

greet("Aditya", sayBye); 
// Output: Hello Aditya
//         Goodbye!



// 📌 CALLBACK HELL (pyramid of doom)
// When callbacks are nested inside callbacks many times,
// the code becomes unreadable and messy.

function getUser(callback) {
  setTimeout(() => {
    console.log("Got user");
    callback({ id: 1, name: "Aditya" });
  }, 1000);
}

function getOrders(userId, callback) {
  setTimeout(() => {
    console.log("Got orders for user", userId);
    callback(["order1", "order2"]);
  }, 1000);
}

function getOrderDetails(order, callback) {
  setTimeout(() => {
    console.log("Got details for", order);
    callback({ item: "Laptop", price: 50000 });
  }, 1000);
}

function processPayment(details, callback) {
  setTimeout(() => {
    console.log("Processed payment of", details.price);
    callback("Success");
  }, 1000);
}

// ❌ Callback Hell Example
getUser(function (user) {
  getOrders(user.id, function (orders) {
    getOrderDetails(orders[0], function (details) {
      processPayment(details, function (result) {
        console.log("Payment:", result);
      });
    });
  });
});



// 📌 SOLVING CALLBACK HELL WITH PROMISES + ASYNC/AWAIT
// Each function returns a Promise now

function getUserPromise() {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log("Got user");
      resolve({ id: 1, name: "Aditya" });
    }, 1000);
  });
}

function getOrdersPromise(userId) {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log("Got orders for user", userId);
      resolve(["order1", "order2"]);
    }, 1000);
  });
}

function getOrderDetailsPromise(order) {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log("Got details for", order);
      resolve({ item: "Laptop", price: 50000 });
    }, 1000);
  });
}

function processPaymentPromise(details) {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log("Processed payment of", details.price);
      resolve("Success");
    }, 1000);
  });
}

// ✅ Clean version with async/await
async function processOrder() {
  const user = await getUserPromise();
  const orders = await getOrdersPromise(user.id);
  const details = await getOrderDetailsPromise(orders[0]);
  const result = await processPaymentPromise(details);
  console.log("Payment:", result);
}

processOrder();


/*

localStorage : aapke browser ke andar data store karna jo ki band hone par bhi delte nhi hota hia 

sessionStorage : it store data temporaray mena tab band hua data gya

cookies: ye bhi data store karta hia and aapka data bowser ke cookiesnaam ki property mein save hot hai and ye cookie concept kam data ya light data ke liye hota hai

*/





/*


// ------------------ Session Storage ------------------
// - Stores data temporarily for one browser tab.
// - Data is deleted when the tab/window is closed.
// - Not shared across different tabs or windows.

sessionStorage.setItem("name", "Aditya");   // Save data
console.log(sessionStorage.getItem("name")); // "Aditya"


// ------------------ Local Storage ------------------
// - Stores data permanently until manually cleared.
// - Data remains even after closing/reopening the browser.
// - Has larger capacity (~5MB).

localStorage.setItem("theme", "dark");       // Save data
console.log(localStorage.getItem("theme"));   // "dark"


// ------------------ Cookies ------------------
// - Small data (about 4KB) stored in the browser.
// - Sent automatically with every HTTP request to the server.
// - Can have an expiry date.
// - Commonly used for authentication, sessions, and tracking.

document.cookie = "username=Aditya; expires=Fri, 31 Dec 2025 23:59:59 GMT";
console.log(document.cookie); // "username=Aditya"


// ------------------ Quick Difference ------------------
// Session Storage -> Temporary, per-tab, not sent to server.
// Local Storage   -> Permanent, until cleared, not sent to server.
// Cookies         -> Small data, can expire, sent to server.



*/






/*

==========  Session Storage  ==========

store kaise kare        
data fetch kaise kare   
remvov kaise kare      
updata kaise kare
*/




// ---------------- Session Storage Operations ----------------

// 1. Set Item (store data)
sessionStorage.setItem("username", "Aditya");   // key = "username", value = "Aditya"
sessionStorage.setItem("theme", "dark");        // key = "theme", value = "dark"


// 2. Get Item (retrieve data)
console.log(sessionStorage.getItem("username")); // Output: "Aditya"
console.log(sessionStorage.getItem("theme"));    // Output: "dark"


// 3. Update Item (just setItem with same key)
sessionStorage.setItem("theme", "light");       // updates the value
console.log(sessionStorage.getItem("theme"));    // Output: "light"


// 4. Remove Item (delete a single key-value pair)
sessionStorage.removeItem("username");
console.log(sessionStorage.getItem("username")); // Output: null


// 5. Clear All Items (remove everything from sessionStorage)
sessionStorage.clear();
console.log(sessionStorage.length);              // Output: 0


// 6. Get Key by Index (useful when you don’t know the key names)
sessionStorage.setItem("lang", "JavaScript");
sessionStorage.setItem("level", "Beginner");
console.log(sessionStorage.key(0)); // Might print "lang" or "level" depending on order

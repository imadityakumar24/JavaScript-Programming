

/*

// ------------------ Session Storage ------------------

- Stores data temporarily for one browser tab.
- Data is deleted when the tab/window is closed.
- Not shared across different tabs or windows.

sessionStorage.setItem("name", "Aditya");   // Save data
console.log(sessionStorage.getItem("name")); // "Aditya"


// ------------------ Local Storage ------------------

- Stores data permanently until manually cleared.
- Data remains even after closing/reopening the browser.
- Has larger capacity (~5MB).

localStorage.setItem("theme", "dark");       // Save data
console.log(localStorage.getItem("theme"));   // "dark"


// ------------------ Cookies ------------------

- Small data (about 4KB) stored in the browser.
- Sent automatically with every HTTP request to the server.
- Can have an expiry date.
- Commonly used for authentication, sessions, and tracking.

document.cookie = "username=Aditya; expires=Fri, 31 Dec 2025 23:59:59 GMT";
console.log(document.cookie); // "username=Aditya"


------------------ Quick Difference ------------------
Session Storage -> Temporary, per-tab, not sent to server.
Local Storage   -> Permanent, until cleared, not sent to server.
Cookies         -> Small data, can expire, sent to server.


*/

/*

==========  Cookies ==========

cookies : nearly 4 kb
localstorage sessionstorage = nearly 5 mb

*/







// ---------------- Cookie Operations ----------------

// 1. Set Cookie
// Format: key=value; expires=DATE; path=/
// "expires" makes cookie persist, otherwise deleted when browser closes
document.cookie = "username=Aditya; expires=Fri, 31 Dec 2025 23:59:59 GMT; path=/";
document.cookie = "theme=dark; path=/";


// 2. Get All Cookies
console.log(document.cookie);  
// Example Output: "username=Aditya; theme=dark"


// Helper function to get a specific cookie by name
function getCookie(name) {
    let cookies = document.cookie.split("; ");
    for (let cookie of cookies) {
        let [key, value] = cookie.split("=");
        if (key === name) return value;
    }
    return null;
}
console.log(getCookie("username")); // "Aditya"


// 3. Update Cookie (just set it again with same key)
document.cookie = "theme=light; path=/";  
console.log(getCookie("theme")); // "light"


// 4. Delete Cookie
// To delete -> set expiry date to past
document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
console.log(getCookie("username")); // null


// ---------------- Summary ----------------
// - Set cookie   -> document.cookie = "key=value; expires=DATE; path=/";
// - Get cookie   -> document.cookie (string of all cookies)
// - Update cookie -> set again with same key
// - Delete cookie -> set key with past expiry date

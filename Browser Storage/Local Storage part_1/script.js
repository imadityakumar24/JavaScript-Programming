
/*

localStorage : aapke browser ke andar data store karna jo ki band hone par bhi delte nhi hota hia 

sessionStorage : it store data temporaray mena tab band hua data gya

cookies: ye bhi data store karta hia and aapka data bowser ke cookiesnaam ki property mein save hot hai and ye cookie concept kam data ya light data ke liye hota hai

*/


/*

------------------ Session Storage ------------------

- Stores data temporarily for one browser tab.
- Data is deleted when the tab/window is closed.
- Not shared across different tabs or windows.

sessionStorage.setItem("name", "Aditya");   // Save data
console.log(sessionStorage.getItem("name")); // "Aditya"


------------------ Local Storage ------------------

- Stores data permanently until manually cleared.
- Data remains even after closing/reopening the browser.
- Has larger capacity (~5MB).

localStorage.setItem("theme", "dark");       // Save data
console.log(localStorage.getItem("theme"));   // "dark"


------------------ Cookies ------------------

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

==========  Local Storage  ==========

store kaise kare        =  setItem
data fetch kaise kare   =  getItem
remvov kaise kare       =  removeItem
updata kaise kare       =  setItem       -> if value is present it overwrite kit, if not present it create value


local storage always string save karta hai
agar hum string ke ilawa kuch aur save karne ki koshish krenge to vo chiz shi se store nhi ho payega

*/




/* =================  setItem  ==================  */

localStorage.setItem("name", "Aditya kumar prajapati");

let fetchdata = localStorage.getItem("name");
console.log("Local storage saved data : ",fetchdata);


/* =============== updating data using setItem  ================ */
localStorage.setItem("name", "Shri ram prajapati");

let updatedData = localStorage.getItem("name");
console.log("Local storage saved Updated data : ",updatedData);


/* =================  setItem  ==================  */
localStorage.setItem("dost", "Neelanjana");

let frientName = localStorage.getItem("dost");
console.log("Local storage saved data : ",frientName)


/* =================  removeItem  ==================  */
localStorage.removeItem("dost");
let friend = localStorage.getItem("dost");
console.log("Neelanja is removed from storage : ", friend);


/*


console.log("\n\n");

// imporatant
// local storage always string save karta hai
// agar hum string ke ilawa kuch aur save karne ki koshish krenge to vo chiz shi se store nhi ho payega


let data = localStorage.setItem("friendss", ["aditya", "sachin", "vivek"]);
let result = localStorage.getItem("friendss");
console.log(result);



now solution is use JSON 
JSON : kisi ko bhi stirng bna deta hia

*/

console.log("\n\nUsing JSON Stringify\n\n");

let data = localStorage.setItem("friendss", JSON.stringify(["aditya", "sachin", "vivek"])); // string array

let result = localStorage.getItem("friendss");
console.log("String : ", result);        // string 


/*

now ab local storage mai string save hai 
ab hme bhi data fetch karna hai but we want ki original form mai data aaya na ki string mai 

to hum ye sab JSON.parse se kar skte hai 

*/

console.log("\nUsing JSON Parse\n\n");

console.log(JSON.parse(localStorage.getItem("friendss")));      // give array

let newAns = JSON.parse(result);
console.log("Array : ", newAns);        // array

/* 
Topic: Working with Forms and Input Elements

Explanation:
1. Accessing Form Data → Use .value to get data from inputs.
2. Validating Forms → Add conditions like empty check, email format, age range.
3. preventDefault() → Prevents form from refreshing the page on submit.
4. onsubmit → Runs a function when form is submitted.
5. onchange → Triggers when input value is changed (after losing focus).
*/


// 1. Accessing Form Data + 2. Validating + 3. preventDefault() + 4. onsubmit
const form = document.getElementById("myForm");

form.addEventListener("submit", function (event) {
    event.preventDefault();   // Prevents page refresh

    // Get form values
    const username = document.getElementById("username").value.trim();
    const email    = document.getElementById("email").value.trim();
    const age      = document.getElementById("age").value.trim();

    // Basic validation
    if (username === "") {
        alert("Username is required");
        return;
    }
    if (!email.includes("@")) {
        alert("Please enter a valid email");
        return;
    }
    if (age === "" || age < 18) {
        alert("Age must be 18 or above");
        return;
    }

    // If all valid
    alert("Form submitted successfully!");
    console.log("Form Data:", { username, email, age });   // Check HTML note: output in console
});



  
// // 5. onchange Example
// const colorSelect = document.getElementById("color");

// colorSelect.addEventListener("change", function () {
//     console.log("Color changed to:", colorSelect.value);   // Check HTML note: output in console
//     alert("You selected: " + colorSelect.value);
// });



// 5. onchange Example
const colorSelect = document.getElementById("color");

colorSelect.addEventListener("change", function () {
    console.log("Color changed to:", colorSelect.value);   // Check HTML note: output in console
    alert("You selected: " + colorSelect.value);

    // Change background color of the page
    if (colorSelect.value) {
        document.body.style.backgroundColor = colorSelect.value.toLowerCase();
    }
});

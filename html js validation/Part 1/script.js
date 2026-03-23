const form = document.querySelector("#formContainer");

form.addEventListener("submit", function (event) {

    event.preventDefault(); // stop reload

    // get values
    const name = document.querySelector("#name").value.trim();
    const email = document.querySelector("#email").value.trim();
    const password = document.querySelector("#password").value;
    const gender = document.querySelector('input[name="gender"]:checked');
    const sports = document.querySelectorAll('input[type="checkbox"]:checked');

    // ===== NAME VALIDATION =====
    if (name.length < 3) {
        alert("Name must be at least 3 characters");
        return;
    }

    // ===== EMAIL VALIDATION =====
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
        alert("Enter a valid email address");
        return;
    }

    // ===== PASSWORD VALIDATION =====
    if (password.length < 6) {
        alert("Password must be at least 6 characters");
        return;
    }

    // ===== GENDER VALIDATION =====
    if (!gender) {
        alert("Please select gender");
        return;
    }

    // ===== CHECKBOX VALIDATION =====
    if (sports.length === 0) {
        alert("Please select at least one sport");
        return;
    }

    // ===== SUCCESS =====
    alert("Form submitted successfully!");

    // display values
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Gender:", gender.value);

    console.log("Sports:");
    sports.forEach(s => console.log(s.value));
});



const form = document.querySelector("#formContainer");

const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");

const nameError = document.querySelector("#nameError");
const emailError = document.querySelector("#emailError");
const passwordError = document.querySelector("#passwordError");
const sportsError = document.querySelector("#sportsError");
const genderError = document.querySelector("#genderError");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    let isValid = true;

    // ===== NAME =====
    if (nameInput.value.trim().length < 3) {
        nameError.textContent = "Name must be at least 3 characters";
        nameInput.classList.add("error-border");
        isValid = false;
    } else {
        nameError.textContent = "";
        nameInput.classList.remove("error-border");
    }

    // ===== EMAIL =====
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!emailInput.value.match(emailPattern)) {
        emailError.textContent = "Enter valid email";
        emailInput.classList.add("error-border");
        isValid = false;
    } else {
        emailError.textContent = "";
        emailInput.classList.remove("error-border");
    }

    // ===== PASSWORD =====
    if (passwordInput.value.length < 6) {
        passwordError.textContent = "Password must be 6+ characters";
        passwordInput.classList.add("error-border");
        isValid = false;
    } else {
        passwordError.textContent = "";
        passwordInput.classList.remove("error-border");
    }

    // ===== GENDER =====
    const gender = document.querySelector('input[name="gender"]:checked');
    if (!gender) {
        genderError.textContent = "Please select gender";
        isValid = false;
    } else {
        genderError.textContent = "";
    }

    // ===== SPORTS =====
    const sports = document.querySelectorAll('input[type="checkbox"]:checked');
    if (sports.length === 0) {
        sportsError.textContent = "Select at least one sport";
        isValid = false;
    } else {
        sportsError.textContent = "";
    }

    if (isValid) {
        alert("Form Submitted Successfully ✅");
        form.reset();
    }

});


// ===== REMOVE ERRORS WHEN USER TYPES =====

nameInput.addEventListener("input", () => {
    nameError.textContent = "";
    nameInput.classList.remove("error-border");
});

emailInput.addEventListener("input", () => {
    emailError.textContent = "";
    emailInput.classList.remove("error-border");
});

passwordInput.addEventListener("input", () => {
    passwordError.textContent = "";
    passwordInput.classList.remove("error-border");
});


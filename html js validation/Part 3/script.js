
const form = document.querySelector("#form");

const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");

const nameError = document.querySelector("#nameError");
const emailError = document.querySelector("#emailError");
const passwordError = document.querySelector("#passwordError");
const sportsError = document.querySelector("#sportsError");
const genderError = document.querySelector("#genderError");

// ========= VALIDATION FUNCTIONS =========

// name validation
function validateName() {
    if (nameInput.value.trim().length < 3) {
        nameError.textContent = "Name must be 3+ characters";
        nameInput.classList.add("error-border");
        return false;
    }
    nameError.textContent = "";
    nameInput.classList.remove("error-border");
    nameInput.classList.add("success-border");
    return true;
}

// email validation
function validateEmail() {
    const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (!emailInput.value.match(pattern)) {
        emailError.textContent = "Enter valid email";
        emailInput.classList.add("error-border");
        return false;
    }
    emailError.textContent = "";
    emailInput.classList.remove("error-border");
    emailInput.classList.add("success-border");
    return true;
}

// password validation
function validatePassword() {
    if (passwordInput.value.length < 6) {
        passwordError.textContent = "Password must be 6+ characters";
        passwordInput.classList.add("error-border");
        return false;
    }
    passwordError.textContent = "";
    passwordInput.classList.remove("error-border");
    passwordInput.classList.add("success-border");
    return true;
}

// checkbox validation
function validateSports() {
    const sports = document.querySelectorAll('input[type="checkbox"]:checked');
    if (sports.length === 0) {
        sportsError.textContent = "Select at least one sport";
        return false;
    }
    sportsError.textContent = "";
    return true;
}

// radio validation
function validateGender() {
    const gender = document.querySelector('input[name="gender"]:checked');
    if (!gender) {
        genderError.textContent = "Select gender";
        return false;
    }
    genderError.textContent = "";
    return true;
}

// ========= LIVE VALIDATION EVENTS =========

nameInput.addEventListener("input", validateName);
emailInput.addEventListener("input", validateEmail);
passwordInput.addEventListener("input", validatePassword);

document.querySelectorAll('input[type="checkbox"]').forEach(box => {
    box.addEventListener("change", validateSports);
});

document.querySelectorAll('input[name="gender"]').forEach(radio => {
    radio.addEventListener("change", validateGender);
});

// ========= FORM SUBMIT =========

form.addEventListener("submit", function(e) {

    e.preventDefault();

    const isValid =
        validateName() &&
        validateEmail() &&
        validatePassword() &&
        validateSports() &&
        validateGender();

    if (!isValid) return;

    // store data
    const userData = {
        name: nameInput.value,
        email: emailInput.value,
        password: passwordInput.value,
        sports: [...document.querySelectorAll('input[type="checkbox"]:checked')]
                .map(s => s.value),
        gender: document.querySelector('input[name="gender"]:checked').value
    };

    localStorage.setItem("userData", JSON.stringify(userData));

    alert("Form submitted & data stored ✅");

    form.reset();
});

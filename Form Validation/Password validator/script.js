/*



let form = document.querySelector("form");
// let pw = document.querySelector("#password");
// console.log(pw.value);

function findLenth(value) {
    if(value.length < 8) {
        alert("Enter 8 digit password");
    } 
}

function findletters(value) {
    let upper = /[A-Z]/.test(value); 
    if (upper == false)  {
        alert("Add uppercase letter also");
    } 

    let lower = /[a-z]/.test(value); 
    if (lower == false)  {
        alert("Add loweercase letter also");
    } 
}


form.addEventListener("submit", function(dets) {
    dets.preventDefault(); // stops page refresh
    let pw = document.querySelector("#password").value;
    // console.log(pw);

    let r1 = findLenth(pw);
    let r2 = findletters(pw);
    // let r3 = finfNumbers();
    // let r4 = SpeciakCharacter();

    // if (r1 == true && r2 == true && r3 == true && r4 == true) {}
});


*/


let password = document.querySelector("#password");
let email = document.querySelector("#email");
let form = document.querySelector("form");

form.addEventListener("submit", function(dets) {
    dets.preventDefault(); // stops page refresh
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Password validation (at least 8 chars, one uppercase, one lowercase, one number, one special char)
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    let emailAns    = emailRegex.test(email.value);
    let passwordAns = passwordRegex.test(password.value);

    if (emailAns == false) {
        let message = document.querySelector("#emailError");
        message.textContent = "Email is incorrect enter new email";
        document.querySelector(".error").style.display = "initial";
    }

    if (passwordAns == false) {
        let message = document.querySelector("#passwordError");
        message.textContent = "Pasword is week enter strong password";
        document.querySelector(".error").style.display = "initial";
    
    }

});
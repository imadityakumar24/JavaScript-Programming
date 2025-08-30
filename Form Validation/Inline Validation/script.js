
let nam = document.querySelector("#name");
let form = document.querySelector("form");

form.addEventListener("submit", function(details) {
    details.preventDefault();   // use to stop the form submmit

    if (nam.value.length <= 3) {
        document.querySelector("#box").style.display = "initial";
    }
    else {
        document.querySelector("#box").style.display = "none";
    }

});
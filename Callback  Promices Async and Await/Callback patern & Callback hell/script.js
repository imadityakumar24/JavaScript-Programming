
/*

===============  Callback patern & Callback hell  ================

callback : ek funciton ko agar aap ek aur function bhej de rhe ho parameter mein, to wo parameter wala function kehlata hia callback




*/





console.log("callback\n\n");


function kuchdrbaad(fnc) {
    setTimeout(fnc, Math.floor(Math.random()*10) * 1000);
}

kuchdrbaad(function() {
    console.log("thodi der baad mai print hua");
    
});




console.log("callback hell\n\n");


function profile(username, ansbhejo) {

    setTimeout(() => {
        console.log(`prfile fetched of : ${username}`);
        ansbhejo(username);
    }, 2000);
    
}


profile("Aditya Prajapti", function(details){
    console.log("user details : ", details);    
});
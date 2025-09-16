/*

====================  Promises  ======================= 

aap ek promise banaate ho jo ki do stated mein se ek state me jaa sakta me jaa sakta hai ans wo yaa to resolve hoga ya to reject hogaa ab wo kya hoga ye to waqt bataauega par humein dono ke liye code likhna padta hai

*/



let pr = new Promise(function(res, rej) {
    setTimeout(() => {
        // res("Aditya");
        let rn = Math.floor(Math.random() * 10);
        if (rn > 5) 
            res("Resolved with : " + rn);
        else 
            rej("Rejected with : " + rn);
        
    }, 3000);
});

// resolve kar diya to then chlega otherwose catch chlega

pr
.then(function(val) {
    console.log(val);
    
})
.catch(function(val) {
    console.log(val);
})

//creating function payment
function intialpayment(){
return new Promise((resolve, reject) => {
    setTimeout(()=>{
        const paymentsuccessful= Math.random()<0.5;
        if(intialpayment){
            resolve("payment accepted")
        }else{
            reject("payment not accepted")
        }
    },2000)
})
}
//function payment processing UI
function uipayment(){
    console.log("Processing Payment...");
}

//function payment succ
function paymentsucc(){
    console.log("Payment Successful...");
}

//function payment failed
function showfailurUI(){
    console.log("Payment Failed.");
}

uipayment();
intialpayment().then((s)=>{
    paymentsucc();
    console.log(s);
}).catch((err)=>{
    showfailurUI();
    console.log(err);
})
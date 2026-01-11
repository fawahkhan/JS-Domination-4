// bade level per module banane ke liye hum IIFE (Immediately Invoked Function Expression) ka use karte hain
//  design patterns -- iski help se ham maintainable , scalable aur modular code likh sakte hain jo bade applications ke liye useful hota hai
//code bht messy hojayega agr laakhon lines ke code ko khyl nhi rkhoge ki konsa part pvt hai konsa public hai 

//Modeule Pattern

//yeh ek design pattern hai jo code ko encapsulate karta hai aur private aur public members ko define karta hai
//isse hum apne code ko organized aur maintainable bana sakte hain
//iske andr ham sirf wahi chizen return krte hai jo hame bahar use krni hai
//is pattern ka fayda hai data hiding aur clean structure, taki code secure , reusable aur manageable rahe

// syntax-- sabse pehle iffe banao  (function(){})()  jahan banaya wahi call krdiya . aur fr usey ek variable me save krdo.

let Bank = (function(){
    let bankBalance = 12000

    function checkBalance(){
        console.log(bankBalance)
    }
    function setBalance(val){
        bankBalance = val ;
        console.log(bankBalance)
    }
    function withdraw(val){
        if(val<=bankBalance){
            bankBalance -=val;
            console.log(`INR ${val} withdrawn , Remaining Balancce : INR ${bankBalance}`)
        }
    }

    return {
        checkBalance,
        setBalance,
        withdraw
    }
})();

//jo bhi hamne return kiya sirf wahi access kiya jaa skta hai baki kuch access nhi kiya jaa skta iife ke bahar

Bank.checkBalance()
Bank.withdraw(200)
Bank.checkBalance()
Bank.setBalance(200)
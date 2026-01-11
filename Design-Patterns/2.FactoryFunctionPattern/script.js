// Factory Function Design Pattern 

// Ek function banate ho jo objects create krta hai (factory = object banane ki machine)

//Factory Function Pattern ek aisa design pattern hai jisme hum ek simple function likhte hain jo naye objects banakar return krta hai bina class ya new keyword use kiye

//is pattern ka main idea hai object creating ko ek function ke through control krna
//bina classes aur constructors ki help se kr rhe hai isliye isey kehte hai factory ffunction pattern.
function createProduct(name , price){
    let stock = 10 ;
    return { //object bana diya
        name ,
        price , 
        checkStock(qty){
            console.log(stock)
        },
        buy(qty){
            if(qty<=stock) {
                stock -= qty
                console.log(`${qty} pieces booked - ${stock} pieces left`);
            } else {
                console.error(`we only have ${stock} pieces left`)
            }

        },
        refill(qty){
            stock+=qty;
            console.log(`refille the stock - ${stock} pieces now`);
        },
    }
}

//create the products now as many as you want just by using the blue print.
let iphones = createProduct("iphone" , 90000);
iphones.buy(2) //i want to buy 2 i phones

let kitkat = createProduct("kitkat" , 10);
kitkat.buy(5) //want to buy 5 kitkats.
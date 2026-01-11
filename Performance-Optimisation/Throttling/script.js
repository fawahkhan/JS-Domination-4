// Debouncing --- ham nhi chahte har action pe kuch ho ... ham chahte hai ki hamare actions ke beech me jab koi specific gap ajaye tb koi action perform ho.
// THrottling - isme regular given interval pe event occur krta hai . jo bhi interval ham dete hai .
// reaction ata rehta hai ham ruke ya na ruke independent of our action and kitne intervals pe reacction chahiye yeh ham btate hai
// throttling aur debouncing dono ke dono ek funtion return krte hai kyunki jese hi ham eventlistener me throttle ya debounce ka function pass krte haia toh woh foran chal  jata hai immediately 
// toh usse avoid krne ke liye tai ham pehle action kr paye uske baad hhamari throttling ya debouncing start ho ham usme bhi ek gfunction retun kr dete hai jo hamare throttle aur debouncing waale function ki jagaah baith jata hai and it waits for us to take action.

function debounce(fnc , delay){
    let timer ;  //initialise kiya timer
    return function(...args){   //function diya infinite arguments ke sath yhi debounce ki jagah ayega . ...argss are the dets thaat we accept in event listener functions.

       clearTimeout(timer)  //clear krdiya timer
       timer = setTimeout(function(){   //defined timer
        fnc(...args) 
       },  delay)
    }
}
function throttle(fnc , delay){
    let timer = 0 ;
    return function(...args){
        let now = Date.now();   ///issse hame current time milta hai millisecods me
        if(now - timer >= delay ){ //age hamari (now-timer) ki value given delay interval se badi hui toh hamara function chala do aur timer ko update krdo.
            timer = now   //updated timer 
            fnc(...args)
        }
    }
}

let input = document.querySelector("input")  //ispe kuch bhi type ho toh hamara listener chalna chahiye

input.addEventListener("input" , throttle(function(){
    console.log("hey");
},3000)
)
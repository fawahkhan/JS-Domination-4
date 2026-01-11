// Debouncing --- am nhi chahte har action pe kuch ho ... ham chahte hai ki hamare actions ke beech me jab koi specific gap ajaye tb koi action perform ho.


function debounce(fnc , delay){
    let timer ;  //initialise kiya timer
    return function(...args){   //function diya infinite arguments ke sath yhi debounce ki jagah ayega . ...argss are the dets thaat we accept in event listener functions.

       clearTimeout(timer)  //clear krdiya timer
       timer = setTimeout(function(){   //defined timer
        fnc(...args) 
       },  delay)
    }
}

let input = document.querySelector("input")  //ispe kuch bhi type ho toh hamara listener chalna chahiye

input.addEventListener("input" , debounce(function(){
    console.log("hey");
},1000)
)
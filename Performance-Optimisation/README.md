# Debouncing and Throttling

## Debouncing
Debouncing ka matlab hai ki ham nahi chahte har action pe kuch ho. Ham chahte hai ki hamare actions ke beech me jab koi specific gap ajaye tab koi action perform ho. Iska matlab hai ki agar koi event baar baar trigger ho raha hai, toh sirf last event ke baad hi function chalega. Yeh useful hai jab aapko kisi action ko delay karna hai jab tak user ka input khatam nahi ho jata.

### Implementation
```javascript
function debounce(fnc, delay) {
    let timer;  // initialise kiya timer
    return function(...args) {   // function diya infinite arguments ke sath yhi debounce ki jagah ayega.
        clearTimeout(timer);  // clear krdiya timer
        timer = setTimeout(function() {
            fnc(...args); 
        }, delay);
    }
}
```

## Throttling
Throttling ka matlab hai ki isme regular given interval pe event occur karta hai. Jo bhi interval ham dete hai, reaction aata rehta hai ham ruke ya na ruke, independent of our action. Throttling ka use tab hota hai jab aap chahte hai ki kisi function ko ek specific interval par hi call kiya jaye, chahe event kitna bhi trigger ho raha ho.

### Implementation
```javascript
function throttle(fnc, delay) {
    let timer = 0;
    return function(...args) {
        let now = Date.now();   // issse hame current time milta hai milliseconds me
        if (now - timer >= delay) {
            timer = now;  // update timer
            fnc(...args);  // call the function
        }
    }
}
```

## Usage Example
```javascript
let input = document.querySelector("input");  // ispe kuch bhi type ho toh hamara listener chalna chahiye

input.addEventListener("input", throttle(function() {
    console.log("hey");
}, 3000));
```
Debouncing aur throttling dono ke dono ek function return karte hai kyunki jese hi ham event listener me throttle ya debounce ka function pass karte hai toh woh foran chal jata hai immediately. Toh usse avoid karne ke liye, ham pehle action kar paye, uske baad hamari throttling ya debouncing start hoti hai. Ham usme bhi ek function return kar dete hai jo hamare throttle aur debouncing wale function ki jagah baith jata hai aur wait karta hai hame action lene ke liye. 
//code splitting jo code jab zrurt padti hai usey tab load krte hai

//kuch bhi export ya import krne ke liye type module krna zruri hota hai html me.



// import krne me time lgg skta hai isliye yeh code asynchronous hota hai mtlb iske bad ka code pehle chal jayega aur yeh bad me chalega 
// pr ham isey await krdete hai taki yahi code pehle chale uske bad hi baki line of code chale.
let button = document.querySelector("button")
button.addEventListener("click" , async function(){
    let heavy = await import("./Heavy.js")  //import krne ke liye export krne ki zrurt hoti hai
    heavy.veryHeavy()
 //heavy was an object 
})
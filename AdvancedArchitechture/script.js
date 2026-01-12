//  Separation of concerns: 
// -- DOM ka code and logic ka code alag rehna chahiye 

const btn = document.querySelector("button")
const list = document.querySelector("ul")

// this is not the right way of doing thinggs if the codebase is bigg we will facce problems wile maintaining it 

// btn.addEventListener("click" , function(){
//     const num1 = Math.floor(Math.random()*10)
//     const num2 = Math.floor(Math.random()*10)
//     let add = num1+num2
//     let li = document.createElement("li")
//     li.textContent = add ;
//     list.appendChild(li)
    

// })



//the write way to do thinks is we shoukd keep the logic part separate

function add(n1 , n2){
    return n1 + n2 ;
}

btn.addEventListener("click" , function(){
    const num1 = Math.floor(Math.random()*10)
    const num2 = Math.floor(Math.random()*10)
    
    let finalSum = add(num1 , num2);   //separation of concerns 

    let li = document.createElement("li")
    li.textContent = add ;
    list.appendChild(li)
})



// Call Stack (Execution stack)

// js single threaded hai ek time pe ek hi kaam kregi 
// jab ham gfunction call krte hai woh stack pe top pe chala jata hai 
// function ccomplete hone ke bad woh stack se pop hojata hai
  


// web apis -- provided by the browser
// console setTimeout setInterval alert prompt etc
//yeh sari chizen js ka part nhi hoti hai. browser deta hai yeh features isliye inhe nodejs me directly use nhi kr skte . 



// event loops

// syncronous - ek ke bad ek execute hoga
// asynchronous - jese jese hota jayega execute krte jayega order se fark nhhi padta

// event loop - checks that the call stack is empty or not . if empty then it sends some new task to be done from the task queue.
//ab hame apni images ko observe krna hai

let imgs = document.querySelectorAll("img")

//observe krne ka function -- //intersection observer ka use krke ek naya instance banaya observer nam ka.
const observer = new IntersectionObserver(function(entries , observer){
    entries.forEach(function(entry){  //entries is an array like structure
        if(entry.isIntersecting){
            const img = entry.target ;
            img.src = img.dataset.src   //data-src ko dataset ke through access krte hai
            img.classList.add("loaded")   //pehle class me opacity zero thi lekin ab opacity 1 hojayegi toh ham image dekh payenge.
            observer.unobserve(entry)
        }
    })
}, 
{  //another object storing root and threshold value
    root : null ,  //root mtlb aap kis area me observe krwa rhe ho ... null means screen
    threshold : 0.1,  //means 10% andr ayegi jese hi wese hi load hojayegi
}

)  

imgs.forEach(function(img){
    observer.observe(img) ;
})
let burger = document.querySelector(".burger")
let nav=document.querySelector(".nav")
burger.addEventListener("click", function(){
   
    nav.classList.toggle("active")
    burger.classList.toggle("active")
    
})

document.querySelectorAll(".links").forEach(n=>
    n.addEventListener("click", ()=>{
        nav.classList.remove("active")
        burger.classList.remove("active")
    
}))
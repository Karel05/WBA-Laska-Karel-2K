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

document.querySelectorAll(".links").forEach(element=>{
   if (element.href == window.location.href) {
        element.style.background="rgb(174, 174, 174)"
   }
     
   
})
    

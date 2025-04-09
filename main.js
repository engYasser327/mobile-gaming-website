let burger = document.querySelector('.burger')
let nav = document.querySelector('.nav-links')
let burger2 = document.querySelector('.burger2')
let section = document.querySelector('.section')

burger.addEventListener('click' , () =>{
    nav.classList.add('active')
    burger.style.visibility = "hidden"
    burger2.style.visibility="visible"
    // section.style.marginTop = "50px"
})

burger2.addEventListener('click' , ()=>{
    nav.classList.remove('active')
    burger2.style.visibility="hidden"
    burger2.style.display = "block"
    burger.style.visibility="visible"
})
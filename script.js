const burger = document.querySelector('.header-burger')
const menu = document.querySelector('.mobile-menu')
const header = document.querySelector('.header .container')
const btns = document.querySelectorAll('.buttons .container button')
const red = document.querySelector(".red")
burger.addEventListener('click', function(){
    menu.classList.toggle('active')
    burger.classList.toggle('active')
})

btns.forEach(function(btn, index) {
    btn.addEventListener('click', function(){
        header.style.backgroundColor = btn.value
       
        
    })
})
// red.addEventListener("click", function(){

//     header.style.background = '
// })



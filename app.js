let burger=document.querySelector('.burger')
let navbar=document.querySelector('.navbar')
let navlist=document.querySelector('.navlist')
let rightnav=document.querySelector('.rightnav')


burger.addEventListener('click',function(){
navlist.classList.toggle('vclass')

rightnav.classList.toggle('vclass')
navbar.classList.toggle('hnav')

})
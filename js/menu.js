
let btnMenu = document.getElementById('btn-menu')
let menu = document.getElementById('menu-mobile')
let overLay = document.getElementById('overlay-menu')

btnMenu.addEventListener('click', ()=>{
        menu.classList.add('abrir-menu')
    })

    menu.addEventListener('click', ()=>{
        menu.classList.remove('abrir-menu')
    })
    overLay.addEventListener('click', ()=>{
        menu.classList.remove('abrir-menu')
    })
 
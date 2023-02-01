

const menuLinks = document.getElementById('menu_links')
const menuCollapse = document.getElementById('menu_collapse')
const menuBtnOpen = document.getElementById('menu_btn_open')
const menuBtnClosed = document.getElementById('menu_btn_close')
const shader = document.getElementById('shader')




const openMenu = (e) => { 
    menuLinks.classList.toggle('opened')
    menuCollapse.classList.toggle('opened')
    shader.classList.toggle('opened')
    menuBtnClosed.classList.toggle('opened')
    menuBtnOpen.classList.toggle ('opened')  

}

menuBtnOpen.addEventListener('click', openMenu)
menuBtnClosed.addEventListener('click', openMenu)
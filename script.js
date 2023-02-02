

const menuLinks = document.getElementById('menu_links')
const menuCollapse = document.getElementById('menu_collapse')
const menuBtnOpen = document.getElementById('menu_btn_open')
const menuBtnClosed = document.getElementById('menu_btn_close')
const shader = document.getElementById('shader')
const firstLink = document.getElementById('first_link')



const openMenu = (e) => { 
    menuLinks.classList.toggle('opened')
    menuCollapse.classList.toggle('opened')
    shader.classList.toggle('opened')
    menuBtnClosed.classList.toggle('opened')
    menuBtnOpen.classList.toggle ('opened') 
    if (menuBtnOpen.classList.contains('opened')) {
        menuBtnOpen.setAttribute('aria-expanded', 'true')
        firstLink.focus()
    } else {
    menuBtnOpen.setAttribute('aria-expanded', 'false') 
    }
}

menuBtnOpen.addEventListener('click', openMenu)
menuBtnClosed.addEventListener('click', openMenu)
const menu = document.getElementById('menu')
const close = document.querySelector('.fa-xmark')
const menuList = document.getElementById('nav')

menu.addEventListener('click', ()=>{
    menuList.style.display = "flex"
})
function closeMenu() {
    menuList.style.display = "none"
}

close.addEventListener("click", closeMenu)

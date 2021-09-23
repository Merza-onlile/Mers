const burger = document.querySelector('.humburger-menu')
const menuElem = document.querySelector('.menu')

const toggMenu = () => {
    menuElem.classListtoggle('menu-active')
    burger.classList.toggle('humburger-menu-active')
}

burger.addEventListener('click', () => toggMenu())
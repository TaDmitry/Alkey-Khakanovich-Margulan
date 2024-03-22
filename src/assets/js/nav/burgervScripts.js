//Открытие закрытие бургера

const burgerButton = document.querySelector('.main-menu__burgers')
const closeButton = document.querySelector('.main-menu__button')
const overlayMenu = document.querySelector('.main-menu__container')
const menuItems = document.querySelectorAll('.main-menu__item')

function toggleMenu() {
  burgerButton.classList.toggle('close')
  overlayMenu.classList.toggle('overlay')
}

burgerButton.addEventListener('click', toggleMenu)

closeButton.addEventListener('click', toggleMenu)

menuItems.forEach((item) => {
  item.addEventListener('click', () => {
    if (overlayMenu.classList.contains('overlay')) {
      toggleMenu()
    }
  })
})

// Добавление обработчика событий на изменение размера окна
window.addEventListener('resize', () => {
  const screenWidth = window.innerWidth
  if (screenWidth > 768 && overlayMenu.classList.contains('overlay')) {
    toggleMenu()
  }
})

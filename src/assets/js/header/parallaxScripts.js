'use strict'

const parallax = document.querySelector('.parallax')
const background = document.querySelector('.images-parallax__background')

// Коэффициенты для параллакса
const forBackground = 40
const speed = 0.05

// Переменные для отслеживания координат мыши
let positionX = 0,
  positionY = 0
let coordXprocent = 0,
  coordYprocent = 0

// Функция для установки стилей параллакса при движении мыши
function setMouseParallaxStyle() {
  const distX = coordXprocent - positionX
  const distY = coordYprocent - positionY

  if (!('ontouchstart' in window) && window.innerWidth > 900) {
    // Если параллакс активен, обновляем позиции
    positionX = positionX + distX * speed
    positionY = positionY + distY * speed
  } else {
    // Если параллакс блокируется, сбрасываем позиции в ноль
    positionX = 0
    positionY = 0
  }

  // Применяем стили к заднему фону
  background.style.cssText = `transform: translate(${positionX / forBackground}%,${positionY / forBackground}%);`

  // Запускаем анимацию следующего кадра
  requestAnimationFrame(setMouseParallaxStyle)
}

// Функция для проверки размера экрана и активации параллакса
function checkScreenSize() {
  // Удаляем обработчик движения мыши, если он был добавлен ранее
  parallax.removeEventListener('mousemove', handleMouseMove)

  if (!('ontouchstart' in window) && window.innerWidth > 900) {
    // Если размер экрана соответствует условиям активации параллакса,
    // добавляем обработчик движения мыши
    parallax.addEventListener('mousemove', handleMouseMove)
    setMouseParallaxStyle() // Вызываем обновление параллакса
  }
}

// Обработчик движения мыши для определения координат
function handleMouseMove(e) {
  const parallaxWidth = parallax.offsetWidth
  const parallaxHeight = parallax.offsetHeight

  const coordX = e.pageX - parallaxWidth / 2
  const coordY = e.pageY - parallaxHeight / 2

  // Получаем процентные координаты
  coordXprocent = (coordX / parallaxWidth) * 100
  coordYprocent = (coordY / parallaxHeight) * 100
}

// Инициализация проверки размера экрана
checkScreenSize()

// Обработчик изменения размера экрана
window.addEventListener('resize', checkScreenSize)

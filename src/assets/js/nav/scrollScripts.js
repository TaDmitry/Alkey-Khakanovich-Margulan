// Обработчик навигации по странице
document.addEventListener('click', function (e) {
  const targetLink = e.target.closest('a')
  if (targetLink && targetLink.getAttribute('href') && targetLink.getAttribute('href').startsWith('#')) {
    e.preventDefault()
    const targetId = targetLink.getAttribute('href').substring(1)
    const targetSection = document.getElementById(targetId)
    if (targetSection) {
      const targetOffset = targetSection.getBoundingClientRect().top + window.scrollY

      // Плавная прокрутка к целевой секции
      window.scrollTo({
        top: targetOffset - targetLink.offsetHeight,
        behavior: 'smooth'
      })
    }
  }
})

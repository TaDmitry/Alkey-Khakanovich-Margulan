// Получаем текущий год
const currentYear = new Date().getFullYear()
const elements = document.getElementsByClassName('current-year')

for (let i = 0; i < elements.length; i++) {
  elements[i].textContent = currentYear
}

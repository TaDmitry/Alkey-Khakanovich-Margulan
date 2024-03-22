<template>
  <nav class="navigation-area">
    <section class="navigation-area__wrapper main-wrapper">
      <div class="navigation-area__logo">
        <a href="https://ppu.edu.kz/" class="logo">
          <img src="/src/assets/img/logo.png" />
        </a>
      </div>
      <div class="navigation-area__menu">
        <div class="main-menu">
          <div class="main-menu__burgers" id="main-menu__burgers">
            <span></span>
          </div>
          <div class="main-menu__container" id="main-menu__container">
            <div class="main-menu__shell">
              <div>
                <div class="main-menu__button"><i class="fa-solid fa-xmark"></i></div>
                <ul class="main-menu__list">
                  <li class="main-menu__item">
                    <RouterLink to="/" href="#brief-biography">Краткая биография</RouterLink>
                  </li>
                  <li class="main-menu__item">
                    <RouterLink to="/biography" href="#biography">Биография</RouterLink>
                  </li>
                  <li class="main-menu__item">
                    <RouterLink to="/photo" href="#photo">Фотоархив</RouterLink>
                  </li>
                </ul>
              </div>
              <div class="main-menu__footer">
                <p>ppu.edu.kz © 2024-<samp class="current-year"></samp> Все права защищены.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </nav>
</template>

<script>
import { RouterLink } from 'vue-router'

export default {
  components: {
    RouterLink
  }
}
</script>

<style></style>

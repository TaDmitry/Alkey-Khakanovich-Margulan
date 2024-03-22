<script setup>
import HeaderComponent from './components/HeaderComponent.vue'
import NavComponent from './components/NavComponent.vue'
import FooterComponent from './components/FooterComponent.vue'
</script>

<template>
  <HeaderComponent></HeaderComponent>

  <NavComponent></NavComponent>

  <main class="main" id="main">
    <RouterView></RouterView>
  </main>

  <FooterComponent></FooterComponent>
</template>

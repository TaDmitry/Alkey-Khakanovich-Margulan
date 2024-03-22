import { createRouter, createWebHistory } from 'vue-router'
import { createApp } from 'vue'
import App from './App.vue'

import './assets/scss/main.scss'

import BriefBiographyComponent from './components/BriefBiographyComponent.vue'
import BiographyComponent from './components/BiographyComponent.vue'
import PhotoArchiveComponent from './components/PhotoArchiveComponent.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      name: 'BriefBiography',
      path: '/',
      component: BriefBiographyComponent
    },
    {
      name: 'Biography',
      path: '/biography',
      component: BiographyComponent
    },
    {
      name: 'PhotoArchive',
      path: '/photo',
      component: PhotoArchiveComponent
    }
  ]
})

const app = createApp(App)
app.use(router)
app.mount('#app')

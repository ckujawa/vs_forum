import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import PageHome from '@/components/PageHome'
import App from '@/App'

const routes = [
  { path: '/', name: 'home', component: PageHome }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

const app = createApp(App)
app.use(router)
app.mount('#app')

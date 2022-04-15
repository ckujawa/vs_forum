import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/Home'
import ThreadShow from '@/pages/ThreadShow'
import NotFound from '@/pages/NotFound'
import dataSource from '@/data.json'
import Forum from '@/pages/Forum'
import Category from '@/pages/Category'

const routes = [
  { path: '/', name: 'home', component: Home },
  {
    path: '/forum/:id',
    name: 'Forum',
    component: Forum,
    props: true
  },
  {
    path: '/category/:id',
    name: 'Category',
    component: Category,
    props: true,
    beforeEnter: (to, from, next) => {
      const categoryExists = dataSource.categories.find(category => category.id === to.params.id)
      if (categoryExists) {
        return next()
      } else {
        next({
          name: NotFound,
          params: { pathMatch: to.path.substring(1).split('/') },
          query: to.query,
          hash: to.hash
        })
      }
    }
  },
  {
    path: '/thread/:id',
    name: 'ThreadShow',
    component: ThreadShow,
    props: true,
    beforeEnter: (to, from, next) => {
      const threadExists = dataSource.threads.find(thread => thread.id === to.params.id)
      if (threadExists) {
        return next()
      } else {
        next({
          name: NotFound,
          params: { pathMatch: to.path.substring(1).split('/') },
          // preserve existing query and hash
          query: to.query,
          hash: to.hash
        })
      }
    }
  },
  {
    path: '/:pathMatch(.*)*',
    name: NotFound,
    component: NotFound
  }
]

export default createRouter({
  scrollBehavior (to, from, savedPosition) {
    // see https://router.vuejs.org/guide/advanced/scroll-behavior.html for more info...
    return {
      top: 0
    }
  },
  history: createWebHistory(),
  routes
})

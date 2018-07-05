import Vue from 'vue'
import Router from 'vue-router'
import MainPage from './views/MainPage.vue'
import AuthorPage from './views/AuthorPage.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'mainpage',
      component: MainPage
    },
    {
      path: '/autor/:authoridurl',
      name: 'authorpage',
      component: AuthorPage
    }
  ]
})

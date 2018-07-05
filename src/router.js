import Vue from 'vue'
import Router from 'vue-router'
import MainPage from './views/MainPage.vue'
import AuthorPage from './views/AuthorPage.vue'
import CategoryPage from './views/CategoryPage.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'mainpage',
      component: MainPage
    },
    {
      path: '/author/:authorid',
      name: 'authorpage',
      component: AuthorPage
    },
    {
      path: '/category/:categoryid',
      name: 'categorypage',
      component: CategoryPage
    }
  ]
})

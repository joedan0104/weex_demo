/* global Vue */
import Router from 'vue-router'
import Test from './views/Test.vue'
import Home from './views/Home.vue'
import BookDetail from './views/BookDetail.vue'

Vue.use(Router)

module.exports = new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/detail',
      name: 'detail',
      component: BookDetail
    },
    {
      path: '/test',
      name: 'test',
      component: Test
    }
  ]
})

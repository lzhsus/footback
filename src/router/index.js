import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/pages/home'
import MyMain from '@/components/pages/mymain'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/mymain',
      name: 'mymain',
      component: MyMain
    }
  ],
  mode: 'history'
})

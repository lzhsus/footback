import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/pages/home'
import MyMain from '@/components/pages/mymain'
import Competition from '@/components/pages/Competition'
import News from '@/components/pages/news'
import RankingList from '@/components/pages/RankingList'
import NavChannel from '@/components/navChannel/navChannel'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/competition',
      name: 'competition',
      component: Competition
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
    },
    {
      path: '/news',
      name: 'news',
      component: News
    },
    {
      path: '/rankinglist',
      name: 'rankinglist',
      component: RankingList
    }
    ,
    {
      path: '/navChannel',
      name: 'navChannel',
      component: NavChannel
    }
  ],
  mode: 'history'
})

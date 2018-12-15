import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/pages/home'
import MyMain from '@/components/pages/mymain'
import Competition from '@/components/pages/Competition'
import News from '@/components/pages/news'
import RankingList from '@/components/pages/RankingList'
import NavChannel from '@/components/navChannel/navChannel'
import Login from '@/components/login'
import YingTeam from "@/components/items/yingTeam"
import ZhongTeam from "@/components/items/zhongTeam"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta:{
        index:0,
        showFooter:true
      }
    },
    {
      path: '/competition',
      name: 'competition',
      component: Competition,
      meta:{
        index:0,
        showFooter:true
      }
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      meta:{
        index:0,
        showFooter:true
      }
    },
    {
      path: '/mymain',
      name: 'mymain',
      component: MyMain,
      meta:{
        index:0,
        showFooter:true
      }
    },
    {
      path: '/news',
      name: 'news',
      component: News,
      meta:{
        index:0,
        showFooter:true
      }
    },
    {
      path: '/rankinglist',
      name: 'rankinglist',
      component: RankingList,
      meta:{
        index:0,
        showFooter:true
      }
    }
    ,
    {
      path: '/navChannel',
      name: 'navChannel',

      component: NavChannel,
      meta:{
        index:1,
        showFooter:false
      }
    },
    {
      path: '/mymain/login',
      name: 'login',
      component: Login,
      meta:{
        index:1,
        showFooter:false
      }
    },
    {
      path: '/yingTeam',
      name: 'yingTeam',
      component: YingTeam,
      meta:{
        index:1,
        showFooter:false
      }
    },
    {
      path: '/zhongTeam',
      name: 'zhongTeam',
      component: ZhongTeam,
      meta:{
        index:1,
        showFooter:false
      }
    },

  ],
  mode: 'history'
})

import Vue from 'vue'
import Router from 'vue-router'
// 导入组件路径
import MusicHeader from '@/components/music-header/MusicHeader'
import Rank from '@/components/rank/rank'
import Recommend from '@/components/recommend/recommend'
import Singer from '@/components/singer/singer'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'MusicHeader',
    //   component: MusicHeader
    // },
    {
      path: '/recommend',
      name: 'Recommend',
      component: Recommend
    },
    {
      path: '/rank',
      name: 'Rank',
      component: Rank
    },
    {
      path: '/singer',
      name: 'Singer',
      component: Singer
    },
  ]
})

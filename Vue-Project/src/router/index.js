import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import view from '@/components/common/view'
import mainx from '@/components/views/mainx'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/view',
      name: '博客',
      component: view
    },
    {
      path: '/mainx',
      name: 'mainx',
      component: mainx
    }
  ]
})

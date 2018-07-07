import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import view from '@/components/common/view'
import mainx from '@/components/views/mainx'
import firstview from '@/components/views/firstview'
import zhihu from '@/components/views/zhihu'
import zhihuResource from '@/components/views/zhihu-resource'
import notes from '@/components/views/notes'
import articlelist from '@/components/views/articlelist'
import articlelist2 from '@/components/views/articlelist2'
import articledetail from '@/components/views/articledetail'
import myArticle from '@/components/views/myArticle'  //文章笔记点进去的详情页
import aboutme from '@/components/views/aboutme'
import canvasLight from '@/components/views/canvasLight'
import morebtn from '@/components/views/morebtn'
import btnStatus from '@/components/views/btnStatus'
import fullPage from '@/components/views/test/fullpage'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/fullPage',
      name: '全屏滚动',
      component: fullPage
    },
    {
      path: '/view',
      name: '博客',
      component: view
    },
    {
      path: '/morebtn',
      name: 'morebtn',
      component: morebtn
    },
    {
      path: '/btnStatus',
      name: '不同状态显示不同按钮情况',
      component: btnStatus
    },
    {
      path: '/articledetail/:id',
      name: '文章详情',
      component: articledetail
    },
    {
      path: '/myArticle/:type',
      name: '我的文章详情',
      component: myArticle
    },
    
    {
      path: '/mainx',
      name: 'mainx',
      component: mainx,
      children:[
        {
          path: '/mainx/firstview',
          name: 'firstview',
          component: firstview,
        },
        {
          path: '/mainx/canvasLight',
          name: 'canvasLight',
          component: canvasLight,
        },
        {
          path: '/mainx/article',
          name: '文章列表',
          component: articlelist
        },
        {
          path: '/mainx/myArticle',
          name: '我的笔记',
          component: articlelist2
        },
        {
          path: '/mainx/douban',
          name: 'douban',
          component: zhihu,
        },
        {
          path: "/mainx/zhihu",
          name:"zhihu",
          component: zhihuResource,
        },
        {
          path: "/mainx/notes",
          name:"notes",
          component: notes,
        },
        {
          path: "/mainx/aboutme",
          name:"aboutme",
          component: aboutme,
        }
      ]
    }
  ]
})

<template lang="html">
    <div class="article">
      <top>{{title}}</top>
     
      <div class="main">
        <el-breadcrumb separator="/" style="padding-top: 20px;">
          <el-breadcrumb-item :to="{ path: '/mainx/firstview' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/mainx/article' }">文章列表</el-breadcrumb-item>
          <el-breadcrumb-item>文章详情</el-breadcrumb-item>
        </el-breadcrumb>
        <section class="content" v-for="item in json" v-show="item.id == articid">
          <h3>{{item.title}}</h3>
          <p v-html="item.content"></p>
        </section>
      </div>

    </div>
</template>

<script>
import top from '../common/head'
export default {
  data(){
    return{
      title:"文章标题",
      articid:"",
      json:[
        {
          "id":1,
          "title":"vue常用的插件",
          "content":"移动端：1.UI组件Mint UI; <a>http://mint-ui.github.io/#!/zh-cn</a> <br /> github：https://github.com/ElemeFE/mint-ui <br/> 2.幻灯片组件 <b>vue-swiper</b> gitlab:https://github.com/ElemeFE/vue-swipe <br /> 3. 无线滚动，实现无限下拉加载 <b>vue-infinite-scroll</b> <br/> 4.下拉即在或上拉加载 <b>vue-loadmore</b> <br/> 5. toast组件 <b>vue-toast-mobile</b> <br/> 6.indicator组件 提示用户正在加载 <b>vue-indicator</b> <br/> 7.弹出框组件 vue-msgbox <p> --------分割线--------</p> <p>PC端：<b>element-ui</b>： http://element-cn.eleme.io/#/zh-CN/component/dialog</p>"
        },
        {
          "id":2,
          "title":"vue常用的一些小技巧",
          "content":"1.v-if: <br/> 2.v-show: <br/> 3.过滤器 "
        },
        {
          "id":3,
          "title":"vuex 的理解与应用",
          "content":"<p>什么是vuex?</p> "
        }
      ]
    }
  },
  mounted(){
    this.articid =location.hash.substr(-1);
  },
  components:{
    top
  }
}
</script>

<style lang="css" scoped>
.main{
  max-width: 1200px;
  min-width: 1000px;
  margin: 20px auto;
  padding: 0px 20px 20px 20px;
  box-shadow:    0px -10px 0px 0px #fff,   /*上边阴影  红色*/
               -5px 0px 10px 0px rgba(0,0,0,0.5),   /*左边阴影  绿色*/
               5px 0px 10px 0px rgba(0,0,0,0.5),    /*右边阴影  蓝色*/
               0px 10px 0px 0px #fff;    /*下边阴影  黄色*/
}
.content{
  margin-top: 20px;
  border-top: 1px solid #dedede;
}
</style>

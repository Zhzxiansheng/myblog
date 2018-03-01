<template lang="html">
    <div class="article">
      <top>{{title}}</top>
     
      <div class="main">
        <el-breadcrumb separator="/" style="padding-top: 20px;">
          <el-breadcrumb-item :to="{ path: '/mainx/firstview' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/mainx/article' }">文章列表</el-breadcrumb-item>
          <el-breadcrumb-item v-for="item in json" v-show="item.id == articid" :key="item.id">{{item.title}}</el-breadcrumb-item>
        </el-breadcrumb>
        <section class="content" v-for="item in json" v-show="item.id == articid" :key="item.id">
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
          "content":"4. v-bind:class 的办法， 根据不同的status 展示不同的样式，这里其实是根据状态的返回值是多少来赋值不同的class.在div 行内加入v-bind:class={'class-a':'判断条件','class-b':'判断条件'} 这里的大括号外边应该加上双引号，因为vue 会解析报错的原因，这里没有加 这里会根据判断条件的 true or false 来选择应用哪个class .class-a：border: 1px solid red .class-b：border: 1px solid blue; "
        },
        {
          "id":3,
          "title":"vuex 的理解与应用",
          "content":"<p>什么是vuex?</p><p>https://vuex.vuejs.org/zh-cn/state.html; https://segmentfault.com/a/1190000009404727</p> "
        },
        {
          "id":4,
          "title":"vue实现数据双向绑定的原理",
          "content":"<p>Objec.definProperty()它可以来控制一个对象属性的一些特有操作，比如读写权、是否可以枚举</p><p>它有两个描述属性：get/set</p><p>我们会用Object.defineProperty()设置对象，通过get和set进行操作，get是在读取这个对象的一个属性的值的时候触发的函数；set是在设置对象中这个属性的值触发的函数</p>"
        },
        {
          "id":5,
          "title":"数组快排的实现",
          "content":`var quickSort = function(arr) {
                     <br/>
                    　　if (arr.length <= 1) { return arr; }
                       <br/>
                    　　var pivotIndex = Math.floor(arr.length / 2);
                        <br/>
                    　　var pivot = arr.splice(pivotIndex, 1)[0];
                        <br/>
                    　　var left = [];
                        <br/>
                    　　var right = [];
                        <br/>
                    　　for (var i = 0; i < arr.length; i++){
                          <br/>
                    　　　　if (arr[i] < pivot) {
                            <br/>
                    　　　　　　left.push(arr[i]);
                            <br/>
                    　　　　} else {
                            <br/>
                    　　　　　　right.push(arr[i]);
                            <br/>
                    　　　　}
                          <br/>
                    　　}
                        <br/>
                    　　return quickSort(left).concat([pivot], quickSort(right));
                        <br/>
                    };`
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

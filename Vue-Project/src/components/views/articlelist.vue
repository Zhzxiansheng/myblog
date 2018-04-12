<template lang="html">
  <div class="articlist">
    <div class="list" >
      <section class="section" v-for="item in json" :key="item.id" :id="item.id">
        <h3>{{item.title}}</h3>
        <!-- <p v-html="item.content"></p> -->
        <listC :content="item.content" v-on:add></listC>
        <span @click="goDetail(item.id)" class="gotodetail"></span>
      </section>
  </div>
  </div>
</template>

<script>
import  listC from './listC';
export default {
  
  data(){
    return{
      json:[
        {
          "id":1,
          "title":"vue常用的插件",
          "content":"移动端：1.UI组件Mint UI; <a>http://mint-ui.github.io/#!/zh-cn</a> <br /> github：https://github.com/ElemeFE/mint-ui <br/> 2.幻灯片组件 <b>vue-swiper</b> gitlab:https://github.com/ElemeFE/vue-swipe <br />"
        },
        {
          "id":2,
          "title":"vue常用的一些小技巧",
          "content":"1.v-if: <br/> 2.v-show: <br/> 3.过滤器 4. 根据不同的状态展示不同的样式v-bind:class"
        },
        {
          "id":3,
          "title":"vuex 的理解与应用",
          "content":"<p>什么是vuex?</p> "
        },
        {
          "id":4,
          "title":"vuejs实现数据双向绑定的原理",
          "content":"<p>实现原理object.defineProperty()</p> "
        },
        {
          "id":5,
          "title":"数组快排的实现",
          "content":"将数组切割成两个数组，对这两个数组"
        }
        
      ]
    }
  },
  created(){

  },
  mounted(){

  },
  components: {
    listC
  },
  methods:{
    goDetail(id){
      this.$router.push("/articledetail/"+id);
    }
  }
}
</script>

<style lang="css" scoped>
  .section{
    width: 80%;
    max-height: 200px;
    border: 1px solid #e6e6e6;
    margin:10px auto 30px;
    padding: 0px 20px 20px 20px;
    overflow: hidden;
    position: relative;
  }
  .section>h3{
    padding-left: 20px;
    font-size: 15px;
    padding-bottom: 10px;
    border-bottom: 1px solid #e6e6e6;
  }
  .section>p{
    line-height: 22px;
    width: 96%;
  }
  .gotodetail{
    position: absolute;
    bottom: 5px;
    right:20px;
    font-size: 12px;
    color: #ccc;
    cursor: pointer;
    transition: all 0.5s;
    width: 35px;
    opacity: 0.8;
    height: 30px;
    background: url("../../../static/img/right.png") center no-repeat;
    background-size: 100% 100%;
  }
  .gotodetail:hover{
    transform: translateX(10px);
  }

</style>

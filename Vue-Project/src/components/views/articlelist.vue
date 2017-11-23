<template lang="html">
  <div class="articlist">
    <div class="list" >
      <section class="section" v-for="item in json" :key="item.id" :id="item.id">
        <h3>{{item.title}}</h3>
        <p v-html="item.content"></p>
        <span @click="goDetail(item.id)" class="gotodetail"></span>
      </section>
  </div>
  </div>
</template>

<script>
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
          "content":"1.v-if: <br/> 2.v-show: <br/> 3.过滤器 "
        }
      ]
    }
  },
  created(){

  },
  mounted(){

  },
  methods:{
    goDetail(id){
      console.log(id);
      this.$router.push("/articledetail?"+id);
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

<template lang="html">
  <div class="articlist">
    <div class="list" >
      <section class="section" v-for="item in json" :key="item.type" :id="item.type">
        <h3>{{item.title}}</h3>
        <p v-html="item.content"></p>
        <span @click="goDetail(item.type)" class="gotodetail" v-show="item.orlink"></span>
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
          "type":"domToImage",
          "title":"dom-to-image",
          "content":"作用：将html转换成图片",
          "orlink":true
        },
        {
            "type":"props",
            "title":"父子组件之间通信",
            "content":"父组件传值子组件：props <br/> 子组件传父组件 $emit('name')",
            "orlink":true
        },
        
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
      this.$router.push("/myArticle/"+id);
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

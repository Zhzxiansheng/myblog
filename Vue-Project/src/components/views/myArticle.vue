<template lang="html">
    <div class="article">
      <top>{{title}}</top>
     
      <div class="main">
        <el-breadcrumb separator="/" style="padding-top: 20px; padding-bottom:20px;border-bottom:1px solid #dedede;">
          <el-breadcrumb-item :to="{ path: '/mainx/myArticle' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/mainx/myArticle' }">我的文章</el-breadcrumb-item>
          <el-breadcrumb-item>{{articName}}</el-breadcrumb-item>
        </el-breadcrumb>
        <section class="container">
          <!-- dom-to-image -->
          <domToImage v-show="domToImage"></domToImage> 
          <!-- 父子组件之间通信 -->
          <props v-show="props"></props>
        </section>
      </div>

    </div>
</template>

<script>
import top from '../common/head'
import domToImage from './article/domToImage'
import props from './article/props'

export default {
  data(){
    return{
      title:"文章标题",
      articName:"",
      domToImage: false,
      props:false,
    }
  },
  mounted(){
    // this.articid =location.hash.substr(-1);
    // this.articid = this.$route.params.type;
    this[this.$route.params.type] = true;
    this.articName = this.$route.params.type;
    console.log(this.$route.params);
  },
  components:{
    'top' : top,
    'domToImage' : domToImage,
    'props':props
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
.container{
  margin-top: 20px;
  border: 3px solid #409EFF;
  border-radius: 5px;
  padding: 20px;
}

</style>

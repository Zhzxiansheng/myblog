<template lang="html">
    <div class="article">
      <top>{{title}}</top>
      <div class="main">
        <h2>这里是文章部分</h2>
      </div>

    </div>
</template>

<script>
import top from '../common/head'
export default {
  data(){
    return{
      title:"文章标题"
    }
  },
  mounted(){
    console.log(this);
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
  margin: auto;
  box-shadow:    0px -10px 0px 0px #fff,   /*上边阴影  红色*/
               -5px 0px 10px 0px rgba(0,0,0,0.5),   /*左边阴影  绿色*/
               5px 0px 10px 0px rgba(0,0,0,0.5),    /*右边阴影  蓝色*/
               0px 10px 0px 0px #fff;    /*下边阴影  黄色*/
}
</style>

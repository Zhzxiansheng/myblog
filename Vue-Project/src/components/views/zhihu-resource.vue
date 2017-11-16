<template lang="html">
  <div class="zhihu-res">
    <h3>{{msg}}</h3>
    <ul class="list" v-for="x in list.stories">
      <li>
        <img :src="x.images[0]" alt="">
        <p>{{x.title}}</p>
      </li>
    </ul>
  </div>

</template>

<script>
export default {
  data(){
    return{
      list:[],
      msg:"vue-resource请求接口",
      notes:"Vue 在请求数据生成结构的时候，如果是属性的话，需要在前面加 “冒号” 并且动态的参数不需要写大括号  。但是如果往结构里面赋值，则不需要前面的冒号。但是需要在参数名外边加上两个大括号<p>{{x.title}}</p>"
    }
  },
  created(){
    // vue -resource 请求接口
    this.$http.get("https://zhihu-agent.herokuapp.com/get?api=/4/news/latest").then(function(data){
      this.list = data.data;
      console.log(this.list);
    });
  },
  mounted(){

  },
  methods:{

  }
}
</script>

<style lang="css">
</style>

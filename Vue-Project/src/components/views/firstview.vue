<template>
  <div class="hello">
   <el-carousel indicator-position="outside"  trigger="click" :interval="4000" :autoplay="false" height="750px">
      <el-carousel-item v-for="vlaue in swiper" height="100%" :key="vlaue.img">
        <img :src="vlaue.img" alt="" style="width:100%;height:100%">
      </el-carousel-item>
    </el-carousel>

   <el-input v-model="form.name" v-show="show_4" data-num="1"></el-input>
   <el-input v-model="form.name" v-show="show_4" data-num="2"></el-input>
   <el-input v-model="form.name" v-show="show_4" data-num="3"></el-input>
   <el-input v-model="form.name" v-show="show_4"></el-input>
     <button type="button"  @click="xuan()">隐藏123</button>
     <p>vue组建之间传值的方式</p>
      <p>关于Vuex的使用</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: '',
      form:{
        name:"zhz",
        pwd:"123"
      },
      show_4:true,
      swiper:[
        {"img": "../../../static/img/swiper.jpg"},
        {"img": "../../../static/img/swiper-2.jpg"},
        {"img": "../../../static/img/swiper-3.jpg"}
      ]
    }
  },
  created :function(){

  },
  mounted(){

  },
  methods:{
    xuan(){
      var arr = [1,2,3];
      for(var i =0;i<arr.length;i++){
        console.log(arr[i]);
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello{
  width: 100%;
}
.el-carousel__container{
  height: 500px !important;
}
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

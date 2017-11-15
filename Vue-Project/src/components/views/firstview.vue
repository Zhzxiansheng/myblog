<template>
  <div class="hello">
   <h1>第一界面</h1>
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
// import {time} from '../../../static/js/canvansTime.js' //注意路径
export default {
  data () {
    return {
      msg: '',
      form:{
        name:"zhz",
        pwd:"123"
      },
      show_4:true
    }
  },
  created(){},
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

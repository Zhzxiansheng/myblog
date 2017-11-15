<template>
  <div class="">
    <el-container>
        <el-header class="header">
          <span class="logo">
            Z
          </span>
      </el-header>
        <el-container class="container">
          <el-aside width="200px" class="aside">Aside</el-aside>
          <el-main>
            <el-input v-model="form.name" v-show="1" data-num="1"></el-input>
            <el-input v-model="form.name" v-show="2" data-num="2"></el-input>
            <el-input v-model="form.name" v-show="3" data-num="3"></el-input>
            <el-input v-model="form.name" v-show="show_4"></el-input>
          </el-main>
          <button type="button" name="button" @click="xuan()">隐藏123</button>
        </el-container>
    </el-container>
  </div>
</template>



<script>
export default {
  name:"mainx",
  data(){
    return{
      form:{
        name:"1"
      },
      1:true,
      2:true,
      3:true,
      show_4:true
    }
  },
  create(){

  },
  mountend(){

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

<style scoped>
.header{
  width: 100%;
  height: 100px !important;
  box-shadow: 0 3px 3px rgba(0,0,0,0.1);
  border-top: 1px solid #ebebeb;
  border-left: 1px solid #ebebeb;
  border-right: 1px solid #ebebeb;
}
.header .logo{
  display: inline-block;
  width: 100px;
  height: 100%;
  color:#409EFF ;
  font-size:50px ;
  font-weight: blod;
  text-align: center;
  line-height: 100px;
}
.container{
  padding-top: 20px;
}
.aside{
  border-right: 1px solid #D8DCE5;
}

</style>

<template lang="html">
  <div class="head">
    <el-header class="header">
    <router-link to="/mainx/firstview">
      <span class="logo animated  infinite">
        Z
      </span>
    </router-link>
    <span>用户：{{user}}</span>
    <h3 class="headtitle">{{ title }}</h3>
    <span class="timecon">
      <canvas id="canvas" height="100" style="width:100%"></canvas>
    </span>
  </el-header>
  </div>
</template>

<script>
import { time } from '../../../static/js/canvasTime.js'

export default {
  data(){
    return{
      title:"",
      user:""
    }
  },
  mounted (){
    time();
    this.user = window.localStorage.getItem("userName");
  }
}
</script>

<style lang="css">
@import '../../../static/css/animate.css';

.header{
  width: 100%;
  height: 100px !important;
  box-shadow: 0 3px 3px rgba(0,0,0,0.1);
  border-top: 1px solid #ebebeb;
  border-left: 1px solid #ebebeb;
  border-right: 1px solid #ebebeb;
  position: relative;
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
.timecon{
  display: inline-block;
  width: 200px;
  height: 100px;
  float: right;
  line-height: 117px;
}
.headtitle{
  width: 50%;
  height: 100%;
  line-height: 100px;
  overflow: hidden;
  position: absolute;
  left: 50%;
  transform: translate(-50%);
  top: 0;
  margin:0;
  padding:0;
}
.logo:hover{
  animation-name: bounce;
  -webkit-animation-duration: 1.5s;
  animation-duration: 1.5s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}
</style>

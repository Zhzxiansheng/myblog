<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view :data="system"/>
  </div>
</template>

<script>
export default {
  name: 'app',
  data(){
    return{
      system:"hahah",
      person:{
        name:"张浩壮",
        sex:"man"
      }
    }
  },
  created(){
    window.system={};
    window.system.author = "张浩壮";
    window.system.user = "";
  },
  mounted(){

  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>

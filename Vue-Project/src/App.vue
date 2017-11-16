<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view v-bind:me="person"/>
  </div>
</template>

<script>
export default {
  name: 'app',
  data(){
    return{
      person:{
        name:"张浩壮",
        sex:"man"
      }
    }
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

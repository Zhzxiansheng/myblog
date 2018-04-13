<template>
  <div class="hello">
    <!-- <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
      <br>
      <li><a href="http://vuejs-templates.github.io/webpack/" target="_blank">Docs for This Template</a></li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    </ul> -->
  <el-form ref="form" :model="form" label-width="80px">
    <el-form-item label="用户">
      <el-input v-model="form.name" ref="user" placeholder="张浩壮"></el-input>
    </el-form-item>
    <el-form-item label="密码">
      <el-input v-model="form.pwd" type="password" ref="pwd" placeholder="***"></el-input>
    </el-form-item>
    <el-button type="primary" @click="login($data)">进入主站</el-button> <router-link to="/view">Go to introduce</router-link>
  </el-form>

  </div>
</template>

<script>
// import {system} from "../../static/js/system.js"
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: '',
      form:{
        name:"",
        pwd:""
      }
    }
  },
  created :function(){
  },
  mounted :function(){
    console.log(window.system);
    this.$message({
        message: '项目作者：'+window.system.author,
        type: 'success'
    });
  },
  methods:{
    login(data){
      window.system.user = data.form.name;
      window.localStorage.setItem("userName",data.form.name);
      if(data.form.name == ""){
        const h = this.$createElement;
        this.$notify({
         title: '提示',
         message: '请先输入用户名',
         type: 'warning'
       });
      }else{
        data = JSON.stringify(data);
        console.log(data);
        this.$router.push({ path: '/mainx/firstview?' })
      }

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello{
  width: 50%;
  margin: 200px auto;
  text-align: center;
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

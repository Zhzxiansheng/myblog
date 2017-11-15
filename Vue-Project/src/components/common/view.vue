<template>
  <div class="container">
    <h2>vue-cli创建项目</h2>
    <ol class="intro">
      <li>安装ElementUI: npm i element-ui -S</li>
      <li>调用ElementUI: main.js -->
      <p>  import ElementUI from 'element-ui'</p>
       <p>Vue.use(ElementUI, { size: 'small' })</p>
      </li>
      <li>在 .babelrc 文件中引入ElementUI
        <p>"plugins": ["transform-runtime",["component", [
          {
            "libraryName": "element-ui",
            "styleLibraryName": "theme-chalk"
          }
        ]]</p> 
      </li>
      <li>
        components文件夹是用来放view的
      </li>
      <li>
        关于路由的写法：
        <p>import view from '@/components/common/view'引入</p>
        <p>{
          path: '/view',
          name: '博客',
          component: view
        }</p>
        <p>路由中关于子路由的写法children:[{
          path: '/view',
          name: '博客',
          component: view
        }]</p>
      </li>
    </ol>
    <span class="msg">{{msg}}</span>
  </div>
</template>

<script>
export default {
  name: 'view',
  data () {
    return {
      msg: '本项目在构建的时候采用了 debug模式，是一个恶心的地方， 在构建的时候， 关于一些东西选择Y/N 的时候要慎重。 （重点是eslint,没有一点本事，还是不要用了）'
    }
  },
  create(){},
  mountend(){

  },
  methods:{
    login(){

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
.intro{
  width: 40%;
  margin: 20px auto;
}
.msg{
  color: #878D99;
  font-size: 12px;
}
li {
  /*display: inline-block;*/
  margin: 10px 10px;
}
a {
  color: #42b983;
}
</style>

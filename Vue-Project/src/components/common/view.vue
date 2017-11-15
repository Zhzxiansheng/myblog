<template>

  <div class="container">
    <router-link to="/">
      <span class="logo">
        Z
      </span>
    </router-link>
    <h2>vue-cli创建项目</h2>
    <div class="list">
      <el-collapse v-model="activeNames" @change="handleChange()" style="border:1px solid #e6ebf5">
        <el-collapse-item title="1.安装ElementUI" name="1">
          <div> npm i element-ui -S</div>
        </el-collapse-item>
        <el-collapse-item title="2.使用ElementUI" name="2">
          <div>在main.js 引入ElementUI 和 element需要用的到的css 即可.</div>
          <div>import ElementUI from 'element-ui'</div>
          <div>import 'element-ui/lib/theme-chalk/index.css'</div>
          <div>Vue.use(ElementUI)"</div>
        </el-collapse-item>
        <el-collapse-item title="3.关于路由的写法" name="3">
          <div>import view from '@/components/common/view'引入</div>
          <div>{
            path: '/view',
            name: '博客',
            component: view
          }</div>
          <div>路由中关于子路由的写法children:[{
            path: '/view',
            name: '博客',
            component: view
          }]</div>
        </el-collapse-item>
        <el-collapse-item title="4.关于主页面的搭建 <router-view/>" name="4">
          <div>在主页面 el-main 中写一个 "router-view" 标签，然后在路由中， 写一个children 路由就可以跳到当前页面的容器中了</div>
          <div>   {
              path: '/mainx',
              name: 'mainx',
              component: mainx,
              children:[
                {
                  path: '/firstview',
                  name: 'firstview',
                  component: firstview,
                },
                {
                  path: '/douban',
                  name: 'douban',
                  component: douban,
                }
              ]
            }</div>
        </el-collapse-item>
        <el-collapse-item title="5.数据请求vue-resource" name="5">
          <div>安装、调用方法：cnpm install vue-resource --save</div>
          <div>在main.js 中设置为全局对象 1--import  VueResource  from 'vue-resource'  2-- Vue.use(VueResource) 注：这时候打印this 对象；里面就会有$resource属性</div>
        </el-collapse-item>
        <el-collapse-item title="6.关于将请求接口地址封装到一个文件中的方法" name="6">
          <div>1</div>
          <div></div>
        </el-collapse-item>
      </el-collapse>
    </div>
    <span class="msg">{{msg}}</span>

    <el-table :data="tableData" height="450" border style="max-width: 1200px;
    min-width: 1000px;" class="table">
        <el-table-column prop="date"  label="问题描述" width="">
        </el-table-column>
        <el-table-column  prop="name" label="解决方法"  width="">
        </el-table-column>
      </el-table>
  </div>
</template>

<script>

export default {
  name: 'view',
  data () {
    return {
      activeNames: [''], // 这里是控制折叠面板的数组， 里面写数字对应上面的name  写数字几。上面对应的就会展开，为空则全部折叠
      msg: '本项目在构建的时候采用了 debug模式，是一个恶心的地方， 在构建的时候， 关于一些东西选择Y/N 的时候要慎重。 （重点是eslint,没有一点本事，还是不要用了）',
      tableData:[
        {
          date: "在ElementUI官网上，需要去.babelrc 文件夹中加入一行代码，导致npm run dev  的时候编译出错",
          name: "并不需要操作 .babelrc文件，只需要在main.js 引入ElementUI 和 element需要用的到的css 即可，import ElementUI from 'element-ui'import 'element-ui/lib/theme-chalk/index.css'Vue.use(ElementUI)"
        },
        {
            date:"在vue2.0项目中引入外部js 的方法（我们一般把外部用的图片、js、css、写在static 的文件夹下， img/js/css）",
            name:"1-.在需要引的js 中把需要用的js 用export 抛出来，export function name(){会用的js} 2-.在项目中引用，一般都是路径在本身的vue 界面下 主页的项目就是在 src/conponents/views的路径下， 所以我如果想要去static 文件夹下，就要先跳出来； ../../../static/js/..  import { time } from '../../../static/js/canvasTime.js' 3-.上面代表的引入了， 这时只需要在你想用的生命周期调用这个方法就行了 time() 4-: 最后一步，也可以把一种方法封装为全局方法， 就是在main.js 中import 引入js import {time} form ../static/..  Vue.prototype.time = time; 这样就把这个方法封装为全局方法了， 在别的vue组件中， 调用 this.time()即可 "
        },
        {
            date:"在声明周期中无法获取元素，无法执行js 事件",
            name:"暂无"
        },
        {
            date:"问题二",
            name:"暂无"
        }
      ]
    }
  },
  created(){},
  mounted(){

  },
  methods:{
    login(){

    },
    handleChange(){
      console.log("折叠面板触发了 change 事件");
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.logo{
  display: inline-block;
  width: 100px;
  height: 100%;
  color:#409EFF ;
  font-size:50px ;
  font-weight: blod;
  text-align: center;
  line-height: 100px;
  position: fixed;
  top: 0px;
  left: 40px;
}

.container{
  text-align: center;
}
.table{
  margin: 20px auto;
}
.list{
  max-width: 1200px;
  min-width: 1000px;
  margin: 20px auto;
}
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
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

<template lang="html">
  <div class="notes">
    <h3>{{msg}}</h3>
    <el-tabs :tab-position="tabPosition" style="height: 500px;">
    <el-tab-pane label="请求数据生成结构">{{note1}}</el-tab-pane>
    <el-tab-pane label="父子组件如何通信">{{note2}}</el-tab-pane>
    <el-tab-pane label="非父子组件如何通信">角色管理</el-tab-pane>
    <el-tab-pane label="在点击事件中的参数">参数中有 $data(传送的是当前页面的整个data ruturn 出来的值) $event (当前带点击的事件对象) $event.$el 能够获取到当前点击的元素</el-tab-pane>
    <el-tab-pane label="v-for 后面最好加上 :key">
      <p>{{note4}}</p>
      <p> {{ note5 }} </p>
      <p>{{ note6 }}</p>
    </el-tab-pane>
    <el-tab-pane label="引用公共部分的头部脚部的方法">
      {{ note7 }}
    </el-tab-pane>
    <el-tab-pane label="vue-cli引入外部css和js 的方法">
      {{ note8 }}
      <p>{{ note9 }}</p>
      <p>{{ note10 }}</p>
    </el-tab-pane>
    <el-tab-pane label="声明全局对象，能够跨页面都到">{{note11}}</el-tab-pane>
  </el-tabs>
  </div>


</template>

<script>
export default {

  data(){
    return{
      msg:"Vue 笔记",
      tabPosition: "left",
      note1:"在请求数据的时候如果是标签内的属性值，那么需要在前面 加上 冒号“：src” 并且后面的遍历的x.xx不用写大括号，但是如果是往标签内添加动态数据，则需要在标签内写上两个大括号<p>{{x.image}}</p> ",
      note2:"父组件都有一个容器 <roter-view>, 方法就是通过给 <router-view 添加值> 子组件通过props 来获取这个值。具体实现方法： <router-view v-bind:message='hello'/>(用引号一起来 hello;可以是字符串也可以是return 出来的对象。 在子组件中 和 data() 同级写下 props:['message']) 那么现在就能拿到父组件中的 message 了",
      note4:"在v-for 遍历的时候，最好在后面加上：key,如果不加的话，就会出现一个警告.",
      note5:"为了给Vue一个提示，以便它可以跟踪每个节点的身份，从而重用和重新排序现有的元素，您需要key为每个项目提供一个唯一的属性。一个理想的价值key将是每个项目的唯一ID。",
      note6:"建议尽可能提供一个keywith v-for，除非迭代的DOM内容很简单，否则您将故意依靠默认行为获得性能提升。由于它是Vue识别节点的通用机制，因此我们将在后面的章节中看到，key还有其他用途，这些用途没有特别的联系v-for。",
      note7: "首先写一个公共组件，head.vue 然后里面必须export 抛出。然后在另一个vue 文件  import X from '路径'  引入 ，然后在下面data 同级目录写下  components:{x}, 然后只需在上面写下 <x></x> 的标签就能把这个公共组件引入进来",
      note8:"webpack专门创建了负责放置这些文件的文件夹static 会在打包的时候把该文件夹下的文件都正确打包。 ",
      note9: "引入外部js 的方法 在 script 标签中: import {name} from “./static/js/name.js” ,然后在下面需要引用到该方法的时候写 name() 即可",
      note10: "引入外部css 的方法 在 style 标签中： @import './static/css/name.css' 即可",
      note11: "在app.vue 中声明了一个全局对象system 能够在别的组件得到，但是如果页面刷新了，并且没有提前赋值，那么就会让这个 属性消失掉"
    }
  },
  created(){

  },
  mounted(){

  },
  methods:{

  }
}
</script>

<style lang="css" scoped>
</style>

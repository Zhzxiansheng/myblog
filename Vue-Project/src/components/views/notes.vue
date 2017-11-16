<template lang="html">
  <div class="notes">
    <h3>{{msg}}</h3>
    <el-tabs :tab-position="tabPosition" style="height: 200px;">
    <el-tab-pane label="请求数据生成结构">{{note1}}</el-tab-pane>
    <el-tab-pane label="父子组件如何通信"></el-tab-pane>
    <el-tab-pane label="非父子组件如何通信">角色管理</el-tab-pane>
    <el-tab-pane label="在点击事件中的参数">参数中有 $data(传送的是当前页面的整个data ruturn 出来的值) $event (当前带点击的事件对象) $event.$el 能够获取到当前点击的元素</el-tab-pane>
    <el-tab-pane label="v-for 后面最好加上 :key">
      <p>{{note4}}</p>
      <p> {{ note5 }} </p>
      <p>{{ note6 }}</p>
    </el-tab-pane>
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
      note2:"",
      note4:"在v-for 遍历的时候，最好在后面加上：key,如果不加的话，就会出现一个警告.",
      note5:"为了给Vue一个提示，以便它可以跟踪每个节点的身份，从而重用和重新排序现有的元素，您需要key为每个项目提供一个唯一的属性。一个理想的价值key将是每个项目的唯一ID。",
      note6:"建议尽可能提供一个keywith v-for，除非迭代的DOM内容很简单，否则您将故意依靠默认行为获得性能提升。由于它是Vue识别节点的通用机制，因此我们将在后面的章节中看到，key还有其他用途，这些用途没有特别的联系v-for。"
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

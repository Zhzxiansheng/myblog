<template>
  <div class="mainx">
    <el-container>
      <el-header class="header">
      <router-link to="/">
        <span class="logo">
          Z
        </span>
        <span>用户：{{user}}</span>
      </router-link>
      <span class="timecon">
        <canvas id="canvas" height="100" style="width:100%"></canvas>
      </span>
    </el-header>
        <el-container class="container">
          <el-aside width="260px" class="aside" >
            <!-- 左侧导航栏 -->
            <el-menu :default-openeds="['1','4']">
              <router-link to="/mainx/myArticle">
              <el-menu-item index="1">
                 <i class="el-icon-star-on"></i>
                 <span slot="title">文章笔记</span>
               </el-menu-item>
              </router-link>
              <router-link to="/mainx/canvasLight">
                <el-menu-item index="2">
                    <i class="el-icon-setting"></i>
                    <span slot="title">灯光聚焦</span>
                  </el-menu-item>
              </router-link>
             <router-link to="/mainx/aboutme">
              <el-menu-item index="3">
                 <i class="el-icon-setting"></i>
                 <span slot="title">关于我的</span>
               </el-menu-item>
              </router-link>
             <!-- <router-link to="/mainx/swipe">
              <el-menu-item index="13">
                 <i class="el-icon-setting"></i>
                 <span slot="title">swiper组件</span>
               </el-menu-item>
              </router-link> -->
              <el-submenu index="4">
                <template slot="title"><i class="el-icon-menu"></i>第一界面</template>
                <el-menu-item-group>
                  <router-link to="/mainx/firstview">
                    <el-menu-item index="1-1" @click="chuanzhi($event)">随笔知识点</el-menu-item>
                  </router-link>
                </el-menu-item-group>
                <router-link to="/mainx/notes">
                  <el-menu-item index="1-2">笔记</el-menu-item>
                </router-link>
                <router-link to="/mainx/article">
                  <el-menu-item index="1-3">文章</el-menu-item>
                </router-link>
              </el-submenu>
              <el-submenu index="5">
                  <template slot="title"><i class="el-icon-star-off"></i>知乎</template>
                <el-menu-item-group>
                  <router-link to="/mainx/douban">
                    <el-menu-item index="2-1">知乎axios</el-menu-item>
                  </router-link>
                 <router-link to="/mainx/zhihu">
                  <el-menu-item index="2-2">知乎vue-resource</el-menu-item>
                </router-link>
                </el-menu-item-group>

              </el-submenu>
              
            </el-menu>

          </el-aside>
          <el-main>

              <router-view v-bind:message="message2"/>
          </el-main>

        </el-container>
    </el-container>

  </div>
</template>



<script>
import { time } from '../../../static/js/canvasTime.js'
export default {
  name:"mainx",
  data(){
    return{
      message2:"父组件传下来的值",
      user:"",
      form:{
        name:"1"
      },
      me:{
        name:"张浩壮",
        age:"88",
        sex:"man"
      },
      show_4:true
    }
  },

  created(){
    this.user = window.localStorage.getItem("userName");
    system.path=location.hash;
  },
  mounted (){
    // self = this;
    // time();
    // // console.log(this.prerson);
    // this.$message({
    //       message: '欢迎你，'+self.user,
    //       type: 'success'
    //     });
  },

  methods:{
    chuanzhi(e){
      console.log($);
      console.log($(e.$el).html());
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
.timecon{
  width: 200px;
  height: 100px;
  float: right;
  line-height: 117px;
}
.container{
  padding-top: 20px;
}
.aside{
  border-right: 1px solid #D8DCE5;
}
a{
  text-decoration: none;
  color: #2d2f33;
}

</style>

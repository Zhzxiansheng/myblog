<template lang="html">
  <div class="aboutme">
    <h3>关于我的</h3>


    <span>给我评价：</span>
     <el-rate v-model="value1" class="rate" @change="rate($event)"></el-rate>
     

     <p>点击tab切换，并调起点击音乐</p>
     <ul class="tab">
        <li class="interpreList" @click="change($event)">TAB1</li>
        <li class="chinapreList" @click="change($event)">TAB2</li>
      </ul>
      
    <audio src="/static/btn.mp3" controls="controls" id="myEmbed" hidden>
      Your browser does not support the audio element.
      </audio>
    <div class="tabConent">
      <p v-for="list in thisList">{{list.name}}</p>
    </div>


   <p>
     <button @click="dialog()">调用询问弹框</button>
    </p>
    <v-dialog :dialog-msg="dialogMsg" v-show="dialogs"  @cancel="cancal" @confirm="confirm"></v-dialog>

  <div class="alertContsainer ">
    <p> <button @click="getAlert()">调用弹窗</button> </p>
    <v-alert v-show="orAlert" :alertMsg="alertMsg"></v-alert>
  </div>
  <el-button type="primary" plain> <router-link to="/btnStatus">不同状态展示不同按钮</router-link> </el-button>
 <!-- <img src="/static/img/timg.jpg" /> -->
  </div>
  

</template>

<script>
import dialog from '../common/dialog'
import alert from '../common/alert'
export default {
  data(){
    return{
      orAlert:false,
      alertMsg:"弹窗信息",
       dialogMsg:"这个人是不是很帅?",
       dialogs:false,
       value1: null,
       msg:"",
       interpreList:[{"name":"zzz"},{"name":"sss"}],
       chinapreList:[{"name":"aaa"},{"name":"ddd"}],
       thisList:[{"name":"zzz"},{"name":"sss"}]
    }
  },
  created(){
    var storage = localStorage.getItem("start");
    this.value1 = parseInt(storage);
    // localStorage.clear();
  },
  components:{
    'v-dialog':dialog,
    'v-alert':alert
  },
  methods:{
    change(e){
      var that = this;
      var thisDom = e.currentTarget.className;
      that.thisList = that[thisDom]
      var btnMusic = document.querySelector("#myEmbed")
      btnMusic.play()
    },
    dialog(){
      var that = this;
      that.dialogs = true;
    },
    cancal(){
      var that = this;
      that.dialogs = false;
      that.alertMsg = "你点击了关闭询问框";
      this.orAlert = true;
      setTimeout(function(){
        that.orAlert = false;
      },2000)
    },
    confirm(){
      var that = this;
      that.dialogs = false;
      that.alertMsg = "你点击了确定按钮";
      this.orAlert = true;
      setTimeout(function(){
        that.orAlert = false;
      },2000)
    },
    getAlert(){
      var that = this;
      this.orAlert = true;
      that.alertMsg = "调用toast提示";
      setTimeout(function(){
        that.orAlert = false;
      },2000)
    },
    rate(e){
      var vue = this;
      e = parseInt(e);
      if(e<=2){
        vue.msg = "看来您对我的评价很差。我竟然在您心目中是这种形象？╮(๑•́ ₃•̀๑)╭";
      }else if(2< e && e< 4){
          vue.msg = "看来您对我的评价中等。我会努力改进自己的 ≖‿≖✧ ";
      }else if(e >=4){
        vue.msg = "看来您对我的评价是优秀。我会骄傲的 （//▽//）";
      }
      const h = this.$createElement;
        this.$message({
          message: h('p', null, [
            h('span', null, '您给我的评分是 '),
            h('span', { style: 'color: rgb(247, 186, 42)' }, e +" 分,"),
            h('span', null, vue.msg)
          ])
        });
      localStorage.setItem("start",e)
    }
  }
}
</script>

<style lang="css" scoped>
a{
  text-decoration: none;
  color: #000000;
}
.rate{
  display: inline-block;
}
.tab{
  list-style: none;
  overflow: hidden;
  padding: 0;
}
.tab li{
  float: left;
  width: 100px;
  text-align: center;
  height: 40px;
  line-height: 40px;
  border: 1px solid #cccccc;
  box-sizing: border-box;
  cursor: pointer;
}
.tabConent{
  
}
</style>

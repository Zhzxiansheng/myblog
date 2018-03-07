<template lang="html">
  <div class="aboutme">
    <h3>关于我的</h3>


    <span>给我评价：</span>
     <el-rate v-model="value1" class="rate" @change="rate($event)"></el-rate>



     <ul>
        <li class="interpreList" @click="change($event)">国际游<span>特惠</span></li>
        <li class="chinapreList" @click="change($event)">国内游</li>
      </ul>
    <audio src="http://www.w3school.com.cn/i/horse.ogg" controls="controls" id="myEmbed" hidden>
      Your browser does not support the audio element.
      </audio>
    <p v-for="(listModel,index) in thisList" >{{index.name}}</p>
  </div>



</template>

<script>
export default {
  data(){
    return{
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
  methods:{
    change(e){
      var that = this;
      var thisDom = e.currentTarget.className;
      that.thisList = that[thisDom]
      var btnMusic = document.querySelector("#myEmbed")
      btnMusic.play()

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
.rate{
  display: inline-block;
}
</style>

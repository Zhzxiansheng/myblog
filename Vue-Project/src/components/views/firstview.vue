<template>
  <div class="hello">

<el-carousel :interval="4000" type="card" height="300px" indicator-position="outside"  trigger="click">
    <el-carousel-item v-for="value in swiper" height="100%" :key="value.path">
        <router-link :to="value.path"><img :src="value.img" alt="" style="width:100%;height:100%"></router-link>
      </el-carousel-item>
  </el-carousel>
    

   <el-input v-model="form.name" v-show="show_4" data-num="1" v-bind:class="{ 'class-a': false, 'class-b':true }"></el-input>

    <p>数组合并方法 Array.concat(): {{arr}}</p>

    <p class="gitparent">划重点：{{message}}</p>
   <el-input v-model="form.name" v-show="show_4" data-num="2"></el-input>
   <el-input v-model="form.name" v-show="show_4" data-num="3"></el-input>
   <el-input v-model="form.name" v-show="show_4"></el-input>
     <button type="button"  @click="xuan()">隐藏123</button>
     <p>vue组建之间传值的方式</p>
      <p>关于Vuex的使用</p>
      <p>用canvans 生成一个图片链接</p>
      <div><canvas  id="myCanvas" style="width:100px;height:50px;"></canvas></div>
    <button id="saveImageBtn">生成图片</button>
   <div> <img :src="imgUrl" alt="" style="width:100px;height:80px;"></div>
    <input type="text" :value="imgUrl">
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: '',
      arr:[],
      imgUrl:"",
      form:{
        name:"根据状态设置不同的 class",
        pwd:"123"
      },
      show_4:true,
      swiper:[
        {
          "img": "../static/img/swiper.jpg",
          "path": "/mainx/article"
        },
        {"img": "http://imgs.aixifan.com/content/2017_11_03/1512289555.gif?imageView2/1/w/320/h/180","path": "/mainx/article"},
        {"img": "http://imgs.aixifan.com/content/2017_11_03/1512277894.gif?imageView2/1/w/320/h/180","path": "/mainx/article"}
      ]
    }
  },
  props:["message"],
  created :function(){
    var a1 = [1,2,3];
    var a2 = [4,5,6];
    // 想要在前的放在 concat 前面
    this.arr = a1.concat(a2);
  },
  mounted(){
    var _this = this;
      // 生成图片的方法
  function saveImageInfo() {
      var mycanvas = document.getElementById("thecanvas");
      var image = mycanvas.toDataURL("image/png");
      var w = window.open('about:blank', 'image from canvas');
      w.document.write("<img src='" + image + "' alt='from canvas'/>");
    }  

    function bindButtonEvent(element, type, handler) {
        if (element.addEventListener) {
          element.addEventListener(type, handler, false);
        } else {
          element.attachEvent('on' + type, handler);
        }
      }  
      window.onload = function(){
          
          var canvas = document.getElementById('myCanvas');
          var ctx = canvas.getContext('2d');
          var imagUrls = ["./static/img/right.png", "./static/img/right.png", "./static/img/right.png"];
          var n = 0;

          loadImg();
          var y = 0;
          var x = 100;
          function loadImg() {
            if (n < imagUrls.length) {
              var img = new Image();
              img.src = imagUrls[n];
              img.onload = onloaded;
            }
            else {
              console.log("图片加载完了");
              convertCanvasToImage(canvas)
            }
          }

          function convertCanvasToImage(canvas) {
            var image = new Image();
            console.log(canvas.toDataURL());
             _this.imgUrl = canvas.toDataURL();
            image.setAttribute("crossOrigin", 'anonymous')
            image.src = canvas.toDataURL("image/png");

            // canvas-drawImage.html:34 Uncaught DOMException: Failed to execute 'toDataURL' on 'HTMLCanvasElement': Tainted canvases may not be exported.
            // 这里会报这样一份错误，是因为使用了外域的图片资源，解决方法是：搭建本地服务器

            return image;
          }
          function onloaded(e) {
            x = x + 100;
            // y = y+100;
            console.log(x, y);
            // 这里的 xy  是下面的图的排列
            var img = e.target;
            console.log(e, img);
            ctx.drawImage(img, 0, y);
            y = y + 20;
            n++;
            loadImg();
          }

    // 保存图片
      var saveButton = document.getElementById("saveImageBtn");
      bindButtonEvent(saveButton, "click", saveImageInfo);
    }

  },
  methods:{
    xuan(){
      var arr = [1,2,3];
      for(var i =0;i<arr.length;i++){
        console.log(arr[i]);
      }
    },
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello{
  width: 100%;
}
.el-carousel__container{
  height: 500px !important;
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
.class-a{
  border: 1px solid red;
}
.class-b{
 border: 1px solid blue;
}
.gitparent{
  color: cyan;
}
</style>

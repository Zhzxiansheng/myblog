<template>
  <div class="hello">

<el-carousel :interval="4000" type="card" height="300px" indicator-position="outside"  trigger="click">
    <el-carousel-item v-for="(value,index) in swiper" height="100%" :key="index">
        <router-link :to="value.path"><img :src="value.img" alt="" style="width:100%;height:100%"></router-link>
      </el-carousel-item>
  </el-carousel>
  <Loading v-show="loading"></Loading>

   <el-input v-model="form.name" v-show="show_4" data-num="1" v-bind:class="{ 'class-a': true, 'class-b':false }"></el-input>

    <p>数组合并方法 Array.concat(): {{arr}}</p>

    <p class="gitparent">划重点：{{message}}</p>
     
    <button type="button"  @click="loadVue()">调用loading组件</button>
    <p>var arr = [10,58,40,88,69,99]</p>
    <button type="button"  @click="getquickSort(sortArr)">数组快排</button>
    <el-input v-model="getSrotArr"></el-input>
    <!-- <toast v-if="show"> </toast> -->
      <p>用canvans 生成一个图片链接</p>
      <div><canvas  id="myCanvas" style="width:100px;height:50px;"></canvas></div>
    <button id="saveImageBtn">生成图片</button>
   <div> <img :src="imgUrl" alt="" style="width:100px;height:80px;"></div>
   生成图片的链接：
   <el-input v-model="imgUrl"></el-input>
    <!-- <input type="text" :value="imgUrl"> -->

    <p>
     <router-link :to="{ path: '/mainx/aboutme', query: { plan: 'private' }}"> 通过router-link传值 query</router-link> 
     <span>去"关于我的"查看,会发现在网址上有?plan=private字段，能够通过this.$route.query.plan获取</span>
    </p>
     
     <h3>过滤器 filter 的使用：</h3>
     
     Filter Key<input type="text" v-model="key">   
      <ul>
       <li v-for="item in filterShoppingList" :key="item">
           {{ item }}
       </li>
    </ul>  
    <p style="color:#FF6347">过滤器return出来的值：：： {{num | numFilter}}</p>
    <el-button type="primary" @click="watchInfo()">watch监听info变化</el-button> 
    <p>{{info}}</p>
  </div>
  
</template>

<script>
 import toast from '../toast';        //引入toast函数  
// ajax函数将返回Promise对象:
function ajax(method, url, data) {
    var request = new XMLHttpRequest();
    return new Promise(function (resolve, reject) {
        request.onreadystatechange = function () {
            if (request.readyState === 4) {
                if (request.status === 200) {
                    resolve(request.responseText);
                } else {
                    reject(request.status);
                }
            }
        };
        request.open(method, url);
        request.send(data);
    });
};
export default {
 
  data () {
    return {
      msg: '',
      info:0,
      shoppingList: [
            "Milk", "Donuts", "Cookies", "Chocolate", "Peanut Butter", "Pepto Bismol", "Pepto Bismol (Chocolate flavor)", "Pepto Bismol (Cookie flavor)"
        ],
      key: "",
      arr:[],
      sortArr:[10,58,40,88,69,99],
      num:6,
      getSrotArr:"",
      imgUrl:"",
      loading:false,
      form:{
        name:"根据状态设置不同的 class",
        pwd:"123"
      },
      show:false,
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
  computed: {
        filterShoppingList: function () {
            // `this` points to the vm instance
            var key = this.key;
            var shoppingList = this.shoppingList;
            //在使用filter时需要注意的是，前面调用的是需要使用filter的数组，而给filter函数传入的是数组中的每个item，也就是说filter里面的函数，是每个item要去做的，并将每个结果返回。
            return shoppingList.filter(function (item) {
                return item.toLowerCase().indexOf(key.toLowerCase()) != -1
            });;
        }
    },
  watch:{
    'info'(value,old){
      // 这里的参数值位置不能改变，第二个参数代表原始值
      console.log('old: '+old + " value: "+value)
    }
  },
  created :function(){
    var a1 = [1,2,3];
    var a2 = [4,5,6];
    // 想要在前的放在 concat 前面
    this.arr = a1.concat(a2);
    var p = ajax('GET', '/static/json.json');
    p.then(function (text) { // 如果AJAX成功，获得响应内容
        if(typeof text == 'string'){
          text = JSON.parse(text);
        }
        console.log(text)
    }).catch(function (status) { // 如果AJAX失败，获得响应代码
        console.log(status);
    });
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
              convertCanvasToImage(canvas)
            }
          }

          function convertCanvasToImage(canvas) {
            var image = new Image();
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
            // 这里的 xy  是下面的图的排列
            var img = e.target;
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
   filters:{
    numFilter: function(value){
      if (typeof value == "number"){
          value = value.toString();
      }
      return value;
      
    }
  },
  methods:{
    watchInfo(){
      this.info++;
      this.info++;
    },
    loadVue(){
     var _this = this;
     this.loading = true;
     setTimeout(function(){
      _this.loading = false;
    },2000)
    },
    quickSort(arr){
      var _this = this;
  　　if (arr.length <= 1) { return arr; }
  　　var pivotIndex = Math.floor(arr.length / 2);
      // console.log('pivotIndex : '+pivotIndex);
  　　var pivot = arr.splice(pivotIndex, 1)[0];
      // console.log("pivot : "+pivot);
  　　var left = [];
  　　var right = [];
  　　for (var i = 0; i < arr.length; i++){
  　　　　if (arr[i] < pivot) {
  　　　　　　left.push(arr[i]);
  　　　　} else {
  　　　　　　right.push(arr[i]);
  　　　　}
  　　}
      // console.log(_this.quickSort(left).concat([pivot],_this. quickSort(right)));
  　　return _this.quickSort(left).concat([pivot], _this.quickSort(right));
   },
    getquickSort(arr){
      console.log(this.quickSort(arr));
      this.getSrotArr = " "+this.quickSort(arr)+" ";
      return this.quickSort(arr);
    }
    
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

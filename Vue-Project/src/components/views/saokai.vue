<style scope lang="css">
  .preferential{
    width:7.35rem;
    font-size: 0.3rem;
    position:relative;
    margin-left: 0.05rem;
    background: #fff;
    border-radius: 0.1rem;
  }
  .preferential>.preferential_box{
    width: 100%;
    height: 0.6rem;
    background-color: #ff3333;
    border-radius: 0.1rem 0.1rem 0 0;
  }
  .preferential>.preferential_box>.preferential_list{
    width: 100%;
    height: 100%;
  }
  .preferential>.preferential_box>.preferential_list>li{
    float: left;
    list-style: none;
    display: inline-block;
    width: 50%;
    height: 100%;
    color: #fff;
    text-align: center;
    line-height: 0.6rem;
    position:relative;
  }
  .preferential>.preferential_box>.preferential_list>li>span{
    font-size: 0.2rem;
    color: #474747;
    width: 0.6rem;
    height: 0.3rem;
    text-align: center;
    line-height: 0.3rem;
    background-color: #ffd800;
    border-radius: 0.05rem;
    padding: 0.02rem 0.08rem;
    position: absolute;
    bottom: 0.13rem;
    right: 0.55rem;
  }
  .preferential_content{
    background-color: #fff;
    width: 100%;
    text-align: center;
  }
  .preferential_content>.preferential_data{
    display: inline-block;
    width: 6.66rem;
    height: 1.25rem;
    border-bottom: 1px dashed #ccc;
    text-align: left;
  }
  .preferential_content>.preferential_data:last-child{
    border-bottom:1px solid #ccc;
  }
  .preferential_content>.preferential_data>.preferential_left{
    float: left;
    width: 70%;
    height: 100%;
  }
  .preferential_content>.preferential_data>.preferential_left>p:nth-of-type(1){
    font-size: 0.3rem;
    color: #000;
    margin-top: 0.2rem;
  }
  .preferential_content>.preferential_data>.preferential_left>p:nth-of-type(2){
    font-size: 0.24rem;
    color: #aaaaaa;
    margin-top: 0.05rem;
  }
  .preferential_content>.preferential_data>.preferential_left>p:nth-of-type(2)>img{
    width: 0.3rem;
    height: 0.3rem;
    border:none;
    vertical-align:middle;
    margin-right: 0.05rem;
  }
  .preferential_content>.preferential_data>.preferential_left>p:nth-of-type(2)>span{
    margin-right: 0.35rem;
  }
  .preferential_content>.preferential_data>.preferential_right{
    float: right;
    text-align: right;
    width: 30%;
    height: 100%;
    color: #ff3333;
    font-size: 0.3rem;
    font-weight: 600;
    line-height: 1.15rem;
  }
  .preferential_content>.preferential_data>.preferential_right>span{
    font-size: 0.24rem;
    font-weight: 400;
  }
  .preferential_tail{
    margin-top: 0.35rem;
    padding-bottom: 0.35rem;
    text-align: center;
    width:100%;
    height: 0.92rem;
    z-index: 99;
  }
  .preferential_tail>a{
    display: inline-block;
    width: 6.66rem;
    height: 100%;
    background: url(../img/more.png);
    background-size:100% 100%;
    line-height: 0.92rem;
    font-size: 0.3rem;
    color: #ff5246;
    text-decoration:none;
  }
  .preferential_tail>a>span{
    display: inline-block;
    width: 0.2rem;
    height: 0.2rem;
    margin-left: 0.05rem;
    background: url(../img/arrow.png);
    background-size: 100% 100%;
  }
</style>

<template>
  <div class="preferential">
    <div class="preferential_box">
      <ul class="preferential_list">
          <!-- 先遍历国内 -->
        <li v-for="(tab,index) in chinapreList">{{tab.org_city_name}}<span>特惠</span></li>
      </ul>
      <!-- 在遍历国外，这里写两个ul  把， 但是样式一样就行， 你直接复制结构 -->
      <ul class="preferential_list">
          <!-- 先遍历国内 -->
        <li v-for="(tab,index) in interpreList">{{tab.org_city_name}}<span>特惠</span></li>
      </ul>
    </div>
    <div class="preferential_content" >
      <a class="preferential_data" href=" " target="_blank" v-for="(item,index) in listHead">
        <div class="preferential_left">
          <p>北京-东京</p >
          <p>< img src="../img/Icon_03.png"></img><span>国航CA1708</span><span>01-08 周一</span></p >
        </div>
        <div class="preferential_right">¥202<span>起</span>
        </div>
      </ a>
      <a class="preferential_data" href="#" target="_blank">
        <div class="preferential_left">
          <p>北京-东京</p >
          <p>< img src="../img/Icon_03.png"></img><span>国航CA1708</span><span>01-08 周一</span></p >
        </div>
        <div class="preferential_right">¥202<span>起</span>
        </div>
      </ a>
      <a class="preferential_data" href="#" target="_blank">
        <div class="preferential_left">
          <p>北京-东京</p >
          <p>< img src="../img/Icon_03.png"></img><span>国航CA1708</span><span>01-08 周一</span></p >
        </div>
        <div class="preferential_right">¥202<span>起</span>
        </div>
      </ a>
    </div>
    <div class="preferential_tail">
        < a href="#" target="_blank">查看更多特惠线路<span></span>
        </ a>
    </div>
  </div>
</template>

<script type="text/javascript">
  export default{
    props:['flightPreferential'],
    data(){
      return{
          listHead:'',
          chinapreList:[],
          interpreList:[],

      }

    },
    created(){

    },
    mounted(){
      var _this = this;
      _this.$ajax.get(_this.UTIL.AJAX_BASEURL+'/sales/activity/flightpromotion/index/discountList').then((item)=>{
          _this.chinapreList = item.data.china;  // 你这里赋值， 上面一定要定义， 不然赋值给谁啊， 你结构要用这个的
          _this.interpreList = item.data.inter;
        }).catch((e)=>{})
    },
    methods:{
      listData:function(){

      }
    }
  }
</script>
<template>
    <div class="swiper">
       <mt-swipe :show-indicators="true" class="first">
        <mt-swipe-item>
                <img src="http://img05.tooopen.com/images/20150820/tooopen_sy_139205349641.jpg" alt="">  
        </mt-swipe-item>
        <mt-swipe-item>
            <img src="http://img.zcool.cn/community/01d881579dc3620000018c1b430c4b.JPG@3000w_1l_2o_100sh.jpg" alt="">
        </mt-swipe-item>
        <mt-swipe-item>
            
            <img src="http://img.zcool.cn/community/01690955496f930000019ae92f3a4e.jpg@2o.jpg" alt=""></mt-swipe-item>
       </mt-swipe> 

           <z-swipe>
               <div class="swipe-item">
                   <img src="http://img.zcool.cn/community/01690955496f930000019ae92f3a4e.jpg@2o.jpg" alt="">
               </div>
               <div class="swipe-item">
                   <img src="http://img.zcool.cn/community/01690955496f930000019ae92f3a4e.jpg@2o.jpg" alt="">
               </div>
               <div class="swipe-item">
                   <img src="http://img.zcool.cn/community/01690955496f930000019ae92f3a4e.jpg@2o.jpg" alt="">
               </div>
           </z-swipe>
    </div>
</template>
<script>
    import z_swipe from '../common/swipe';
    export default{
        data(){
            return{

            }
        },
       components:{
           'z-swipe': z_swipe
       }
    }
</script>

<style scope lang="css">
.el-main{
    /* height: 800px; */
}
.first{
    margin-bottom: 50px;
    height: 300px;
}
img {
    height: 100%;
    width: 100%;
}
</style>
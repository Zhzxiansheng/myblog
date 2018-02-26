<template>
  <div class="loading-box">
      <div class="loading">
          <div class="ball-container">  
                <div class="ball-one">  
                </div>  
  
                <div class="ball-two">  
                </div>  
  
                <div class="ball-three">  
                </div>  
            </div>  
  
            <div class="loading-description">  
                加载中...  
            </div>  
      </div>
  </div>
</template>
<script>
    
</script>

<style scoped>
.loading-box{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 9999;
    background-color: rgba(0,0,0,0.7);
}
.loading{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50% ,-50%);
}
.loading-description{  
    font-size:14px;  
    text-align:left;  
    padding-left:14px;  
    color:#fff;  
}  
  
@-webkit-keyframes ball-animation{  
    0% {-webkit-transform:scale(0);opacity:0}  
    
    50% {-webkit-transform:scale(1);opacity:1}  
    100% {-webkit-transform:scale(0);opacity:0} 
}
.ball-container div{  
    position:relative;  
    width:15px;  
    height:15px;  
    background-color:#fff;  
    float:left;  
    border-radius:50%;  
    margin-right:20px;  
}  
  
.ball-one{  
    -webkit-animation-name:ball-animation;  
    -webkit-animation-duration:1.3s;  
    -webkit-animation-iteration-count: infinite;  
}  
  
.ball-two{  
    -webkit-animation-name:ball-animation;  
    -webkit-animation-duration:1.3s;  
    -webkit-animation-iteration-count: infinite;  
    -webkit-animation-delay:0.25s;  
}  
  
.ball-three{  
    -webkit-animation-name:ball-animation;  
    -webkit-animation-duration:1.3s;  
    -webkit-animation-iteration-count: infinite;  
    -webkit-animation-delay:0.5s;  
}  
</style>

<template>
  <div id="domToImage">
      <h3 class="arTitle">dom-to-image</h3>
      <div class="content">
          <p class="col">这是一个把html转换成图片的插件</p>
          <p class="col">
              github：https://github.com/tsayen/dom-to-image
          </p>
          <p class="col">
              用法： npm install dom-to-image
          </p>
          <h3 class=""> 具体用法：</h3>
              <ol>
                 <li>
                      <p>生成png的图片插入的到当前页面 </p>
                      <img src="/static/img/1.png" alt="">
                 </li>
                 <li>
                      <p>生成图片并下载png格式 </p>
                      <img src="/static/img/2.png" alt="">
                 </li>
                 <li>
                      <p>生成图片并下载jpeg格式  </p>
                      <img src="/static/img/3.png" alt="">
                 </li>
                 <li>
                      <p>还两种生成SVG和pixel data的 </p>
                      <img src="/static/img/4.png" alt="">
                 </li>
              </ol>

            <div class="example">
                <table id="table" border="1" style="width:200px;border-collapse: collapse;border:1px solid black;">
                    <tr style="background:green;">
                        <td rowspan="3">200</td>
                        <td>200</td>
                        <td>300</td>
                    </tr>
                    <tr style="background:green;">
                        <td rowspan="2">500</td>
                        <td>600</td>
                    </tr>
                    <tr style="background:green;">
                        <td>600</td>
                    </tr>
                    <tr style="background:skyblue;">
                        <td rowspan="3">100</td>
                        <td>200</td>
                        <td>300</td>
                    </tr>
                    <tr style="background:skyblue;">
                        <td>500</td>
                        <td>600</td>
                    </tr>
                    <tr style="background:skyblue;">
                        <td>600</td>
                        <td>600</td>
                    </tr>
                </table>
            </div>
            <p class="tip">注：确保需要生成图片的部分没有margin 和 padding等空白部分， 否则会生成一张空白的图片</p>
         <el-button type="primary" @click="getImage()" style="margin-bottom:20px;">生成图片</el-button>
         <div class="imgCon"></div>
      </div>
  </div>
</template>
<script >
import domtoimage from 'dom-to-image'
    export default{
        data(){
            return{

            }
        },
        created(){

        },
        mounted(){

        },
        methods:{
            getImage(){
                // domtoimage.toBlob(document.getElementById('table'))
                //     .then(function (blob) {
                //         console.log(blob);
                //         window.saveAs(blob, 'my-node.png');
                //     });
                var node = document.getElementById('table');
                console.log(node);
                
                 domtoimage.toPng(node)
                    .then(function (dataUrl) {
                        var img = new Image();
                        img.src = dataUrl;                 
                        document.querySelector(".imgCon").appendChild(img);
                    })
                    .catch(function (error) {
                        console.error('oops, something went wrong!', error);
                    });
            }
        }
    }
</script>
<style scoped>
@import '/static/css/myArticlepop.css';
.example{
    margin-left: 50%;
    transform: translate(-50%);
    display: inline-block;
}
.imgCon{
    text-align: center;
}
</style>


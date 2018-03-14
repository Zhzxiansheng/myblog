<template lang="html">
  <div>
      <el-button type="primary" plain> <router-link to="/mainx/aboutme">返回</router-link> </el-button>
      <p style="text-align:center;">indexOf的作用：返回当前元素在数组中的index值；如果没有就返回-1;</p>
    <div class="btnStatus" v-for="(item,index) in initData.list" >
            <div class="house-btn" >
                <button v-if="statusData[item.orderStatus].btnArr.indexOf('cancel')!== -1" >取消申请</button>
                <button v-if="statusData[item.orderStatus].btnArr.indexOf('cancelContract')!== -1">取消签约</button>
                <button v-if="statusData[item.orderStatus].btnArr.indexOf('goToSign')!== -1 " class="goSign"  >去签字</button>
                <button v-if="statusData[item.orderStatus].btnArr.indexOf('goToCantract')!== -1" >查看合同</button>
                <button v-if="statusData[item.orderStatus].btnArr.indexOf('bill')!== -1 && item.cateId =='8'" class="goSign" @click="goBillURI(item)" v-touch-class:activeGoRed >查看账单</button>
            </div>
    </div>
    <h3 style="text-align:center;width:80%;margin:auto;">本方法的主要点：根据数据返回状态不同，展示不同的按钮， 根据返回的状态数字，分别创建不同的对象；该对象中有一个数组，能在这个数组中写你想要的筛选条件，用indexOf 判断这个元素是否存在，如果存在，该按钮显示</h3>
  </div>
</template>
<script>
    export default {
        data(){
            return{
                initData: {},
                statusData: {
                    0: {
                        title: '待房东确认',
                        time: '提交时间',
                        class: {app: 'app'},
                        btnArr: ['cancel'],
                    },
                    1: {
                    title: '已失效',
                    time: '提交时间',
                    class: {app: 'contractFail'},
                    btnArr: [],
                    },
                    2: {
                        title: '已过期',
                        time: '提交时间',
                        class: {app: 'contractFail'},
                        btnArr: [],
                    },
                    3: {
                    title: '待签字', // 对应的 待签字
                    time: '提交时间',
                    class: {app: 'app'},
                    btnArr: ['goToSign', 'cancelContract'],
                    },
                    4: {
                    title: '订单已完成', // 成功
                    time: '签约时间',
                    class: {app: 'contractColor'},
                    btnArr: ['goToCantract', 'bill'],
                    },
                    5: {
                    title: '订单已超时', // 失效
                    time: '签约时间',
                    class: {app: 'contractFail'},
                    btnArr: [],
                    },
                },
            }
        },
        created:function(){
            this.initData = window.____json4fe;
            console.log(this.initData.list)

            if (Object.prototype.toString.call(this.initData)=='[object Array]' && this.initData.length==0) {
                alert('数据错误');
                return;
            }
        }
    }
</script>
<style lang="css" scoped>
    .btnStatus{
        width: 80%;
        height: 30px;
        line-height: 30px;
        background: rgb(42, 165, 108);
        margin: 20px auto;
    }
    a{
        text-decoration: none;
        display: block;
    }
</style>

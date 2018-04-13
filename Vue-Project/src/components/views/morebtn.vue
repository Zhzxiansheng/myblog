<template>
    <div class="house-detail-content">
        <p class="house-detail">房屋详情</p>
        <p class="house-dec" :class="{shrink}">
            <span ref='houseDes' class="houseDes" :class="{conMore:!shrink}" v-show="shrink">{{houseDes}}</span>
           
            <span ref='houseDes2' class="houseDes houseDes2" v-show="!shrink">{{houseDes2}}</span>
             <span class="house-more" @click="houseDesMore()" v-if="isToolang" :class="{btnMore:shrink}">
                <i v-show="shrink">....</i>{{btn[shrink]}}
                <!-- v-if="isToolang" -->
            </span>
        </p>

    </div>
</template>
<script>
export default {
    name: 'houseDetail',
    data() {
        return {
            isToolang: false,
            houseDes: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa间都是缴费卡世纪扣1111111111111111111111111卡打打打aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa间都是缴费卡世纪扣1111111111111111111111111卡打打打aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa间都是缴费卡世纪扣1111111111111111111111111卡打打打aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa间都是缴费卡世纪扣1111111111111111111111111卡打打打',
            houseDes2:"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa间都是缴费卡世纪扣1111111111111111111111111卡打打打扫11111缴费打扫缴费扫缴费卡世扫扫缴费卡世卡打扫房间都是缴费卡打扫房间都是缴费卡世卡打扫房间都是缴费卡世纪东方扣卡世纪东方扣卡打扫房间都是缴费卡世卡打扫房间都是缴费卡世纪1'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa间都是缴费卡世纪扣1111111111111111111111111卡打打打扫11111缴费打扫缴费扫缴费卡世扫扫缴费卡世卡打扫房间都是缴费卡打扫房间都是缴费卡世卡打扫房间都是缴费卡世纪东方扣卡世纪东方扣卡打扫房间都是缴费卡世卡打扫房间都是缴费卡世纪1世卡打扫房间都是缴费卡世纪1",
            shrink: true,
            btn:{
                true:'查看更多',
                false:'收起'
            },
        }
    },
    methods: {
        houseDesMore() {
            this.shrink = !this.shrink;
        }
    },
    mounted() {
        const houseDesEle = this.$refs.houseDes;   
        let rate = houseDesEle.offsetHeight / houseDesEle.offsetWidth;
        console.log(rate);
        
        
        if (rate > 0.34) {
            this.isToolang = true;
        }
    },
}
</script>

<style  scoped>
    .house-dec{
        position: relative;
    }
    .house-more{
        color:red;
        position: absolute;
        right: 0px;
        bottom: 0px;
        background: #ffffff;
    }
    .btnMore{
        color: blue;
    }

</style>
<template>
    <div class="swipe-container" ref="swipe-container">
        <div class="swipe-wrap" ref="swipe-wrap" :style="screenWidth">
            <slot></slot>
        </div>
    </div>
</template>
<script>
    export default {
        name: "z_swipe",
        data(){
            return{
                screenWidth:0,
            }
        },
        created() {
           
        },
        mounted() {
             this.screenWidth ="width:"+ window.screen.width * this.$refs['swipe-wrap'].children.length + 'px';
            console.log(this.$refs['swipe-container'].style)
            // for(var i of this.$refs['swipe-wrap'].children){
            //     i.style.width = this.$refs[].parent + 'px';
            // }
            
        },
        methods:{

        }
    }   
</script>

<style lang="less" scoped>
    .swipe-container{
        height: 300px;
        width: 100%;
        overflow: hidden;
        .swipe-wrap{
            height: 100%;
            overflow: hidden;
            clear: both;
            .swipe-item{
                height: 100%;
                float: left;
                img{
                    width: 100%;
                    height: 100%;
                }
             }
        }
    }
</style>

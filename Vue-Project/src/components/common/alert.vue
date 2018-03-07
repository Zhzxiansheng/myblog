<template>
    <div class="alert">
        <div class="alert-wrap">
            <div class="text">
                {{alertMsg}}
            </div>
        </div>
    </div>
</template>

<script>
    import { mapState } from 'vuex'
    export default {
        props:{
           alertMsg:String 
        },
        data() {
            return {
            }
        },
        // computed: mapState({
        //     alertMsg: state => state.com.alertMsg
        // })
    }
</script>
<style scoped>
   .alert {
        z-index: 1000 
    }
    .text {
             font-size: 14px;
            color: #fff;
            }
    .alert-wrap {
            position: fixed;
            width: 250px;
            height: 70px;
            line-height: 70px;
            text-align: center;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            border-radius: 10px;
            background: rgba(0, 0, 0, 0.6);
        }
</style>

<template id="slotChild">
  
  <div class="soltChild">
      <div class="alert-con">
          <div class="close" @click="closeSlot()">X</div>
          <h3 name="title">
              <slot name="title">默认标题</slot>
          </h3>
          <div class="content">
            <slot name="one">默认one内容</slot>
            <slot>默认分发内容 ||||</slot>  
            <slot name="two">默认two内容</slot>
          </div>
      </div>
  </div>
</template>
<script>
export default {
  data(){
      return{

      }
  },
  methods:{
      closeSlot(){
          this.$emit('closeSlot')
      }
  }
}
</script>
<style scoped>
    .alert-con{
        position: fixed;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
        min-height: 200px;
        min-width: 400px;
        padding: 0 30px 30px 30px;
        background: rgba(0,0,0,.8);
        z-index: 1000;
        color: #fff;
        text-align: center;
        border-radius: 5px;
    }
    .close{
        position: absolute;
        right: 10px;
        top: 10px;
        cursor:pointer;
    }
    h3[name="title"]{
        background: #000000;
    }
    .content{
        margin-top: 50px;
    }
</style>

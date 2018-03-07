<template lang="html">
  <div class="articlist">
    <div class="list" >
      <section >
        <!-- <h3>{{item.title}}</h3> -->
        <!-- 这个就是传给父组件的内容 -->
        <div v-html="content">
             <p >{{content}}</p> 
        </div>
        <button @click="add">{{ count }}</button>
        <!-- <span @click="goDetail(item.id)" class="gotodetail"></span> -->
      </section>
  </div>
  </div>
</template>
<script>
export default {
    name: 'listC',
    data(){
        return{
            getFatherMsg:"这是子组件传的值",
            count: 0,
        }
    },
    props: {
        content: String, // 这里要注明传入的类型
        // 父组件向子组件传对象
        // houseObj : {
        //     type: Object,
            //    default:{
            //        title:""
            //    }
        // }
    },
    methods: {
        add() {
            this.count++;
            this.$emit('add')
        }
    }
}
</script>
<template>
  <div id="props">
      <h3 class="arTitle">父子组件之间通信</h3>
      <div class="content">
          <p class="col"><span class="bold">props</span> : 父组件传值给子组件</p>
          <p class="col"><span class="bold">$.emit('name')</span> : 子组件传值给父组件</p>
          <h3>1.关于props 的用法：</h3>
          <p class="col"> 首先我们在一个子组件中写了一个变量dialogMsg</p>
          <img src="/static/img/props1.png" alt="">
          <p class="col"> <span class="bold">props</span> - 在与data()同级目录中定义props；具体写法有两种</p>
          <p class="postMsg">第一种：直接定义传输的值是什么类型；没有默认值</p>
          <div class="code">
              props:{ <br />
                &nbsp;&nbsp; dialogMsg:String
              <br />}
          </div>
          <p class="postMsg">第二种：就是声明一个变量对象里面有默认值</p>
          <div class="code">
              props:{ <br />
                &nbsp;&nbsp; dialogMsg:{ <br />
                &nbsp;&nbsp;&nbsp; type: String, <br />
                &nbsp;&nbsp;&nbsp; default: '默认值', // 这里设置的是默认值 
                <br />&nbsp;    }
              <br />}
          </div>
           <p class="postMsg"> 
               在父组件中需要做的：
           </p>
           <p class="">1.首先引入这个组件 </p>
           <p class="code">import dialog from '../common/dialog'</p>
           <p class="code">
               在生命周期同级中：<br />
                components:{ <br />
                  &nbsp;  'dialog':dialog,
                <br />},
           </p>
           <p class="">
              2. 接下来就是调用这个引入的组件
           </p>
            <p class="code">
                    &lt; dialog :dialog-msg="dialogMsg" &gt; &lt; /dialog &gt; 
                    <br /> 这时候我们就能在data 中定义我们想要传入的信息
                    <br /> 
                    <br />
                    dialogMsg: "弹窗提醒"
            </p>
        <h3> 2. $emit('name')</h3>
        <p class="col">从上面我们可以看到，这个弹窗组件中有 两个按钮，分别代表着确定和取消；那么怎么把点击按钮代表的信息告诉父组件以便做出对应的处理</p>
        <p class="postMsg">
            从上面可以看出，每个按钮都有绑定了事件
            
        </p>
        <div class="code">
            &lt; div class="btn" @click="cancal"&gt; 取消 &lt;/div &gt; <br />
              &lt; div class="btn" @click="confirm"&gt; 确定 &lt;/div &gt;
        </div>
        <p class="postMsg">
            接下来就是在对应的方法中传值了;在子组件中写下对应的点击事件
        </p>
        <p class="code">
            methods: { <br />
             &nbsp;   confirm () { <br>
              &nbsp;&nbsp;&nbsp;      this.$emit('confirm')  <br>
               &nbsp; }, <br>
               &nbsp; cancal () { <br>
                &nbsp;&nbsp;&nbsp;    this.$emit('cancel') <br>
               &nbsp; }
            }
        </p>
        <p class="col"> 依照上面的方法，依然引入并声明标签，最后整个组件引入的写法如下</p>
         <p class="code">
                    &lt; dialog :dialog-msg="dialogMsg" &nbsp; @cancel="cancal"  &nbsp;@confirm="confirm" &gt; &lt; /dialog &gt;       
         </p>
         <p class="postMsg">接下来就能写对应的方法名在对应的事件中做我们的处理了</p>

         <p class="code">
            methods: { <br />
             &nbsp;   confirm () { <br>
              &nbsp;&nbsp;&nbsp;      // 这里点击确定的事件 <br>
               &nbsp; }, <br>
               &nbsp; cancal () { <br>
                &nbsp;&nbsp;&nbsp;     // 这里点击取消的事件 <br>
               &nbsp; }
            }
        </p>
        <p class="postMsg">
            上面的$emit('')只是传输了点击了一个什么事件；并没有传送信息，传送信息的方式为：
        </p>
        <p class="code">
            this.$emit('confirm','点击了确定按钮的信息') 
            <br />
            <br />
            那么在父组件的方法中就可以直接在方法中的参数拿到这个信息
            <br />
            confirm(msg){ <br>
                &nbsp;&nbsp; console.log(msg);
            <br> }
        </p>
      </div>
  </div>
</template>
<script >
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
            
        }
    }
</script>
<style scoped>
@import '/static/css/myArticlepop.css';

</style>


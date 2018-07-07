<template lang="html">
  <div class="aboutme">
    <ul class="listUl">
        <li>
            <img src="" />
            <router-link to="/" ><p>全屏滚动图</p></router-link>
            
        </li>
    </ul>
    
  </div>
</template>
<script>
    export default{

    }
</script>
<style scoped>
.listUl{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
}
a{
    text-decoration: none;
    color: #000000;
}
li{
    list-style: none;
}
</style>

<template>
  <div class="douban">
   <h1>知乎top5</h1>
    <ul v-for="x in list">
      <li v-for="y in x.top_stories" class="listLi">
        <img :src="y.image" />
		     <p>{{y.title}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import api from '../../api/index'
export default {
  data () {
    return {
      msg: '',
      list:[]
    }
  },
  created(){

  },
  mounted(){
    this.getList(1);
  },
  methods:{
    getList(type) {
			var vue = this;
			if (type) {
				api.getNews().then(function(data) {
					vue.tops = data.data.top_stories;
					vue.list.push(data.data);
          console.log(data.data);
          console.log(vue.list);
				});
			} else {
				api.getNewsByDate(vue.GetDate(vue.count)).then(function(data) {
					vue.list.push(data.data);
          console.log(data.data);
          console.log(vue.list);
					// vue.loading = false;
				});
			}
		}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.douban{

}

h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {

}
.listLi img{
  width: 50px;
  height: 50px;
}
a {
  color: #42b983;
}
</style>

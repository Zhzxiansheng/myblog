// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import  VueResource  from 'vue-resource'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Vuex from 'vuex'

// loading通用组件
import Loading from './components/loading'
Vue.use(Loading)


Vue.use(ElementUI)
Vue.use(VueResource)
Vue.use(Vuex)

Vue.config.productionTip = false

// 定义vuex 的 store 对象
var store = new Vuex.Store({//store对象
  state: {
    show: false
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  VueResource,
  template: '<App/>',
  components: { App }
})

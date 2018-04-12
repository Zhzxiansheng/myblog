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
const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment(state) {
      state.count++
    }
  }
})

store.commit('increment'); // 调用上面的 mutations 中的 increment 

console.log(store.state.count) // -> 1
// store.state 获取状态对象  store.commit 方法触发状态变更

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  VueResource,
  template: '<App/>',
  components: { App }
})

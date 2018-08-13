import pageComponent from "./page.vue";

const paging = {
    install: function (Vue) {
        Vue.component("paging", pageComponent)
    }
}

export default paging
import Vue from 'vue'
import App from './App.vue'
import router from './router'

import '../packages/theme-chalk/lib/index.css'
import './assets/common.css'

import HllUI from '../packages/index'
Vue.use(HllUI)

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
    router
}).$mount('#app')

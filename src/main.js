import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from "axios"
import './plugins/element.js'

Vue.config.productionTip = false

axios.defaults.baseURL = "http://localhost:8088/"

Vue.prototype.$axios = axios

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

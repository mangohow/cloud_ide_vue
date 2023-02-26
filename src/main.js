import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from "axios"
import './plugins/element.js'
import 'element-ui/lib/theme-chalk/index.css'
import 'element-ui/lib/theme-chalk/display.css'
import moment from 'moment/moment'

Vue.config.productionTip = false

axios.defaults.baseURL = "http://localhost:8080/"
axios.defaults.workspaceUrl = "http://192.168.44.100/ws/"


Vue.prototype.$axios = axios

//配置请求拦截器，用于在访问后端服务器时携带token令牌
axios.interceptors.request.use(config =>{
  let requestUrl = config.url
  let start = requestUrl.indexOf("/api")
  if (start == 0) {   // 如果访问后台，需要带上token
    config.headers.Authorization = window.sessionStorage.getItem("token")
  }

  return config           //必须return config
})

// 配置响应拦截器，该拦截器用于拦截后端数据的响应
// axios.interceptors.response.use(config => {
//   if(config.data.status == 300) {    // 返回码为300时，说明需要登录，才能访问后台
//     router.push("/manage/login");
//   }

//   return config;
// })

Vue.filter('dateFormat', function (dateStr) {
  // 根据传入的日期字符串进行格式化
  return moment(dateStr).format('YYYY-MM-DD HH:mm:ss');
});


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

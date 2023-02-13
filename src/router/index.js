/*
 * @Author: mangohow mghgyf@qq.com
 * @Date: 2022-12-17 14:35:24
 * @LastEditors: mangohow mghgyf@qq.com
 * @LastEditTime: 2022-12-17 15:22:37
 * @FilePath: \cloud-ide-vue\src\router\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import DashBoard from "../views/DashBoard.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/',
    name: 'Dashboard',
    component: DashBoard
  }
]

const router = new VueRouter({
  routes
})

export default router

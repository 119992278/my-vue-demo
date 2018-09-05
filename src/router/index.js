import Vue from 'vue' // 引入Vue
import Router from 'vue-router' // 引入vue-router
import HelloWorld from '@/components/HelloWorld' // 引入根目录下的Hello.vue组件
import FirstComponent from '@/components/FirstComponent' // 引入根目录下的Hello.vue组件
import HelloRouter from '@/components/HelloRouter' // 引入根目录下的Hello.vue组件
import Hi1 from '@/components/HelloRouter/Hi1'
import Hi2 from '@/components/HelloRouter/Hi2'
import Params from '@/components/Params'
import Error from '@/components/Error'
import VueXCount from '@/components/VueX_Count'
import HelloVuex from '@/components/HelloVuex'

Vue.use(Router) // Vue全局使用Router

export default new Router({
  mode: 'hash',
  routes: [{
    path: '/',
    name: 'HelloWorld',
    component: HelloWorld
  }, {
    path: '/FirstComponent', // 浏览器路径
    name: 'FirstComponent',
    component: FirstComponent
  }, {
    path: '/HelloRouter',
    name: 'HelloRouter11111',
    component: HelloRouter,
    children: [
      { path: '/', component: HelloRouter },
      { path: 'hi1', name: 'hi1', component: Hi1 },
      { path: 'hi2', name: 'hi2', component: Hi2 }
    ]
  }, {
    path: '/VueX_Count', // 演示Vuex使用
    name: 'VueX_Count',
    component: VueXCount
  }, {
    path: '/Hello_Vuex', // 演示Vuex使用
    name: 'Hello_Vuex',
    component: HelloVuex
  }, {
    path: '/params/:newsId/:newsTitle',
    component: Params,
    beforeEnter: (to, from, next) => {
      console.log('我进入了params模板')
      next()
    }
  }, {
    path: '/goParams/:newsId(\\d+)/:newsTitle', // 重定向时传递参数
    redirect: '/params/:newsId(\\d+)/:newsTitle'
  }, {
    path: '/hi1', // 别名
    component: Hi1,
    alias: '/aliasName'
  }, {
    path: '*', // 进入404错误页面.
    component: Error
  }]
})

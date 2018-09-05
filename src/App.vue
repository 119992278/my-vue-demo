<template>
<div>
  <div id="app">
    <img src="./assets/logo.png">
    <p>{{$router.name}}</p>
    <p>导航 ：
     <router-link to="/">首页</router-link> |
      <router-link to="/HelloRouter">Hi页面</router-link> |
      <router-link to="/HelloRouter/hi1">-Hi页面1</router-link> |
      <router-link to="/HelloRouter/hi2">-Hi页面2</router-link> |
      <router-link :to="{name:'hi1',params:{username:'jspang'}}">路由Hi1传参</router-link> |
      <router-link to="/params/198/基本参数传参">基本参数传参</router-link> |
      <router-link to="/goParams/200/重定向时传递参数">重定向时传递参数</router-link> |
      <router-link to="/VueX_Count">VueX实例</router-link> |
      <router-link to="/Hello_Vuex">VueX实例2</router-link> |
      <router-link to="/aliasName">别名alia</router-link> |
      <router-link to="/bbbbbb">ERROR 错误页面</router-link> |
      <button @click="goback">后退按钮</button> |
      <button @click="goHome">回到首页</button>
    </p>
     <transition name="fade">  <!--动画效果 -->
      <router-view ></router-view>
    </transition>
  </div>
</div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    goback () {
      this.$router.go(-1)
    },
    goHome () {
      this.$router.push('/')
    }
  }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.fade-enter {
  opacity:0;
}
.fade-leave{
  opacity:1;
}
.fade-enter-active{
  transition:opacity .5s;
}
.fade-leave-active{
  opacity:0;
  transition:opacity .5s;
}
</style>

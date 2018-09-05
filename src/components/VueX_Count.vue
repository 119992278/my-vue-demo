<template>
    <div>
        <h2>{{msg}}</h2>
        <hr/>
        <h3>{{$store.state.count}}</h3>
    <button @click="$store.commit('add')">+</button> |
    <button @click=add>+</button> |
    <button @click="$store.commit('addNum',10)">+10</button> |
    <button @click="$store.commit('reduce')">-</button>
</div>
</template>
<script>
import store from '@/vuex/store'
import { mapState, mapMutations } from 'vuex' // 模板获取Mutations,改写方法格式
export default{
  data () {
    return {
      msg: 'Hello Vuex'
    }
  },
  methods: mapMutations([
    'add', 'reduce'
  ]),
  store,
  mapState
}
</script>

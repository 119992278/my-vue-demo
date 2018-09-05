<template>
    <div>
     {{msg}}<br>
     count:{{$store.state.count}}<br>
    choosed_id: {{$store.state.choosed_id}}<br>
    <button @click="submitAnswer(20)">submitAnswer</button>
</div>
</template>
<script>
import {mapActions} from 'vuex' // 在组件中分发 Action
import store from '@/vuex/index'
export default{
  data () {
    return {
      msg: 'Hello Vuex'
    }
  },
  store: store,
  methods: {
    ...mapActions([
      'addNum', 'initializeData' // 将 `this.addNum()` 映射为 `this.$store.dispatch('addNum')`
    ]),
    submitAnswer (num) {
      this.addNum(num) // 调用vuex里的actions
    }
  },
  created () {
    this.initializeData()
  }
}
</script>

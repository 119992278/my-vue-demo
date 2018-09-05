import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state = { // 访问状态对象,是整个项目的共享值
  count: 1
}
const mutations = {
  add (state) {
    state.count++
  },
  addNum (stateum, n) {
    state.count += n
  },
  reduce (state) {
    state.count--
  }
}
const getters = {
  count: function (state) {
    // return state.count += 100 // 获取数据之前进行的一种再编辑
  }
}
export default new Vuex.Store({
  state,
  mutations,
  getters
})

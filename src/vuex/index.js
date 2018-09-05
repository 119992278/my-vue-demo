import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
  // 存放组件之间共享的数据
  state: {
    count: 1,
    choosed_id: 1
  },
  // Action 提交的是 mutation，而不是直接变更状态
  actions: {
    addNum ({ commit, state }, id) {
      // 点击下一题，记录答案id，判断是否是最后一题，如果不是则跳转下一题
      commit('ADD_ITEMNUM', id)
    },
    // 初始化信息
    initializeData ({ commit }) {
      commit('INITIALIZE_DATA')
    }
  },
  // 显式的更改state里的数据
  mutations: {
    ADD_ITEMNUM (state, num) {
      state.choosed_id = num
    },
    INITIALIZE_DATA (state) {
      state.choosed_id = 0
    }
  }
})

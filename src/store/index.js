import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null,
    data: {}
  },
  getters: {
    user: state => {
      return state.user
    },
    data: state => {
      return state.data
    }
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    setData(state, data) {
      state.data = {...data}
    }
  },
  actions: {
    setData({commit}, data) {
      commit('setData', data)
    }
  },
  modules: {
  }
})

import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    user: true
  },
  mutations: {
    setUser (state, payload) {
      state.user = payload
    }
  },
  actions: {
    createUser({commit}, payload) {
      axios.post(`http://localhost:3001/api/user`, {
        name: payload.name,
        lastname: payload.lastname,
        email: payload.email,
        password: payload.password,
        checkbox: payload.checkbox
      })
    },
    signUserLogin ({commit}, payload) {
      axios.post(`http://localhost:3001/api/user`, {
        email: payload.email,
        password: payload.password
      })
      .then(function (response) {
        user => {
          commit('setLoading', false)
          const newUser = {
            id: response.id
          }
          commit('setUser', newUser)
        }
      })
    }
  },
  getters: {
    user (state) {
      return state.user
    } 
  }
})

import Vue from 'vue'
import Router from 'vue-router'
import Signup from './../components/Signup'
import Login from './../components/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Signup',
      component: Signup
    },
    {
      path: '/login',
      component: Login
    }
  ]
})

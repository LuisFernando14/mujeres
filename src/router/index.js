import Vue from 'vue'
import Router from 'vue-router'
import Signup from './../components/Signup'
import Login from './../components/Login'
import Home from './../components/Home'
import AuthGuard from './auth'

Vue.use(Router)

let router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/signup',
      name: 'signup',
      component: Signup
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/',
      name: '',
      component: Home,
      beforeEnter: AuthGuard
    },
    {
      path: '*', 
      redirect: '/'
    }
  ]
})



export default router

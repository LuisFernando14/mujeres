import Vue from 'vue';
import Router from 'vue-router';
import UserSignUp from '@/views/User/UserSignUp';
import UserLogin from '@/views/User/UserLogin';
import Home from '@/views/Home/Home';
import AuthGuard from '@/router/auth';

Vue.use(Router)

let router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/signup',
      name: 'signup',
      component: UserSignUp
    },
    {
      path: '/login',
      name: 'login',
      component: UserLogin
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

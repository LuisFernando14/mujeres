import Vue from 'vue';
import Router from 'vue-router';
import UserSignUp from '@/views/User/UserSignUp';
import UserLogin from '@/views/User/UserLogin';
import Home from '@/views/Home/Home';
import AuthGuard from '@/router/auth';
import Classifieds from '@/views/Classifieds/Classifieds.vue';

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
      path: '/classifieds/add',
      name: 'Classifieds',
      component: Classifieds
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})



export default router

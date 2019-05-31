import Vue from 'vue';
import Router from 'vue-router';
import UserSignUp from '@/views/User/UserSignUp';
import UserLogin from '@/views/User/UserLogin';
import Home from '@/views/Home/Home';
import Classifieds from '@/views/Classifieds/Classifieds.vue';
import VueGoodTable from '@/views/Prices/Prices.vue'
import Directories from '@/views/Directories/Directories.vue';
import Profile from '@/views/Profile/Profile.vue';

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
      path: '/Prices',
      name: 'Prices',
      component: VueGoodTable
      
    },
    {
      path: '/Profile',
      name: 'Profile',
      component: Profile
      
    },
    {
      path: '/login',
      name: 'login',
      component: UserLogin
    },
    {
      path: '/Directories',
      name: 'Directories',
      component: Directories
    },
    {
      path: '/',
      name: '',
      component: Home,
    },
    {
      path: '/classifieds/add',
      name: 'Classifieds',
      component: Classifieds,
      meta: { requiresAuth: true },
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  const isLogged = localStorage.getItem("token")
  if ( ! requiresAuth && isLogged && to.path === '/login') {
    return next('/')
  } 
  if ( ! requiresAuth && isLogged && to.path === '/signup') {
    return next('/')
  } 
  if (requiresAuth && ! isLogged) {
    next('/login')
  } else {
    next()
  }
})
export default router

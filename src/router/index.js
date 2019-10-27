import Vue from 'vue';
import Router from 'vue-router';
import UserSignUp from '@/views/User/UserSignUp';
import UserLogin from '@/views/User/UserLogin';
import Home from '@/views/Home/Home';
import Profile from '@/views/Profile/Profile.vue';

Vue.use(Router);

let router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/signup',
      name: 'signup',
      component: UserSignUp
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
      path: '/',
      name: '',
      component: Home,
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
});
router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  const isLogged = localStorage.getItem("token");
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
});
export default router

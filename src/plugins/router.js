import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/pages/Login';
import Register from '@/pages/Register';
import Products from '@/pages/Products';
import { isAuthenticated } from '@/plugins/auth';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/products',
    name: 'Products',
    component: Products
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const isUserAuthenticated = isAuthenticated();

  if (isUserAuthenticated && to.name !== 'Products') {
    next({ name: 'Products' });
  } else if (!isUserAuthenticated && !to.name) {
    next({ name: 'Login' });
  } else {
    next();
  }

})

export default router

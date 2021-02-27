import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/pages/Login';
import Register from '@/pages/Register';
import Products from '@/pages/Products';
import { isAuthenticated } from '@/plugins/auth';
import ProductsPaginate from '@/pages/ProductsPaginate';

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
  {
    path: '/products-paginate',
    name: 'ProductsPaginate',
    component: ProductsPaginate
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export const fullPages = ['Login', 'Register'];
const authPages = ['Products', 'ProductsPaginate'];

router.beforeEach((to, from, next) => {
  const isUserAuthenticated = isAuthenticated();
  const toAuthPage = authPages.indexOf(to.name) !== -1;

  if (!isUserAuthenticated && toAuthPage) {
    next({ name: 'Login' });
  } else if (!to.name) {
    next({ name: 'Login' });
  } else {
    next();
  }

})

export default router

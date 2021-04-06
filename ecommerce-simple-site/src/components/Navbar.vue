<template>
  <div class="navbar bg-white w-full flex px-4 items-center justify-end fixed top-0 text-right z-10">
    <router-link class="mr-4 hover:underline text-gray-800" to="/products">Products</router-link>
    <router-link class="mr-4 hover:underline text-gray-800" to="/products-paginate">Products paginate</router-link>
    <el-button round plain type="danger" @click="logOut">Log out</el-button>
  </div>
</template>

<script>
  import { clearAuthToken } from '@/plugins/auth';

  export default {
    name: 'Navbar',

    methods: {
      logOut() {
        clearAuthToken();
        this.$router.push('/');
      }
    }
  }
</script>

<style>
  .navbar {
    height: var(--navbar-height);
  }
</style>

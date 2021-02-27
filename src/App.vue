<template>
  <div id="app">
    <navbar v-if="!hideNavbar" />
    <router-view />
  </div>
</template>

<style>
  :root {
    --navbar-height: 60px;
  }

  .user-page {
    @apply bg-gray-100 min-h-screen;
    margin-top: var(--navbar-height);
  }

</style>
<script>
  import Navbar from '@/components/Navbar';
  import { fullPages } from '@/plugins/router';

  export default {
    components: { Navbar },

    computed: {
      hideNavbar() {
        return fullPages.indexOf(this.$route.name) !== -1
      }
    }
  }
</script>

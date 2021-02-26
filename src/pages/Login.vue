<template>
  <div class="login-page relative h-screen flex">
    <div class="absolute w-full h-full bg-black opacity-25" />

    <div class="mt-20 sm:mx-auto sm:w-full sm:max-w-md z-10 relative">
      <div class="title-card bg-purple-600 py-8 mx-10 text-center relative rounded-md">
        <h1 class="text-white font-bold text-xl">Login</h1>
      </div>

      <el-form class="bg-white pt-20 pb-8 px-4 shadow sm:rounded-lg sm:px-10 text-center"
               :model="model"
               @submit.native.prevent="onSubmit">
        <el-form-item>
          <el-input
              prefix-icon="el-icon-message"
              placeholder="Email"
              v-model="model.email"
              type="email"
          />
        </el-form-item>

        <el-form-item>
          <el-input
              prefix-icon="el-icon-lock"
              placeholder="Password"
              v-model="model.password"
              type="password"
          />
        </el-form-item>

        <el-button plain type="primary"
                   native-type="submit"
                   class="mx-auto mb-5 text-uppercase"
                   :loading="loading">
          Let't go
        </el-button>

        <router-link to="/register" class="block hover:underline hover:text-blue-800">
          Don't have an account yet? Register here
        </router-link>
      </el-form>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';
  import { setAuthToken } from '../plugins/auth';

  export default {
    name: 'Login',

    data() {
      return {
        model: {
          email: '',
          password: ''
        },
        loading: false,
      }
    },

    methods: {
      onSubmit() {
        if (this.loading) {
          return;
        }

        this.loading = true;
        axios.post('/login', this.model)
          .then(res => {
            setAuthToken(res.data.accessToken);
            this.$router.push('/');
          })
          .catch((e) => {
            const { message, errors } = e.response.data;
            this.$message.error(message);
          })
          .finally(() => {
            this.loading = false;
          })
      }
    }
  }
</script>

<style scoped>
  .login-page {
    background-image: url("/images/rohit-tandon-9wg5jCEPBsw-unsplash.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    position: relative;
    height: 100vh;
  }

  .overlay {

  }

  .title-card {
    top: 45px;
    @apply bg-gradient-to-r from-purple-600 to-purple-800;
  }

</style>

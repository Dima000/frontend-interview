<template>
  <div class="auth-page relative h-screen flex">
    <div class="absolute w-full h-full bg-black opacity-25" />

    <div class="mt-20 mx-auto sm:w-full sm:max-w-md z-10 relative">
      <el-form class="bg-white py-8 px-4 shadow rounded-lg sm:px-10 text-center"
               :model="model"
               @submit.native.prevent="onSubmit">

        <h1 class="font-bold pt-4 pb-10 text-gray-800 text-2xl">Register</h1>

        <el-form-item>
          <el-input
              prefix-icon="el-icon-message"
              placeholder="Name"
              v-model="model.name"
          />
        </el-form-item>

        <el-form-item>
          <el-input
              prefix-icon="el-icon-message"
              placeholder="Email"
              v-model="model.email"
              type="email"
          />
        </el-form-item>

        <el-form-item>
          <el-date-picker
              class="w-full"
              type="date"
              placeholder="Education Start Date"
              v-model="model.education_start_date"
          />
        </el-form-item>

        <el-form-item>
          <el-date-picker
              class="w-full"
              type="date"
              placeholder="Education End Date"
              v-model="model.education_end_date"
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

        <el-form-item>
          <el-input
              prefix-icon="el-icon-lock"
              placeholder="Confirm Password"
              v-model="model.password_confirmation"
              type="password"
          />
        </el-form-item>

        <el-form-item class="text-left">
          <el-checkbox-group v-model="model.terms">
            <el-checkbox name="terms" class="register-checkbox">
              I agree to <a href="#" class="hover:underline text-blue-700">terms and conditions</a>
            </el-checkbox>
          </el-checkbox-group>
        </el-form-item>

        <el-button type="primary"
                   native-type="submit"
                   class="mx-auto mb-5 uppercase"
                   :disabled="!model.terms"
                   :loading="loading">
          Get started
        </el-button>

        <router-link to="/" class="block hover:underline text-blue-700">
          Already have an account? Login here
        </router-link>
      </el-form>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';
  import { setAuthToken } from '@/plugins/auth';

  export default {
    name: 'Register',

    data() {
      return {
        model: {
          name: '',
          email: '',
          education_start_date: null,
          education_end_date: null,
          password: '',
          password_confirmation: '',
          terms: false,
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
        axios.post('/register', this.model)
          .then(res => {
            setAuthToken(res.data.accessToken);
            this.$router.push('/products');
            this.$notify({
              type: 'success',
              title: 'Register successful!',
              message: 'Your account was created successfully!',
            });
          })
          .catch((e) => {
            const { message, errors } = e.response.data;
            const allErrors = Object.values(errors).flat();

            this.$notify({
              type: 'error',
              title: message,
              message: allErrors.join('<br>'),
              dangerouslyUseHTMLString: true
            });
          })
          .finally(() => {
            this.loading = false;
          })
      }
    }
  }
</script>

<style scoped>
  /deep/ .el-checkbox .el-checkbox__input + .el-checkbox__label,
  /deep/ .el-checkbox .el-checkbox__input.is-checked + .el-checkbox__label {
    @apply text-gray-800;
  }

  .el-date-editor.el-input {
    @apply w-full;
  }

  .auth-page {
    background-image: url("/images/rohit-tandon-9wg5jCEPBsw-unsplash.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    position: relative;
    height: 100vh;
  }

</style>

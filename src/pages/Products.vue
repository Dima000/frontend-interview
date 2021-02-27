<template>
  <div class="flex flex-wrap bg-gray-100 p-10 min-h-screen justify-around">
    <product-item
        class="m-4"
        v-for="item in products"
        :key="item.id"
        :item="item"
        @open-details="selectedProduct = $event"
    />
    <div class="h-20 w-full" v-loading="loading" />
  </div>
</template>

<script>
  import ProductItem from '@/components/ProductItem';
  import axios from 'axios';
  import { authHeader } from '@/plugins/axios-config';

  export default {
    name: 'Products',

    components: { ProductItem },

    data() {
      return {
        products: [],
        selectedProduct: null,
        loading: true,
      }
    },

    mounted() {
      this.loadProducts()
    },
    methods: {
      loadProducts() {
        this.loading = true;

        axios.get('/products', { headers: authHeader() })
          .then(res => {
            this.products = res.data;
          })
          .catch(e => {
            const { message } = e.response.data;
            this.$notify({
              type: 'error',
              title: 'Load products',
              message
            });
          })
          .finally(() => {
            this.loading = false;
          })
      }
    }
  }
</script>

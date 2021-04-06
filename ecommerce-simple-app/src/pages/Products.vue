<template>
  <div class="user-page">
    <div class="flex flex-wrap p-10 justify-around">
      <product-item
          class="m-4"
          v-for="item in products"
          :key="item.id"
          :item="item"
          @open-details="selectedProduct = $event"
      />
    </div>

    <product-item-details-modal :item="selectedProduct" @close="selectedProduct = null" />
  </div>

</template>

<script>
  import ProductItem from '@/components/ProductItem';
  import axios from 'axios';
  import { authHeader } from '@/plugins/axios-config';
  import ProductItemDetailsModal from '@/components/ProductItemDetailsModal';
  import Navbar from '@/components/Navbar';

  export default {
    name: 'Products',

    components: { Navbar, ProductItemDetailsModal, ProductItem },

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

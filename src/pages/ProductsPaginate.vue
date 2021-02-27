<template>
  <div class="user-page">
    <div class="flex flex-wrap p-10 justify-around">
      <product-item
          class="m-4"
          v-for="item in products.data"
          :key="item.id"
          :item="item"
          @open-details="selectedProduct = $event"
      />
    </div>

    <el-pagination
        class="text-center"
        background
        layout="prev, pager, next"
        :current-page.sync="products.current_page"
        :page-size="products.per_page"
        :total="products.total">
    </el-pagination>

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
    name: 'ProductsPaginate',

    components: { Navbar, ProductItemDetailsModal, ProductItem },

    data() {
      return {
        products: {
          current_page: this.$route.query.page || 1,
          data: [],
          last_page: 3,
          per_page: 5,
          total: 0,
        },
        selectedProduct: null,
        loading: true,
      }
    },

    mounted() {
      this.loadProducts()
    },

    watch: {
      'products.current_page'(newPage) {
        this.$router.push({ query: { ...this.$query, page: newPage } });
        this.loadProducts();
      }
    },
    methods: {
      loadProducts() {
        this.loading = true;

        axios.get('/products/paginate', {
          headers: authHeader(),
          params: { page: this.products.current_page }
        })
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

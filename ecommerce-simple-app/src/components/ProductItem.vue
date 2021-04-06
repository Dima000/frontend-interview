<template>
  <div class="product-item pt-6">
    <div class="bg-white shadow-xl text-center pb-4 px-4 rounded-lg">
      <img class="shadow-md rounded-lg mx-auto relative mb-2"
           :src="item.picture"
           :alt="item.name">

      <p class="text-gray-800 text-lg mb-8">{{item.name}}</p>

      <div class="flex justify-between items-center">
        <span class="text-base text-gray-400">${{item.price}}</span>

        <el-button type="primary" round class="uppercase" @click="$emit('open-details', item)">
          Details
        </el-button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ProductItem',
    props: {
      item: Object
    }
  }
</script>

<style scoped>
  .product-item img {
    max-width: 220px;
    top: -1.5rem;
  }
</style>

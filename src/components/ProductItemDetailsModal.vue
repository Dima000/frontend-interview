<template>
  <u-modal v-if="item"
           @close="$emit('close')"
  >
    <div class="flex p-10">
      <img class="mr-10 max-w-xs" :src="item.picture" :alt="item.name">
      <div>
        <h3 class="text-2xl text-gray-800 mb-4">{{item.name}}</h3>
        <p class="text-gray-400 mb-10">${{item.price}}</p>
        <p class="text-brand text-sm pb-1 border-b border-gray-200 mb-3">Description</p>
        <p class="text-sm text-gray-500 mb-10">{{item.description}}</p>
        <el-button type="primary" round>Add to cart <i class="el-icon-shopping-cart-2 el-icon" /></el-button>
      </div>
    </div>
  </u-modal>
</template>

<script>
  import UModal from '@/components/UModal';

  export default {
    name: 'ProductItemDetailsModal',

    components: { UModal },

    props: {
      item: Object
    }
  }
</script>

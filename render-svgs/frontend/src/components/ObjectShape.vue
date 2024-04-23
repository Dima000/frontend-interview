<script setup lang="ts">
import type { Shape } from '@/models/shape';
import { computed, type PropType } from 'vue';

const SIZE = 46; //px

const props = defineProps({
  shape: {
    type: Object as PropType<Shape>,
    required: true,
  }
})

const shapeStyle = computed(() => {
  return {
    width: `${SIZE}px`,
    height: `${SIZE}px`,
    top: `${props.shape?.position.y - SIZE / 2}px`,
    left: `${props.shape?.position.x - SIZE / 2}px`,
  }
})
</script>

<template>
  <div class="shape bg-green-50 absolute" :style="shapeStyle" >
    <svg
        v-if="shape.objectType === 'circle'"
        width="100%" height="100%"
        class="shape-svg"
    >
      <circle cx="50%" cy="50%" r="40%" stroke="black" stroke-width="2" fill="none" />
    </svg>

    <svg
        v-else-if="shape.objectType === 'diamond'"
        class="shape-svg"
        width="100%" height="100%" viewBox="0 0 100 100"
    >
      <polygon points="50,10 90,50 50,90 10,50" stroke="black" stroke-width="2" fill="none" />
    </svg>

    <svg
        v-else
        width="100%" height="100%" viewBox="0 0 100 100"
        class="shape-svg"
    >
      <polygon points="50,5 95,95 5,95" stroke="black" stroke-width="2" fill="none" />
    </svg>
  </div>

</template>

<script setup lang="ts">
import { loadShapes, saveShape } from '@/api';
import ContextMenu from '@/components/ContextMenu.vue';
import ObjectShape from '@/components/ObjectShape.vue';
import type { Shape } from '@/models/shape';
import { onMounted, ref } from 'vue';

const shapes = ref<Shape[]>([]);
const canvasRef = ref();

onMounted(async () => {
  shapes.value = await loadShapes(10);
})

async function onCanvasClick(event: MouseEvent) {
  const rect = canvasRef.value.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;
  const shape = await saveShape(x, y);
  if (shape) {
    addShape(shape);
  }
}

function addShape(shape: Shape) {
  if (shapes.value.length >= 10) {
    shapes.value.shift();
  }

  shapes.value.push(shape);
}
</script>

<template>
  <div
      ref="canvasRef"
      class="bg-white h-full w-full relative"
      @click="onCanvasClick"
  >
    <ObjectShape
        v-for="(shape) in shapes"
        :key="shape.id"
        :shape="shape"
    />

    <ContextMenu />
  </div>
</template>

<style scoped>

</style>

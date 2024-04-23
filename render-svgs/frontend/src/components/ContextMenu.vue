<script setup lang="ts">

import { computed, onMounted, ref } from 'vue';

const showMenu = ref(false);
const menuPosition = ref({
  x: 0,
  y: 0,
})

const menuStyle = computed(() => {
  return {
    top: `${menuPosition.value.y}px`,
    left: `${menuPosition.value.x}px`
  }
})

onMounted(() => {
  document.addEventListener("contextmenu", function (event) {
    if (event.target?.classList.contains('shape-svg')) {
      event.preventDefault();
      showMenu.value = true;
      menuPosition.value = {
        x: event.clientX,
        y: event.clientY,
      }
    }
  });

  // Event Listener for Close Context Menu when outside of menu clicked
  document.addEventListener("click", (e) => {
    showMenu.value = false;
  });

// Close Context Menu on Esc key press
  window.onkeyup = function (e) {
    if (e.key === 'escape') {
      showMenu.value = false;
    }
  }
})

function onClick(event: 'rename' | 'delete') {
  // Send events to store
}

</script>

<template>
  <div
      v-if="showMenu"
      class="context-menu flex flex-col bg-white shadow border border-gray-50 p-2 rounded absolute z-10"
      :style="menuStyle"
  >
    <button class="hover:bg-white rounded" @click="onClick('rename')">Rename</button>
    <button class="hover:bg-white rounded" @click="onClick('delete')">Delete</button>
  </div>
</template>


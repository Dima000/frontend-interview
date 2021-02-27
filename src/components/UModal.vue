<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper" @click.self="$emit('close')">
        <div class="modal-container bg-white mx-6 lg:mx-auto relative">
          <i class="modal-close-icon el-icon el-icon-close absolute font-bold text-2xl p-1 text-black cursor-pointer"
             @click="$emit('close')" />
          <slot></slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
  export default {
    name: 'UModal',
    mounted() {
      document.body.appendChild(this.$el);
    },
    destroyed() {
      if (this.$el && this.$el.parentNode) {
        this.$el.parentNode.removeChild(this.$el);
      }
    }
  }
</script>

<style lang="css">
  .modal-mask {
    @apply fixed top-0 left-0 w-full h-full;
    z-index: 9998;
    background-color: rgba(0, 0, 0, 0.5);
    display: table;
    transition: opacity 0.3s ease;
  }

  .modal-wrapper {
    display: table-cell;
    vertical-align: middle;
  }

  .modal-container {
    max-width: 900px;
    border: 10px solid black;
  }

  .modal-close-icon {
    top: 1rem;
    right: 1rem;
  }

  .modal-enter {
    opacity: 0;
  }

  .modal-leave-active {
    opacity: 0;
  }

  .modal-enter .modal-container,
  .modal-leave-active .modal-container {
    transform: scale(1.1);
  }
</style>

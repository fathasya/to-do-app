<template>
  <div v-if="show" class="fixed inset-0 flex items-center justify-center  bg-gray-700 bg-opacity-75">
    <div class="bg-white w-3/4 md:w-2/3 lg:w-1/3 p-4 rounded">
      <slot />
    </div>
  </div>
</template>
  
<script>
export default {
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },
}
</script>
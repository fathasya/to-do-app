<script setup>
const { label, isPrimary } = defineProps(['label', 'isPrimary']);
const { emit } = defineEmits();
</script>  

<template>
  <button
    :class="`${isPrimary ? 'bg-blue-500 hover:bg-blue-600' : 'bg-red-500 hover:bg-red-600'} text-white font-semibold py-2 px-3 text-xs md:text-sm rounded`"
    @click="$emit('click')">
    {{ label }}
  </button>
</template>
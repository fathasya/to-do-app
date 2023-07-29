<template>
  <div>
    <input v-model="searchQuery"
      class="hidden sm:flex appearance-none border rounded  text-sm w-full py-2 px-3 md:px-3  leading-tight focus:outline-none focus:shadow-outline"
      type="text" placeholder="Search tasks..." />
  </div>
</template>
  
<script>
export default {
  data() {
    return {
      searchQuery: '',
    };
  },
  watch: {
    searchQuery: function (newVal) {
      this.$emit('search', newVal)
    },
  },
}
</script>
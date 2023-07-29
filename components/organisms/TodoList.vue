<template>
  <div class="w-full mx-auto bg-blue-200 p-5">
    <div class="w-full md:w-2/3 lg:w-1/2 mx-auto p-5 bg-white rounded shadow-md">
      <h6 class="font-bold uppercase text-center mb-4 border-b-2 pb-5">Your To-Do List</h6>
      <div v-if="tasks.length === 0" class="uppercase text-xs text-gray-400 text-center font-bold py-10">No Task</div>
      <div v-else>
        <TodoItem v-for="task in tasks" :key="task.id" :task="task" @toggle="toggleTask(task)" @delete="deleteTask(task)"
          @edit="editTask(task)" />
      </div>
    </div>
  </div>
</template>

<script>
import TodoItem from '~/components/organisms/TodoItem.vue';

export default {
  components: {
    TodoItem,
  },
  props: ['tasks'],
  methods: {
    toggleTask(task) {
      task.completed = !task.completed;
    },
    deleteTask(task) {
      this.$emit('delete', task);
    },
    editTask(task) {
      this.$emit('edit', task);
    },
  },
};
</script>
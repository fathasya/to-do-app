<template>
  <div>
    <Navbar :showAddModal="showAddModal" @addTask="addTask" @search="handleSearch" />
    <Modal :show="showEditModal" @close="closeEditModal">
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="editedTask">Edit Task:</label>
        <input v-model="editedTask.text"
          class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="editedTask" type="text" placeholder="Edit task" />
      </div>
      <div class="flex justify-end space-x-3">
        <Buttons @click="saveEditedTask" label="Save" :isPrimary="true" />
        <Buttons @click="closeEditModal" label="Cancel" :isPrimary="false" />
      </div>
    </Modal>
    <TodoList :tasks="filteredTasks" @delete="deleteTask" @toggle="toggleTask" @edit="openEditModal" />
    <Assesments />
    <Footer />
  </div>
</template>

<script>
import Buttons from '~/components/atoms/Buttons.vue'
import Modal from '~/components/molecules/Modal.vue'
import TodoList from '~/components/organisms/TodoList.vue'
import Assesments from '~/components/organisms/Assesments.vue'
import Navbar from '~/components/organisms/Navbar.vue'
import Footer from '~/components/organisms/Footer.vue'

export default {
  components: {
    Buttons,
    Modal,
    TodoList,
    Assesments,
    Navbar,
    Footer,
  },
  data() {
    return {
      tasks: [],
      newTask: '',
      editedTask: {},
      showAddModal: false,
      showEditModal: false,
      searchQuery: '',
    }
  },
  computed: {
    filteredTasks() {
      const filtered = this.tasks.filter((task) =>
        task.text.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
      return filtered;
    },
  },
  methods: {
    addTask(newTask) {
      if (newTask.trim() !== '') {
        this.tasks.push({ id: Date.now(), text: newTask, completed: false })
        this.newTask = ''
        this.closeAddModal()
      }
    },
    deleteTask(task) {
      this.tasks = this.tasks.filter((t) => t.id !== task.id)
    },
    toggleTask(task) {
      console.log("Toggle Task:", task); // Add this line to check the task object being toggled
      task.completed = !task.completed
      console.log("Updated Task:", task); // Add this line to check the task object after toggling
    },
    openEditModal(task) {
      this.editedTask = { ...task }
      this.showEditModal = true
    },
    saveEditedTask() {
      const index = this.tasks.findIndex((task) => task.id === this.editedTask.id)
      if (index !== -1) {
        this.tasks[index] = this.editedTask
        this.closeEditModal()
      }
    },
    closeAddModal() {
      this.showAddModal = false
    },
    closeEditModal() {
      this.showEditModal = false
      this.editedTask = {}
    },
    handleSearch(query) {
      this.searchQuery = query
    },
  },
}
</script>

<template>
  <div class="w-full flex justify-between items-center px-5 py-4 bg-blue-400">
    <div class="flex flex-col justify-end ">
      <h1 class="font-bold text-lg md:text-xl text-white">TODO APP</h1>
      <div v-if="weatherData" class="flex items-center space-x-2 text-white text-xs md:text-sm">
        <img :src="weatherIconUrl" class="h-6 w-6" alt="Weather Icon" />
        <p>{{ weatherData.main.temp }}°C</p>
        <p>{{ weatherData.weather[0].description }}</p>
      </div>
      <p v-else class="text-white text-sm md:text-md">Loading weather data...</p>
    </div>
    <div class="flex justify-end items-center space-x-3">
      <SearchBar @search="handleSearch" />
      <Buttons @click="showAddModal = true" label="Add Task" :isPrimary="true" />
    </div>
    <Modal :show="showAddModal" @close="closeAddModal">
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="newTask">Add Task:</label>
        <input v-model="newTask"
          class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-xs md:text-sm"
          id="newTask" type="text" placeholder="Task Description" @keyup.enter="addTask" />
      </div>
      <div class="flex justify-end space-x-3">
        <Buttons @click="addTask" :isPrimary="true" label="save" />
        <Buttons @click="closeAddModal" label="Cancel" :isPrimary="false" />
      </div>
    </Modal>
  </div>
</template>

<script>
import SearchBar from '~/components/atoms/SearchBar.vue'
import Buttons from '~/components/atoms/Buttons.vue'
import Modal from '~/components/molecules/Modal.vue'
import axios from 'axios'

export default {
  components: {
    SearchBar,
    Modal,
    Buttons,
  },
  data() {
    return {
      newTask: '',
      showAddModal: false,
      weatherData: null,
    }
  },
  mounted() {
    this.getWeatherData()
  },
  methods: {
    addTask() {
      if (this.newTask.trim() !== '') {
        this.$emit('addTask', this.newTask)
        this.newTask = ''
        this.closeAddModal()
      }
    },
    closeAddModal() {
      this.showAddModal = false
    },
    handleSearch(query) {
      this.$emit('search', query)
    },
    getWeatherData() {
      const apiKey = '68b75b1a9e4ab23a7f8ccb33924e85a6'
      const apiUrl = 'https://api.openweathermap.org/data/2.5/weather'
      const location = 'Indonesia'

      axios
        .get(apiUrl, {
          params: {
            q: location,
            appid: apiKey,
            units: 'metric',
          },
        })
        .then((response) => {
          this.weatherData = response.data
        })
        .catch((error) => {
          console.error(error)
        })
    },
  },
  computed: {
    weatherIconUrl() {
      if (this.weatherData && this.weatherData.weather && this.weatherData.weather.length > 0) {
        const iconCode = this.weatherData.weather[0].icon
        return `https://openweathermap.org/img/wn/${iconCode}.png`
      }
      return null
    },
  },
}
</script>

<style>
.bg-opacity-75 {
  background-color: rgba(0, 0, 0, 0.75)
}
</style>

<template>
  <div class="pt-5 pb-3">
    <div class="flex justify-between items-start">
      <h6 class="uppercase font-bold text-sm md:text-lg mb-3">Test 3</h6>
      <button @click="toggleContent">
        <svg v-if="isContentOpen" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
          stroke="currentColor" class="w-4 h-4">
          <path stroke-linecap="round" stroke-linejoin="round"
            d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
          <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
          stroke="currentColor" class="w-4 h-4">
          <path stroke-linecap="round" stroke-linejoin="round"
            d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
        </svg>
      </button>
    </div>
    <div v-if="isContentOpen">
      <p class="text-xs md:text-sm font-semibold">Enter 12-hour time:</p>
      <input type="text" v-model="timeString"
        class="w-full appearance-none my-2 border rounded py-2 px-2 text-xs md:text-md text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
      <div class="flex space-x-3 mb-4">
        <Buttons @click="convertTime" label="Convert" :is-primary="true" />
        <Buttons @click="resetTime" label="Reset" :isPrimary="false" />
      </div>
      <p class="text-xs md:text-sm font-semibold mt-4">Result in 24-hour time:</p>
      <input type="text" v-model="convertedTime"
        class="w-full appearance-none border text-xs md:text-md rounded py-2 px-2 my-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
    </div>
  </div>
</template>
  
<script>
import Buttons from '~/components/atoms/Buttons.vue'

export default {
  components: {
    Buttons,
  },
  data() {
    return {
      isContentOpen: false,
      timeString: "",
      convertedTime: "",
    };
  },
  methods: {
    toggleContent() {
      this.isContentOpen = !this.isContentOpen;
    },
    convertTime() {
      const timePattern = /^(0?[1-9]|1[0-2]):([0-5][0-9])(:([0-5][0-9]))? (AM|PM)$/i;

      if (!timePattern.test(this.timeString)) {
        this.convertedTime = "Invalid time format";
        return;
      }

      const [time, period] = this.timeString.split(" ");
      const [hours, minutes, seconds] = time.split(":").map(Number);

      let militaryHours = hours;
      if (period === "PM" && hours !== 12) {
        militaryHours += 12;
      } else if (period === "AM" && hours === 12) {
        militaryHours = 0;
      }

      this.convertedTime = `${String(militaryHours).padStart(2, "0")}:${String(
        minutes
      ).padStart(2, "0")}${seconds ? `:${String(seconds).padStart(2, "0")}` : ""}`;
    },
    resetTime() {
      this.timeString = ""
      this.convertedTime = ""
    }
  },
};
</script>
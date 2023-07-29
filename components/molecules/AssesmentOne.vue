<template>
  <div class="pt-2 pb-3">
    <div class="flex justify-between items-start">
      <h6 class="font-bold uppercase text-sm md:text-lg mb-3 ">Test 1</h6>
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
      <p class="text-xs md:text-sm font-semibold mb-2">Input 5 Positive Integer:</p>
      <input v-model="inputNumbers"
        class="w-full text-xs md:text-md border rounded px-2 py-2 focus:outline-none focus:ring-2" type="text" />
      <div class="flex space-x-3 mt-2 mb-4">
        <Buttons @click="calculateMinMax" label="Calculate" :is-primary="true" />
        <Buttons @click="reset" label="Reset" :isPrimary="false" />
      </div>
      <p class="text-xs md:text-sm font-semibold mb-2">The Minimum & Maximum Sums:</p>
      <div class="border-[1px] p-2 rounded text-xs md:text-md mb-4">
        <p v-if="minMaxValues">{{ minMaxValues.min }} {{ minMaxValues.max }}</p>
        <p v-else> &nbsp; </p>
      </div>
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
      inputNumbers: '',
      minMaxValues: null,
      isContentOpen: false,
    };
  },
  methods: {
    toggleContent() {
      this.isContentOpen = !this.isContentOpen;
    },
    calculateMinMax() {
      const numbers = this.inputNumbers.trim().split(/\s+/).map(Number);
      if (numbers.length !== 5 || numbers.some(isNaN) || numbers.some((num) => num <= 0)) {
        alert('Please enter 5 positive integers.');
        return;
      }
      numbers.sort((a, b) => a - b);
      const minSum = numbers.slice(0, 4).reduce((acc, cur) => acc + cur, 0);
      const maxSum = numbers.slice(1).reduce((acc, cur) => acc + cur, 0);
      this.minMaxValues = { min: minSum, max: maxSum };
    },
    reset() {
      this.inputNumbers = '';
      this.minMaxValues = null;
    },
  },
};
</script>
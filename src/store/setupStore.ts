import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterSetupStore = defineStore('counterSetupStore', () => {

  const count = ref(0)

  const doubleCount = computed(() => count.value * 2)

  function setCount(newCount: number) {
    count.value = newCount
  }

  return { count, doubleCount, setCount }
})

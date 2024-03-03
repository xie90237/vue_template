import { defineStore } from 'pinia'

export const useCounterOptionStore = defineStore('counterOption', {
  state: () => ({ count: 0 }),
  getters: {
    doubleCount: (state) => state.count * 2,
  },
  actions: {
    setCount(newCount: number) {
      this.count = newCount
    }
  },
})


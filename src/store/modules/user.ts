import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('userStore', () => {

  const userInfo = ref({})
  const token = ref<string>('')

  const setToken = (val: string) => {
    token.value = val
  }

  const logout = () => {
    token.value = ''
    userInfo.value = {}
  }


  return { token, setToken, logout }
})

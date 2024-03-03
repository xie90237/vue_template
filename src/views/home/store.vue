<template>
  <section className="relative overflow-hidden bg-white">
    <div>Option Store</div>
    <div>{{ optionStore.count }}</div>
    <div class="flex items-center">
      <el-button @click="handelAdd">+1</el-button>
      <el-button @click="handelAdd20">+20</el-button>
    </div>
    <div>Setup Store</div>
    <div>{{ setupStore.count }}</div>
    <div class="flex items-center">
      <el-button @click="setupHandelAdd">+1</el-button>
      <el-button @click="setupHandelAdd20">+20</el-button>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useCounterOptionStore } from '@/store/optionStore' // 配置项写法的pinia
import { useCounterSetupStore } from '@/store/setupStore'

const optionStore = useCounterOptionStore()

const handelAdd = () => {
  optionStore.setCount(optionStore.count + 1)
}
const handelAdd20 = () => {
  optionStore.setCount(optionStore.count + 20)
}

const setupStore = useCounterSetupStore()

const setupHandelAdd = () => {
  setupStore.setCount(setupStore.count + 1)
}

const setupHandelAdd20 = () => {
  setupStore.setCount(setupStore.count + 20)
}
</script>

<style lang="scss"></style>

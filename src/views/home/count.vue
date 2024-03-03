<template>
  <section className="relative overflow-hidden bg-white">
    <div>{{ count }}</div>
    <el-button @click="handelAdd">+1</el-button>
    <el-button @click="handelAdd20">+20</el-button>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const count = ref(0)
const handelAdd = () => {
  count.value++
}
const handelAdd20 = () => {
  count.value += 20
}
</script>

<style lang="scss"></style>

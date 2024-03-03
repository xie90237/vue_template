<template>
  <div class="p-2 border rounded-md">
    <h1>姓名: <slot></slot></h1>
    <p>年龄: {{ age }}</p>
    <p>性别: {{ sex }}</p>

    <p>内容: {{ content }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

defineProps<{
  age?: number
  sex: string
}>()

const content = ref('')

defineExpose({
  sing: (value: string) => {
    content.value = value
  }
})
</script>

<style lang="scss" scoped>
/* Add your styles here */
</style>

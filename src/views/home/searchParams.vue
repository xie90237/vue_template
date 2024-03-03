<template>
  <section className="relative overflow-hidden bg-white">
    <div>search动态参数:</div>
    <div>
      route.query: <span class="text-red-500"> {{ route.query }}</span>
    </div>
    <div>
      route.query.id: <span class="text-red-500"> {{ route.query.id || '没有' }}</span>
    </div>
    <div>
      route.query.name: <span class="text-red-500"> {{ route.query.name || '没有' }}</span>
    </div>
    <el-button @click="() => setName()">setName</el-button>
    <el-button @click="() => setId()">setId</el-button>
    <el-button @click="() => setIdName()">setId&Name</el-button>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const setName = () => {
  router.push({ query: { name: '张三' } })
}

const setId = () => {
  router.push({ query: { id: '123' } })
}

const setIdName = () => {
  router.push({ query: { id: '123', name: '张三' } })
}
</script>

<style lang="scss"></style>

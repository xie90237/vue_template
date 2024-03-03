<template>
  <section className="relative flex flex-col overflow-hidden bg-white p-20">
    <h1 className="text-4xl font-bold tracking-tight text-gray-900">
      这是HOME - ({{ route.path }})
    </h1>
    <div className="mt-2 flex space-x-2">
      <el-button @click="() => toPage('/count')">count</el-button>
      <el-button @click="() => toPage('/store')">store</el-button>
      <el-button @click="() => toPage('/form')">form</el-button>
      <el-button @click="() => toPage('/pathParams/123')"> path 动态参数 </el-button>
      <el-button @click="() => toPage('/searchParams?id=1111')"> search 动态参数 </el-button>
      <el-button @click="() => toPage('/other')">to other</el-button>
      <el-button @click="() => questApi()">请求</el-button>
      <el-button @click="() => goBack(-1)">返回</el-button>
    </div>
    <div className="w-full">
      <RouterView />
    </div>
  </section>
</template>

<script setup lang="ts">
import { RouterView, useRoute, useRouter } from 'vue-router'
import { getApi } from '@/api'

const route = useRoute()
const router = useRouter()
const toPage = (path: string) => {
  router.push(path)
}

const goBack = (num: number) => {
  router.go(num)
}

const questApi = async () => {
  const res = await getApi()
  console.log(res)
}
</script>

<style lang="scss"></style>

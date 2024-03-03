<template>
  <section className="relative flex flex-col overflow-hidden bg-white p-20">
    <h1 className="text-4xl font-bold tracking-tight text-gray-900">
      这是Other - ({{ route.path }})
    </h1>
    <div className="mt-2 flex space-x-2">
      <el-button @click="() => toPage('/')">to home</el-button>
      <!-- <el-button @click="() => getApi()">请求</el-button> -->
      <el-button @click="() => goBack(-1)">返回</el-button>
    </div>
    <div className="w-full flex flex-col items-start">
      <div>vue组件</div>
      <VueCom ref="VueComRef" :age="18" sex="女"> 王小小 </VueCom>
      <el-button class="mt-5" @click="hanelSing">唱歌</el-button>
      <VueCom class="mt-5" sex="男"> 王小二 </VueCom>
    </div>
  </section>
</template>

<script setup lang="ts">
import { RouterView, useRoute, useRouter } from 'vue-router'
import { ref } from 'vue'
import VueCom from '@/components/VueCom.vue'

const route = useRoute()
const router = useRouter()
const toPage = (path: string) => {
  router.push(path)
}

const goBack = (num: number) => {
  router.go(num)
}

const VueComRef = ref()
const hanelSing = () => {
  VueComRef.value.sing('我要唱歌')
}
</script>

<style lang="scss"></style>

<template>
  <section className="relative overflow-hidden bg-white">
    <div>path动态参数:</div>
    <div>
      route.params: <span class="text-red-500"> {{ route.params }}</span>
    </div>
    <div>
      route.params.id: <span class="text-red-500"> {{ route.params.id }}</span>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()
</script>

<style lang="scss"></style>

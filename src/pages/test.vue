<template>
  <van-button @click="back">1232132132131232132</van-button>
</template>
<script lang="ts" setup>
import { useRouter } from 'vue-router'
const router = useRouter()
const back = () => {
  router.back()
}
</script>

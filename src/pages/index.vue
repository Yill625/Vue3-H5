<template>
  <div v-if="show" class="test">
    <van-button
      round
      type="primary"
      loading
      loading-text="加载中..."
      size="mini"
    >
      提交
    </van-button>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { onBeforeRouteLeave } from 'vue-router'
const show = ref(true)
onBeforeRouteLeave(() => {
  show.value = false
})
</script>
<style lang="scss">
.test {
  height: 100px;
}
</style>

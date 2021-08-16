<template>
  <van-config-provider :theme-vars="themeVars">
    <router-view />
  </van-config-provider>
</template>

<script lang="ts" setup>
// 修改组件全局样式 在此修改px无法自动转换为vw
const themeVars = {
  buttonPrimaryBorderColor: '#eaeaea',
  buttonPrimaryBackgroundColor: 'red'
}
</script>

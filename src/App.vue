<template>
  <router-link to="/test">跳转test页面</router-link>
  <van-config-provider :theme-vars="themeVars">
    <router-view v-slot="{ Component, route }">
      <transition :name="route.meta.transition">
        <component :is="Component" class="app-view"></component>
      </transition>
    </router-view>
  </van-config-provider>
</template>

<script lang="ts" setup>
// 修改组件全局样式 在此修改px无法自动转换为vw
const themeVars = {
  buttonPrimaryBorderColor: '#eaeaea',
  buttonPrimaryBackgroundColor: 'red'
}
</script>

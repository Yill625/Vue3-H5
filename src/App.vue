<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <div class="test">1111</div>
  <van-button type="primary" plain hairline>主要按钮</van-button>
  <div class="van-ellipsis">
    这是一段最多显示一行的文字，多余的内容会这是一段最多显示一行的文字，多余的内容会被省略这是一段最多显示一行的文字，多余的内容会被省略被省略
  </div>
</template>

<script lang="ts" setup>
// 引入组件对应的样式，若组件没有样式文件，则无须引入
//
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.test {
  background-color: #2c3e50;
  width: 200px;
}
</style>

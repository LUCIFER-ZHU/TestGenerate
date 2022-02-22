<script setup lang="ts">
import { ref } from 'vue';
import { App } from './app';
import zhCN from 'ant-design-vue/es/locale/zh_CN';
import enUS from 'ant-design-vue/es/locale/en_US';
const locale = ref('');
onMounted(()=>{
  (window as any).App = App.getInstance();
  //  设置国际化
  locale.value = 'zh-cn';
})
</script>
<template>
  <a-config-provider :locale="locale === 'zh-cn' ? zhCN : enUS">
    <router-view />
  </a-config-provider>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100%;
  width: 100%;
}
.app-loading-x {
  display: none;
}
</style>
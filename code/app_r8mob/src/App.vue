<script setup lang="ts">
import { App } from './app';
onMounted(()=>{
  (window as any).App = App.getInstance();
})
</script>
<template>
  <router-view />
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
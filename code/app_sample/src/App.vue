<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup

import { Ref } from "vue";
import { AppModal } from "./utils"
function showConfirm(this: any) {
  AppModal.getInstance().openModal({name:'ExampleEditorEditView',title:'标题',fileDir:'@page/example/example-editor-edit-view'})
}

const visible: Ref<boolean> = ref(false);
const showModal = () => {
  visible.value = !visible.value;
}
</script>

<template>
  <a-button @click="showConfirm">
    Confirm
  </a-button>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  width: 100%;
}
</style>
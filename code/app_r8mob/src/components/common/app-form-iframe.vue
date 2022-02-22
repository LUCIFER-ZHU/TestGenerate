<script setup lang="ts">
import { IActionParam, ILayoutOpts, IParam } from "@core";

interface FormIframeProps{
  name: string;
  layoutOpts: ILayoutOpts;
  visible: boolean;
  iFrameUrl: string
}
const props = withDefaults(defineProps<FormIframeProps>(), {
  visible: true,
});

</script>

<template>
  <AppCol class="app-form-iframe" :visible="visible" :layoutOpts="layoutOpts" v-show="visible">
    <iframe class="app-form-iframe__content" :src="iFrameUrl" style="height: 100%;width: 100%;border: 0"></iframe>
  </AppCol>
</template>

<style lang="scss">
</style>
<script setup lang="ts">
import { IActionParam, ILayoutOpts, IParam } from "@core";

interface FormTabPanelProps {
  name: string;
  layoutOpts: ILayoutOpts;
  visible?: boolean;
}

const props = withDefaults(defineProps<FormTabPanelProps>(), {
  visible: true,
});

</script>

<template>
  <AppCol :visible="visible" noRoot :layoutOpts="layoutOpts" class="app-form-tabpanel">
    <template v-slot:default="{ slotStyle, slotClass }">
      <a-tabs :class="slotClass" :style="slotStyle">
        <slot></slot>
      </a-tabs>
    </template>
  </AppCol>
</template>

<style lang="scss">
</style>
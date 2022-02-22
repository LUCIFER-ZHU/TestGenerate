<script setup lang="ts">
import { IActionParam, ILayoutOpts, IParam } from "@core";

interface FormRawProps{
  name: string;
  layoutOpts: ILayoutOpts;
  visible?: boolean;
  iconClass?: string;
  imgPath?: string;
  value?:any;
  contentType?: string;
  rawStyle?: IParam
}
const props = withDefaults(defineProps<FormRawProps>(), {
  visible: true,
});

</script>

<template>
  <AppCol :visible="visible" noRoot :layoutOpts="layoutOpts" class="app-form-raw">
    <template #default="{slotStyle, slotClass}">
      <AppRaw
        :name="name"
        :class="slotClass"
        :style="slotStyle"
        :iconClass="iconClass"
        :value="value"
        :rawStyle="rawStyle"
        :contentType="contentType">
      </AppRaw>
    </template>
  </AppCol>
</template>

<style lang="scss">
</style>
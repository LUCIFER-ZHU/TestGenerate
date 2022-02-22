<script setup lang="ts">
import { IActionParam, ILayoutOpts, deepCopy } from "@core";

interface FormButtonProps{
  name: string;
  layoutOpts: ILayoutOpts;
  visible?: boolean;
  iconClass?: string;
  imgPath?: string;
  showCaption?: boolean;
  labelCssName?: string;
  caption: string,
  uIAction: any;
}
const props = withDefaults(defineProps<FormButtonProps>(), {
  visible: true,
  showCaption: true,
});

interface FormButtonEmits {
  (name: 'action', event: IActionParam): void
}
const emit = defineEmits<FormButtonEmits>();

//  点击
const click = (event: MouseEvent) => {
  const data = deepCopy(props.uIAction);
  Object.assign(data, { event: event });
  emit('action', { tag: props.name, action: 'formButtonAction', data: data });
}

</script>

<template>
  <AppCol :visible="visible" noRoot :layoutOpts="layoutOpts" class="app-form-button">
    <template #default="{slotStyle, slotClass}">
      <a-button 
        :class="slotClass"
        :style="slotStyle"
        type="primary"
        @click="click">
          <AppIconText :class="labelCssName" :iconClass="iconClass" :imgPath="imagePath" :text="showCaption ? caption : '' "/>
      </a-button>
    </template>
  </AppCol>
</template>

<style lang="scss">
</style>
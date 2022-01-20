<script setup lang="ts">
import { IActionParam } from "@core";
import { onBeforeMount, ref, Ref } from "vue";
interface InputIpProps{
  /**
   * @description 编辑器名称
   */
  name: string;

  /**
   * @description 编辑器值
   */
  value?: string;

  /**
   * @description 禁用
   */
  disabled?: boolean;

  /**
   * @description 只读
   */
  readonly?: boolean;
}

interface EditorEmit{
    (name: 'editorEvent', value: IActionParam): void
}

const props = withDefaults(defineProps<InputIpProps>(), {
  disabled: false,
  readonly: false
})
const emit = defineEmits<EditorEmit>()
const ipData: Ref<any> = ref([]);
const onChange = () => {
  if (ipData.value.length == 4) {
    emit('editorEvent', { tag: props.name, action: "valueChange", data: ipData.value.join('.')});
  }
}

onBeforeMount(() => {
  if (props.value) {
    ipData.value = props.value.split('.');
  }
})

</script>

<template>
  <div :class="['app-editor-container', 'app-input-ip',`app-input-ip-${name}`]">
    <a-input-group size="large">
      <a-row :gutter="8">
        <a-col :span="5">
          <a-form-item-rest><a-input @change="onChange" v-model:value="ipData[0]" /></a-form-item-rest>
        </a-col>
        <a-col :span="5">
          <a-form-item-rest><a-input @change="onChange" v-model:value="ipData[1]" /></a-form-item-rest>
        </a-col>
        <a-col :span="5">
          <a-form-item-rest><a-input @change="onChange" v-model:value="ipData[2]" /></a-form-item-rest>
        </a-col>
        <a-col :span="5">
          <a-form-item-rest><a-input @change="onChange" v-model:value="ipData[3]" /></a-form-item-rest>
        </a-col>
      </a-row>
    </a-input-group>
  </div>
</template>

<style scoped>

</style>
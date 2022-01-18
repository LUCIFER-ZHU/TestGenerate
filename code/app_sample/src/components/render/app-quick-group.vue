<script setup lang="ts">
import { IActionParam, IParam } from '@core';
import { Ref, onBeforeMount } from 'vue';

interface QuickGroupProps {
  quickGroupModel: IParam;
}
interface FormGroupEmit {
  (name: 'onQuickGroupEvent', value: IActionParam): void;
}
const props = withDefaults(defineProps<QuickGroupProps>(), {});
const emit = defineEmits<FormGroupEmit>();
const selectItem: Ref<IParam> = ref({});
const items: Ref<any> = ref([]);
const handleClick = ($event: any) => {
  if ((selectItem.value && selectItem.value.id === $event.id) || $event.children) {
    return;
  }
  selectItem.value = $event;
  emit('onQuickGroupEvent', {
    tag: 'quickGroup',
    action: "valueChange",
    data: $event,
  });
};

onBeforeMount(() => {
  items.value = props.quickGroupModel.codeItems;
  //todo
  // let res: any = await this.codeListService.getDataItems({ tag: this.quickGroupCodeList.codeName, type: this.quickGroupCodeList.codeListType, data: this.quickGroupCodeList, context: this.context });
  // this.quickGroupModel = this.handleDynamicData(JSON.parse(JSON.stringify(res)));
});
</script>

<template>
  <a-space class="app-quick-group" :size="0">
    <a-button class="quick-group-item" v-for="(item, index) in items" :key="index" type="text" @click="() => handleClick(item)">
      <span :style="{ color: item.color }">
        <AppIconText v-if="!item.children" :text="item.text" :iconClass="item.iconClass" :imgPath="item.imgPath" />
        <a-dropdown v-else>
          <AppIconText :text="item.text" :iconClass="item.iconClass" :imgPath="item.imgPath" />
          <template #overlay>
            <a-menu>
              <a-menu-item v-for="(childItem,index) in item.children">
                <AppIconText :text="childItem.text" :iconClass="childItem.iconClass" :imgPath="childItem.imgPath" />
              </a-menu-item>
            </a-menu>
          </template>
        </a-dropdown>
      </span>
    </a-button>
  </a-space>
</template>

<script setup lang="ts">
import { IParam, IActionParam } from "@ibiz-core";
import { onBeforeMount, ref, Ref } from "vue";

interface ToolbarProps {
  /**
   * @description 工具栏模型
   */
  toolbarModel: IParam;
}
interface toolbarEmit {
  (name: "toolbarEvent", value: IActionParam): void;
}
const props = withDefaults(defineProps<ToolbarProps>(), {});
const emit = defineEmits<toolbarEmit>();
const items: Ref<IParam[]> = ref(props.toolbarModel?.items || []);
const getItemClass = (item: IParam) => {
  //todo 样式表
  return item.class;
};
const getItemIcon = (item: IParam) => {
  if (item.getPSSysImage) {
    return item.getPSSysImage.cssClass;
  }
};
const itemClick = (item: IParam) => {
  emit("toolbarEvent", {
    tag: item.name,
    action: "toolbarEvent",
    data: item,
  });
};
</script>
<template>
  <div class="app-toolbar">
    <template v-for="(item, index) in items" :key="index">
      <a-tooltip
        v-if="Object.is(item.itemType, 'DEUIACTION')"
        :title="item.tooltip"
      >
        <a-button
          v-show="true"
          :class="['toolbar-item', getItemClass(item)]"
          :disabled="item.disabled"
          type="primary"
          @click="itemClick(item)"
        >
          <a-icon v-show="item.showIcon" :type="getItemIcon(item)" />
          {{ item.showCaption ? item.caption : "" }}
        </a-button>
      </a-tooltip>
      <a-dropdown v-else-if="Object.is(item.itemType, 'items')">
        <a-menu slot="overlay" @click="itemClick">
          <a-tooltip
            v-for="(childItem, index) in item"
            v-if="Object.is(item.itemType, 'DEUIACTION')"
            :title="item.tooltip"
          >
            <a-menu-item
              v-show="childItem.visible"
              :class="['toolbar-item', getItemClass(childItem)]"
              :disabled="childItem.disabled"
              type="primary"
              @click="itemClick(childItem)"
            >
              <a-icon
                v-show="childItem.showIcon"
                :type="getItemIcon(childItem)"
              />
              {{ childItem.showCaption ? childItem.caption : "" }}
            </a-menu-item>
          </a-tooltip>
        </a-menu>
      </a-dropdown>
    </template>
  </div>
</template>

<style scoped>
.app-toolbar {
}
.app-toolbar .toolbar-item {
  margin-right: 8px;
  margin-bottom: 12px;
}
</style>

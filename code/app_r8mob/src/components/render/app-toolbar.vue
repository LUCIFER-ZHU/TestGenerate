<script setup lang="ts">
import { IParam, IActionParam } from "@core";
import { onBeforeMount, ref, Ref } from "vue";

interface ToolbarProps {

  /**
   * @description 名称
   */
  name: string;
  /**
   * @description 模式
   */
  mode: 'button' | 'link';
  /**
   * @description 行为模型
   */
  actionModel: IParam[];
}
interface toolbarEmit {
  (name: "toolbarEvent", value: IActionParam): void;
}
const props = withDefaults(defineProps<ToolbarProps>(), {
  mode: 'button',
});
const emit = defineEmits<toolbarEmit>();
const items: Ref<IParam[]> = ref(props.actionModel || []);
const itemClick = (item: IParam) => {
  emit("toolbarEvent", {
    tag: props.name,
    action: "toolbarEvent",
    data: item,
  });
};
</script>
<template>
  <div class="toolbar">
    <a-space v-if="Object.is(mode,'button')" class="toolbar-button" style="gap: 4px;">
      <template v-for="(item, index) in items" :key="index">
      <a-tooltip
        v-if="Object.is(item.itemType, 'DEUIACTION')"
        :title="item.tooltip"
      >
      <!-- todo 无权限显示模式 -->
        <a-button
          v-show="item.visible"
          :class="['toolbar-item', item.class]"
          :disabled="item.disabled"
          @click="itemClick(item)"
        >
          <AppIconText 
          :text="item.showCaption && item.caption"  
          :iconClass="item.showIcon && item.iconClass" 
          :imgPath="item.showIcon && item.imgPath"/>
        </a-button>
      </a-tooltip>
      <a-dropdown v-else-if="Object.is(item.itemType, 'ITEMS')">
        <a-menu slot="overlay" @click="itemClick">
          <a-tooltip
            v-for="(childItem, index) in item"
            v-if="Object.is(item.itemType, 'DEUIACTION')"
            :title="item.tooltip"
          >
            <a-menu-item
              v-show="childItem.visible"
              :class="['toolbar-item', item.class]"
              :disabled="childItem.disabled"
              @click="itemClick(childItem)"
            >
              <AppIconText 
                :text="item.showCaption && item.caption"  
                :iconClass="item.showIcon && item.iconClass" 
                :imgPath="item.showIcon && item.imgPath"/>
            </a-menu-item>
          </a-tooltip>
        </a-menu>
      </a-dropdown>
      <template v-else-if="Object.is(item.itemType, 'SEPERATOR')">
        <span class='separator'>|</span>
      </template>
      </template>
    </a-space>
    <a-space v-else class="toolbar-link">
      <template v-for="(item, index) in items" :key="index">
        <div v-if="item.separator" class="separator"></div>
        <a-button
          v-show="item.visible"
          :class="['toolbar-item', item.class]"
          :disabled="item.disabled"
          type="link"
          @click="itemClick(item)"
        >
          <AppIconText 
          :text="item.showCaption && item.caption"  
          :iconClass="item.showIcon && item.iconClass" 
          :imgPath="item.showIcon && item.imgPath"/>
        </a-button>
      </template>
    </a-space>
  </div>
</template>

<style lang='scss'>
.toolbar {
  display: flex;
  align-items: center;
  .toolbar-link {
    gap: 0 !important;
    display: flex;
    flex-wrap: wrap;
    .ant-space-item {
      position: relative;
      .ant-btn-link {
        padding: 4px 10px;
      }
      .separator {
        position: absolute;
        left: 0;
        top: 15%;
        height: 70%;
        width: 1px;
        background: #1890ff;
      }
    }
  }
  .toolbar-item {
    border-radius: 4px;
    .ibiz-icon-text__icon {
      vertical-align: unset;
    }
  }
}
</style>

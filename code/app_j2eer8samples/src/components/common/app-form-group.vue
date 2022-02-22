<script setup lang="ts">
import { Ref, ref } from "vue";
import { IActionParam, ILayoutOpts, IParam } from "@core";

interface FormGroupProps {
  name: string;
  layoutOpts: ILayoutOpts;
  title?: string;
  imgPath?: string;
  iconClass?: string;
  titleClass?: string;
  infoGroupMode?: boolean;
  titleBarCloseMode?: number | 0 | 1 | 2;
  showCaption?: boolean;
  visible?: boolean;
  uIActionGroup?: IParam;
}
interface FormGroupEmit {
  (name: 'componentEvent', value: IActionParam): void
}
const props = withDefaults(defineProps<FormGroupProps>(), {
  infoGroupMode: false,
  showCaption: true,
  visible: true,
  titleBarCloseMode: 0,
});
const emit = defineEmits<FormGroupEmit>();
const handleGroupAction = (action: IParam) => {
  emit('componentEvent', { tag: props.name, action: 'formGroupAction', data: action });
}

//  显示内容区
const showContent: Ref<boolean> = ref(props.titleBarCloseMode === 2 ? false : true);
const handleMenuGroupAction = ($event: IParam) => {
  if (props.uIActionGroup && props.uIActionGroup.details?.length > 0) {
    const details = props.uIActionGroup.details;
    const detail = details.find((action: IParam) => Object.is(action.uIActionTag, $event.key));
    emit('componentEvent', { tag: props.name, action: 'formGroupAction', data: detail });
  }
}
//  处理内容显示状态变化
const handleContentShowStatusChange = (event: MouseEvent) => {
  event.stopPropagation();
  showContent.value = !showContent.value;
}
</script>

<template>
  <AppCol
    noRoot
    :visible="visible"
    :layoutOpts="layoutOpts"
    :class="['app-form-group', `app-form-group-${name}`]"
  >
    <template #default="{ slotClass, slotStyle }">
      <a-card :class="slotClass" :style="slotStyle" :headStyle="titleClass" :bordered="false">
        <template v-if="showCaption" #title>
          <template v-if="titleBarCloseMode === 1 || titleBarCloseMode === 2">
            <span
              :class="['fa', 'show-content-icon', showContent ? 'fa-chevron-circle-up' : 'fa-chevron-circle-down']"
              @click="handleContentShowStatusChange"></span>
          </template>
          <p class="app-form-group-title">
            <AppIconText :iconClass="iconClass" :imgPath="imgPath" :text="title" />
          </p>
        </template>
        <template v-if="showCaption" #extra>
          <template v-if="uIActionGroup">
            <template v-if="Object.is(uIActionGroup.extractMode, 'ITEMS')">
              <a-dropdown>
                <a class="group-action" @click.prevent>{{ uIActionGroup.caption }}</a>
                <template #overlay>
                  <a-menu @click="handleMenuGroupAction">
                    <template v-for="(item, index) in uIActionGroup.details" :key="index">
                      <a-menu-item
                        v-if="item.visible"
                        :key="item.uIActionTag"
                        :disabled="item.disabled"
                      >
                        <AppIconText
                          :iconClass="item.showIcon && item.iconClass"
                          :imgPath="item.showIcon && item.imgPath"
                          :text="item.showCaption && item.caption"
                        />
                      </a-menu-item>
                    </template>
                  </a-menu>
                </template>
              </a-dropdown>
            </template>
            <template v-else>
              <span v-for="(item, index) in uIActionGroup.details" :key="index">
                <span v-if="index > 0" class="separator">|</span>
                <a-button
                  v-show="item.visible"
                  type="link"
                  :disabled="item.disabled"
                  @click="handleGroupAction(item)"
                >
                  <AppIconText
                    :iconClass="item.showIcon && item.iconClass"
                    :imgPath="item.showIcon && item.imgPath"
                    :text="item.showCaption && item.caption"
                  />
                </a-button>
              </span>
            </template>
          </template>
        </template>
        <AppRow v-if="showContent" :layoutOpts="layoutOpts">
          <slot></slot>
        </AppRow>
      </a-card>
    </template>
  </AppCol>
</template>

<style lang="scss">
.app-form-group {
  .ant-card-head {
    text-align: left;
    height: 38px;
    min-height: 38px;
    .ant-card-head-title,
    .ant-card-extra {
      padding: 6px 0;
    }
    .app-form-group-title {
      margin: 0px;
    }
  }
  .ant-card-body {
    height: calc(100% - 38px);
    padding-top: 6px;
  }
}
.show-content-icon {
  position: absolute;
  top: 0;
  transform: translateY(60%);
  & + .app-form-group-title {
    padding-left: 16px;
  }
}
</style>
<script setup lang="ts">
import { IActionParam, IParam } from "@core";

interface FormGroupProps{
  name: string;
  title: string;
  imgPath: string;
  iconClass: string;
  titleStyle: string;
  infoGroupMode: boolean;
  titleBarCloseMode: number;
  showCaption: boolean;
  uIActionGroup: IParam;
}
interface FormGroupEmit{
  (name: 'componentEvent', value: IActionParam): void
}
const props = withDefaults(defineProps<FormGroupProps>(), {
  infoGroupMode: false,
  showCaption: true,
  titleBarCloseMode: 0,
});
const emit = defineEmits<FormGroupEmit>();
const handleGroupAction = (action: IParam) => {
  emit('componentEvent', { tag: props.name, action: 'formGroupAction', data: action});
}
const handleMenuGroupAction = ($event: IParam) => {
  if (props.uIActionGroup && props.uIActionGroup.details?.length > 0) {
    const details = props.uIActionGroup.details;
    const detail = details.find((action: IParam) => Object.is(action.uIActionTag, $event.key));
    emit('componentEvent', { tag: props.name, action: 'formGroupAction', data: detail});
  }
} 
</script>

<template>
  <a-card 
    :class="['app-form-group', `app-form-group-${name}`]"
    :headStyle="titleStyle"
    :bordered="false">
    <template v-if="showCaption" #title>
      <p :class="['app-form-group-title', `${titleStyle}`]">
        <IbizIconText :iconClass="iconClass" :imgPath="imgPath" :text="title"/>
      </p>
    </template>
    <template v-if="showCaption" #extra>
      <template v-if="uIActionGroup">
        <template v-if="Object.is(uIActionGroup.extractMode, 'ITEMS')">
          <a-dropdown>
            <a class="group-action" @click.prevent>
              {{uIActionGroup.caption}}
            </a>
            <template #overlay>
              <a-menu @click="handleMenuGroupAction">
                <template v-for="(item, index) in uIActionGroup.details" :key="index">
                  <a-menu-item
                    v-if="item.visible"
                    :key="item.uIActionTag"
                    :disabled="item.disabled">
                      <IbizIconText 
                        :iconClass="item.showIcon && item.iconClass" 
                        :imgPath="item.showIcon && item.imgPath" 
                        :text="item.showCaption && item.caption"/>
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
                @click="handleGroupAction(item)">
                  <IbizIconText 
                    :iconClass="item.showIcon && item.iconClass" 
                    :imgPath="item.showIcon && item.imgPath" 
                    :text="item.showCaption && item.caption"/>
              </a-button>
          </span>
        </template>
      </template>
    </template>
    <slot></slot>
  </a-card>
</template>

<style lang="scss">
.app-form-group {
  height: 100%;
  width: 100%;
  .ant-card-head {
    text-align: left;
    .app-form-group-title {
      margin: 0px;
    }
  }
}
</style>
<script setup lang="ts">
import { IActionParam, IParam } from '@core';
interface MenuCenterProps {
  menus: IParam[];
}
const props = withDefaults(defineProps<MenuCenterProps>(), {});
interface menuCenterEmit {
  (name: 'onMenuSelect', value: IParam): void;
}
const emit = defineEmits<menuCenterEmit>();
const onClick = (item: IParam) => {
  emit('onMenuSelect', {
    key: item.name,
    item: item,
  });
};
</script>

<template>
  <a-card
    v-for="(menu, index) in menus"
    v-show="!menu.hidden"
    :key="index"
    :class="['app-menu__card', menu.itemSysCss]"
    :bordered="false"
    :title="menu.caption"
  >
    <template v-if="Object.is(menu.layoutPos.layout, 'FLEX')">
      <a-space :size="24" class="app-menu__card--flex">
        <template v-for="item in menu.items">
          <a-button v-if="!item.hidden" size="large" :class="['app-menu-item', item.itemSysCss]" @click="onClick(item)">
            {{ item.caption }}
          </a-button>
        </template>
      </a-space>
    </template>
    <template v-else>
      <a-row :wrap="true" class="app-menu__card--grid" :gutter="20" style="row-gap: 20px;">
        <a-col
          v-for="(item,key) in menu.items"
          :key="key"
          :lg="{span: item.layoutPos.lg, offset: item.layoutPos.lgOffset }"
          :md="{span: item.layoutPos.md, offset: item.layoutPos.mdOffset }"
          :sm="{span: item.layoutPos.sm, offset: item.layoutPos.smOffset }"
          :xs="{span: item.layoutPos.xs, offset: item.layoutPos.xsOffset }"
          v-show="!item.hidden"
          :class="['app-menu-item', item.itemSysCss]"
          @click="onClick(item)"
        >
          <a-button size="large">
            {{ item.caption }}
          </a-button>
        </a-col>
      </a-row>
    </template>
  </a-card>
</template>

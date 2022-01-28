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
const getLayout = (item: IParam ,name: string) => {
  switch(name) {
    case 'lg':
      const lg = item.layoutPos.lg > 0 ? item.layoutPos.lg : 6;
      return {span: lg, offset: item.layoutPos.lgOffset};
    case 'md':
      const md = item.layoutPos.md > 0 ? item.layoutPos.md : 6;
      return {span: md, offset: item.layoutPos.mdOffset};
    case 'sm':
      const sm = item.layoutPos.sm > 0 ? item.layoutPos.sm : 6;
      return {span: sm, offset: item.layoutPos.smOffset};
    case 'xs':
      const xs = item.layoutPos.xs > 0 ? item.layoutPos.xs : 6;
      return {span: xs, offset: item.layoutPos.xsOffset};
  }
}
</script>

<template>
  <a-card
    v-for="(menu, index) in menus"
    v-show="!menu.hidden"
    :key="index"
    :class="['app-menu__center', menu.itemSysCss]"
    :bordered="false"
    :title="menu.caption"
  >
    <template v-if="Object.is(menu.layoutPos.layout, 'FLEX')">
      <a-space :size="24" class="app-menu__center--flex">
        <template v-for="item in menu.items">
          <a-button v-if="!item.hidden" size="large" :class="['app-menu-item', item.itemSysCss]" @click="onClick(item)">
            {{ item.caption }}
          </a-button>
        </template>
      </a-space>
    </template>
    <template v-else>
      <a-row :wrap="true" class="app-menu__center--grid" :gutter="20" style="row-gap: 20px;">
        <a-col
          v-for="(item,key) in menu.items"
          :key="key"
          :lg="getLayout(item,'lg')"
          :md="getLayout(item,'md')"
          :sm="getLayout(item,'sm')"
          :xs="getLayout(item,'xs')"
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

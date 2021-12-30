<script setup lang="ts">
import { IParam } from "@ibiz-core";
import {
  UserOutlined,
} from '@ant-design/icons-vue';
interface Props{
  items: IParam[];
}
const props = withDefaults(defineProps<Props>(), {});
</script>

<template>
  <template v-for="item in items" :key="item.name">
    <template v-if="!item.items">
      <a-menu-item v-if="!item.hidden" :key="item.name">
        <template #icon>
          <div class="menu-icon">
            <UserOutlined />
          </div>
        </template>
        {{item.caption}}
      </a-menu-item>
    </template>
    <template v-else>
      <a-sub-menu v-if="!item.hidden" :key="item.name">
        <template #icon>
          <div class="menu-icon">
            <UserOutlined />
          </div>
        </template>
        <template #title>{{item.caption}}</template>
        <IbizMenuItem :items="item.items" />
      </a-sub-menu>
    </template>
  </template>
</template>

<style lang="scss">

</style>
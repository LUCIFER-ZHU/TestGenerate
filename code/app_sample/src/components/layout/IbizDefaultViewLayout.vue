<script setup lang="ts">
interface Props {
  viewCaption?: string
  showHeader?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  // 设定默认值,可选属性可以在这初始化
  showHeader: true,
})

const slots = useSlots();

const showHeader = computed(()=> props.showHeader && (props.viewCaption ||  slots.header || slots['header-left'] || slots['header-left'] || slots['header-right'] || slots['header-bottom']))


</script>

<template>
  <div class="ibiz-view-layout ibiz-view-layout--default">
    <div v-if="showHeader" class="ibiz-view-layout__header">
      <div class="ibiz-view-layout__header-content">
        <slot name="header">
          <div class="ibiz-view-layout__header-left">
            <slot name="header-left"/>
          </div>
          <div class="ibiz-view-layout__header-right">
            <slot name="header-right" />
          </div>
        </slot>
      </div>
      <slot name="header-bottom" />
    </div>
    <slot />
    <slot name="footer" />
  </div>
</template>

<style lang="scss" scoped>
.ibiz-view-layout {
  height: 100%;
  width: 100%;
}
.ibiz-view-layout__header-content{
  display: flex;
  justify-content: space-between;
  .ibiz-view-layout__caption{
    font-weight: 600;
  }
}

</style>
<script setup lang="ts">
interface Props {
  text?: string
  iconClass?: string,
  imgPath?: string,
  position?: 'left' | 'right',
  size?: 'large' | 'default' | 'small',
}
const props = withDefaults(defineProps<Props>(), {
  position: 'left',
  size: 'default',
})

const hasIcon = computed(() => props.iconClass || props.imgPath)

const extraClass = {
  "app-icon-text--no-icon": !hasIcon.value,
  [`app-icon-text--${props.position}`]: hasIcon.value,
}

</script>

<template>
  <div
    :class="[
      {
        [`app-icon-text--${position}`]: hasIcon,
      },
      `app-icon-text--${size}`,
      'app-icon-text'
    ]"
  >
    <template v-if="position == 'left'">
      <i v-if="iconClass" :class="'app-icon-text__icon ' + iconClass" />
      <img v-else-if="imgPath" class="app-icon-text__icon-img" :src="imgPath" />
    </template>
    <span class="app-icon-text__text" v-if="text">{{text}}</span>
    <template v-if="position == 'right'">
      <i v-if="iconClass" :class="'app-icon-text__icon ' + iconClass" />
      <img v-else-if="imgPath" class="app-icon-text__icon-img" :src="imgPath" />
    </template>
  </div>
</template>

<style lang="scss" scoped>

</style>
<script setup lang="ts">
import { IActionParam, IParam } from "@core";

interface FilterTreeProps{
  datas:any[]
  fields:any[]
}

const props = withDefaults(defineProps<FilterTreeProps>(), {

});

onMounted(() => {
  console.log(props)
});

</script>

<template>
<div>app-filter-tree</div>
</template>

<style lang="scss">

</style>
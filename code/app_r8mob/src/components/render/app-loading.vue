<script setup lang="ts">
import { IParam } from "@core";

interface Props{
  width: number;
  height: number;
}

const props = withDefaults(defineProps<Props>(), {})

let style = reactive({width:'600px',height:'600px'});

/**
 * Vue生命周期beforeMount
 */
onBeforeMount(() => {
  if (props.width) {
    style.width = props.width + 'px';
  } else if(props.height){
    style.height = props.height + 'px';
  } 
});

onMounted(()=>{

})
</script>

<template>
<div :style="style" class="ar-loading">
  <div class="ar-loading-spinner">
    <svg class="circular" viewBox="25 25 50 50">
      <circle id="circle1" cx="50" cy="50" r="20" fill="none"></circle>
    </svg>
  </div>
</div>
</template>

<style lang="scss">
.ar-loading{
  display: flex;
  justify-content: center;
  align-items: center;
  &-spinner{
    position: relative;
    display: inline-block;
    width: 80px;
    height: 80px;
    vertical-align: middle;
    animation: ar-rotate 0.8s linear infinite;
    .circular{
      width: 100%;
      height: 100%;
      circle {
        stroke: skyblue;
        stroke-width: 3;
        stroke-linecap: round;
        animation: ar-circular 1.5s ease-in-out infinite;
      }
    }
  }
}

@keyframes ar-rotate {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}

@keyframes ar-circular {
  0% {
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -40;
  }

  100% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -120;
  }
}

</style>
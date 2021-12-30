<script setup lang="ts">
import { Subject } from 'rxjs';
import { Ref, ref } from 'vue';
interface AppModalProps {
  /**
   * @description 视图
   */
  view: any;

  /**
   * @description 视图上下文参数
   */
  viewdata?: any;

  /**
   * @description 视图参数
   */
  viewparams?: any;

  /**
   * @description 导航数据
   */
  navdatas?: any;

  /**
   * @description 数据传递对象
   */
  subject?:any

  /**
   * @description 关闭回调
   */
  close:Function;
}

const props = withDefaults(defineProps<AppModalProps>(), {
  view:{},
  viewdata: {},
  viewparams: {},
  navdatas: [],
});

/**
 * 是否显示
 */
let isShow: Ref<boolean> = ref(false);

/**
 * 是否满屏
 */
let isfullscreen: Ref<boolean> = ref(false);

/**
 * 零时结果
 */
let tempResult = { ret: '' };

/**
 * 视图名称
 */
let viewname: Ref<string> = ref('');

/**
 * 视图标题
 */
let title: string = '';

/**
 * 视图宽度
 */
let width: Ref<number> = ref(0);

/**
 * 视图高度
 */
let height: Ref<number> = ref(0);

/**
 * 视图层级
 */
let zIndex: any = null;

/**
 * 视图样式
 */
let style: any = {};

/**
 * 暴露subject
 */
const getSubject = () => {
  return props.subject;
}

/**
 * 监听isShow
 */
watch(
  () => isShow,
  (newVal, oldVal) => {
    if (newVal !== oldVal && newVal.value == false) {
      zIndex -= 100;
      // this.$store.commit('updateZIndex', this.zIndex);
    }
  },
);

/**
 * Vue生命周期beforeMount
 */
onBeforeMount(() => {
  if (props.view) {
    viewname.value = props.view.name;
    title = props.view.title;
    isfullscreen.value = props.view.isfullscreen ? props.view.isfullscreen : false;
    if (isfullscreen.value) {
      Object.assign(style, { height: 'auto' });
    } else {
      if (!props.view.width || props.view.width === 0 || Object.is(props.view.width, '0px')) {
        let viewWidth = 600;
        if (window && window.innerWidth > 100) {
          if (window.innerWidth > 100) {
            viewWidth = window.innerWidth - 100;
          } else {
            viewWidth = window.innerWidth;
          }
        }
        width.value = viewWidth;
      } else {
        width.value = props.view.width;
      }
      if (props.view.height && !Object.is(props.view.height, '0px')) {
        Object.assign(style, { height: props.view.height + 'px' });
        height.value = props.view.height;
      } else {
        height.value = 800;
      }
    }
  }
});

/**
 * Vue生命周期mounted
 */
onMounted(() => {
  // const curmodal: any = this.$refs.curmodal;
  // const zIndex = this.$store.getters.getZIndex();
  // if (zIndex) {
  //     this.zIndex = zIndex + 100;
  //     this.$store.commit('updateZIndex', this.zIndex);
  // }
  isShow.value = true;
});

/**
 * 视图关闭
 */
const close = (result: any) => {
  if (result && Array.isArray(result) && result.length > 0) {
    if (zIndex) {
      // this.$store.commit('updateZIndex', zIndex - 100);
    }
    Object.assign(tempResult, { ret: 'OK' }, { datas: JSON.parse(JSON.stringify(result)) });
  }
  isShow.value = false;
};

/**
 * 视图数据变化
 */
const dataChange = (result: any) => {
  tempResult = { ret: '' };
  if (result && Array.isArray(result) && result.length > 0) {
    Object.assign(tempResult, { ret: 'OK' }, { datas: JSON.parse(JSON.stringify(result)) });
  }
};

/**
 * 视图数据激活
 */
const viewDatasActivated = (result: any) => {
  if (result && Array.isArray(result) && result.length > 0) {
    close(result);
  }
};

/**
 * 模态显示隐藏切换回调
 */
const onVisibleChange = ($event: any) => {
  handleShowState($event);
};

/**
 * 处理数据，向外抛值
 */
const handleShowState = ($event: any) => {
  if (props.subject && tempResult) {
    props.subject.next(tempResult);
  }
  setTimeout(() => {
    props.close();
  }, 500);
};
</script>

<template>
  <a-modal
    ref="curModal"
    class="app-modal"
    v-model:visible="isShow"
    :title="title"
    :footer="null"
    :maskClosable="true"
    :destroyOnClose="true"
    :width="width"
    :bodyStyle="style"
    @cancel="onVisibleChange($event)"
  >
    <component
      :is="viewname"
      class="viewcontainer2"
      :width="width"
      :height="height"
      :viewdata="JSON.stringify(viewdata)"
      :viewparam="JSON.stringify(viewparams)"
      :navdatas="navdatas"     
      :viewDefaultUsage="false"
      :noViewCaption="true"
      @viewdataschange="dataChange($event)"
      @viewdatasactivated="viewDatasActivated($event)"
      @close="close($event)"
      :ref="viewname"
    ></component>
  </a-modal>
</template>

<style lang="scss" scoped>
@import './app-modal.scss';
</style>
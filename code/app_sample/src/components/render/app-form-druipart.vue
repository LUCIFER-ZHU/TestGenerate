<script setup lang="ts">
import { IActionParam, IParam, RouteUtil } from '@core';
import { Subject, Subscription } from 'rxjs';
interface FormDruipartProps {
  // 关联视图
  viewName: string;
  // 刷新关系项
  tempMode: string;
  // 禁止加载
  isForbidLoad: string;
  // 传入参数项名称
  paramItem: string;
  // 视图上下文
  context: string;
  // 视图参数
  viewParams: boolean;
  // 应用实体参数名称
  parentName: number;
  // 应用实体映射实体名称
  parentDeName: boolean;
  // 标题
  title: string;
  // 刷新关系项
  refreshItems: string;
  // 表单数据
  data: string;
  // 表单订阅对象
  formState: Subject<any>;
  // 视图路由参数
  parameters: any[];
  // 名称
  name: string;
  // 是否忽略表单项值变化
  ignoreFieldValueChange: boolean;
}
interface FormDruipartEmit {
  (name: 'componentEvent', value: IActionParam): void;
}
const props = withDefaults(defineProps<FormDruipartProps>(), {});

const emit = defineEmits<FormDruipartEmit>();

let formStateEvent: undefined | Subscription = undefined;

const formDruipart: Subject<any> = new Subject<any>();

// 关秀界面上下文
let druipartContext:any = undefined;

// 关秀界面视图参数
let druipartViewParams:any = undefined;

onBeforeMount(() => {
  watch(
    () => props.data,
    (newVal: any, oldVal: any) => {
      if (props.ignoreFieldValueChange) {
        return;
      }
      if (Object.is(newVal, oldVal)) {
        return;
      }
      refreshDRUIPart();
    },
  );
  druipartInit();
});
// 关系界面初始化
const druipartInit = () => {
  if (!props.formState) {
    return;
  }
  formStateEvent = props.formState.subscribe(($event: any) => {
    // 表单加载完成
    if (Object.is($event.type, 'load')) {
      refreshDRUIPart($event.data);
    }
  });
};

// 刷新关系界面
const refreshDRUIPart = (data?: any) => {
  // const formData: any = data ? data : JSON.parse(props.data);
  // const _paramItem = formData[props.paramItem];
  // let tempContext: any = {};
  // let tempParam: any = {};

  // const _parameters: any[] = [RouteUtil.getIndexViewParam(), ...props.parameters];
  // _parameters.forEach((parameter: any) => {
  //   const { pathName, parameterName }: { pathName: string; parameterName: string } = parameter;
  //   if (formData[parameterName] && !Object.is(formData[parameterName], '')) {
  //     Object.assign(tempContext, {
  //       [parameterName]: formData[parameterName],
  //     });
  //   }
  // });
  // Object.assign(tempContext, { [props.paramItem]: _paramItem });
  // //设置顶层视图唯一标识
  // Object.assign(tempContext, props.context);
  // Object.assign(tempContext, {
  //   srfParentDeName: props.parentName,
  //   srfParentDeMapName: props.parentDeName,
  //   srfParentKey: _paramItem,
  // });
  // Object.assign(tempParam, {
  //   srfParentDeName: props.parentName,
  //   srfParentDeMapName: props.parentDeName,
  //   srfParentKey: _paramItem,
  // });
  // 设置局部上下文
  formDruipart.next({ action: 'load' });
};

const viewEvent = (action:any) => {
};

</script>

<template>
  <a-card :class="['app-form-druipart', `app-form-druipart-${name}`]" :bordered="false">
    <template #title>
      <p :class="['app-form-druipart-title']">
        <AppIconText :text="title" />
      </p>
    </template>
    <slot :context="druipartContext" :viewParams="druipartViewParams" :viewEvent="viewEvent" ></slot>
  </a-card>
</template>

<style lang="scss">
.app-form-druipart {
  height: 100%;
  width: 100%;
  .ant-card-head {
    text-align: left;
    .app-form-druipart-title {
      margin: 0px;
    }
  }
  .app-view-layout--from-druipart {
    padding: 0;
  }
}
</style>
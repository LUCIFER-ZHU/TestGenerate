<script setup lang="ts">
import { deepCopy, IActionParam, ILayoutOpts, IParam, isExistAndNotEmpty, RouteUtil, UIUtil } from '@core';
import { Subject, Subscription } from 'rxjs';
import { Ref } from 'vue';
interface FormDruipartProps {
  // 名称
  name: string;
  // 布局配置项
  layoutOpts: ILayoutOpts;
  // 刷新关系项
  tempMode?: string;
  // 禁止加载
  isForbidLoad?: boolean;
  // 传入参数项名称
  paramItem: string;
  // 表单实体代码标识
  deCodeName: string;
  // 视图上下文
  context: any;
  // 视图参数
  viewParams: any;
  // 应用实体参数名称
  parentName?: string;
  // 应用实体映射实体名称
  parentDeName?: string;
  // 标题
  title?: string;
  // 刷新关系项
  refreshItems?: string;
  // 表单数据
  data: any;
  // 视图订阅对象
  viewSubject: Subject<IActionParam>;
  //  表单订阅对象
  formSubject: Subject<any>;
  // 视图路由参数
  parameters: any[];
  // 是否显示
  visible?: boolean;
  //  关系视图标识
  viewCodeName: string;
  //  导航上下文
  localContext?: IParam;
  //  导航视图参数
  localViewParams?: IParam;
}
interface FormDruipartEmit {
  (name: 'componentEvent', value: IActionParam): void;
}
const props = withDefaults(defineProps<FormDruipartProps>(), {
  visible: true,
});

const emit = defineEmits<FormDruipartEmit>();

// 视图通讯事件
let viewSubjectEvent: undefined | Subscription = undefined;

//  表单通讯事件
let formSubjectEvent: undefined | Subscription = undefined;

// 关秀界面上下文
let druipartContext: Ref<any> = ref({});

// 关秀界面视图参数
let druipartViewParams: Ref<any> = ref({});

//  是否是刷新状态
let isRefreshStatus: boolean = false;

onBeforeMount(() => {
  watch(
    () => props.data,
    (newVal: any, oldVal: any) => {
      if (Object.is(newVal, oldVal)) {
        return;
      }
      let refreshFlag: boolean = false;
      //  存在刷新项时刷新
      if (isExistAndNotEmpty(props.refreshItems)) {
        props.refreshItems?.split(';').some((item: string) => {
          if (!Object.is(newVal[item], oldVal[item])) {
            refreshFlag = true;
          }
        })
      }
      if (refreshFlag && !isRefreshStatus) {
        refreshDRUIPart();
      }
    },
  );
  druipartInit();
});
// 关系界面初始化
const druipartInit = () => {
  if (!props.viewSubject) {
    return;
  }
  viewSubjectEvent = props.viewSubject.subscribe(($event: any) => {
    // 视图事件
    
  });
  formSubjectEvent = props.formSubject.subscribe(({ type, data }) => {
    //  表单加载完成
    if (type && Object.is(type, 'load')) {
      refreshDRUIPart(data);
    }
  })
};

// 刷新关系界面
const refreshDRUIPart = (data?: any) => {
  isRefreshStatus = true;
  const formData: any = data ? data : props.data;
  const paramItem = formData[props.paramItem];
  //  应用上下文
  const tempContext = deepCopy(props.context);
  //  视图参数
  const tempParams: any = deepCopy(props.viewParams);
  //  路由参数
  const _parameters: any[] = [RouteUtil.getIndexViewParam()];
  if (props.parameters && props.parameters.length) {
    _parameters.push(...props.parameters);
  }
  _parameters.forEach((parameter: any) => {
    const { pathName, parameterName }: { pathName: string; parameterName: string } = parameter;
    if (formData[parameterName] && !Object.is(formData[parameterName], '')) {
      Object.assign(tempContext, {
        [parameterName]: formData[parameterName],
      });
    }
  });
  Object.assign(tempContext, { [props.paramItem]: paramItem });
  if (formData && (formData[props.deCodeName] || formData.srfkey)) {
    Object.assign(tempContext, { [props.deCodeName]: formData[props.deCodeName] || formData.srfkey });
  }
  //设置顶层视图唯一标识
  Object.assign(tempContext, {
    srfParentDeName: props.parentName,
    srfParentDeMapName: props.parentDeName,
    srfParentKey: paramItem,
  });
  Object.assign(tempParams, {
    srfParentDeName: props.parentName,
    srfParentDeMapName: props.parentDeName,
    srfParentKey: paramItem,
  });
  //  导航上下文
  if (props.localContext) {
    Object.assign(tempContext, UIUtil.computedNavData(formData, tempContext, tempParams, props.localContext))
  }
  //  导航视图参数
  if (props.localViewParams) {
    Object.assign(tempParams, UIUtil.computedNavData(formData, tempContext, tempParams, props.localViewParams))
  }
  Object.assign(druipartContext.value, tempContext);
  Object.assign(druipartViewParams.value, tempParams);
  nextTick(() => {
    isRefreshStatus = false;
    // 设置局部上下文
    if (props.viewSubject) {
      props.viewSubject.next({ tag: props.viewCodeName, action: 'viewRefresh', data: [] });
    }
  });
};

const viewEvent = (action:any) => {
};

</script>

<template>
  <AppCol noRoot :visible="visible" :layoutOpts="layoutOpts" :class="['app-form-druipart', `app-form-druipart-${name}`]">
  <template #default="{slotStyle, slotClass}">
    <a-card :class="slotClass" :style="slotStyle" :bordered="false">
      <template v-if="title" #title>
        <p :class="['app-form-druipart-title']">
          <AppIconText :text="title" />
        </p>
      </template>
      <slot :context="druipartContext" :viewParams="druipartViewParams" :viewEvent="viewEvent" ></slot>
    </a-card>
  </template>
  </AppCol>
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
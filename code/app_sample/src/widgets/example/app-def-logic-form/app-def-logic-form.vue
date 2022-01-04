<script setup lang="ts">
import { Subject } from 'rxjs';
import { CtrlConfig } from './app-def-logic-form-config';
import { FormControl, IActionParam, IParam, ControlAction } from '@ibiz-core';

interface Props {
  context: IParam;
  viewParams?: IParam;
  controlAction: ControlAction;
  showBusyIndicator?: boolean;
  viewSubject: Subject<IActionParam>;
}

const props = withDefaults(defineProps<Props>(), {
  viewSubject: () => new Subject<IActionParam>(),
  showBusyIndicator: true,
})

// emit声明
interface CtrlEmit {
  (name: "ctrlEvent", value: IActionParam): void;
}

const emit = defineEmits<CtrlEmit>();

// 安装功能模块，提供状态和能力方法
const { state, handleEditorEvent } = new FormControl(CtrlConfig).moduleInstall(props);

</script>
<template>
  <a-form 
    name="AppDEFLogic" 
    class="ibiz-form"
    style=""
    :model="state.data" 
    :rules="state.rules">
<a-col
  :lg="{span: 24, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <IbizFormGroup name="group1" title="属性计算逻辑">
    <a-row>
<a-col
  :lg="{span: 6, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <IbizFormItem name="fieldx" label="X值">
<IbizSpan
  name="fieldx"
  dataType="6"
  :value="state.data.fieldx"
  :contextProp="state.context"
  :viewParamsProp="state.viewParams"/>
  </IbizFormItem>
</a-col>
<a-col
  :lg="{span: 6, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <IbizFormItem name="fieldy" label="Y值">
<IbizSpan
  name="fieldy"
  dataType="6"
  :value="state.data.fieldy"
  :contextProp="state.context"
  :viewParamsProp="state.viewParams"/>
  </IbizFormItem>
</a-col>
<a-col
  :lg="{span: 6, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <IbizFormItem name="appfield" label="XY前端计算值">
<IbizSpan
  name="appfield"
  dataType="25"
  :value="state.data.appfield"
  :contextProp="state.context"
  :viewParamsProp="state.viewParams"/>
  </IbizFormItem>
</a-col>
<a-col
  :lg="{span: 6, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <IbizFormItem name="appfield2" label="XY前端计算值2">
<IbizSpan
  name="appfield2"
  dataType="25"
  :value="state.data.appfield2"
  :contextProp="state.context"
  :viewParamsProp="state.viewParams"/>
  </IbizFormItem>
</a-col>
<a-col
  :lg="{span: 6, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <IbizFormItem name="appfield4" label="XY前端计算值4">
<IbizSpan
  name="appfield4"
  dataType="25"
  :value="state.data.appfield4"
  :contextProp="state.context"
  :viewParamsProp="state.viewParams"/>
  </IbizFormItem>
</a-col>
    </a-row>
  </IbizFormGroup>
</a-col>
      /*未找到模板[RAWITEM]*/<a-col
  :lg="{span: 24, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <IbizFormGroup name="grouppanel1" title="属性变更逻辑">
    <div class="app-form-layout-flex" style="">
<a-col
 >
  <IbizFormItem name="appfield3" label="XY前端计算值3">
<IbizInput
  name="appfield3"
  type="text"
  :value="state.data.appfield3"
  @editorEvent="handleEditorEvent"
/> 
    
  </IbizFormItem>
</a-col>
      /*未找到模板[BUTTON]*/    </div>
  </IbizFormGroup>
</a-col>
      /*未找到模板[RAWITEM]*/  </a-form>
</template>
<style lang="scss">
  .ibiz-form {
    .ant-card-head {
      padding: 0;
      margin: 0 10px;
    }
  }
</style>
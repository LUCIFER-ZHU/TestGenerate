<script setup lang="ts">
import { Subject } from 'rxjs';
import { CtrlConfig } from './ui-logic-form-config';
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
    name="UILogic" 
    class="ibiz-form"
    style=""
    :model="state.data" 
    :rules="state.rules">
      /*未找到模板[RAWITEM]*/<a-col
  :lg="{span: 24, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <IbizFormGroup name="grouppanel1" title="分组面板">
    <div class="app-form-layout-flex" style="">
<a-col
 >
  <IbizFormItem name="inputtext" label="输入提示">
<IbizInput
  name="inputtext"
  type="text"
  :value="state.data.inputtext"
  @editorEvent="handleEditorEvent"
/> 
    
  </IbizFormItem>
</a-col>
      /*未找到模板[BUTTON]*/    </div>
  </IbizFormGroup>
</a-col>
      /*未找到模板[RAWITEM]*/<a-col
  :lg="{span: 24, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <IbizFormGroup name="grouppanel2" title="分组面板">
    <a-row>
<a-col
  :lg="{span: 24, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <IbizFormGroup name="grouppanel5" title="分组面板">
    <div class="app-form-layout-flex" style="">
<a-col
 >
  <IbizFormItem name="exampleid" label="数据主键">
<IbizInput
  name="exampleid"
  type="text"
  :value="state.data.exampleid"
  @editorEvent="handleEditorEvent"
/> 
    
  </IbizFormItem>
</a-col>
      /*未找到模板[BUTTON]*/<a-col
 >
  <IbizFormItem name="fieldx" label="X值回显">
<IbizSpan
  name="fieldx"
  dataType="25"
  :value="state.data.fieldx"
  :contextProp="state.context"
  :viewParamsProp="state.viewParams"/>
  </IbizFormItem>
</a-col>
    </div>
  </IbizFormGroup>
</a-col>
<a-col
  :lg="{span: 24, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <IbizFormGroup name="grouppanel6" title="分组面板">
    <div class="app-form-layout-flex" style="">
<a-col
 >
  <IbizFormItem name="formitem" label="">
<IbizSpan
  name="formitem"
  dataType="25"
  :value="state.data.formitem"
  :contextProp="state.context"
  :viewParamsProp="state.viewParams"/>
  </IbizFormItem>
</a-col>
      /*未找到模板[BUTTON]*/<a-col
 >
  <IbizFormItem name="fieldz" label="Z值回显">
<IbizSpan
  name="fieldz"
  dataType="25"
  :value="state.data.fieldz"
  :contextProp="state.context"
  :viewParamsProp="state.viewParams"/>
  </IbizFormItem>
</a-col>
<a-col
 >
  <IbizFormItem name="currentdate" label="当前日期">
<IbizSpan
  name="currentdate"
  dataType="5"
  :value="state.data.currentdate"
  :contextProp="state.context"
  :viewParamsProp="state.viewParams"/>
  </IbizFormItem>
</a-col>
    </div>
  </IbizFormGroup>
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
  <IbizFormGroup name="grouppanel3" title="分组面板">
    <div class="app-form-layout-flex" style="">
<a-col
 >
  <IbizFormItem name="fieldupdate" label="更新值回显">
<IbizInput
  name="fieldupdate"
  type="number"
  :value="state.data.fieldupdate"
  @editorEvent="handleEditorEvent"
/> 
    
  </IbizFormItem>
</a-col>
      /*未找到模板[BUTTON]*/    </div>
  </IbizFormGroup>
</a-col>
  </a-form>
</template>
<style lang="scss">
  .ibiz-form {
    .ant-card-head {
      padding: 0;
      margin: 0 10px;
    }
  }
</style>
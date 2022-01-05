<script setup lang="ts">
import { Subject } from 'rxjs';
import { CtrlConfig } from './main-form-config';
import { FormControl, IActionParam, IParam, ControlAction, IContext } from '@core';

interface Props {
  context: IContext;
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
const { state, handleEditorEvent } = new FormControl(CtrlConfig).moduleInstall(props, emit);

</script>
<template>
  <a-form 
    name="Main" 
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
  <IbizFormGroup name="group1" title="地图示例数据基本信息">
    <a-row>
<a-col
  :lg="{span: 12, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <IbizFormItem name="mapdataname" label="名称">
<IbizInput
  name="mapdataname"
  :maxLength="200"
  type="text"
  :value="state.data.mapdataname"
  @editorEvent="handleEditorEvent"
/> 
    
  </IbizFormItem>
</a-col>
<a-col
  :lg="{span: 12, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <IbizFormItem name="mapdatacode" label="编码">
<IbizInput
  name="mapdatacode"
  type="text"
  :value="state.data.mapdatacode"
  @editorEvent="handleEditorEvent"
/> 
    
  </IbizFormItem>
</a-col>
<a-col
  :lg="{span: 12, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <IbizFormItem name="longitude" label="经度">
<IbizInput
  name="longitude"
  type="text"
  :value="state.data.longitude"
  @editorEvent="handleEditorEvent"
/> 
    
  </IbizFormItem>
</a-col>
<a-col
  :lg="{span: 12, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <IbizFormItem name="latitude" label="纬度">
<IbizInput
  name="latitude"
  type="text"
  :value="state.data.latitude"
  @editorEvent="handleEditorEvent"
/> 
    
  </IbizFormItem>
</a-col>
<a-col
  :lg="{span: 12, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <IbizFormItem name="sortvalue" label="排序值">
<IbizInput
  name="sortvalue"
  type="text"
  :value="state.data.sortvalue"
  @editorEvent="handleEditorEvent"
/> 
    
  </IbizFormItem>
</a-col>
<a-col
  :lg="{span: 12, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <IbizFormItem name="grouping" label="分组">
<IbizInput
  name="grouping"
  :maxLength="100"
  type="text"
  :value="state.data.grouping"
  @editorEvent="handleEditorEvent"
/> 
    
  </IbizFormItem>
</a-col>
<a-col
  :lg="{span: 12, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <IbizFormItem name="type" label="类型">
<IbizDropdownList
  name="type"
  :data="state.data"
  :context="state.context"
  :viewParams="state.viewParams"
  :value="state.data.type"
  @editorEvent="handleEditorEvent"
/> 
  </IbizFormItem>
</a-col>
    </a-row>
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
<script setup lang="ts">
import { Subject } from 'rxjs';
import { CtrlConfig } from './info-form-config';
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
    name="Info" 
    class="ibiz-form formitem-full-height"
    style=""
    :model="state.data" 
    :rules="state.rules">
<a-col
  :lg="{span: 24, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <IbizFormGroup name="group1" title="示例版本基本信息">
    <div class="app-form-layout-flex" style="flex-direction: column;">
<a-col
 >
  <IbizFormItem name="samplevername" label="标题">
<IbizSpan
  name="samplevername"
  dataType="25"
  :value="state.data.samplevername"
  :contextProp="state.context"
  :viewParamsProp="state.viewParams"/>
  </IbizFormItem>
</a-col>
<a-col
 >
  <IbizFormItem name="content" label="内容">
<IbizRaw
  name="content"
  :date="state.data"
  :contextProp="state.context"
  :viewParamsProp="state.viewParams"
  :value="state.data.content"
  @editorEvent="handleEditorEvent"
/> 
  </IbizFormItem>
</a-col>
    </div>
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
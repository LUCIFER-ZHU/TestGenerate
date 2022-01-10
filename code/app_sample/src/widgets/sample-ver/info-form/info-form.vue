<script setup lang="ts">
import { Subject } from 'rxjs';
import { CtrlConfig } from './info-form-config';
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
  <IbizFormGroup v-show="state.detailsModel.group1.visible" name="group1" title="示例版本基本信息">
    <div class="app-form-layout-flex" style="flex-direction: column;">
<a-col
 >
  <IbizFormItem v-show="state.detailsModel.samplevername.visible" name="samplevername" label="标题">
<IbizSpan
  name="samplevername"
  dataType="25"
  :value="state.data.samplevername"
  :context="state.context"
  :viewParams="state.viewParams"/>
  </IbizFormItem>
</a-col>
<a-col
 >
  <IbizFormItem v-show="state.detailsModel.content.visible" name="content" label="内容">
<IbizRaw
  name="content"
  :date="state.data"
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
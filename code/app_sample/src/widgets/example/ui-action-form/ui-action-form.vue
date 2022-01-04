<script setup lang="ts">
import { Subject } from 'rxjs';
import { CtrlConfig } from './ui-action-form-config';
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
    name="UIAction" 
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
  <IbizFormGroup name="group1" title="打开模态">
    <a-row>
      /*未找到模板[BUTTON]*/    </a-row>
  </IbizFormGroup>
</a-col>
      /*未找到模板[RAWITEM]*/<a-col
  :lg="{span: 24, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <IbizFormGroup name="grouppanel1" title="打开顶级视图">
    <a-row>
      /*未找到模板[BUTTON]*/    </a-row>
  </IbizFormGroup>
</a-col>
      /*未找到模板[RAWITEM]*/<a-col
  :lg="{span: 24, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <IbizFormGroup name="grouppanel2" title="打开HTML页面">
    <div class="app-form-layout-flex" style="">
<a-col
 >
  <IbizFormItem name="wd" label="搜索">
<IbizInput
  name="wd"
  placeholder="输入关键字后点击【前台界面行为（打开HTML页面）】"
  type="text"
  :value="state.data.wd"
  @editorEvent="handleEditorEvent"
/> 
    
  </IbizFormItem>
</a-col>
      /*未找到模板[BUTTON]*/    </div>
  </IbizFormGroup>
</a-col>
<a-col
  :lg="{span: 24, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <IbizFormGroup name="grouppanel3" title="界面行为（后续界面行为）">
    <a-row>
      /*未找到模板[RAWITEM]*/      /*未找到模板[BUTTON]*/    </a-row>
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
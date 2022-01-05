<script setup lang="ts">
import { Subject } from 'rxjs';
import { CtrlConfig } from './ui-action-form-config';
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
    name="UIAction" 
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
<IbizRaw 
  class="el-alert el-alert--info is-light"
  
  contentType="RAW"
  style="height: -1.0px;width: -1.0px"
  value="打开一个模态框（小视图）"/>
</a-col>
<a-col
  :lg="{span: 24, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <IbizFormGroup name="group1" title="打开模态">
    <a-row>
<a-col
  :lg="{span: 24, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <a-button 
    type="primary"
    class="ibiz-form-button"
    style="">
    前台界面行为（打开模态）
  </a-button>
</a-col>
    </a-row>
  </IbizFormGroup>
</a-col>
<a-col
  :lg="{span: 24, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
<IbizRaw 
  class="el-alert el-alert--info is-light"
  
  contentType="RAW"
  style="height: -1.0px;width: -1.0px"
  value="打开一个顶级视图"/>
</a-col>
<a-col
  :lg="{span: 24, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <IbizFormGroup name="grouppanel1" title="打开顶级视图">
    <a-row>
<a-col
  :lg="{span: 24, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <a-button 
    type="primary"
    class="ibiz-form-button"
    style="">
    前台界面行为（打开顶级视图）
  </a-button>
</a-col>
    </a-row>
  </IbizFormGroup>
</a-col>
<a-col
  :lg="{span: 24, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
<IbizRaw 
  class="el-alert el-alert--info is-light"
  
  contentType="RAW"
  style="height: -1.0px;width: -1.0px"
  value="打开一个指定的html页面，并将搜索框中的参数传过去"/>
</a-col>
<a-col
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
<a-col
 >
  <a-button 
    type="primary"
    class="ibiz-form-button"
    style="">
    前台界面行为（打开HTML页面）（百度一下）
  </a-button>
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
  <IbizFormGroup name="grouppanel3" title="界面行为（后续界面行为）">
    <a-row>
<a-col
  :lg="{span: 24, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
<IbizRaw 
  class="el-alert el-alert--info is-light"
  
  contentType="RAW"
  style="height: -1.0px;width: -1.0px"
  value="数据快速新建通常使用界面行为（后续界面行为，后台处理后打开新界面进行确认或后续操作）"/>
</a-col>
<a-col
  :lg="{span: 24, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <a-button 
    type="primary"
    class="ibiz-form-button"
    style="">
    界面行为（后续界面行为）
  </a-button>
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
<script setup lang="ts">
import { Subject } from 'rxjs';
import { CtrlConfig } from './app-def-logic-form-config';
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
  <IbizFormGroup v-show="state.detailsModel.group1.visible" name="group1" title="属性计算逻辑">
    <a-row>
<a-col
  :lg="{span: 6, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <IbizFormItem v-show="state.detailsModel.fieldx.visible" name="fieldx" label="X值">
<IbizSpan
  name="fieldx"
  dataType="6"
  :value="state.data.fieldx"
  :context="state.context"
  :viewParams="state.viewParams"/>
  </IbizFormItem>
</a-col>
<a-col
  :lg="{span: 6, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <IbizFormItem v-show="state.detailsModel.fieldy.visible" name="fieldy" label="Y值">
<IbizSpan
  name="fieldy"
  dataType="6"
  :value="state.data.fieldy"
  :context="state.context"
  :viewParams="state.viewParams"/>
  </IbizFormItem>
</a-col>
<a-col
  :lg="{span: 6, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <IbizFormItem v-show="state.detailsModel.appfield.visible" name="appfield" label="XY前端计算值">
<IbizSpan
  name="appfield"
  dataType="25"
  :value="state.data.appfield"
  :context="state.context"
  :viewParams="state.viewParams"/>
  </IbizFormItem>
</a-col>
<a-col
  :lg="{span: 6, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <IbizFormItem v-show="state.detailsModel.appfield2.visible" name="appfield2" label="XY前端计算值2">
<IbizSpan
  name="appfield2"
  dataType="25"
  :value="state.data.appfield2"
  :context="state.context"
  :viewParams="state.viewParams"/>
  </IbizFormItem>
</a-col>
<a-col
  :lg="{span: 6, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <IbizFormItem v-show="state.detailsModel.appfield4.visible" name="appfield4" label="XY前端计算值4">
<IbizSpan
  name="appfield4"
  dataType="25"
  :value="state.data.appfield4"
  :context="state.context"
  :viewParams="state.viewParams"/>
  </IbizFormItem>
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
    v-show="state.detailsModel.rawitem1.visible"
    class="el-alert el-alert--info is-light"
    
    contentType="HTML"
    style="height: -1.0px;width: -1.0px"
    :value="`<p>1.XY前端计算值：由前台处理逻辑（计算式）取值计算式：${fieldx} + ${fieldy} <br />2.XY前端计算值2：由前台处理逻辑（脚本代码）取值脚本代码：data.appfield2=data.fieldx+data.fieldy <br />3.XY前端计算值4：由前端处理逻辑（脚本代码）取值脚本代码： if(data.fieldx &amp;&amp; data.fieldz) { data.appfield4=data.fieldx + '(' +Number((data.fieldx/data.fieldz)*100).toFixed(2) + '%)'; } <br />注：表单加载后即计算完成进行显示</p>`"/>
  </a-col>
<a-col
  :lg="{span: 24, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <IbizFormGroup v-show="state.detailsModel.grouppanel1.visible" name="grouppanel1" title="属性变更逻辑">
    <div class="app-form-layout-flex" style="">
<a-col
 >
  <IbizFormItem v-show="state.detailsModel.appfield3.visible" name="appfield3" label="XY前端计算值3">
<IbizInput
  name="appfield3"
  type="text"
  :value="state.data.appfield3"
  @editorEvent="handleEditorEvent"
/> 
    
  </IbizFormItem>
</a-col>
<a-col
 >
  <a-button 
    type="primary"
    v-show="state.detailsModel.button1.visible"
    class="ibiz-form-button"
    style="">
    保存
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
  <IbizRaw 
    v-show="state.detailsModel.rawitem2.visible"
    class="el-alert el-alert--info is-light"
    
    contentType="HTML"
    style="height: -1.0px;width: -1.0px"
    :value="`<p>XY前端计算值3输入值后点击保存按钮，触发前台处理逻辑（脚本代码），重新给X值和Y值赋值 <br />脚本代码： <br />data.filedx=Math.random()*data.appfield3; <br />data.filedy=Math.random()*data.appfield3;</p>`"/>
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
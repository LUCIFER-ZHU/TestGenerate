<script setup lang="ts">
import { Subject } from 'rxjs';
import { ctrlState } from './app-def-logic-form-state';
import { FormControl, IActionParam, IParam, ControlAction, IContext } from '@core';
interface Props {
  name:string,
  context: IContext;
  viewParams?: IParam;
  controlAction: ControlAction;
  showBusyIndicator?: boolean;
  viewSubject: Subject<IActionParam>;
}

const props = withDefaults(defineProps < Props > (), {
  viewSubject: () => new Subject < IActionParam > (),
  showBusyIndicator: true,
})

// emit声明
interface CtrlEmit {
  (name: "ctrlEvent", value: IActionParam): void;
}

const emit = defineEmits <CtrlEmit> ();

// 安装功能模块，提供状态和能力方法
const { name, state, load, loadDraft, save, remove, refresh, onEditorEvent, onComponentEvent, getData } = new FormControl(ctrlState, props, emit).moduleInstall();

// 暴露内部状态及能力
defineExpose({ name, state, load, loadDraft, save, remove, refresh, getData });
</script>
<template>
  <a-form name="AppDEFLogic" class="app-form" style="" :model="state.data" :rules="state.rules">
<a-col
  :lg="{span: 24, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormGroup 
    v-show="state.detailsModel.group1.visible" 
    name="group1" 
    title="属性计算逻辑"
    style=""
    :infoGroupMode="false"
    :titleBarCloseMode="0"
    :showCaption="true"
    :uIActionGroup="state.detailsModel.group1.uIActionGroup"
    @componentEvent="onComponentEvent">
    <a-row>
<a-col
  :lg="{span: 6, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormItem 
    v-show="state.detailsModel.fieldx.visible"
    name="fieldx"
    :rules="state.rules.fieldx"
    :labelWidth="130"
    :required="state.detailsModel.fieldx.required"
    label="X值"
    style="">
      <div class="form-editor-container" style="">
<AppSpan
  name="fieldx"
  :disabled="state.detailsModel.fieldx.disabled"
  dataType="6"
  :value="state.data.fieldx"
  :context="state.context"
  :viewParams="state.viewParams"/>
      </div>
  </AppFormItem>
</a-col>
<a-col
  :lg="{span: 6, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormItem 
    v-show="state.detailsModel.fieldy.visible"
    name="fieldy"
    :rules="state.rules.fieldy"
    :labelWidth="130"
    :required="state.detailsModel.fieldy.required"
    label="Y值"
    style="">
      <div class="form-editor-container" style="">
<AppSpan
  name="fieldy"
  :disabled="state.detailsModel.fieldy.disabled"
  dataType="6"
  :value="state.data.fieldy"
  :context="state.context"
  :viewParams="state.viewParams"/>
      </div>
  </AppFormItem>
</a-col>
<a-col
  :lg="{span: 6, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormItem 
    v-show="state.detailsModel.appfield.visible"
    name="appfield"
    :rules="state.rules.appfield"
    :labelWidth="130"
    :required="state.detailsModel.appfield.required"
    label="XY前端计算值"
    style="">
      <div class="form-editor-container" style="">
<AppSpan
  name="appfield"
  :disabled="state.detailsModel.appfield.disabled"
  dataType="25"
  :value="state.data.appfield"
  :context="state.context"
  :viewParams="state.viewParams"/>
      </div>
  </AppFormItem>
</a-col>
<a-col
  :lg="{span: 6, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormItem 
    v-show="state.detailsModel.appfield2.visible"
    name="appfield2"
    :rules="state.rules.appfield2"
    :labelWidth="130"
    :required="state.detailsModel.appfield2.required"
    label="XY前端计算值2"
    style="">
      <div class="form-editor-container" style="">
<AppSpan
  name="appfield2"
  :disabled="state.detailsModel.appfield2.disabled"
  dataType="25"
  :value="state.data.appfield2"
  :context="state.context"
  :viewParams="state.viewParams"/>
      </div>
  </AppFormItem>
</a-col>
<a-col
  :lg="{span: 6, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormItem 
    v-show="state.detailsModel.appfield4.visible"
    name="appfield4"
    :rules="state.rules.appfield4"
    :labelWidth="130"
    :required="state.detailsModel.appfield4.required"
    label="XY前端计算值4"
    style="">
      <div class="form-editor-container" style="">
<AppSpan
  name="appfield4"
  :disabled="state.detailsModel.appfield4.disabled"
  dataType="25"
  :value="state.data.appfield4"
  :context="state.context"
  :viewParams="state.viewParams"/>
      </div>
  </AppFormItem>
</a-col>
    </a-row>
  </AppFormGroup>
</a-col>
<a-col
  :lg="{span: 24, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppRaw 
    name="rawitem1"
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
  <AppFormGroup 
    v-show="state.detailsModel.grouppanel1.visible" 
    name="grouppanel1" 
    title="属性变更逻辑"
    style=""
    :infoGroupMode="false"
    :titleBarCloseMode="0"
    :showCaption="true"
    :uIActionGroup="state.detailsModel.grouppanel1.uIActionGroup"
    @componentEvent="onComponentEvent">
    <div class="app-form-layout-flex" style="">
<a-col
 >
  <AppFormItem 
    v-show="state.detailsModel.appfield3.visible"
    name="appfield3"
    :rules="state.rules.appfield3"
    :labelWidth="130"
    :required="state.detailsModel.appfield3.required"
    label="XY前端计算值3"
    style="">
      <div class="form-editor-container" style="">
<AppInput
  name="appfield3"
  :disabled="state.detailsModel.appfield3.disabled"
  type="text"
  :value="state.data.appfield3"
  @editorEvent="onEditorEvent"
/> 
      </div>
  </AppFormItem>
</a-col>
<a-col
 >
  <a-button 
    type="primary"
    v-show="state.detailsModel.button1.visible"
    class="app-form-button"
    style="">
      <span >保存</span>
  </a-button>
</a-col>
    </div>
  </AppFormGroup>
</a-col>
<a-col
  :lg="{span: 24, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppRaw 
    name="rawitem2"
    v-show="state.detailsModel.rawitem2.visible"
    class="el-alert el-alert--info is-light"
    contentType="HTML"
    style="height: -1.0px;width: -1.0px"
    :value="`<p>XY前端计算值3输入值后点击保存按钮，触发前台处理逻辑（脚本代码），重新给X值和Y值赋值 <br />脚本代码： <br />data.filedx=Math.random()*data.appfield3; <br />data.filedy=Math.random()*data.appfield3;</p>`"/>
</a-col>
  </a-form>
</template>
<style lang="scss">
  .app-form {
    .ant-card-head {
      padding: 0;
      margin: 0 10px;
    }
  }
</style>
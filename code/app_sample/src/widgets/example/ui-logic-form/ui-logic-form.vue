<script setup lang="ts">
import { Subject } from 'rxjs';
import { ctrlState } from './ui-logic-form-state';
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
  <a-form name="UILogic" class="app-form" style="" :model="state.data" :rules="state.rules">
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
    contentType="RAW"
    style="height: -1.0px;width: -1.0px"
    value="表单项输入数据后点击【显示对话框】按钮"/>
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
    title="分组面板"
    style=""
    :infoGroupMode="false"
    :titleBarCloseMode="0"
    :showCaption="false"
    :uIActionGroup="state.detailsModel.grouppanel1.uIActionGroup"
    @componentEvent="onComponentEvent">
    <div class="app-form-layout-flex" style="">
<a-col
 >
  <AppFormItem 
    v-show="state.detailsModel.inputtext.visible"
    name="inputtext"
    :rules="state.rules.inputtext"
    :labelWidth="130"
    :required="state.detailsModel.inputtext.required"
    label="输入提示"
    style="">
      <div class="form-editor-container" style="">
<AppInput
  name="inputtext"
  :disabled="state.detailsModel.inputtext.disabled"
  type="text"
  :value="state.data.inputtext"
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
      <span >显示对话框</span>
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
    :value="`<p>1.通过【数据主键】打开视图，在视图中编辑X值后点击视图中的【保存并关闭】按钮，刚才编辑的X值回显到【X值回显】 <br />2.点击【动态设置上下文并获取数据】，通过数据主键获取数据回显到【Z值回显】、设置当前时间为当前日期</p>`"/>
</a-col>
<a-col
  :lg="{span: 24, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormGroup 
    v-show="state.detailsModel.grouppanel2.visible" 
    name="grouppanel2" 
    title="分组面板"
    style=""
    :infoGroupMode="false"
    :titleBarCloseMode="0"
    :showCaption="false"
    :uIActionGroup="state.detailsModel.grouppanel2.uIActionGroup"
    @componentEvent="onComponentEvent">
    <a-row>
<a-col
  :lg="{span: 24, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormGroup 
    v-show="state.detailsModel.grouppanel5.visible" 
    name="grouppanel5" 
    title="分组面板"
    style=""
    :infoGroupMode="false"
    :titleBarCloseMode="0"
    :showCaption="false"
    :uIActionGroup="state.detailsModel.grouppanel5.uIActionGroup"
    @componentEvent="onComponentEvent">
    <div class="app-form-layout-flex" style="">
<a-col
 >
  <AppFormItem 
    v-show="state.detailsModel.exampleid.visible"
    name="exampleid"
    :rules="state.rules.exampleid"
    :labelWidth="130"
    :required="state.detailsModel.exampleid.required"
    label="数据主键"
    style="">
      <div class="form-editor-container" style="">
<AppInput
  name="exampleid"
  :disabled="state.detailsModel.exampleid.disabled"
  type="text"
  :value="state.data.exampleid"
  @editorEvent="onEditorEvent"
/> 
      </div>
  </AppFormItem>
</a-col>
<a-col
 >
  <a-button 
    type="primary"
    v-show="state.detailsModel.button2.visible"
    class="app-form-button"
    style="">
      <span >调用界面行为打开视图</span>
  </a-button>
</a-col>
<a-col
 >
  <AppFormItem 
    v-show="state.detailsModel.fieldx.visible"
    name="fieldx"
    :rules="state.rules.fieldx"
    :labelWidth="130"
    :required="state.detailsModel.fieldx.required"
    label="X值回显"
    style="">
      <div class="form-editor-container" style="">
<AppSpan
  name="fieldx"
  :disabled="state.detailsModel.fieldx.disabled"
  dataType="25"
  :value="state.data.fieldx"
  :context="state.context"
  :viewParams="state.viewParams"/>
      </div>
  </AppFormItem>
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
  <AppFormGroup 
    v-show="state.detailsModel.grouppanel6.visible" 
    name="grouppanel6" 
    title="分组面板"
    style=""
    :infoGroupMode="false"
    :titleBarCloseMode="0"
    :showCaption="false"
    :uIActionGroup="state.detailsModel.grouppanel6.uIActionGroup"
    @componentEvent="onComponentEvent">
    <div class="app-form-layout-flex" style="">
<a-col
 >
  <AppFormItem 
    v-show="state.detailsModel.formitem.visible"
    name="formitem"
    :rules="state.rules.formitem"
    :labelWidth="130"
    :required="state.detailsModel.formitem.required"
    label=""
    style="">
      <div class="form-editor-container" style="">
<AppSpan
  name="formitem"
  :disabled="state.detailsModel.formitem.disabled"
  dataType="25"
  :value="state.data.formitem"
  :context="state.context"
  :viewParams="state.viewParams"/>
      </div>
  </AppFormItem>
</a-col>
<a-col
 >
  <a-button 
    type="primary"
    v-show="state.detailsModel.button4.visible"
    class="app-form-button"
    style="">
      <span >动态设置上下文并获取数据</span>
  </a-button>
</a-col>
<a-col
 >
  <AppFormItem 
    v-show="state.detailsModel.fieldz.visible"
    name="fieldz"
    :rules="state.rules.fieldz"
    :labelWidth="130"
    :required="state.detailsModel.fieldz.required"
    label="Z值回显"
    style="">
      <div class="form-editor-container" style="">
<AppSpan
  name="fieldz"
  :disabled="state.detailsModel.fieldz.disabled"
  dataType="25"
  :value="state.data.fieldz"
  :context="state.context"
  :viewParams="state.viewParams"/>
      </div>
  </AppFormItem>
</a-col>
<a-col
 >
  <AppFormItem 
    v-show="state.detailsModel.currentdate.visible"
    name="currentdate"
    :rules="state.rules.currentdate"
    :labelWidth="130"
    :required="state.detailsModel.currentdate.required"
    label="当前日期"
    style="">
      <div class="form-editor-container" style="">
<AppSpan
  name="currentdate"
  :disabled="state.detailsModel.currentdate.disabled"
  dataType="5"
  valueFormat="YYYY-MM-DD"
  :value="state.data.currentdate"
  :context="state.context"
  :viewParams="state.viewParams"/>
      </div>
  </AppFormItem>
</a-col>
    </div>
  </AppFormGroup>
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
    name="rawitem3"
    v-show="state.detailsModel.rawitem3.visible"
    class="el-alert el-alert--info is-light"
    contentType="RAW"
    style="height: -1.0px;width: -1.0px"
    value="通过【数据主键】和【更新值回显】更新指定数据的值属性，更新完成后打开视图显示，视图中对属性【更新值】修改后将回显【更新值回显】"/>
</a-col>
<a-col
  :lg="{span: 24, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormGroup 
    v-show="state.detailsModel.grouppanel3.visible" 
    name="grouppanel3" 
    title="分组面板"
    style=""
    :infoGroupMode="false"
    :titleBarCloseMode="0"
    :showCaption="false"
    :uIActionGroup="state.detailsModel.grouppanel3.uIActionGroup"
    @componentEvent="onComponentEvent">
    <div class="app-form-layout-flex" style="">
<a-col
 >
  <AppFormItem 
    v-show="state.detailsModel.fieldupdate.visible"
    name="fieldupdate"
    :rules="state.rules.fieldupdate"
    :labelWidth="130"
    :required="state.detailsModel.fieldupdate.required"
    label="更新值回显"
    style="">
      <div class="form-editor-container" style="">
<AppInput
  name="fieldupdate"
  :disabled="state.detailsModel.fieldupdate.disabled"
  type="number"
  :value="state.data.fieldupdate"
  @editorEvent="onEditorEvent"
/> 
      </div>
  </AppFormItem>
</a-col>
<a-col
 >
  <a-button 
    type="primary"
    v-show="state.detailsModel.button3.visible"
    class="app-form-button"
    style="">
      <span >调用后台更新值</span>
  </a-button>
</a-col>
    </div>
  </AppFormGroup>
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
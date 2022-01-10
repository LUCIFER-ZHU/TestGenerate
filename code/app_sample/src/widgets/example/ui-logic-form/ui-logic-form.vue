<script setup lang="ts">
import { Subject } from 'rxjs';
import { CtrlConfig } from './ui-logic-form-config';
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
    name="UILogic" 
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
  <IbizFormGroup v-show="state.detailsModel.grouppanel1.visible" name="grouppanel1" title="分组面板">
    <div class="app-form-layout-flex" style="">
<a-col
 >
  <IbizFormItem v-show="state.detailsModel.inputtext.visible" name="inputtext" label="输入提示">
<IbizInput
  name="inputtext"
  type="text"
  :value="state.data.inputtext"
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
    显示对话框
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
    :value="`<p>1.通过【数据主键】打开视图，在视图中编辑X值后点击视图中的【保存并关闭】按钮，刚才编辑的X值回显到【X值回显】 <br />2.点击【动态设置上下文并获取数据】，通过数据主键获取数据回显到【Z值回显】、设置当前时间为当前日期</p>`"/>
  </a-col>
<a-col
  :lg="{span: 24, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <IbizFormGroup v-show="state.detailsModel.grouppanel2.visible" name="grouppanel2" title="分组面板">
    <a-row>
<a-col
  :lg="{span: 24, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <IbizFormGroup v-show="state.detailsModel.grouppanel5.visible" name="grouppanel5" title="分组面板">
    <div class="app-form-layout-flex" style="">
<a-col
 >
  <IbizFormItem v-show="state.detailsModel.exampleid.visible" name="exampleid" label="数据主键">
<IbizInput
  name="exampleid"
  type="text"
  :value="state.data.exampleid"
  @editorEvent="handleEditorEvent"
/> 
    
  </IbizFormItem>
</a-col>
<a-col
 >
  <a-button 
    type="primary"
    v-show="state.detailsModel.button2.visible"
    class="ibiz-form-button"
    style="">
    调用界面行为打开视图
  </a-button>
</a-col>
<a-col
 >
  <IbizFormItem v-show="state.detailsModel.fieldx.visible" name="fieldx" label="X值回显">
<IbizSpan
  name="fieldx"
  dataType="25"
  :value="state.data.fieldx"
  :context="state.context"
  :viewParams="state.viewParams"/>
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
  <IbizFormGroup v-show="state.detailsModel.grouppanel6.visible" name="grouppanel6" title="分组面板">
    <div class="app-form-layout-flex" style="">
<a-col
 >
  <IbizFormItem v-show="state.detailsModel.formitem.visible" name="formitem" label="">
<IbizSpan
  name="formitem"
  dataType="25"
  :value="state.data.formitem"
  :context="state.context"
  :viewParams="state.viewParams"/>
  </IbizFormItem>
</a-col>
<a-col
 >
  <a-button 
    type="primary"
    v-show="state.detailsModel.button4.visible"
    class="ibiz-form-button"
    style="">
    动态设置上下文并获取数据
  </a-button>
</a-col>
<a-col
 >
  <IbizFormItem v-show="state.detailsModel.fieldz.visible" name="fieldz" label="Z值回显">
<IbizSpan
  name="fieldz"
  dataType="25"
  :value="state.data.fieldz"
  :context="state.context"
  :viewParams="state.viewParams"/>
  </IbizFormItem>
</a-col>
<a-col
 >
  <IbizFormItem v-show="state.detailsModel.currentdate.visible" name="currentdate" label="当前日期">
<IbizSpan
  name="currentdate"
  dataType="5"
  :value="state.data.currentdate"
  :context="state.context"
  :viewParams="state.viewParams"/>
  </IbizFormItem>
</a-col>
    </div>
  </IbizFormGroup>
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
  <IbizFormGroup v-show="state.detailsModel.grouppanel3.visible" name="grouppanel3" title="分组面板">
    <div class="app-form-layout-flex" style="">
<a-col
 >
  <IbizFormItem v-show="state.detailsModel.fieldupdate.visible" name="fieldupdate" label="更新值回显">
<IbizInput
  name="fieldupdate"
  type="number"
  :value="state.data.fieldupdate"
  @editorEvent="handleEditorEvent"
/> 
    
  </IbizFormItem>
</a-col>
<a-col
 >
  <a-button 
    type="primary"
    v-show="state.detailsModel.button3.visible"
    class="ibiz-form-button"
    style="">
    调用后台更新值
  </a-button>
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
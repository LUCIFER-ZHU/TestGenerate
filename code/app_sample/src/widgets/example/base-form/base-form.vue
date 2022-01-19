<script setup lang="ts">
import { Subject } from 'rxjs';
import { ctrlState } from './base-form-state';
import { FormControl, IActionParam, IParam, ControlAction, IContext } from '@core';
import Example2GridView9 from '@views/sample/example2-grid-view9';
interface Props {
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
const { state, onEditorEvent, onComponentEvent } = new FormControl(ctrlState, props, emit).moduleInstall();

// 暴露内部状态及能力
defineExpose({ state, name: 'form2' });
</script>
<template>
  <a-form name="Base"
    class="app-form"
    style="" :model="state.data" :rules="state.rules">
    <a-tabs class="app-form-page">
<a-tab-pane v-show="state.detailsModel.formpage1.visible" key="formpage1" tab="表单分页">
  <a-row>
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
    value="显示标题的表单分组"/>
  </a-col>
<a-col
  :lg="{span: 24, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormGroup 
    v-show="state.detailsModel.group1.visible" 
    name="group1" 
    title="表单分组"
    titleStyle=""
    :infoGroupMode="false"
    :titleBarCloseMode="0"
    :showCaption="true"
    :uIActionGroup="state.detailsModel.group1.uIActionGroup"
    @componentEvent="onComponentEvent">
    <a-row>
<a-col
  :lg="{span: 24, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormItem v-show="state.detailsModel.formitem1.visible" name="formitem1" :required="state.detailsModel.formitem1.required" label="表单项">
<appInput
  name="formitem1"
  :disabled="state.detailsModel.formitem1.disabled"
  type="text"
  :value="state.data.formitem1"
  @editorEvent="onEditorEvent"
/> 
  </AppFormItem>
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
    title="表单分组（子分组）"
    titleStyle=""
    :infoGroupMode="false"
    :titleBarCloseMode="0"
    :showCaption="true"
    :uIActionGroup="state.detailsModel.grouppanel3.uIActionGroup"
    @componentEvent="onComponentEvent">
    <a-row>
<a-col
  :lg="{span: 24, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormItem v-show="state.detailsModel.formitem3.visible" name="formitem3" :required="state.detailsModel.formitem3.required" label="表单项">
<appInput
  name="formitem3"
  :disabled="state.detailsModel.formitem3.disabled"
  type="text"
  :value="state.data.formitem3"
  @editorEvent="onEditorEvent"
/> 
  </AppFormItem>
</a-col>
<a-col
  :lg="{span: 24, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormItem v-show="state.detailsModel.formitemex1.visible" name="formitemex1" :required="state.detailsModel.formitemex1.required" label="复合表单项">
<appDatePicker
  name="formitemex1"
  :disabled="state.detailsModel.formitemex1.disabled"
  dateFormat="YYYY-MM-DD HH:mm:ss"
  dateType="dateTime"
  :value="state.data.formitemex1"
  @editorEvent="onEditorEvent"
/> 
  </AppFormItem>
</a-col>
    </a-row>
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
    name="rawitem2"
    v-show="state.detailsModel.rawitem2.visible"
    class="el-alert el-alert--info is-light"
    
    contentType="RAW"
    style="height: -1.0px;width: -1.0px"
    value="无标题表单分组"/>
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
    title="无标题"
    titleStyle=""
    :infoGroupMode="false"
    :titleBarCloseMode="0"
    :showCaption="false"
    :uIActionGroup="state.detailsModel.grouppanel1.uIActionGroup"
    @componentEvent="onComponentEvent">
    <a-row>
<a-col
  :lg="{span: 24, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormItem v-show="state.detailsModel.formitem.visible" name="formitem" :required="state.detailsModel.formitem.required" label="表单项">
<appInput
  name="formitem"
  :disabled="state.detailsModel.formitem.disabled"
  type="text"
  :value="state.data.formitem"
  @editorEvent="onEditorEvent"
/> 
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
    name="rawitem7"
    v-show="state.detailsModel.rawitem7.visible"
    class="el-alert el-alert--info is-light"
    
    contentType="RAW"
    style="height: -1.0px;width: -1.0px"
    value="按钮"/>
  </a-col>
<a-col
  :lg="{span: 24, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <a-button 
    type="primary"
    v-show="state.detailsModel.button1.visible"
    class="app-form-button"
    style="">
    触发界面行为
  </a-button>
</a-col>
<a-col
  :lg="{span: 24, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppRaw 
    name="rawitem5"
    v-show="state.detailsModel.rawitem5.visible"
    class="el-alert el-alert--info is-light"
    
    contentType="RAW"
    style="height: -1.0px;width: -1.0px"
    value="关系界面"/>
  </a-col>
<a-col
  :lg="{span: 24, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormDruipart v-show="state.detailsModel.druipart1.visible" name="druipart1" title="示例明细" v-slot="druipartParams">
    <Example2GridView9
      :class="['app-view-layout--from-druipart']"
      :context="druipartParams.context"
      :viewParams="druipartParams.viewParams"
      :viewDefaultUsage="false"
      :noViewCaption="true"
      @viewEvent="druipartParams.viewEvent"
    >
    </Example2GridView9>
  </AppFormDruipart>
</a-col>
<a-col
  :lg="{span: 24, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppRaw 
    name="rawitem6"
    v-show="state.detailsModel.rawitem6.visible"
    class="el-alert el-alert--info is-light"
    
    contentType="RAW"
    style="height: -1.0px;width: -1.0px"
    value="嵌入页面"/>
  </a-col>
<a-col
  :lg="{span: 24, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <div v-show="state.detailsModel.iframe1.visible" class="app-form-iframe" style="height: 200.0px;">
    <iframe src="https://www.yuque.com/ibiz" style="height: 100%;width: 100%;border: 0"></iframe>
  </div>
</a-col>
<a-col
  :lg="{span: 24, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppRaw 
    name="rawitem11"
    v-show="state.detailsModel.rawitem11.visible"
    class="el-alert el-alert--info is-light"
    
    contentType="RAW"
    style="height: -1.0px;width: -1.0px"
    value="形式为图片的直接内容"/>
  </a-col>
<a-col
  :lg="{span: 24, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppRaw 
    name="rawitem12"
    v-show="state.detailsModel.rawitem12.visible"
    
    
    contentType="HTML"
    style="height: -1.0px;width: -1.0px"
    :value="`<p>&lt;img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIgAAAAyCAYAAACH65NBAAAEuUlEQVR4nO2by08TURTGr8Yt7c6FlrVAWaoR3Gl8rmABshFJ8LHwFRtNQCVUQSQRa0A08UECutGSgDtAwaUYH7tWdGuLiUvLH6DzDWkzlM6ZcTp35nZ6fkkToO3MZe4353zn3Dtbtkfq/wqGMWGr3wNg1IYFwpCwQBgSFghDwgIx4ezpTrE0PyN+Z76J2eSkOHbkoN9D8oUtKlYxmJxQTY2j76bSKyKXWxOZ7C/tteroGGOJIXGirWXT3/tuDYunz184OmaloqRAcNe6wR9NKHMLi2Ik8di2WJqb9uoRw4zdTYccC68SCXSKCYdqREdbq/iy/E4M9PfY+s5xi1SyXxNQNRFogRhB2hpN3Cn7OKGws9RXqVSNQACiiZXZTKW/k+9/WP7k5pCUp6oEAgbiPXrqMePV9Kz48PFzyfeeTby0FFDQqDqB1EZ26kaUoqv7gng9/abwe1ariFDB3IzflT085ai4Kqa1vYsM85j8c5rfOHr4gOlnRh48EvcSj8oaY7Wwze8BuA3Eg9fX5UURiewo+Zn1CGIuELM+zJ9cTk8zdj/vhGcTL/TyXBUCJ5A8P7OrpgJJEz4C4qFK4lICsVtC2wH+RyUjHEgPAhNaayIO8LOKGl3l4qtABuO9ut/AmodbNEbrxOTzh7oZNeN1cta18wUd31IM8vaZ7pP6z5hUu1BtcDsgRaiU41XHtwhyrruz8LNZ38Ft0t9+aNXLuCfnckJubU3zRyt+D2MDvkWQvInERenzoL+AqNHa1ikleqBnUltrntLCoZCINuyyPE5f/7By0c03gaAZFY3W63eMFxcFxvV2vEdcjt1w/diXYtfJ96cmxi0FgtSHLq5qeC4QTFS0oU7fr+F1OYe1GCBDJGZgbwnVtAOIQKp2aT31IJigz8uLYnZ6SntNennqDWO4Fjvv2blKbTwyAv9lFYH8xLMIgotlXG5HBHEC1kWs+hioiqjO5tUr58Wr5BupG3+wamy1vQCmGalWZTwRSLE4gNO1EORpO9812zaYB1FE1p0LgY5q56eAOZdlmt1EeopBwwrm0AgWy2T7D0x+lohSzU17pJwX4phJTpFbCtbFcUp5cQDpAhm81bvhYq33IrxZSaVSEdVpdYodcQCIo1L2lUgVCBa+jA4e4kBYDSIQxej9IUtxoIKqFHEAqQLpMHiAvDi8Cqu4m5v3yUkjxUAUiBxWSwbYdKRir4NCqkk17gBHnV9KHDCw/3PR0H2lJh4dzcaGOn2thwKCdYuBeK+lOBA1UqkVS9GW8zyPDKQKxLgfo9iUwgOMaZVNOBz+L4FAUPmGVzm4dSfj/7DqdQAICP0fK9AXgUdRBc8aZflNNQjH6EMsLczoHuVSrNerIRRAdePWkv+xo+4+kol1G5WQGkHm374vmFSE/OKw75dhM0t3TkA6cxNsa1QJqRHkiclzrOgDQBx+GDacd25hybXjUau4QUCqQOA74NyNILwjx3otDoiy6/TFiqsi/EZ6qx1Pw8/NL4mO9haRyfzyfIJg+hAx4DnspJUcEeIhss2fV78bWg5KPhfDqEMgd7Uz7sECYUhYIAwJC4QhYYEwJCwQhoQFwpCwQBgSFghDwgJhSFggDAkLhCH5Bxhw3GRo/OTpAAAAAElFTkSuQmCC' /&gt;</p>`"/>
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
    value="分页部件"/>
  </a-col>
<a-col
  :lg="{span: 24, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <a-tabs class="app-form-page">
  </a-tabs>
</a-col>
  </a-row>
</a-tab-pane>
<a-tab-pane v-show="state.detailsModel.formpage2.visible" key="formpage2" tab="表单分页2">
  <a-row>
<a-col
  :lg="{span: 24, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormGroup 
    v-show="state.detailsModel.grouppanel2.visible" 
    name="grouppanel2" 
    title="分组"
    titleStyle=""
    :infoGroupMode="false"
    :titleBarCloseMode="0"
    :showCaption="true"
    :uIActionGroup="state.detailsModel.grouppanel2.uIActionGroup"
    @componentEvent="onComponentEvent">
    <a-row>
<a-col
  :lg="{span: 24, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormItem v-show="state.detailsModel.formitem2.visible" name="formitem2" :required="state.detailsModel.formitem2.required" label="表单项">
<appInput
  name="formitem2"
  :disabled="state.detailsModel.formitem2.disabled"
  type="text"
  :value="state.data.formitem2"
  @editorEvent="onEditorEvent"
/> 
  </AppFormItem>
</a-col>
    </a-row>
  </AppFormGroup>
</a-col>
  </a-row>
</a-tab-pane>
    </a-tabs>
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
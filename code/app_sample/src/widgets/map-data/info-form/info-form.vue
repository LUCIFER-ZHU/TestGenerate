<script setup lang="ts">
import { Subject } from 'rxjs';
import { ctrlState } from './info-form-state';
import { FormControl, IActionParam, IParam, ControlAction, IContext } from '@core';
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
defineExpose({ state, name: 'form' });
</script>
<template>
  <a-form name="Info" class="app-form app-info-form" style="" :model="state.data" :rules="state.rules">
<a-col
  :lg="{span: 24, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormGroup 
    v-show="state.detailsModel.group1.visible" 
    name="group1" 
    title="地图示例数据基本信息"
    style=""
    :infoGroupMode="true"
    :titleBarCloseMode="0"
    :showCaption="false"
    :uIActionGroup="state.detailsModel.group1.uIActionGroup"
    @componentEvent="onComponentEvent">
    <a-row>
<a-col
  :lg="{span: 12, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormItem 
    v-show="state.detailsModel.mapdataname.visible"
    name="mapdataname"
    :rules="state.rules.mapdataname"
    :labelWidth="130"
    :required="state.detailsModel.mapdataname.required"
    label="名称"
    style="">
      <div class="form-editor-container" style="">
<AppSpan
  name="mapdataname"
  :disabled="state.detailsModel.mapdataname.disabled"
  dataType="25"
  :value="state.data.mapdataname"
  :context="state.context"
  :viewParams="state.viewParams"/>
      </div>
  </AppFormItem>
</a-col>
<a-col
  :lg="{span: 12, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormItem 
    v-show="state.detailsModel.mapdatacode.visible"
    name="mapdatacode"
    :rules="state.rules.mapdatacode"
    :labelWidth="130"
    :required="state.detailsModel.mapdatacode.required"
    label="编码"
    style="">
      <div class="form-editor-container" style="">
<AppSpan
  name="mapdatacode"
  :disabled="state.detailsModel.mapdatacode.disabled"
  dataType="9"
  :value="state.data.mapdatacode"
  :context="state.context"
  :viewParams="state.viewParams"/>
      </div>
  </AppFormItem>
</a-col>
<a-col
  :lg="{span: 12, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormItem 
    v-show="state.detailsModel.longitude.visible"
    name="longitude"
    :rules="state.rules.longitude"
    :labelWidth="130"
    :required="state.detailsModel.longitude.required"
    label="经度"
    style="">
      <div class="form-editor-container" style="">
<AppSpan
  name="longitude"
  :disabled="state.detailsModel.longitude.disabled"
  dataType="6"
  :precision="6"
  :value="state.data.longitude"
  :context="state.context"
  :viewParams="state.viewParams"/>
      </div>
  </AppFormItem>
</a-col>
<a-col
  :lg="{span: 12, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormItem 
    v-show="state.detailsModel.latitude.visible"
    name="latitude"
    :rules="state.rules.latitude"
    :labelWidth="130"
    :required="state.detailsModel.latitude.required"
    label="纬度"
    style="">
      <div class="form-editor-container" style="">
<AppSpan
  name="latitude"
  :disabled="state.detailsModel.latitude.disabled"
  dataType="6"
  :precision="6"
  :value="state.data.latitude"
  :context="state.context"
  :viewParams="state.viewParams"/>
      </div>
  </AppFormItem>
</a-col>
<a-col
  :lg="{span: 12, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormItem 
    v-show="state.detailsModel.sortvalue.visible"
    name="sortvalue"
    :rules="state.rules.sortvalue"
    :labelWidth="130"
    :required="state.detailsModel.sortvalue.required"
    label="排序值"
    style="">
      <div class="form-editor-container" style="">
<AppSpan
  name="sortvalue"
  :disabled="state.detailsModel.sortvalue.disabled"
  dataType="9"
  :value="state.data.sortvalue"
  :context="state.context"
  :viewParams="state.viewParams"/>
      </div>
  </AppFormItem>
</a-col>
<a-col
  :lg="{span: 12, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormItem 
    v-show="state.detailsModel.grouping.visible"
    name="grouping"
    :rules="state.rules.grouping"
    :labelWidth="130"
    :required="state.detailsModel.grouping.required"
    label="分组"
    style="">
      <div class="form-editor-container" style="">
<AppSpan
  name="grouping"
  :disabled="state.detailsModel.grouping.disabled"
  dataType="25"
  :value="state.data.grouping"
  :context="state.context"
  :viewParams="state.viewParams"/>
      </div>
  </AppFormItem>
</a-col>
<a-col
  :lg="{span: 12, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormItem 
    v-show="state.detailsModel.type.visible"
    name="type"
    :rules="state.rules.type"
    :labelWidth="130"
    :required="state.detailsModel.type.required"
    label="类型"
    style="">
      <div class="form-editor-container" style="">
<AppSpan
  name="type"
  :disabled="state.detailsModel.type.disabled"
  codeListTag="Sample__MapDataType"
  codeListType="STATIC"
  dataType="25"
  :value="state.data.type"
  :context="state.context"
  :viewParams="state.viewParams"/>
      </div>
  </AppFormItem>
</a-col>
    </a-row>
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
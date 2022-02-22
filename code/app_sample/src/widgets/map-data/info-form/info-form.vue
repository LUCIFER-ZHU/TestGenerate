<script setup lang="ts">
import { Subject } from 'rxjs';
import { ctrlState } from './info-form-state';
import { FormControl, IActionParam, IParam, ControlAction, IContext } from '@core';
interface Props {
  name:string,
  parent: IParam;
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
const { name, state, load, loadDraft, save, remove, refresh, onEditorEvent, onComponentEvent, getData, xDataCtrl } = new FormControl(ctrlState, props, emit).moduleInstall();

// 暴露内部状态及能力
defineExpose({ name, state, load, loadDraft, save, remove, refresh, getData });
</script>
<template>
  <a-form
    name="Info"
    class="app-form app-info-form"
    style=""
    :model="state.data"
    :rules="state.rules"
    ref="xDataCtrl"
  >
    <AppFormGroup 
      name="group1"
      title="地图示例数据基本信息"
      :visible="state.detailsModel.group1.visible" 
      :layoutOpts="{selfLayout: 'TABLE_24COL',parentLayout: 'TABLE_24COL',colMD: 24,}"
      :infoGroupMode="true"
      :titleBarCloseMode="0"
      :showCaption="false"
      :uIActionGroup="state.detailsModel.group1.uIActionGroup"
      @componentEvent="onComponentEvent">
        <AppFormItem 
          name="mapdataname"
          label="名称"
          labelPos="LEFT"
          :labelWidth="130"
          :showLabel="true"
          :rules="state.rules.mapdataname"
          :required="state.detailsModel.mapdataname.required"
          :visible="state.detailsModel.mapdataname.visible" 
          :layoutOpts="{parentLayout: 'TABLE_24COL',colLG: 12,colMD: 24,}"
          >
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
        <AppFormItem 
          name="mapdatacode"
          label="编码"
          labelPos="LEFT"
          :labelWidth="130"
          :showLabel="true"
          :rules="state.rules.mapdatacode"
          :required="state.detailsModel.mapdatacode.required"
          :visible="state.detailsModel.mapdatacode.visible" 
          :layoutOpts="{parentLayout: 'TABLE_24COL',colLG: 12,colMD: 24,}"
          >
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
        <AppFormItem 
          name="longitude"
          label="经度"
          labelPos="LEFT"
          :labelWidth="130"
          :showLabel="true"
          :rules="state.rules.longitude"
          :required="state.detailsModel.longitude.required"
          :visible="state.detailsModel.longitude.visible" 
          :layoutOpts="{parentLayout: 'TABLE_24COL',colLG: 12,colMD: 24,}"
          >
          <div class="form-editor-container" style="">
          <AppSpan
            name="longitude"
            :disabled="state.detailsModel.longitude.disabled"
            dataType="6"
            :value="state.data.longitude"
            :context="state.context"
            :viewParams="state.viewParams"/>
          </div>
        </AppFormItem>
        <AppFormItem 
          name="latitude"
          label="纬度"
          labelPos="LEFT"
          :labelWidth="130"
          :showLabel="true"
          :rules="state.rules.latitude"
          :required="state.detailsModel.latitude.required"
          :visible="state.detailsModel.latitude.visible" 
          :layoutOpts="{parentLayout: 'TABLE_24COL',colLG: 12,colMD: 24,}"
          >
          <div class="form-editor-container" style="">
          <AppSpan
            name="latitude"
            :disabled="state.detailsModel.latitude.disabled"
            dataType="6"
            :value="state.data.latitude"
            :context="state.context"
            :viewParams="state.viewParams"/>
          </div>
        </AppFormItem>
        <AppFormItem 
          name="sortvalue"
          label="排序值"
          labelPos="LEFT"
          :labelWidth="130"
          :showLabel="true"
          :rules="state.rules.sortvalue"
          :required="state.detailsModel.sortvalue.required"
          :visible="state.detailsModel.sortvalue.visible" 
          :layoutOpts="{parentLayout: 'TABLE_24COL',colLG: 12,colMD: 24,}"
          >
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
        <AppFormItem 
          name="grouping"
          label="分组"
          labelPos="LEFT"
          :labelWidth="130"
          :showLabel="true"
          :rules="state.rules.grouping"
          :required="state.detailsModel.grouping.required"
          :visible="state.detailsModel.grouping.visible" 
          :layoutOpts="{parentLayout: 'TABLE_24COL',colLG: 12,colMD: 24,}"
          >
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
        <AppFormItem 
          name="type"
          label="类型"
          labelPos="LEFT"
          :labelWidth="130"
          :showLabel="true"
          :rules="state.rules.type"
          :required="state.detailsModel.type.required"
          :visible="state.detailsModel.type.visible" 
          :layoutOpts="{parentLayout: 'TABLE_24COL',colLG: 12,colMD: 24,}"
          >
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
    </AppFormGroup>
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
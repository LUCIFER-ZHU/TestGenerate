<script setup lang="ts">
import { Subject } from 'rxjs';
import { ctrlState } from './quick-form-state';
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
    name="Quick"
    class="app-form"
    style=""
    :model="state.data"
    :rules="state.rules"
    ref="xDataCtrl"
  >
    <AppFormGroup 
      name="group1"
      title="快速新建"
      :visible="state.detailsModel.group1.visible" 
      :layoutOpts="{selfLayout: 'TABLE_24COL',parentLayout: 'TABLE_24COL',colMD: 24,}"
      :infoGroupMode="false"
      :titleBarCloseMode="0"
      :showCaption="false"
      :uIActionGroup="state.detailsModel.group1.uIActionGroup"
      @componentEvent="onComponentEvent">
        <AppFormItem 
          name="customername"
          label="客户名称"
          labelPos="LEFT"
          :labelWidth="130"
          :showLabel="true"
          :rules="state.rules.customername"
          :required="state.detailsModel.customername.required"
          :visible="state.detailsModel.customername.visible" 
          :layoutOpts="{parentLayout: 'TABLE_24COL',colMD: 24,}"
          >
          <div class="form-editor-container" style="">
          <AppInput
            name="customername"
            :disabled="state.detailsModel.customername.disabled"
            :maxLength="200"
            type="text"
            :value="state.data.customername"
            @editorEvent="onEditorEvent"
          />
          </div>
        </AppFormItem>
        <AppFormItem 
          name="pcustomername"
          label="上级客户"
          labelPos="LEFT"
          :labelWidth="130"
          :showLabel="true"
          :rules="state.rules.pcustomername"
          :required="state.detailsModel.pcustomername.required"
          :visible="state.detailsModel.pcustomername.visible" 
          :layoutOpts="{parentLayout: 'TABLE_24COL',colMD: 24,}"
          >
          <div class="form-editor-container" style="">
          <AppDataPicker
            name="pcustomername"
            :data="state.data"
            valueItem="pcustomerid"
            :disabled="state.detailsModel.pcustomername.disabled"
            :context="state.context"
            :viewParams="state.viewParams"
            deMajorField="customername"
            deKeyField="customerid"
            pickUpView="CustomerPickupView"
            :value="state.data.pcustomername"
            @editorEvent="onEditorEvent"
          />
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
          :layoutOpts="{parentLayout: 'TABLE_24COL',colMD: 24,}"
          >
          <div class="form-editor-container" style="">
          <AppRadioGroup
            name="type"
            :data="state.data"
            codeListTag="Sample__CustomerType"
            codeListType="STATIC"
            
            :disabled="state.detailsModel.type.disabled"
            :context="state.context"
            :viewParams="state.viewParams"
            :value="state.data.type"
            @editorEvent="onEditorEvent"
          />
          </div>
        </AppFormItem>
        <AppFormItem 
          name="memo"
          label="备注"
          labelPos="LEFT"
          :labelWidth="130"
          :showLabel="true"
          :rules="state.rules.memo"
          :required="state.detailsModel.memo.required"
          :visible="state.detailsModel.memo.visible" 
          :layoutOpts="{parentLayout: 'TABLE_24COL',colMD: 24,}"
          >
          <div class="form-editor-container" style="height: 200.0px">
          <AppInput
            name="memo"
            :disabled="state.detailsModel.memo.disabled"
            :maxLength="1000"
            :showMaxLength="true"
            type="textarea"
            :value="state.data.memo"
            @editorEvent="onEditorEvent"
          />
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
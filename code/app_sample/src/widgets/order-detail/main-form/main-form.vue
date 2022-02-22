<script setup lang="ts">
import { Subject } from 'rxjs';
import { ctrlState } from './main-form-state';
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
    name="Main"
    class="app-form"
    style=""
    :model="state.data"
    :rules="state.rules"
    ref="xDataCtrl"
  >
    <AppFormGroup 
      name="group1"
      title="订单明细基本信息"
      :visible="state.detailsModel.group1.visible" 
      :layoutOpts="{selfLayout: 'TABLE_24COL',parentLayout: 'TABLE_24COL',colMD: 24,}"
      :infoGroupMode="false"
      :titleBarCloseMode="0"
      :showCaption="false"
      :uIActionGroup="state.detailsModel.group1.uIActionGroup"
      @componentEvent="onComponentEvent">
        <AppFormItem 
          name="productname"
          label="产品"
          labelPos="LEFT"
          :labelWidth="130"
          :showLabel="true"
          :rules="state.rules.productname"
          :required="state.detailsModel.productname.required"
          :visible="state.detailsModel.productname.visible" 
          :layoutOpts="{parentLayout: 'TABLE_24COL',colMD: 24,}"
          >
          <div class="form-editor-container" style="">
          <AppDataPicker
            name="productname"
            :data="state.data"
            valueItem="productid"
            :disabled="state.detailsModel.productname.disabled"
            :context="state.context"
            :viewParams="state.viewParams"
            deMajorField="productname"
            deKeyField="productid"
            pickUpView="ProductPickupView"
            :value="state.data.productname"
            @editorEvent="onEditorEvent"
          />
          </div>
        </AppFormItem>
        <AppFormItem 
          name="price"
          label="单价"
          labelPos="LEFT"
          :labelWidth="130"
          :showLabel="true"
          :rules="state.rules.price"
          :required="state.detailsModel.price.required"
          :visible="state.detailsModel.price.visible" 
          :layoutOpts="{parentLayout: 'TABLE_24COL',colMD: 24,}"
          >
          <div class="form-editor-container" style="">
          <AppInput
            name="price"
            :disabled="state.detailsModel.price.disabled"
            type="text"
            :value="state.data.price"
            @editorEvent="onEditorEvent"
          />
          </div>
        </AppFormItem>
        <AppFormItem 
          name="qty"
          label="数量"
          labelPos="LEFT"
          :labelWidth="130"
          :showLabel="true"
          :rules="state.rules.qty"
          :required="state.detailsModel.qty.required"
          :visible="state.detailsModel.qty.visible" 
          :layoutOpts="{parentLayout: 'TABLE_24COL',colMD: 24,}"
          >
          <div class="form-editor-container" style="">
          <AppInput
            name="qty"
            :disabled="state.detailsModel.qty.disabled"
            type="text"
            :value="state.data.qty"
            @editorEvent="onEditorEvent"
          />
          </div>
        </AppFormItem>
        <AppFormItem 
          name="amount"
          label="小计"
          labelPos="LEFT"
          :labelWidth="130"
          :showLabel="true"
          :rules="state.rules.amount"
          :required="state.detailsModel.amount.required"
          :visible="state.detailsModel.amount.visible" 
          :layoutOpts="{parentLayout: 'TABLE_24COL',colMD: 24,}"
          >
          <div class="form-editor-container" style="">
          <AppInput
            name="amount"
            :disabled="state.detailsModel.amount.disabled"
            type="text"
            :value="state.data.amount"
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
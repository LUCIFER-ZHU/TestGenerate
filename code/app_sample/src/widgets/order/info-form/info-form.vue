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
      title="订单基本信息"
      :visible="state.detailsModel.group1.visible" 
      :layoutOpts="{selfLayout: 'TABLE_24COL',parentLayout: 'TABLE_24COL',colMD: 24,}"
      :infoGroupMode="true"
      :titleBarCloseMode="0"
      :showCaption="false"
      :uIActionGroup="state.detailsModel.group1.uIActionGroup"
      @componentEvent="onComponentEvent">
        <AppFormItem 
          name="customername"
          label="客户"
          labelPos="LEFT"
          :labelWidth="130"
          :showLabel="true"
          :rules="state.rules.customername"
          :required="state.detailsModel.customername.required"
          :visible="state.detailsModel.customername.visible" 
          :layoutOpts="{parentLayout: 'TABLE_24COL',colLG: 12,colMD: 12,}"
          >
          <div class="form-editor-container" style="">
          <AppSpan
            name="customername"
            :disabled="state.detailsModel.customername.disabled"
            dataType="25"
            :value="state.data.customername"
            :context="state.context"
            :viewParams="state.viewParams"/>
          </div>
        </AppFormItem>
        <AppFormItem 
          name="ordername"
          label="订单号"
          labelPos="LEFT"
          :labelWidth="130"
          :showLabel="true"
          :rules="state.rules.ordername"
          :required="state.detailsModel.ordername.required"
          :visible="state.detailsModel.ordername.visible" 
          :layoutOpts="{parentLayout: 'TABLE_24COL',colLG: 12,colMD: 12,}"
          >
          <div class="form-editor-container" style="">
          <AppSpan
            name="ordername"
            :disabled="state.detailsModel.ordername.disabled"
            dataType="25"
            :value="state.data.ordername"
            :context="state.context"
            :viewParams="state.viewParams"/>
          </div>
        </AppFormItem>
        <AppFormItem 
          name="orderdate"
          label="订单时间"
          labelPos="LEFT"
          :labelWidth="130"
          :showLabel="true"
          :rules="state.rules.orderdate"
          :required="state.detailsModel.orderdate.required"
          :visible="state.detailsModel.orderdate.visible" 
          :layoutOpts="{parentLayout: 'TABLE_24COL',colLG: 12,colMD: 12,}"
          >
          <div class="form-editor-container" style="">
          <AppSpan
            name="orderdate"
            :disabled="state.detailsModel.orderdate.disabled"
            dataType="5"
            valueFormat="YYYY-MM-DD"
            :value="state.data.orderdate"
            :context="state.context"
            :viewParams="state.viewParams"/>
          </div>
        </AppFormItem>
        <AppFormItem 
          name="state"
          label="订单状态"
          labelPos="LEFT"
          :labelWidth="130"
          :showLabel="true"
          :rules="state.rules.state"
          :required="state.detailsModel.state.required"
          :visible="state.detailsModel.state.visible" 
          :layoutOpts="{parentLayout: 'TABLE_24COL',colLG: 12,colMD: 12,}"
          >
          <div class="form-editor-container" style="">
          <AppSpan
            name="state"
            :disabled="state.detailsModel.state.disabled"
            codeListTag="Sample__OrderState"
            codeListType="STATIC"
            dataType="25"
            :value="state.data.state"
            :context="state.context"
            :viewParams="state.viewParams"/>
          </div>
        </AppFormItem>
        <AppFormItem 
          name="amount"
          label="金额"
          labelPos="LEFT"
          :labelWidth="130"
          :showLabel="true"
          :rules="state.rules.amount"
          :required="state.detailsModel.amount.required"
          :visible="state.detailsModel.amount.visible" 
          :layoutOpts="{parentLayout: 'TABLE_24COL',colLG: 12,colMD: 12,}"
          >
          <div class="form-editor-container" style="">
          <AppSpan
            name="amount"
            :disabled="state.detailsModel.amount.disabled"
            dataType="7"
            :value="state.data.amount"
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
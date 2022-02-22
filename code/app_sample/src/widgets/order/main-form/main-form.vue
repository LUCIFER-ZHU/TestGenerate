<script setup lang="ts">
import { Subject } from 'rxjs';
import { ctrlState } from './main-form-state';
import { FormControl, IActionParam, IParam, ControlAction, IContext } from '@core';
import OrderDetailLineEditGridView from '@views/sample/order-detail-line-edit-grid-view';
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
      title="订单基本信息"
      :visible="state.detailsModel.group1.visible" 
      :layoutOpts="{selfLayout: 'TABLE_24COL',parentLayout: 'TABLE_24COL',colMD: 24,}"
      :infoGroupMode="false"
      :titleBarCloseMode="0"
      :showCaption="false"
      :uIActionGroup="state.detailsModel.group1.uIActionGroup"
      @componentEvent="onComponentEvent">
        <AppFormItem 
          name="ordername"
          label="订单号"
          labelPos="LEFT"
          :labelWidth="130"
          :showLabel="true"
          :rules="state.rules.ordername"
          :required="state.detailsModel.ordername.required"
          :visible="state.detailsModel.ordername.visible" 
          :layoutOpts="{parentLayout: 'TABLE_24COL',colLG: 6,colMD: 8,colSM: 12,}"
          >
          <div class="form-editor-container" style="">
          <AppInput
            name="ordername"
            :disabled="state.detailsModel.ordername.disabled"
            :maxLength="200"
            type="text"
            :value="state.data.ordername"
            @editorEvent="onEditorEvent"
          />
          </div>
        </AppFormItem>
        <AppFormItem 
          name="customername"
          label="客户"
          labelPos="LEFT"
          :labelWidth="130"
          :showLabel="true"
          :rules="state.rules.customername"
          :required="state.detailsModel.customername.required"
          :visible="state.detailsModel.customername.visible" 
          :layoutOpts="{parentLayout: 'TABLE_24COL',colLG: 18,colMD: 18,colSM: 18,}"
          >
          <div class="form-editor-container" style="">
          <AppDataPicker
            name="customername"
            :data="state.data"
            valueItem="customerid"
            :disabled="state.detailsModel.customername.disabled"
            :context="state.context"
            :viewParams="state.viewParams"
            deMajorField="customername"
            deKeyField="customerid"
            pickUpView="CustomerPickupView"
            :value="state.data.customername"
            @editorEvent="onEditorEvent"
          />
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
          :layoutOpts="{parentLayout: 'TABLE_24COL',colLG: 6,colMD: 8,colSM: 12,}"
          >
          <div class="form-editor-container" style="width: 100.0px;">
          <AppDatePicker
            name="orderdate"
            :disabled="state.detailsModel.orderdate.disabled"
            dateFormat="YYYY-MM-DD"
            dateType="date"
            :value="state.data.orderdate"
            @editorEvent="onEditorEvent"
          />
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
          :layoutOpts="{parentLayout: 'TABLE_24COL',colLG: 6,colMD: 8,colSM: 12,}"
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
        <AppFormItem 
          name="state"
          label="订单状态"
          labelPos="LEFT"
          :labelWidth="130"
          :showLabel="true"
          :rules="state.rules.state"
          :required="state.detailsModel.state.required"
          :visible="state.detailsModel.state.visible" 
          :layoutOpts="{parentLayout: 'TABLE_24COL',colLG: 6,colMD: 8,colSM: 12,}"
          >
          <div class="form-editor-container" style="">
          <AppDropdownList
            name="state"
            codeListTag="Sample__OrderState"
            codeListType="STATIC"
            :disabled="state.detailsModel.state.disabled"
            :context="state.context"
            :viewParams="state.viewParams"
            :value="state.data.state"
            :data="state.data"
            @editorEvent="onEditorEvent"
          /> 
          </div>
        </AppFormItem>
    </AppFormGroup>
    <AppFormGroup 
      name="grouppanel1"
      title="订单明细"
      :visible="state.detailsModel.grouppanel1.visible" 
      :layoutOpts="{selfLayout: 'TABLE_24COL',parentLayout: 'TABLE_24COL',colMD: 24,}"
      :infoGroupMode="false"
      :titleBarCloseMode="0"
      :showCaption="false"
      :uIActionGroup="state.detailsModel.grouppanel1.uIActionGroup"
      @componentEvent="onComponentEvent">
        <AppFormDruipart 
          name="druipart1" 
          title=""
          :formSubject="state.formSubject"
          :visible="state.detailsModel.druipart1.visible"
          viewCodeName="OrderDetailLineEditGridView"
          :layoutOpts="{parentLayout: 'TABLE_24COL',colMD: 24,}"
          paramItem="srfkey"
          deCodeName="order"
          :context="context"
          :viewParams="viewParams"
          :data="state.data"
          :viewSubject="state.viewSubject">
            <template #default="druipartParams">
            <OrderDetailLineEditGridView
              :class="['app-view-layout--from-druipart']"
              :context="druipartParams.context"
              :viewParams="druipartParams.viewParams"
              :viewDefaultUsage="false"
              :showCaptionBar="false"
              openType="EMBED"
              :viewSubject="state.viewSubject"
              @viewEvent="druipartParams.viewEvent"
            >
            </OrderDetailLineEditGridView>
            </template>
        </AppFormDruipart>
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
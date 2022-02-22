<script setup lang="ts">
import { Subject } from 'rxjs';
import { ctrlState } from './main-3-form-state';
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
    name="Main_3"
    class="app-form"
    style=""
    :model="state.data"
    :rules="state.rules"
    ref="xDataCtrl"
  >
    <AppFormGroup 
      name="grouppanel1"
      title="单项选择"
      :visible="state.detailsModel.grouppanel1.visible" 
      :layoutOpts="{selfLayout: 'TABLE_24COL',parentLayout: 'TABLE_24COL',colMD: 24,}"
      :infoGroupMode="false"
      :titleBarCloseMode="0"
      :showCaption="true"
      :uIActionGroup="state.detailsModel.grouppanel1.uIActionGroup"
      @componentEvent="onComponentEvent">
        <AppFormItem 
          name="formitem"
          label="单项选择表格"
          labelPos="LEFT"
          :labelWidth="130"
          :showLabel="true"
          :rules="state.rules.formitem"
          :required="state.detailsModel.formitem.required"
          :visible="state.detailsModel.formitem.visible" 
          :layoutOpts="{parentLayout: 'TABLE_24COL',colLG: 12,colMD: 12,colSM: 12,colXS: 12,}"
          >
          <div class="form-editor-container" style="">
          <AppDataPicker
            name="formitem"
            :data="state.data"
            valueItem="formitem1"
            :disabled="state.detailsModel.formitem.disabled"
            :context="state.context"
            :viewParams="state.viewParams"
            pickUpView="ChartDataPickupView"
            :noAC="true"
            :value="state.data.formitem"
            @editorEvent="onEditorEvent"
          />
          </div>
        </AppFormItem>
        <AppFormItem 
          name="formitem1"
          label="值项"
          labelPos="LEFT"
          :labelWidth="130"
          :showLabel="true"
          :rules="state.rules.formitem1"
          :required="state.detailsModel.formitem1.required"
          :visible="state.detailsModel.formitem1.visible" 
          :layoutOpts="{parentLayout: 'TABLE_24COL',colLG: 12,colMD: 12,colSM: 12,}"
          >
          <div class="form-editor-container" style="">
          <AppSpan
            name="formitem1"
            :disabled="state.detailsModel.formitem1.disabled"
            dataType="25"
            :value="state.data.formitem1"
            :context="state.context"
            :viewParams="state.viewParams"/>
          </div>
        </AppFormItem>
        <AppFormItem 
          name="formitem2"
          label="单选选择树"
          labelPos="LEFT"
          :labelWidth="130"
          :showLabel="true"
          :rules="state.rules.formitem2"
          :required="state.detailsModel.formitem2.required"
          :visible="state.detailsModel.formitem2.visible" 
          :layoutOpts="{parentLayout: 'TABLE_24COL',colLG: 12,colMD: 12,colSM: 12,colXS: 12,}"
          >
          <div class="form-editor-container" style="">
          <AppDataPicker
            name="formitem2"
            :data="state.data"
            valueItem="formitem3"
            :disabled="state.detailsModel.formitem2.disabled"
            :context="state.context"
            :viewParams="state.viewParams"
            pickUpView="ChartDataUsr2PickupView"
            :noAC="true"
            :value="state.data.formitem2"
            @editorEvent="onEditorEvent"
          />
          </div>
        </AppFormItem>
        <AppFormItem 
          name="formitem3"
          label="值项"
          labelPos="LEFT"
          :labelWidth="130"
          :showLabel="true"
          :rules="state.rules.formitem3"
          :required="state.detailsModel.formitem3.required"
          :visible="state.detailsModel.formitem3.visible" 
          :layoutOpts="{parentLayout: 'TABLE_24COL',colLG: 12,colMD: 12,colSM: 12,colXS: 12,}"
          >
          <div class="form-editor-container" style="">
          <AppSpan
            name="formitem3"
            :disabled="state.detailsModel.formitem3.disabled"
            dataType="25"
            :value="state.data.formitem3"
            :context="state.context"
            :viewParams="state.viewParams"/>
          </div>
        </AppFormItem>
        <AppFormItem 
          name="formitem4"
          label="树导航（列表）"
          labelPos="LEFT"
          :labelWidth="130"
          :showLabel="true"
          :rules="state.rules.formitem4"
          :required="state.detailsModel.formitem4.required"
          :visible="state.detailsModel.formitem4.visible" 
          :layoutOpts="{parentLayout: 'TABLE_24COL',colLG: 12,colMD: 24,}"
          >
          <div class="form-editor-container" style="">
          <AppDataPicker
            name="formitem4"
            :data="state.data"
            valueItem="formitem5"
            :disabled="state.detailsModel.formitem4.disabled"
            :context="state.context"
            :viewParams="state.viewParams"
            pickUpView="ChartDataPickupView2"
            :noAC="true"
            :value="state.data.formitem4"
            @editorEvent="onEditorEvent"
          />
          </div>
        </AppFormItem>
        <AppFormItem 
          name="formitem5"
          label="值项"
          labelPos="LEFT"
          :labelWidth="130"
          :showLabel="true"
          :rules="state.rules.formitem5"
          :required="state.detailsModel.formitem5.required"
          :visible="state.detailsModel.formitem5.visible" 
          :layoutOpts="{parentLayout: 'TABLE_24COL',colLG: 12,colMD: 24,}"
          >
          <div class="form-editor-container" style="">
          <AppSpan
            name="formitem5"
            :disabled="state.detailsModel.formitem5.disabled"
            dataType="25"
            :value="state.data.formitem5"
            :context="state.context"
            :viewParams="state.viewParams"/>
          </div>
        </AppFormItem>
        <AppFormItem 
          name="formitem6"
          label="单项选择列表"
          labelPos="LEFT"
          :labelWidth="130"
          :showLabel="true"
          :rules="state.rules.formitem6"
          :required="state.detailsModel.formitem6.required"
          :visible="state.detailsModel.formitem6.visible" 
          :layoutOpts="{parentLayout: 'TABLE_24COL',colLG: 12,colMD: 24,}"
          >
          <div class="form-editor-container" style="">
          <AppDataPicker
            name="formitem6"
            :data="state.data"
            valueItem="formitem7"
            :disabled="state.detailsModel.formitem6.disabled"
            :context="state.context"
            :viewParams="state.viewParams"
            pickUpView="ChartDataUsr3PickupView"
            :noAC="true"
            :value="state.data.formitem6"
            @editorEvent="onEditorEvent"
          />
          </div>
        </AppFormItem>
        <AppFormItem 
          name="formitem7"
          label="值项"
          labelPos="LEFT"
          :labelWidth="130"
          :showLabel="true"
          :rules="state.rules.formitem7"
          :required="state.detailsModel.formitem7.required"
          :visible="state.detailsModel.formitem7.visible" 
          :layoutOpts="{parentLayout: 'TABLE_24COL',colLG: 12,colMD: 24,}"
          >
          <div class="form-editor-container" style="">
          <AppSpan
            name="formitem7"
            :disabled="state.detailsModel.formitem7.disabled"
            dataType="25"
            :value="state.data.formitem7"
            :context="state.context"
            :viewParams="state.viewParams"/>
          </div>
        </AppFormItem>
        <AppFormItem 
          name="formitem8"
          label="单选卡片"
          labelPos="LEFT"
          :labelWidth="130"
          :showLabel="true"
          :rules="state.rules.formitem8"
          :required="state.detailsModel.formitem8.required"
          :visible="state.detailsModel.formitem8.visible" 
          :layoutOpts="{parentLayout: 'TABLE_24COL',colLG: 12,colMD: 24,}"
          >
          <div class="form-editor-container" style="">
          <AppDataPicker
            name="formitem8"
            :data="state.data"
            valueItem="formitem9"
            :disabled="state.detailsModel.formitem8.disabled"
            :context="state.context"
            :viewParams="state.viewParams"
            pickUpView="ChartDataUsr4PickupView"
            :noAC="true"
            :value="state.data.formitem8"
            @editorEvent="onEditorEvent"
          />
          </div>
        </AppFormItem>
        <AppFormItem 
          name="formitem9"
          label="值项"
          labelPos="LEFT"
          :labelWidth="130"
          :showLabel="true"
          :rules="state.rules.formitem9"
          :required="state.detailsModel.formitem9.required"
          :visible="state.detailsModel.formitem9.visible" 
          :layoutOpts="{parentLayout: 'TABLE_24COL',colLG: 12,colMD: 24,}"
          >
          <div class="form-editor-container" style="">
          <AppSpan
            name="formitem9"
            :disabled="state.detailsModel.formitem9.disabled"
            dataType="25"
            :value="state.data.formitem9"
            :context="state.context"
            :viewParams="state.viewParams"/>
          </div>
        </AppFormItem>
        <AppFormItem 
          name="formitem10"
          label="树导航（卡片）"
          labelPos="LEFT"
          :labelWidth="130"
          :showLabel="true"
          :rules="state.rules.formitem10"
          :required="state.detailsModel.formitem10.required"
          :visible="state.detailsModel.formitem10.visible" 
          :layoutOpts="{parentLayout: 'TABLE_24COL',colLG: 12,colMD: 24,}"
          >
          <div class="form-editor-container" style="">
          <AppDataPicker
            name="formitem10"
            :data="state.data"
            valueItem="formitem11"
            :disabled="state.detailsModel.formitem10.disabled"
            :context="state.context"
            :viewParams="state.viewParams"
            pickUpView="ChartDataUsr2PickupView2"
            :noAC="true"
            :value="state.data.formitem10"
            @editorEvent="onEditorEvent"
          />
          </div>
        </AppFormItem>
        <AppFormItem 
          name="formitem11"
          label="值项"
          labelPos="LEFT"
          :labelWidth="130"
          :showLabel="true"
          :rules="state.rules.formitem11"
          :required="state.detailsModel.formitem11.required"
          :visible="state.detailsModel.formitem11.visible" 
          :layoutOpts="{parentLayout: 'TABLE_24COL',colLG: 12,colMD: 24,}"
          >
          <div class="form-editor-container" style="">
          <AppSpan
            name="formitem11"
            :disabled="state.detailsModel.formitem11.disabled"
            dataType="25"
            :value="state.data.formitem11"
            :context="state.context"
            :viewParams="state.viewParams"/>
          </div>
        </AppFormItem>
        <AppFormItem 
          name="formitem12"
          label="树导航（表格）"
          labelPos="LEFT"
          :labelWidth="130"
          :showLabel="true"
          :rules="state.rules.formitem12"
          :required="state.detailsModel.formitem12.required"
          :visible="state.detailsModel.formitem12.visible" 
          :layoutOpts="{parentLayout: 'TABLE_24COL',colLG: 12,colMD: 24,}"
          >
          <div class="form-editor-container" style="">
          <AppDataPicker
            name="formitem12"
            :data="state.data"
            valueItem="formitem13"
            :disabled="state.detailsModel.formitem12.disabled"
            :context="state.context"
            :viewParams="state.viewParams"
            pickUpView="ChartDataUsr3PickupView2"
            :noAC="true"
            :value="state.data.formitem12"
            @editorEvent="onEditorEvent"
          />
          </div>
        </AppFormItem>
        <AppFormItem 
          name="formitem13"
          label="值项"
          labelPos="LEFT"
          :labelWidth="130"
          :showLabel="true"
          :rules="state.rules.formitem13"
          :required="state.detailsModel.formitem13.required"
          :visible="state.detailsModel.formitem13.visible" 
          :layoutOpts="{parentLayout: 'TABLE_24COL',colLG: 12,colMD: 24,}"
          >
          <div class="form-editor-container" style="">
          <AppSpan
            name="formitem13"
            :disabled="state.detailsModel.formitem13.disabled"
            dataType="25"
            :value="state.data.formitem13"
            :context="state.context"
            :viewParams="state.viewParams"/>
          </div>
        </AppFormItem>
        <AppFormItem 
          name="formitem14"
          label="表单项a"
          labelPos="LEFT"
          :labelWidth="130"
          :showLabel="true"
          :rules="state.rules.formitem14"
          :required="state.detailsModel.formitem14.required"
          :visible="state.detailsModel.formitem14.visible" 
          :layoutOpts="{parentLayout: 'TABLE_24COL',colLG: 12,colMD: 24,}"
          >
          <div class="form-editor-container" style="">
          <AppInput
            name="formitem14"
            :disabled="state.detailsModel.formitem14.disabled"
            type="text"
            :value="state.data.formitem14"
            @editorEvent="onEditorEvent"
          />
          </div>
        </AppFormItem>
        <AppFormItem 
          name="formitem15"
          label="表单项b"
          labelPos="LEFT"
          :labelWidth="130"
          :showLabel="true"
          :rules="state.rules.formitem15"
          :required="state.detailsModel.formitem15.required"
          :visible="state.detailsModel.formitem15.visible" 
          :layoutOpts="{parentLayout: 'TABLE_24COL',colLG: 12,colMD: 24,}"
          >
          <div class="form-editor-container" style="">
          <AppInput
            name="formitem15"
            :disabled="state.detailsModel.formitem15.disabled"
            type="text"
            :value="state.data.formitem15"
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
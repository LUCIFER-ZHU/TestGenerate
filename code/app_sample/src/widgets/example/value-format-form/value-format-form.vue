<script setup lang="ts">
import { Subject } from 'rxjs';
import { ctrlState } from './value-format-form-state';
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
    name="ValueFormat"
    class="app-form"
    style=""
    :model="state.data"
    :rules="state.rules"
    ref="xDataCtrl"
  >
    <AppFormGroup 
      name="group1"
      title="分组"
      :visible="state.detailsModel.group1.visible" 
      :layoutOpts="{selfLayout: 'TABLE_24COL',parentLayout: 'TABLE_24COL',colMD: 24,}"
      :infoGroupMode="false"
      :titleBarCloseMode="0"
      :showCaption="false"
      :uIActionGroup="state.detailsModel.group1.uIActionGroup"
      @componentEvent="onComponentEvent">
        <AppFormRaw 
          name="rawitem1"
          :visible="state.detailsModel.rawitem1.visible"
          class="el-alert el-alert--info is-light"
          contentType="RAW"
          :layoutOpts="{parentLayout: 'TABLE_24COL',colMD: 24,}"
          value="值【1234.1】，使用【#.#\元】进行格式化，预期效果【1234.1元】"
          />
        <AppFormItem 
          name="format1"
          label="数值编辑器格式化"
          labelPos="LEFT"
          :labelWidth="130"
          :showLabel="true"
          :rules="state.rules.format1"
          :required="state.detailsModel.format1.required"
          :visible="state.detailsModel.format1.visible" 
          :layoutOpts="{parentLayout: 'TABLE_24COL',colMD: 24,}"
          >
          <div class="form-editor-container" style="">
          <AppInput
            name="format1"
            :disabled="state.detailsModel.format1.disabled"
            :precision="4"
            type="number"
            :value="state.data.format1"
            @editorEvent="onEditorEvent"
          />
          </div>
        </AppFormItem>
        <AppFormRaw 
          name="rawitem2"
          :visible="state.detailsModel.rawitem2.visible"
          class="el-alert el-alert--info is-light"
          contentType="RAW"
          :layoutOpts="{parentLayout: 'TABLE_24COL',colMD: 24,}"
          value="值【100.14】，使用【¥*-#.##】进行格式化，预期效果【¥----------100.14】"
          />
        <AppFormItem 
          name="format2"
          label="标签编辑器格式化"
          labelPos="LEFT"
          :labelWidth="130"
          :showLabel="true"
          :rules="state.rules.format2"
          :required="state.detailsModel.format2.required"
          :visible="state.detailsModel.format2.visible" 
          :layoutOpts="{parentLayout: 'TABLE_24COL',colMD: 24,}"
          style="width: 500.0px;"
          >
          <div class="form-editor-container" style="">
          <AppSpan
            name="format2"
            :disabled="state.detailsModel.format2.disabled"
            dataType="6"
            valueFormat="¥*-#.##"
            :value="state.data.format2"
            :context="state.context"
            :viewParams="state.viewParams"/>
          </div>
        </AppFormItem>
        <AppFormRaw 
          name="rawitem3"
          :visible="state.detailsModel.rawitem3.visible"
          class="el-alert el-alert--info is-light"
          contentType="RAW"
          :layoutOpts="{parentLayout: 'TABLE_24COL',colMD: 24,}"
          value="标签显示属性代码表原值"
          />
        <AppFormItem 
          name="datatype"
          label="表单项"
          labelPos="LEFT"
          :labelWidth="130"
          :showLabel="true"
          :rules="state.rules.datatype"
          :required="state.detailsModel.datatype.required"
          :visible="state.detailsModel.datatype.visible" 
          :layoutOpts="{parentLayout: 'TABLE_24COL',colMD: 24,}"
          >
          <div class="form-editor-container" style="">
          <AppSpan
            name="datatype"
            :disabled="state.detailsModel.datatype.disabled"
            codeListTag="Sample__ExampleDataType"
            codeListType="STATIC"
            dataType="25"
            :value="state.data.datatype"
            :context="state.context"
            :viewParams="state.viewParams"/>
          </div>
        </AppFormItem>
        <AppFormRaw 
          name="rawitem4"
          :visible="state.detailsModel.rawitem4.visible"
          class="el-alert el-alert--info is-light"
          contentType="RAW"
          :layoutOpts="{parentLayout: 'TABLE_24COL',colMD: 24,}"
          value="标签显示属性代码表值文本"
          />
        <AppFormItem 
          name="formitem"
          label="表单项"
          labelPos="LEFT"
          :labelWidth="130"
          :showLabel="true"
          :rules="state.rules.formitem"
          :required="state.detailsModel.formitem.required"
          :visible="state.detailsModel.formitem.visible" 
          :layoutOpts="{parentLayout: 'TABLE_24COL',colMD: 24,}"
          >
          <div class="form-editor-container" style="">
          <AppSpan
            name="formitem"
            :disabled="state.detailsModel.formitem.disabled"
            codeListTag="Sample__ExampleDataType"
            codeListType="STATIC"
            dataType="25"
            :value="state.data.formitem"
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
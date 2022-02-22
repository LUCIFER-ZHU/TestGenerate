<script setup lang="ts">
import { Subject } from 'rxjs';
import { ctrlState } from './adv-group-form-state';
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
    name="AdvGroup"
    class="app-form"
    style=""
    :model="state.data"
    :rules="state.rules"
    ref="xDataCtrl"
  >
    <AppFormRaw 
      name="rawitem1"
      :visible="state.detailsModel.rawitem1.visible"
      class="el-alert el-alert--info is-light"
      contentType="RAW"
      :layoutOpts="{parentLayout: 'TABLE_24COL',colMD: 24,}"
      value="默认展开分组中的表单项，点击分组图标收缩分组"
      />
    <AppFormGroup 
      name="group1"
      title="收缩分组（默认展开）"
      :visible="state.detailsModel.group1.visible" 
      :layoutOpts="{selfLayout: 'TABLE_24COL',parentLayout: 'TABLE_24COL',colMD: 24,}"
      :infoGroupMode="false"
      :titleBarCloseMode="1"
      :showCaption="true"
      :uIActionGroup="state.detailsModel.group1.uIActionGroup"
      @componentEvent="onComponentEvent">
        <AppFormItem 
          name="formitem"
          label="表单项（默认已展开）"
          labelPos="LEFT"
          :labelWidth="200"
          :showLabel="true"
          :rules="state.rules.formitem"
          :required="state.detailsModel.formitem.required"
          :visible="state.detailsModel.formitem.visible" 
          :layoutOpts="{parentLayout: 'TABLE_24COL',colMD: 24,}"
          >
          <div class="form-editor-container" style="">
          <AppInput
            name="formitem"
            :disabled="state.detailsModel.formitem.disabled"
            type="text"
            :value="state.data.formitem"
            @editorEvent="onEditorEvent"
          />
          </div>
        </AppFormItem>
    </AppFormGroup>
    <AppFormRaw 
      name="rawitem2"
      :visible="state.detailsModel.rawitem2.visible"
      class="el-alert el-alert--info is-light"
      contentType="RAW"
      :layoutOpts="{parentLayout: 'TABLE_24COL',colMD: 24,}"
      value="默认关闭分组中的表单项，点击分组图标展开分组"
      />
    <AppFormGroup 
      name="grouppanel1"
      title="收缩分组（默认关闭）"
      :visible="state.detailsModel.grouppanel1.visible" 
      :layoutOpts="{selfLayout: 'TABLE_24COL',parentLayout: 'TABLE_24COL',colMD: 24,}"
      :infoGroupMode="false"
      :titleBarCloseMode="2"
      :showCaption="true"
      :uIActionGroup="state.detailsModel.grouppanel1.uIActionGroup"
      @componentEvent="onComponentEvent">
        <AppFormItem 
          name="formitem1"
          label="表单项（打开才能看到）"
          labelPos="LEFT"
          :labelWidth="200"
          :showLabel="true"
          :rules="state.rules.formitem1"
          :required="state.detailsModel.formitem1.required"
          :visible="state.detailsModel.formitem1.visible" 
          :layoutOpts="{parentLayout: 'TABLE_24COL',colMD: 24,}"
          >
          <div class="form-editor-container" style="">
          <AppInput
            name="formitem1"
            :disabled="state.detailsModel.formitem1.disabled"
            type="text"
            :value="state.data.formitem1"
            @editorEvent="onEditorEvent"
          />
          </div>
        </AppFormItem>
    </AppFormGroup>
    <AppFormRaw 
      name="rawitem4"
      :visible="state.detailsModel.rawitem4.visible"
      class="el-alert el-alert--info is-light"
      contentType="RAW"
      :layoutOpts="{parentLayout: 'TABLE_24COL',colMD: 24,}"
      value="分组中使用界面行为组，行为按钮将在分组标题区右侧平铺展示"
      />
    <AppFormGroup 
      name="grouppanel2"
      title="表单界面行为组"
      :visible="state.detailsModel.grouppanel2.visible" 
      :layoutOpts="{selfLayout: 'TABLE_24COL',parentLayout: 'TABLE_24COL',colMD: 24,}"
      :infoGroupMode="false"
      :titleBarCloseMode="0"
      :showCaption="true"
      :uIActionGroup="state.detailsModel.grouppanel2.uIActionGroup"
      @componentEvent="onComponentEvent">
        <AppFormItem 
          name="formitem2"
          label="表单项"
          labelPos="LEFT"
          :labelWidth="200"
          :showLabel="true"
          :rules="state.rules.formitem2"
          :required="state.detailsModel.formitem2.required"
          :visible="state.detailsModel.formitem2.visible" 
          :layoutOpts="{parentLayout: 'TABLE_24COL',colMD: 24,}"
          >
          <div class="form-editor-container" style="">
          <AppInput
            name="formitem2"
            :disabled="state.detailsModel.formitem2.disabled"
            type="text"
            :value="state.data.formitem2"
            @editorEvent="onEditorEvent"
          />
          </div>
        </AppFormItem>
    </AppFormGroup>
    <AppFormRaw 
      name="rawitem3"
      :visible="state.detailsModel.rawitem3.visible"
      class="el-alert el-alert--info is-light"
      contentType="RAW"
      :layoutOpts="{parentLayout: 'TABLE_24COL',colMD: 24,}"
      value="点击【隐藏字段】按钮之后，隐藏受控内容“更多表单项1”和“更多表单项2”，点击【显示更多字段】按钮后则显示"
      />
    <AppFormGroup 
      name="grouppanel3"
      title="更多分组成员"
      :visible="state.detailsModel.grouppanel3.visible" 
      :layoutOpts="{selfLayout: 'TABLE_24COL',parentLayout: 'TABLE_24COL',colMD: 24,}"
      :infoGroupMode="false"
      :titleBarCloseMode="0"
      :showCaption="true"
      :uIActionGroup="state.detailsModel.grouppanel3.uIActionGroup"
      @componentEvent="onComponentEvent">
        <AppFormItem 
          name="formitem3"
          label="表单项"
          labelPos="LEFT"
          :labelWidth="200"
          :showLabel="true"
          :rules="state.rules.formitem3"
          :required="state.detailsModel.formitem3.required"
          :visible="state.detailsModel.formitem3.visible" 
          :layoutOpts="{parentLayout: 'TABLE_24COL',colMD: 24,}"
          >
          <div class="form-editor-container" style="">
          <AppInput
            name="formitem3"
            :disabled="state.detailsModel.formitem3.disabled"
            type="text"
            :value="state.data.formitem3"
            @editorEvent="onEditorEvent"
          />
          </div>
        </AppFormItem>
        <AppFormGroup 
          name="grouppanel4"
          title="受控内容"
          :visible="state.detailsModel.grouppanel4.visible" 
          :layoutOpts="{selfLayout: 'TABLE_24COL',parentLayout: 'TABLE_24COL',colMD: 24,}"
          :infoGroupMode="false"
          :titleBarCloseMode="0"
          :showCaption="false"
          :uIActionGroup="state.detailsModel.grouppanel4.uIActionGroup"
          @componentEvent="onComponentEvent">
            <AppFormItem 
              name="formitem4"
              label="更多表单项1"
              labelPos="LEFT"
              :labelWidth="200"
              :showLabel="true"
              :rules="state.rules.formitem4"
              :required="state.detailsModel.formitem4.required"
              :visible="state.detailsModel.formitem4.visible" 
              :layoutOpts="{parentLayout: 'TABLE_24COL',colMD: 24,}"
              >
              <div class="form-editor-container" style="">
              <AppInput
                name="formitem4"
                :disabled="state.detailsModel.formitem4.disabled"
                type="text"
                :value="state.data.formitem4"
                @editorEvent="onEditorEvent"
              />
              </div>
            </AppFormItem>
            <AppFormItem 
              name="formitem5"
              label="更多表单项2"
              labelPos="LEFT"
              :labelWidth="200"
              :showLabel="true"
              :rules="state.rules.formitem5"
              :required="state.detailsModel.formitem5.required"
              :visible="state.detailsModel.formitem5.visible" 
              :layoutOpts="{parentLayout: 'TABLE_24COL',colMD: 24,}"
              >
              <div class="form-editor-container" style="">
              <AppInput
                name="formitem5"
                :disabled="state.detailsModel.formitem5.disabled"
                type="text"
                :value="state.data.formitem5"
                @editorEvent="onEditorEvent"
              />
              </div>
            </AppFormItem>
        </AppFormGroup>
    </AppFormGroup>
    <AppFormRaw 
      name="rawitem5"
      :visible="state.detailsModel.rawitem5.visible"
      class="el-alert el-alert--info is-light"
      contentType="RAW"
      :layoutOpts="{parentLayout: 'TABLE_24COL',colMD: 24,}"
      value="分组中隐藏空值的表单项"
      />
    <AppFormGroup 
      name="grouppanel5"
      title="隐藏无值表单项"
      :visible="state.detailsModel.grouppanel5.visible" 
      :layoutOpts="{selfLayout: 'TABLE_24COL',parentLayout: 'TABLE_24COL',colMD: 24,}"
      :infoGroupMode="true"
      :titleBarCloseMode="0"
      :showCaption="true"
      :uIActionGroup="state.detailsModel.grouppanel5.uIActionGroup"
      @componentEvent="onComponentEvent">
        <AppFormItem 
          name="fieldx"
          label="X值"
          labelPos="LEFT"
          :labelWidth="200"
          :showLabel="true"
          :rules="state.rules.fieldx"
          :required="state.detailsModel.fieldx.required"
          :visible="state.detailsModel.fieldx.visible" 
          :layoutOpts="{parentLayout: 'TABLE_24COL',colMD: 24,}"
          >
          <div class="form-editor-container" style="">
          <AppSpan
            name="fieldx"
            :disabled="state.detailsModel.fieldx.disabled"
            dataType="6"
            :value="state.data.fieldx"
            :context="state.context"
            :viewParams="state.viewParams"/>
          </div>
        </AppFormItem>
        <AppFormItem 
          name="fieldy"
          label="Y值"
          labelPos="LEFT"
          :labelWidth="200"
          :showLabel="true"
          :rules="state.rules.fieldy"
          :required="state.detailsModel.fieldy.required"
          :visible="state.detailsModel.fieldy.visible" 
          :layoutOpts="{parentLayout: 'TABLE_24COL',colMD: 24,}"
          >
          <div class="form-editor-container" style="">
          <AppSpan
            name="fieldy"
            :disabled="state.detailsModel.fieldy.disabled"
            dataType="6"
            :value="state.data.fieldy"
            :context="state.context"
            :viewParams="state.viewParams"/>
          </div>
        </AppFormItem>
        <AppFormItem 
          name="fieldz"
          label="Z值"
          labelPos="LEFT"
          :labelWidth="200"
          :showLabel="true"
          :rules="state.rules.fieldz"
          :required="state.detailsModel.fieldz.required"
          :visible="state.detailsModel.fieldz.visible" 
          :layoutOpts="{parentLayout: 'TABLE_24COL',colMD: 24,}"
          >
          <div class="form-editor-container" style="">
          <AppSpan
            name="fieldz"
            :disabled="state.detailsModel.fieldz.disabled"
            dataType="6"
            :value="state.data.fieldz"
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
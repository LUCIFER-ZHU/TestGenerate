<script setup lang="ts">
import { Subject } from 'rxjs';
import { ctrlState } from './main-2-form-state';
import { FormControl, IActionParam, IParam, ControlAction, IContext } from '@core';
import ChartDataUsr2GridView from '@views/sample/chart-data-usr2-grid-view';
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
    name="Main_2"
    class="app-form"
    style=""
    :model="state.data"
    :rules="state.rules"
    ref="xDataCtrl"
  >
    <AppFormItem 
      name="begintime"
      label="必须大于当前时间"
      labelPos="LEFT"
      :labelWidth="130"
      :showLabel="true"
      :rules="state.rules.begintime"
      :required="state.detailsModel.begintime.required"
      :visible="state.detailsModel.begintime.visible" 
      :layoutOpts="{parentLayout: 'TABLE_24COL',colLG: 24,colMD: 24,}"
      >
      <div class="form-editor-container" style="width: 160.0px;">
      <AppDatePicker
        name="begintime"
        :disabled="state.detailsModel.begintime.disabled"
        dateFormat="YYYY-MM-DD HH:mm:ss"
        dateType="dateTime"
        :value="state.data.begintime"
        @editorEvent="onEditorEvent"
      />
      </div>
    </AppFormItem>
    <AppFormItem 
      name="year"
      label="系统值规则"
      labelPos="LEFT"
      :labelWidth="130"
      :showLabel="true"
      :rules="state.rules.year"
      :required="state.detailsModel.year.required"
      :visible="state.detailsModel.year.visible" 
      :layoutOpts="{parentLayout: 'TABLE_24COL',colLG: 24,colMD: 24,}"
      >
      <div class="form-editor-container" style="">
      <AppInput
        name="year"
        :disabled="state.detailsModel.year.disabled"
        type="text"
        :value="state.data.year"
        @editorEvent="onEditorEvent"
      />
      </div>
    </AppFormItem>
    <AppFormGroup 
      name="grouppanel1"
      title="关系界面"
      :visible="state.detailsModel.grouppanel1.visible" 
      :layoutOpts="{selfLayout: 'TABLE_24COL',parentLayout: 'TABLE_24COL',colLG: 24,colMD: 24,}"
      :infoGroupMode="false"
      :titleBarCloseMode="0"
      :showCaption="true"
      :uIActionGroup="state.detailsModel.grouppanel1.uIActionGroup"
      @componentEvent="onComponentEvent">
        <AppFormDruipart 
          name="druipart1" 
          title=""
          :formSubject="state.formSubject"
          :visible="state.detailsModel.druipart1.visible"
          viewCodeName="ChartDataUsr2GridView"
          :layoutOpts="{parentLayout: 'TABLE_24COL',colMD: 24,}"
          style="height: 600.0px;"
          paramItem="chartdata"
          deCodeName="chartdata"
          refreshItems="year;begintime"
          :context="context"
          :viewParams="viewParams"
          :localViewParams="{ 'n_datatype_eq':'%datatype%' }"
          :data="state.data"
          :viewSubject="state.viewSubject">
            <template #default="druipartParams">
            <ChartDataUsr2GridView
              :class="['app-view-layout--from-druipart']"
              :context="druipartParams.context"
              :viewParams="druipartParams.viewParams"
              :viewDefaultUsage="false"
              :showCaptionBar="false"
              openType="EMBED"
              :viewSubject="state.viewSubject"
              @viewEvent="druipartParams.viewEvent"
            >
            </ChartDataUsr2GridView>
            </template>
        </AppFormDruipart>
    </AppFormGroup>
    <AppFormItem 
      name="datatype"
      label="数据分类"
      labelPos="LEFT"
      :labelWidth="130"
      :showLabel="true"
      :rules="state.rules.datatype"
      :required="state.detailsModel.datatype.required"
      :visible="state.detailsModel.datatype.visible" 
      :layoutOpts="{parentLayout: 'TABLE_24COL',colLG: 24,colMD: 24,}"
      >
      <div class="form-editor-container" style="">
      <AppDropdownList
        name="datatype"
        codeListTag="Sample__DataType"
        codeListType="STATIC"
        :disabled="state.detailsModel.datatype.disabled"
        :context="state.context"
        :viewParams="state.viewParams"
        :value="state.data.datatype"
        :data="state.data"
        @editorEvent="onEditorEvent"
      /> 
      </div>
    </AppFormItem>
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
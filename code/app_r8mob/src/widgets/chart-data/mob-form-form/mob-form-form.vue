<script setup lang="ts">
import { Subject } from 'rxjs';
import { ctrlState } from './mob-form-form-state';
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
    name="MobForm"
    class="app-form"
    style=""
    :model="state.data"
    :rules="state.rules"
    ref="xDataCtrl"
  >
    <a-tabs class="app-form-page">
      <AppFormPage
        name="formpage1"
        :layoutOpts="{selfLayout: 'TABLE_24COL',}"
        :visible="state.detailsModel.formpage1.visible"
        class="form-red-border"
        key="formpage1"
        tab="基本信息"  
      >
        <template #tab>
          <AppIconText class="h2-title" iconClass="ribbon" text="基本信息"/>
        </template>
        <AppFormGroup 
          name="group1"
          title="图表基本信息"
          :visible="state.detailsModel.group1.visible" 
          :layoutOpts="{selfLayout: 'TABLE_24COL',parentLayout: 'TABLE_24COL',colMD: 24,}"
          class="form-red-border"
          titleClass="h1-title"
          iconClass="browsers"
          :infoGroupMode="false"
          :titleBarCloseMode="1"
          :showCaption="true"
          :uIActionGroup="state.detailsModel.group1.uIActionGroup"
          @componentEvent="onComponentEvent">
            <AppFormItem 
              name="chartdataname"
              label="图表名称"
              labelPos="LEFT"
              :labelWidth="130"
              :showLabel="true"
              :rules="state.rules.chartdataname"
              :required="state.detailsModel.chartdataname.required"
              :visible="state.detailsModel.chartdataname.visible" 
              :layoutOpts="{parentLayout: 'TABLE_24COL',colMD: 24,}"
              >
              <div class="form-editor-container" style="">
              </div>
            </AppFormItem>
            <AppFormItem 
              name="data"
              label="数据"
              labelPos="LEFT"
              :labelWidth="130"
              :showLabel="true"
              :rules="state.rules.data"
              :required="state.detailsModel.data.required"
              :visible="state.detailsModel.data.visible" 
              :layoutOpts="{parentLayout: 'TABLE_24COL',colMD: 24,}"
              >
              <div class="form-editor-container" style="">
              </div>
            </AppFormItem>
        </AppFormGroup>
        <AppFormItem 
          name="season"
          label="季度"
          labelPos="LEFT"
          :labelWidth="130"
          :showLabel="true"
          :rules="state.rules.season"
          :required="state.detailsModel.season.required"
          :visible="state.detailsModel.season.visible" 
          :layoutOpts="{parentLayout: 'TABLE_24COL',colMD: 24,}"
          class="form-red-border"
          labelClass="h2-title"
          >
          <div class="form-editor-container" style="">
          </div>
        </AppFormItem>
        <AppFormItem 
          name="totalprice"
          label="总计价格"
          labelPos="LEFT"
          :labelWidth="130"
          :showLabel="true"
          :rules="state.rules.totalprice"
          :required="state.detailsModel.totalprice.required"
          :visible="state.detailsModel.totalprice.visible" 
          :layoutOpts="{parentLayout: 'TABLE_24COL',colMD: 24,}"
          >
          <div class="form-editor-container" style="">
          </div>
        </AppFormItem>
        <AppFormItem 
          name="datatype"
          label="数据分类"
          labelPos="LEFT"
          :labelWidth="130"
          :showLabel="true"
          :rules="state.rules.datatype"
          :required="state.detailsModel.datatype.required"
          :visible="state.detailsModel.datatype.visible" 
          :layoutOpts="{parentLayout: 'TABLE_24COL',colMD: 24,}"
          >
          <div class="form-editor-container" style="">
          </div>
        </AppFormItem>
        <AppFormItem 
          name="formitem1"
          label="评分器"
          labelPos="LEFT"
          :labelWidth="130"
          :showLabel="true"
          :rules="state.rules.formitem1"
          :required="state.detailsModel.formitem1.required"
          :visible="state.detailsModel.formitem1.visible" 
          :layoutOpts="{parentLayout: 'TABLE_24COL',colMD: 24,}"
          >
          <div class="form-editor-container" style="">
          </div>
        </AppFormItem>
        <AppFormItem 
          name="data1"
          label="步进器"
          labelPos="LEFT"
          :labelWidth="130"
          :showLabel="true"
          :rules="state.rules.data1"
          :required="state.detailsModel.data1.required"
          :visible="state.detailsModel.data1.visible" 
          :layoutOpts="{parentLayout: 'TABLE_24COL',colMD: 24,}"
          >
          <div class="form-editor-container" style="">
          </div>
        </AppFormItem>
        <AppFormItem 
          name="formitem"
          label="数据选择"
          labelPos="LEFT"
          :labelWidth="130"
          :showLabel="true"
          :rules="state.rules.formitem"
          :required="state.detailsModel.formitem.required"
          :visible="state.detailsModel.formitem.visible" 
          :layoutOpts="{parentLayout: 'TABLE_24COL',colMD: 24,}"
          >
          <div class="form-editor-container" style="">
          </div>
        </AppFormItem>
        <AppFormItem 
          name="formitem3"
          label="标签"
          labelPos="LEFT"
          :labelWidth="130"
          :showLabel="true"
          :rules="state.rules.formitem3"
          :required="state.detailsModel.formitem3.required"
          :visible="state.detailsModel.formitem3.visible" 
          :layoutOpts="{parentLayout: 'TABLE_24COL',colMD: 24,}"
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
          label="滑动输入条"
          labelPos="LEFT"
          :labelWidth="130"
          :showLabel="true"
          :rules="state.rules.formitem4"
          :required="state.detailsModel.formitem4.required"
          :visible="state.detailsModel.formitem4.visible" 
          :layoutOpts="{parentLayout: 'TABLE_24COL',colMD: 24,}"
          >
          <div class="form-editor-container" style="">
          </div>
        </AppFormItem>
        <AppFormItem 
          name="formitem5"
          label="开关"
          labelPos="LEFT"
          :labelWidth="130"
          :showLabel="true"
          :rules="state.rules.formitem5"
          :required="state.detailsModel.formitem5.required"
          :visible="state.detailsModel.formitem5.visible" 
          :layoutOpts="{parentLayout: 'TABLE_24COL',colMD: 24,}"
          >
          <div class="form-editor-container" style="">
          </div>
        </AppFormItem>
        <AppFormItem 
          name="formitem6"
          label="下拉列表框"
          labelPos="LEFT"
          :labelWidth="130"
          :showLabel="true"
          :rules="state.rules.formitem6"
          :required="state.detailsModel.formitem6.required"
          :visible="state.detailsModel.formitem6.visible" 
          :layoutOpts="{parentLayout: 'TABLE_24COL',colMD: 24,}"
          >
          <div class="form-editor-container" style="">
          </div>
        </AppFormItem>
        <AppFormItem 
          name="formitem7"
          label="时间选择"
          labelPos="LEFT"
          :labelWidth="130"
          :showLabel="true"
          :rules="state.rules.formitem7"
          :required="state.detailsModel.formitem7.required"
          :visible="state.detailsModel.formitem7.visible" 
          :layoutOpts="{parentLayout: 'TABLE_24COL',colMD: 24,}"
          >
          <div class="form-editor-container" style="">
          </div>
        </AppFormItem>
        <AppFormButton
          name="button1"
          :layoutOpts="{parentLayout: 'TABLE_24COL',colMD: 24,}"
          :visible="state.detailsModel.button1.visible"
          :showCaption="true"
          caption="保存" 
          :uIAction="state.detailsModel.button1.uIAction"
          @action="onComponentEvent"
        />
        <AppFormGroup 
          name="grouppanel1"
          title="数据选择测试"
          :visible="state.detailsModel.grouppanel1.visible" 
          :layoutOpts="{selfLayout: 'TABLE_24COL',parentLayout: 'TABLE_24COL',colMD: 24,}"
          :infoGroupMode="false"
          :titleBarCloseMode="0"
          :showCaption="true"
          :uIActionGroup="state.detailsModel.grouppanel1.uIActionGroup"
          @componentEvent="onComponentEvent">
            <AppFormItem 
              name="formitem8"
              label="多数据单选"
              labelPos="LEFT"
              :labelWidth="130"
              :showLabel="true"
              :rules="state.rules.formitem8"
              :required="state.detailsModel.formitem8.required"
              :visible="state.detailsModel.formitem8.visible" 
              :layoutOpts="{parentLayout: 'TABLE_24COL',colMD: 24,}"
              >
              <div class="form-editor-container" style="">
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
              :layoutOpts="{parentLayout: 'TABLE_24COL',colMD: 24,}"
              >
              <div class="form-editor-container" style="">
              </div>
            </AppFormItem>
            <AppFormItem 
              name="formitem10"
              label="多数据多选"
              labelPos="LEFT"
              :labelWidth="130"
              :showLabel="true"
              :rules="state.rules.formitem10"
              :required="state.detailsModel.formitem10.required"
              :visible="state.detailsModel.formitem10.visible" 
              :layoutOpts="{parentLayout: 'TABLE_24COL',colMD: 24,}"
              >
              <div class="form-editor-container" style="">
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
              :layoutOpts="{parentLayout: 'TABLE_24COL',colMD: 24,}"
              >
              <div class="form-editor-container" style="">
              </div>
            </AppFormItem>
            <AppFormItem 
              name="formitem12"
              label="树单选"
              labelPos="LEFT"
              :labelWidth="130"
              :showLabel="true"
              :rules="state.rules.formitem12"
              :required="state.detailsModel.formitem12.required"
              :visible="state.detailsModel.formitem12.visible" 
              :layoutOpts="{parentLayout: 'TABLE_24COL',colMD: 24,}"
              >
              <div class="form-editor-container" style="">
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
              :layoutOpts="{parentLayout: 'TABLE_24COL',colMD: 24,}"
              >
              <div class="form-editor-container" style="">
              </div>
            </AppFormItem>
            <AppFormItem 
              name="formitem14"
              label="树多选"
              labelPos="LEFT"
              :labelWidth="130"
              :showLabel="true"
              :rules="state.rules.formitem14"
              :required="state.detailsModel.formitem14.required"
              :visible="state.detailsModel.formitem14.visible" 
              :layoutOpts="{parentLayout: 'TABLE_24COL',colMD: 24,}"
              >
              <div class="form-editor-container" style="">
              </div>
            </AppFormItem>
            <AppFormItem 
              name="formitem15"
              label="值项"
              labelPos="LEFT"
              :labelWidth="130"
              :showLabel="true"
              :rules="state.rules.formitem15"
              :required="state.detailsModel.formitem15.required"
              :visible="state.detailsModel.formitem15.visible" 
              :layoutOpts="{parentLayout: 'TABLE_24COL',colMD: 24,}"
              >
              <div class="form-editor-container" style="">
              </div>
            </AppFormItem>
        </AppFormGroup>
      </AppFormPage>
      <AppFormPage
        name="formpage2"
        :layoutOpts="{selfLayout: 'TABLE_24COL',}"
        :visible="state.detailsModel.formpage2.visible"
        key="formpage2"
        tab="表单分页"  
      >
        <template #tab>
          <AppIconText text="表单分页"/>
        </template>
        <AppFormItem 
          name="year"
          label="年份"
          labelPos="LEFT"
          :labelWidth="130"
          :showLabel="true"
          :rules="state.rules.year"
          :required="state.detailsModel.year.required"
          :visible="state.detailsModel.year.visible" 
          :layoutOpts="{parentLayout: 'TABLE_24COL',colMD: 24,}"
          >
          <div class="form-editor-container" style="">
          </div>
        </AppFormItem>
      </AppFormPage>
    </a-tabs>
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
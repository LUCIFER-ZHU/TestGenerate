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
    <a-tabs class="app-form-page">
      <AppFormPage
        name="formpage1"
        :layoutOpts="{selfLayout: 'TABLE_24COL',}"
        :visible="state.detailsModel.formpage1.visible"
        key="formpage1"
        tab="基本信息"  
      >
        <template #tab>
          <AppIconText text="基本信息"/>
        </template>
        <AppFormGroup 
          name="group1"
          title="图表基本信息"
          :visible="state.detailsModel.group1.visible" 
          :layoutOpts="{selfLayout: 'TABLE_24COL',parentLayout: 'TABLE_24COL',colLG: 24,colMD: 24,}"
          :infoGroupMode="false"
          :titleBarCloseMode="0"
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
              :layoutOpts="{parentLayout: 'TABLE_24COL',colLG: 8,colMD: 24,}"
              >
              <div class="form-editor-container" style="">
              <AppInput
                name="chartdataname"
                :disabled="state.detailsModel.chartdataname.disabled"
                :maxLength="200"
                type="text"
                :value="state.data.chartdataname"
                @editorEvent="onEditorEvent"
              />
              </div>
            </AppFormItem>
            <AppFormItem 
              name="year"
              label="年份"
              labelPos="LEFT"
              :labelWidth="130"
              :showLabel="true"
              :rules="state.rules.year"
              :required="state.detailsModel.year.required"
              :visible="state.detailsModel.year.visible" 
              :layoutOpts="{parentLayout: 'TABLE_24COL',colLG: 8,colMD: 24,}"
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
            <AppFormItem 
              name="season"
              label="季度"
              labelPos="LEFT"
              :labelWidth="130"
              :showLabel="true"
              :rules="state.rules.season"
              :required="state.detailsModel.season.required"
              :visible="state.detailsModel.season.visible" 
              :layoutOpts="{parentLayout: 'TABLE_24COL',colLG: 8,colMD: 24,}"
              >
              <div class="form-editor-container" style="">
              <AppInput
                name="season"
                :disabled="state.detailsModel.season.disabled"
                type="text"
                :value="state.data.season"
                @editorEvent="onEditorEvent"
              />
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
              :layoutOpts="{parentLayout: 'TABLE_24COL',colLG: 8,colMD: 24,}"
              >
              <div class="form-editor-container" style="">
              <AppInput
                name="totalprice"
                :disabled="state.detailsModel.totalprice.disabled"
                :maxLength="100"
                type="text"
                :value="state.data.totalprice"
                @editorEvent="onEditorEvent"
              />
              </div>
            </AppFormItem>
            <AppFormItem 
              name="month"
              label="月份"
              labelPos="LEFT"
              :labelWidth="130"
              :showLabel="true"
              :rules="state.rules.month"
              :required="state.detailsModel.month.required"
              :visible="state.detailsModel.month.visible" 
              :layoutOpts="{parentLayout: 'TABLE_24COL',colLG: 8,colMD: 24,}"
              >
              <div class="form-editor-container" style="">
              <AppInput
                name="month"
                :disabled="state.detailsModel.month.disabled"
                type="text"
                :value="state.data.month"
                @editorEvent="onEditorEvent"
              />
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
              :layoutOpts="{parentLayout: 'TABLE_24COL',colLG: 8,colMD: 24,}"
              >
              <div class="form-editor-container" style="">
              <AppInput
                name="latitude"
                :disabled="state.detailsModel.latitude.disabled"
                type="text"
                :value="state.data.latitude"
                @editorEvent="onEditorEvent"
              />
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
              :layoutOpts="{parentLayout: 'TABLE_24COL',colLG: 8,colMD: 24,}"
              >
              <div class="form-editor-container" style="">
              <AppInput
                name="longitude"
                :disabled="state.detailsModel.longitude.disabled"
                type="text"
                :value="state.data.longitude"
                @editorEvent="onEditorEvent"
              />
              </div>
            </AppFormItem>
            <AppFormItem 
              name="datetime"
              label="数据时间"
              labelPos="LEFT"
              :labelWidth="130"
              :showLabel="true"
              :rules="state.rules.datetime"
              :required="state.detailsModel.datetime.required"
              :visible="state.detailsModel.datetime.visible" 
              :layoutOpts="{parentLayout: 'TABLE_24COL',colLG: 8,colMD: 24,}"
              >
              <div class="form-editor-container" style="width: 160.0px;">
              <AppDatePicker
                name="datetime"
                :disabled="state.detailsModel.datetime.disabled"
                dateFormat="YYYY-MM-DD HH:mm:ss"
                dateType="dateTime"
                :value="state.data.datetime"
                @editorEvent="onEditorEvent"
              />
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
              :layoutOpts="{parentLayout: 'TABLE_24COL',colLG: 8,colMD: 24,}"
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
            <AppFormItem 
              name="data"
              label="数据"
              labelPos="LEFT"
              :labelWidth="130"
              :showLabel="true"
              :rules="state.rules.data"
              :required="state.detailsModel.data.required"
              :visible="state.detailsModel.data.visible" 
              :layoutOpts="{parentLayout: 'TABLE_24COL',colLG: 8,colMD: 24,}"
              >
              <div class="form-editor-container" style="">
              <AppInput
                name="data"
                :disabled="state.detailsModel.data.disabled"
                type="number"
                :value="state.data.data"
                @editorEvent="onEditorEvent"
              />
              </div>
            </AppFormItem>
            <AppFormItem 
              name="begintime"
              label="开始时间"
              labelPos="LEFT"
              :labelWidth="130"
              :showLabel="true"
              :rules="state.rules.begintime"
              :required="state.detailsModel.begintime.required"
              :visible="state.detailsModel.begintime.visible" 
              :layoutOpts="{parentLayout: 'TABLE_24COL',colLG: 8,colMD: 24,}"
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
              name="endtime"
              label="结束时间"
              labelPos="LEFT"
              :labelWidth="130"
              :showLabel="true"
              :rules="state.rules.endtime"
              :required="state.detailsModel.endtime.required"
              :visible="state.detailsModel.endtime.visible" 
              :layoutOpts="{parentLayout: 'TABLE_24COL',colLG: 8,colMD: 24,}"
              >
              <div class="form-editor-container" style="width: 160.0px;">
              <AppDatePicker
                name="endtime"
                :disabled="state.detailsModel.endtime.disabled"
                dateFormat="YYYY-MM-DD HH:mm:ss"
                dateType="dateTime"
                :value="state.data.endtime"
                @editorEvent="onEditorEvent"
              />
              </div>
            </AppFormItem>
            <AppFormItem 
              name="open"
              label="开盘值"
              labelPos="LEFT"
              :labelWidth="130"
              :showLabel="true"
              :rules="state.rules.open"
              :required="state.detailsModel.open.required"
              :visible="state.detailsModel.open.visible" 
              :layoutOpts="{parentLayout: 'TABLE_24COL',colLG: 8,colMD: 24,}"
              >
              <div class="form-editor-container" style="">
              <AppInput
                name="open"
                :disabled="state.detailsModel.open.disabled"
                type="text"
                :value="state.data.open"
                @editorEvent="onEditorEvent"
              />
              </div>
            </AppFormItem>
            <AppFormItem 
              name="close"
              label="收盘值"
              labelPos="LEFT"
              :labelWidth="130"
              :showLabel="true"
              :rules="state.rules.close"
              :required="state.detailsModel.close.required"
              :visible="state.detailsModel.close.visible" 
              :layoutOpts="{parentLayout: 'TABLE_24COL',colLG: 8,colMD: 24,}"
              >
              <div class="form-editor-container" style="">
              <AppInput
                name="close"
                :disabled="state.detailsModel.close.disabled"
                type="text"
                :value="state.data.close"
                @editorEvent="onEditorEvent"
              />
              </div>
            </AppFormItem>
            <AppFormItem 
              name="lowest"
              label="最小值"
              labelPos="LEFT"
              :labelWidth="130"
              :showLabel="true"
              :rules="state.rules.lowest"
              :required="state.detailsModel.lowest.required"
              :visible="state.detailsModel.lowest.visible" 
              :layoutOpts="{parentLayout: 'TABLE_24COL',colLG: 8,colMD: 24,}"
              >
              <div class="form-editor-container" style="">
              <AppInput
                name="lowest"
                :disabled="state.detailsModel.lowest.disabled"
                type="text"
                :value="state.data.lowest"
                @editorEvent="onEditorEvent"
              />
              </div>
            </AppFormItem>
            <AppFormItem 
              name="highest"
              label="最大值"
              labelPos="LEFT"
              :labelWidth="130"
              :showLabel="true"
              :rules="state.rules.highest"
              :required="state.detailsModel.highest.required"
              :visible="state.detailsModel.highest.visible" 
              :layoutOpts="{parentLayout: 'TABLE_24COL',colLG: 8,colMD: 24,}"
              >
              <div class="form-editor-container" style="">
              <AppInput
                name="highest"
                :disabled="state.detailsModel.highest.disabled"
                type="text"
                :value="state.data.highest"
                @editorEvent="onEditorEvent"
              />
              </div>
            </AppFormItem>
            <AppFormItem 
              name="planincome"
              label="计划收入"
              labelPos="LEFT"
              :labelWidth="130"
              :showLabel="true"
              :rules="state.rules.planincome"
              :required="state.detailsModel.planincome.required"
              :visible="state.detailsModel.planincome.visible" 
              :layoutOpts="{parentLayout: 'TABLE_24COL',colLG: 8,colMD: 24,}"
              >
              <div class="form-editor-container" style="">
              <AppDropdownList
                name="planincome"
                :disabled="state.detailsModel.planincome.disabled"
                :localContext="{ 'textctxdyna':'app','testctx':'1111111' }"
                :localParam="{ 'testviewparamdyna':'app','testviewparam':'22222' }"
                :context="state.context"
                :viewParams="state.viewParams"
                :value="state.data.planincome"
                :data="state.data"
                @editorEvent="onEditorEvent"
              /> 
              </div>
            </AppFormItem>
            <AppFormItem 
              name="realincome"
              label="实际收入"
              labelPos="LEFT"
              :labelWidth="130"
              :showLabel="true"
              :rules="state.rules.realincome"
              :required="state.detailsModel.realincome.required"
              :visible="state.detailsModel.realincome.visible" 
              :layoutOpts="{parentLayout: 'TABLE_24COL',colLG: 8,colMD: 24,}"
              >
              <div class="form-editor-container" style="">
              <AppInput
                name="realincome"
                :disabled="state.detailsModel.realincome.disabled"
                type="text"
                :value="state.data.realincome"
                @editorEvent="onEditorEvent"
              />
              </div>
            </AppFormItem>
        </AppFormGroup>
        <AppFormGroup 
          name="grouppanel1"
          title="分组面板"
          :visible="state.detailsModel.grouppanel1.visible" 
          :layoutOpts="{selfLayout: 'TABLE_24COL',parentLayout: 'TABLE_24COL',colLG: 24,colMD: 24,}"
          :infoGroupMode="false"
          :titleBarCloseMode="0"
          :showCaption="true"
          :uIActionGroup="state.detailsModel.grouppanel1.uIActionGroup"
          @componentEvent="onComponentEvent">
            <AppFormItem 
              name="deptid"
              label="组织部门标识"
              labelPos="LEFT"
              :labelWidth="130"
              :showLabel="true"
              :rules="state.rules.deptid"
              :required="state.detailsModel.deptid.required"
              :visible="state.detailsModel.deptid.visible" 
              :layoutOpts="{parentLayout: 'TABLE_24COL',colLG: 8,colMD: 24,}"
              >
              <div class="form-editor-container" style="">
              <AppInput
                name="deptid"
                :disabled="state.detailsModel.deptid.disabled"
                :maxLength="60"
                type="text"
                :value="state.data.deptid"
                @editorEvent="onEditorEvent"
              />
              </div>
            </AppFormItem>
            <AppFormItem 
              name="orgid"
              label="组织机构标识"
              labelPos="LEFT"
              :labelWidth="130"
              :showLabel="true"
              :rules="state.rules.orgid"
              :required="state.detailsModel.orgid.required"
              :visible="state.detailsModel.orgid.visible" 
              :layoutOpts="{parentLayout: 'TABLE_24COL',colLG: 8,colMD: 24,}"
              >
              <div class="form-editor-container" style="">
              <AppInput
                name="orgid"
                :disabled="state.detailsModel.orgid.disabled"
                :maxLength="60"
                type="text"
                :value="state.data.orgid"
                @editorEvent="onEditorEvent"
              />
              </div>
            </AppFormItem>
            <AppFormItem 
              name="imagepath"
              label="图片路径"
              labelPos="LEFT"
              :labelWidth="130"
              :showLabel="true"
              :rules="state.rules.imagepath"
              :required="state.detailsModel.imagepath.required"
              :visible="state.detailsModel.imagepath.visible" 
              :layoutOpts="{parentLayout: 'TABLE_24COL',colLG: 8,colMD: 24,}"
              >
              <div class="form-editor-container" style="">
              <AppInput
                name="imagepath"
                :disabled="state.detailsModel.imagepath.disabled"
                :maxLength="100"
                type="text"
                :value="state.data.imagepath"
                @editorEvent="onEditorEvent"
              />
              </div>
            </AppFormItem>
        </AppFormGroup>
      </AppFormPage>
      <AppFormPage
        name="formpage2"
        :layoutOpts="{selfLayout: 'TABLE_24COL',}"
        :visible="state.detailsModel.formpage2.visible"
        key="formpage2"
        tab="其它"  
      >
        <template #tab>
          <AppIconText text="其它"/>
        </template>
        <AppFormGroup 
          name="group2"
          title="操作信息"
          :visible="state.detailsModel.group2.visible" 
          :layoutOpts="{selfLayout: 'TABLE_24COL',parentLayout: 'TABLE_24COL',colMD: 24,}"
          :infoGroupMode="false"
          :titleBarCloseMode="0"
          :showCaption="true"
          :uIActionGroup="state.detailsModel.group2.uIActionGroup"
          @componentEvent="onComponentEvent">
            <AppFormItem 
              name="createman"
              label="建立人"
              labelPos="LEFT"
              :labelWidth="130"
              :showLabel="true"
              :rules="state.rules.createman"
              :required="state.detailsModel.createman.required"
              :visible="state.detailsModel.createman.visible" 
              :layoutOpts="{parentLayout: 'TABLE_24COL',colMD: 24,}"
              >
              <div class="form-editor-container" style="">
              <AppSpan
                name="createman"
                :disabled="state.detailsModel.createman.disabled"
                codeListTag="SysOperator"
                codeListType="DYNAMIC"
                dataType="25"
                :value="state.data.createman"
                :context="state.context"
                :viewParams="state.viewParams"/>
              </div>
            </AppFormItem>
            <AppFormItem 
              name="createdate"
              label="建立时间"
              labelPos="LEFT"
              :labelWidth="130"
              :showLabel="true"
              :rules="state.rules.createdate"
              :required="state.detailsModel.createdate.required"
              :visible="state.detailsModel.createdate.visible" 
              :layoutOpts="{parentLayout: 'TABLE_24COL',colMD: 24,}"
              >
              <div class="form-editor-container" style="">
              <AppSpan
                name="createdate"
                :disabled="state.detailsModel.createdate.disabled"
                dataType="5"
                valueFormat="YYYY-MM-DD HH:mm:ss"
                :value="state.data.createdate"
                :context="state.context"
                :viewParams="state.viewParams"/>
              </div>
            </AppFormItem>
            <AppFormItem 
              name="updateman"
              label="更新人"
              labelPos="LEFT"
              :labelWidth="130"
              :showLabel="true"
              :rules="state.rules.updateman"
              :required="state.detailsModel.updateman.required"
              :visible="state.detailsModel.updateman.visible" 
              :layoutOpts="{parentLayout: 'TABLE_24COL',colMD: 24,}"
              >
              <div class="form-editor-container" style="">
              <AppSpan
                name="updateman"
                :disabled="state.detailsModel.updateman.disabled"
                codeListTag="SysOperator"
                codeListType="DYNAMIC"
                dataType="25"
                :value="state.data.updateman"
                :context="state.context"
                :viewParams="state.viewParams"/>
              </div>
            </AppFormItem>
            <AppFormItem 
              name="updatedate"
              label="更新时间"
              labelPos="LEFT"
              :labelWidth="130"
              :showLabel="true"
              :rules="state.rules.updatedate"
              :required="state.detailsModel.updatedate.required"
              :visible="state.detailsModel.updatedate.visible" 
              :layoutOpts="{parentLayout: 'TABLE_24COL',colMD: 24,}"
              >
              <div class="form-editor-container" style="">
              <AppSpan
                name="updatedate"
                :disabled="state.detailsModel.updatedate.disabled"
                dataType="5"
                valueFormat="YYYY-MM-DD HH:mm:ss"
                :value="state.data.updatedate"
                :context="state.context"
                :viewParams="state.viewParams"/>
              </div>
            </AppFormItem>
        </AppFormGroup>
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
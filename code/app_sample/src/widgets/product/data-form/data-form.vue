<script setup lang="ts">
import { Subject } from 'rxjs';
import { ctrlState } from './data-form-state';
import { FormControl, IActionParam, IParam, ControlAction, IContext } from '@core';
import ProductCategoryGridView from '@views/sample/product-category-grid-view';
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
    name="Data"
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
          title="产品基本信息"
          :visible="state.detailsModel.group1.visible" 
          :layoutOpts="{selfLayout: 'TABLE_24COL',parentLayout: 'TABLE_24COL',colMD: 24,}"
          :infoGroupMode="false"
          :titleBarCloseMode="0"
          :showCaption="true"
          :uIActionGroup="state.detailsModel.group1.uIActionGroup"
          @componentEvent="onComponentEvent">
            <AppFormItem 
              name="productname"
              label="产品名称"
              labelPos="LEFT"
              :labelWidth="130"
              :showLabel="true"
              :rules="state.rules.productname"
              :required="state.detailsModel.productname.required"
              :visible="state.detailsModel.productname.visible" 
              :layoutOpts="{parentLayout: 'TABLE_24COL',colLG: 12,colMD: 24,}"
              >
              <div class="form-editor-container" style="">
              <AppInput
                name="productname"
                :disabled="state.detailsModel.productname.disabled"
                :maxLength="200"
                type="text"
                :value="state.data.productname"
                @editorEvent="onEditorEvent"
              />
              </div>
            </AppFormItem>
            <AppFormItem 
              name="productcode"
              label="产品编码"
              labelPos="LEFT"
              :labelWidth="130"
              :showLabel="true"
              :rules="state.rules.productcode"
              :required="state.detailsModel.productcode.required"
              :visible="state.detailsModel.productcode.visible" 
              :layoutOpts="{parentLayout: 'TABLE_24COL',colLG: 12,colMD: 24,}"
              >
              <div class="form-editor-container" style="">
              <AppInput
                name="productcode"
                :disabled="state.detailsModel.productcode.disabled"
                :maxLength="100"
                type="text"
                :value="state.data.productcode"
                @editorEvent="onEditorEvent"
              />
              </div>
            </AppFormItem>
        </AppFormGroup>
        <AppFormGroup 
          name="grouppanel1"
          title="产品类别"
          :visible="state.detailsModel.grouppanel1.visible" 
          :layoutOpts="{selfLayout: 'TABLE_24COL',parentLayout: 'TABLE_24COL',colMD: 24,}"
          :infoGroupMode="false"
          :titleBarCloseMode="0"
          :showCaption="false"
          :uIActionGroup="state.detailsModel.grouppanel1.uIActionGroup"
          @componentEvent="onComponentEvent">
            <AppFormDruipart 
              name="druipart1" 
              title="产品类别"
              :formSubject="state.formSubject"
              :visible="state.detailsModel.druipart1.visible"
              viewCodeName="ProductCategoryGridView"
              :layoutOpts="{parentLayout: 'TABLE_24COL',colMD: 24,}"
              style="height: 500.0px;"
              paramItem="srfkey"
              deCodeName="product"
              :context="context"
              :viewParams="viewParams"
              :data="state.data"
              :viewSubject="state.viewSubject">
                <template #default="druipartParams">
                <ProductCategoryGridView
                  :class="['app-view-layout--from-druipart']"
                  :context="druipartParams.context"
                  :viewParams="druipartParams.viewParams"
                  :viewDefaultUsage="false"
                  :showCaptionBar="false"
                  openType="EMBED"
                  :viewSubject="state.viewSubject"
                  @viewEvent="druipartParams.viewEvent"
                >
                </ProductCategoryGridView>
                </template>
            </AppFormDruipart>
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
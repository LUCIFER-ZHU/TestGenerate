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
          title="联系人基本信息"
          :visible="state.detailsModel.group1.visible" 
          :layoutOpts="{selfLayout: 'TABLE_24COL',parentLayout: 'TABLE_24COL',colMD: 24,}"
          :infoGroupMode="false"
          :titleBarCloseMode="0"
          :showCaption="true"
          :uIActionGroup="state.detailsModel.group1.uIActionGroup"
          @componentEvent="onComponentEvent">
            <AppFormGroup 
              name="grouppanel1"
              title="分组面板"
              :visible="state.detailsModel.grouppanel1.visible" 
              :layoutOpts="{selfLayout: 'TABLE_24COL',parentLayout: 'TABLE_24COL',colLG: 8,colMD: 24,}"
              :infoGroupMode="false"
              :titleBarCloseMode="0"
              :showCaption="false"
              :uIActionGroup="state.detailsModel.grouppanel1.uIActionGroup"
              @componentEvent="onComponentEvent">
                <AppFormItem 
                  name="image"
                  label="头像"
                  labelPos="LEFT"
                  :labelWidth="130"
                  :showLabel="true"
                  :rules="state.rules.image"
                  :required="state.detailsModel.image.required"
                  :visible="state.detailsModel.image.visible" 
                  :layoutOpts="{parentLayout: 'TABLE_24COL',colMD: 24,}"
                  >
                  <div class="form-editor-container" style="">
                  <AppUpload
                    name="image"
                    :disabled="state.detailsModel.image.disabled"
                    :limit="1"
                    accept='image/*'
                    listType="picture-card"
                    :value="state.data.image"
                    @editorEvent="onEditorEvent"
                  />
                  </div>
                </AppFormItem>
            </AppFormGroup>
            <AppFormGroup 
              name="grouppanel2"
              title="分组面板"
              :visible="state.detailsModel.grouppanel2.visible" 
              :layoutOpts="{selfLayout: 'TABLE_24COL',parentLayout: 'TABLE_24COL',colLG: 16,colMD: 16,colSM: 16,}"
              :infoGroupMode="false"
              :titleBarCloseMode="0"
              :showCaption="false"
              :uIActionGroup="state.detailsModel.grouppanel2.uIActionGroup"
              @componentEvent="onComponentEvent">
                <AppFormItem 
                  name="contactname"
                  label="联系人姓名"
                  labelPos="LEFT"
                  :labelWidth="130"
                  :showLabel="true"
                  :rules="state.rules.contactname"
                  :required="state.detailsModel.contactname.required"
                  :visible="state.detailsModel.contactname.visible" 
                  :layoutOpts="{parentLayout: 'TABLE_24COL',colLG: 12,colMD: 12,colSM: 12,}"
                  >
                  <div class="form-editor-container" style="">
                  <AppInput
                    name="contactname"
                    :disabled="state.detailsModel.contactname.disabled"
                    :maxLength="200"
                    type="text"
                    :value="state.data.contactname"
                    @editorEvent="onEditorEvent"
                  />
                  </div>
                </AppFormItem>
                <AppFormItem 
                  name="post"
                  label="工作岗位"
                  labelPos="LEFT"
                  :labelWidth="130"
                  :showLabel="true"
                  :rules="state.rules.post"
                  :required="state.detailsModel.post.required"
                  :visible="state.detailsModel.post.visible" 
                  :layoutOpts="{parentLayout: 'TABLE_24COL',colLG: 12,colMD: 12,colSM: 12,}"
                  >
                  <div class="form-editor-container" style="">
                  <AppInput
                    name="post"
                    :disabled="state.detailsModel.post.disabled"
                    :maxLength="100"
                    type="text"
                    :value="state.data.post"
                    @editorEvent="onEditorEvent"
                  />
                  </div>
                </AppFormItem>
                <AppFormItem 
                  name="phone"
                  label="电话"
                  labelPos="LEFT"
                  :labelWidth="130"
                  :showLabel="true"
                  :rules="state.rules.phone"
                  :required="state.detailsModel.phone.required"
                  :visible="state.detailsModel.phone.visible" 
                  :layoutOpts="{parentLayout: 'TABLE_24COL',colLG: 12,colMD: 12,colSM: 12,}"
                  >
                  <div class="form-editor-container" style="">
                  <AppInput
                    name="phone"
                    :disabled="state.detailsModel.phone.disabled"
                    :maxLength="100"
                    type="text"
                    :value="state.data.phone"
                    @editorEvent="onEditorEvent"
                  />
                  </div>
                </AppFormItem>
                <AppFormItem 
                  name="mobile"
                  label="手机"
                  labelPos="LEFT"
                  :labelWidth="130"
                  :showLabel="true"
                  :rules="state.rules.mobile"
                  :required="state.detailsModel.mobile.required"
                  :visible="state.detailsModel.mobile.visible" 
                  :layoutOpts="{parentLayout: 'TABLE_24COL',colLG: 12,colMD: 12,colSM: 12,}"
                  >
                  <div class="form-editor-container" style="">
                  <AppInput
                    name="mobile"
                    :disabled="state.detailsModel.mobile.disabled"
                    :maxLength="100"
                    type="text"
                    :value="state.data.mobile"
                    @editorEvent="onEditorEvent"
                  />
                  </div>
                </AppFormItem>
                <AppFormItem 
                  name="email"
                  label="电子邮箱"
                  labelPos="LEFT"
                  :labelWidth="130"
                  :showLabel="true"
                  :rules="state.rules.email"
                  :required="state.detailsModel.email.required"
                  :visible="state.detailsModel.email.visible" 
                  :layoutOpts="{parentLayout: 'TABLE_24COL',colMD: 24,}"
                  >
                  <div class="form-editor-container" style="">
                  <AppInput
                    name="email"
                    :disabled="state.detailsModel.email.disabled"
                    :maxLength="100"
                    type="text"
                    :value="state.data.email"
                    @editorEvent="onEditorEvent"
                  />
                  </div>
                </AppFormItem>
            </AppFormGroup>
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
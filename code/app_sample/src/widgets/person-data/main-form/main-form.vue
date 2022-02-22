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
    <AppFormGroup 
      name="group1"
      title="人员数据基本信息"
      :visible="state.detailsModel.group1.visible" 
      :layoutOpts="{selfLayout: 'TABLE_24COL',parentLayout: 'TABLE_24COL',colMD: 24,}"
      :infoGroupMode="false"
      :titleBarCloseMode="0"
      :showCaption="false"
      :uIActionGroup="state.detailsModel.group1.uIActionGroup"
      @componentEvent="onComponentEvent">
        <AppFormGroup 
          name="grouppanel1"
          title="分组面板"
          :visible="state.detailsModel.grouppanel1.visible" 
          :layoutOpts="{selfLayout: 'TABLE_24COL',parentLayout: 'TABLE_24COL',colLG: 16,colMD: 24,}"
          :infoGroupMode="false"
          :titleBarCloseMode="0"
          :showCaption="false"
          :uIActionGroup="state.detailsModel.grouppanel1.uIActionGroup"
          @componentEvent="onComponentEvent">
            <AppFormItem 
              name="persondataname"
              label="姓名"
              labelPos="LEFT"
              :labelWidth="130"
              :showLabel="true"
              :rules="state.rules.persondataname"
              :required="state.detailsModel.persondataname.required"
              :visible="state.detailsModel.persondataname.visible" 
              :layoutOpts="{parentLayout: 'TABLE_24COL',colMD: 24,}"
              >
              <div class="form-editor-container" style="">
              <AppInput
                name="persondataname"
                :disabled="state.detailsModel.persondataname.disabled"
                :maxLength="200"
                type="text"
                :value="state.data.persondataname"
                @editorEvent="onEditorEvent"
              />
              </div>
            </AppFormItem>
            <AppFormItem 
              name="orgdataname"
              label="组织名称"
              labelPos="LEFT"
              :labelWidth="130"
              :showLabel="true"
              :rules="state.rules.orgdataname"
              :required="state.detailsModel.orgdataname.required"
              :visible="state.detailsModel.orgdataname.visible" 
              :layoutOpts="{parentLayout: 'TABLE_24COL',colMD: 24,}"
              >
              <div class="form-editor-container" style="">
              <AppSpan
                name="orgdataname"
                :disabled="state.detailsModel.orgdataname.disabled"
                dataType="25"
                :value="state.data.orgdataname"
                :context="state.context"
                :viewParams="state.viewParams"/>
              </div>
            </AppFormItem>
            <AppFormItem 
              name="deptdataname"
              label="部门名称"
              labelPos="LEFT"
              :labelWidth="130"
              :showLabel="true"
              :rules="state.rules.deptdataname"
              :required="state.detailsModel.deptdataname.required"
              :visible="state.detailsModel.deptdataname.visible" 
              :layoutOpts="{parentLayout: 'TABLE_24COL',colMD: 24,}"
              >
              <div class="form-editor-container" style="">
              <AppSpan
                name="deptdataname"
                :disabled="state.detailsModel.deptdataname.disabled"
                dataType="25"
                :value="state.data.deptdataname"
                :context="state.context"
                :viewParams="state.viewParams"/>
              </div>
            </AppFormItem>
            <AppFormItem 
              name="idcard"
              label="身份证"
              labelPos="LEFT"
              :labelWidth="130"
              :showLabel="true"
              :rules="state.rules.idcard"
              :required="state.detailsModel.idcard.required"
              :visible="state.detailsModel.idcard.visible" 
              :layoutOpts="{parentLayout: 'TABLE_24COL',colMD: 24,}"
              >
              <div class="form-editor-container" style="">
              <AppInput
                name="idcard"
                :disabled="state.detailsModel.idcard.disabled"
                :maxLength="18"
                type="text"
                :value="state.data.idcard"
                @editorEvent="onEditorEvent"
              />
              </div>
            </AppFormItem>
            <AppFormItem 
              name="gender"
              label="性别"
              labelPos="LEFT"
              :labelWidth="130"
              :showLabel="true"
              :rules="state.rules.gender"
              :required="state.detailsModel.gender.required"
              :visible="state.detailsModel.gender.visible" 
              :layoutOpts="{parentLayout: 'TABLE_24COL',colMD: 24,}"
              >
              <div class="form-editor-container" style="">
              <AppDropdownList
                name="gender"
                codeListTag="Sample__Gender"
                codeListType="STATIC"
                :disabled="state.detailsModel.gender.disabled"
                :context="state.context"
                :viewParams="state.viewParams"
                :value="state.data.gender"
                :data="state.data"
                @editorEvent="onEditorEvent"
              /> 
              </div>
            </AppFormItem>
            <AppFormItem 
              name="age"
              label="年龄"
              labelPos="LEFT"
              :labelWidth="130"
              :showLabel="true"
              :rules="state.rules.age"
              :required="state.detailsModel.age.required"
              :visible="state.detailsModel.age.visible" 
              :layoutOpts="{parentLayout: 'TABLE_24COL',colMD: 24,}"
              >
              <div class="form-editor-container" style="">
              <AppInput
                name="age"
                :disabled="state.detailsModel.age.disabled"
                type="text"
                :value="state.data.age"
                @editorEvent="onEditorEvent"
              />
              </div>
            </AppFormItem>
        </AppFormGroup>
        <AppFormItem 
          name="avatar"
          label="头像"
          labelPos="LEFT"
          :labelWidth="130"
          :showLabel="true"
          :rules="state.rules.avatar"
          :required="state.detailsModel.avatar.required"
          :visible="state.detailsModel.avatar.visible" 
          :layoutOpts="{parentLayout: 'TABLE_24COL',colLG: 8,colMD: 24,}"
          style="width: 300.0px;height: 300.0px;"
          >
          <div class="form-editor-container" style="">
          <AppUpload
            name="avatar"
            :disabled="state.detailsModel.avatar.disabled"
            :limit="1"
            accept='image/*'
            listType="picture-card"
            :value="state.data.avatar"
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
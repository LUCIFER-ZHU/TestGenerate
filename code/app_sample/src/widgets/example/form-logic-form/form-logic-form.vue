<script setup lang="ts">
import { Subject } from 'rxjs';
import { ctrlState } from './form-logic-form-state';
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
    name="FormLogic"
    class="app-form"
    style=""
    :model="state.data"
    :rules="state.rules"
    ref="xDataCtrl"
  >
    <AppFormGroup 
      name="group2"
      title="基础控制逻辑"
      :visible="state.detailsModel.group2.visible" 
      :layoutOpts="{selfLayout: 'TABLE_24COL',parentLayout: 'TABLE_24COL',colMD: 24,}"
      :infoGroupMode="false"
      :titleBarCloseMode="0"
      :showCaption="true"
      :uIActionGroup="state.detailsModel.group2.uIActionGroup"
      @componentEvent="onComponentEvent">
        <AppFormGroup 
          name="grouppanel1_1"
          title="分组面板"
          :visible="state.detailsModel.grouppanel1_1.visible" 
          :layoutOpts="{selfLayout: 'TABLE_24COL',parentLayout: 'TABLE_24COL',colMD: 24,}"
          :infoGroupMode="false"
          :titleBarCloseMode="0"
          :showCaption="false"
          :uIActionGroup="state.detailsModel.grouppanel1_1.uIActionGroup"
          @componentEvent="onComponentEvent">
            <AppFormItem 
              name="formitem"
              label="是否显示"
              labelPos="LEFT"
              :labelWidth="130"
              :showLabel="true"
              :rules="state.rules.formitem"
              :required="state.detailsModel.formitem.required"
              :visible="state.detailsModel.formitem.visible" 
              :layoutOpts="{parentLayout: 'TABLE_24COL',colLG: 6,colMD: 24,}"
              >
              <div class="form-editor-container" style="">
              <AppDropdownList
                name="formitem"
                codeListTag="YesNo"
                codeListType="STATIC"
                :disabled="state.detailsModel.formitem.disabled"
                :context="state.context"
                :viewParams="state.viewParams"
                :value="state.data.formitem"
                :data="state.data"
                @editorEvent="onEditorEvent"
              /> 
              </div>
            </AppFormItem>
            <AppFormItem 
              name="formitem1"
              label="显示项"
              labelPos="LEFT"
              :labelWidth="130"
              :showLabel="true"
              :rules="state.rules.formitem1"
              :required="state.detailsModel.formitem1.required"
              :visible="state.detailsModel.formitem1.visible" 
              :layoutOpts="{parentLayout: 'TABLE_24COL',colLG: 18,colMD: 24,}"
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
        <AppFormGroup 
          name="grouppanel2_1"
          title="分组面板"
          :visible="state.detailsModel.grouppanel2_1.visible" 
          :layoutOpts="{selfLayout: 'TABLE_24COL',parentLayout: 'TABLE_24COL',colMD: 24,}"
          :infoGroupMode="false"
          :titleBarCloseMode="0"
          :showCaption="false"
          :uIActionGroup="state.detailsModel.grouppanel2_1.uIActionGroup"
          @componentEvent="onComponentEvent">
            <AppFormItem 
              name="formitem2"
              label="是否启用"
              labelPos="LEFT"
              :labelWidth="130"
              :showLabel="true"
              :rules="state.rules.formitem2"
              :required="state.detailsModel.formitem2.required"
              :visible="state.detailsModel.formitem2.visible" 
              :layoutOpts="{parentLayout: 'TABLE_24COL',colLG: 6,colMD: 24,}"
              >
              <div class="form-editor-container" style="">
              <AppDropdownList
                name="formitem2"
                codeListTag="YesNo"
                codeListType="STATIC"
                :disabled="state.detailsModel.formitem2.disabled"
                :context="state.context"
                :viewParams="state.viewParams"
                :value="state.data.formitem2"
                :data="state.data"
                @editorEvent="onEditorEvent"
              /> 
              </div>
            </AppFormItem>
            <AppFormItem 
              name="formitem3"
              label="启用项"
              labelPos="LEFT"
              :labelWidth="130"
              :showLabel="true"
              :rules="state.rules.formitem3"
              :required="state.detailsModel.formitem3.required"
              :visible="state.detailsModel.formitem3.visible" 
              :layoutOpts="{parentLayout: 'TABLE_24COL',colLG: 18,colMD: 24,}"
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
        </AppFormGroup>
        <AppFormGroup 
          name="grouppanel3_1"
          title="分组面板"
          :visible="state.detailsModel.grouppanel3_1.visible" 
          :layoutOpts="{selfLayout: 'TABLE_24COL',parentLayout: 'TABLE_24COL',colMD: 24,}"
          :infoGroupMode="false"
          :titleBarCloseMode="0"
          :showCaption="false"
          :uIActionGroup="state.detailsModel.grouppanel3_1.uIActionGroup"
          @componentEvent="onComponentEvent">
            <AppFormItem 
              name="formitem4"
              label="是否空输入"
              labelPos="LEFT"
              :labelWidth="130"
              :showLabel="true"
              :rules="state.rules.formitem4"
              :required="state.detailsModel.formitem4.required"
              :visible="state.detailsModel.formitem4.visible" 
              :layoutOpts="{parentLayout: 'TABLE_24COL',colLG: 6,colMD: 24,}"
              >
              <div class="form-editor-container" style="">
              <AppDropdownList
                name="formitem4"
                codeListTag="YesNo"
                codeListType="STATIC"
                :disabled="state.detailsModel.formitem4.disabled"
                :context="state.context"
                :viewParams="state.viewParams"
                :value="state.data.formitem4"
                :data="state.data"
                @editorEvent="onEditorEvent"
              /> 
              </div>
            </AppFormItem>
            <AppFormItem 
              name="formitem5"
              label="空输入项"
              labelPos="LEFT"
              :labelWidth="130"
              :showLabel="true"
              :rules="state.rules.formitem5"
              :required="state.detailsModel.formitem5.required"
              :visible="state.detailsModel.formitem5.visible" 
              :layoutOpts="{parentLayout: 'TABLE_24COL',colLG: 18,colMD: 24,}"
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
        <AppFormGroup 
          name="grouppanel4_1"
          title="分组面板"
          :visible="state.detailsModel.grouppanel4_1.visible" 
          :layoutOpts="{selfLayout: 'TABLE_24COL',parentLayout: 'TABLE_24COL',colMD: 24,}"
          :infoGroupMode="false"
          :titleBarCloseMode="0"
          :showCaption="false"
          :uIActionGroup="state.detailsModel.grouppanel4_1.uIActionGroup"
          @componentEvent="onComponentEvent">
            <AppFormItem 
              name="formitem6"
              label="值变化置空"
              labelPos="LEFT"
              :labelWidth="130"
              :showLabel="true"
              :rules="state.rules.formitem6"
              :required="state.detailsModel.formitem6.required"
              :visible="state.detailsModel.formitem6.visible" 
              :layoutOpts="{parentLayout: 'TABLE_24COL',colLG: 6,colMD: 24,}"
              >
              <div class="form-editor-container" style="">
              <AppInput
                name="formitem6"
                :disabled="state.detailsModel.formitem6.disabled"
                type="text"
                :value="state.data.formitem6"
                @editorEvent="onEditorEvent"
              />
              </div>
            </AppFormItem>
            <AppFormItem 
              name="formitem7"
              label="置空项"
              labelPos="LEFT"
              :labelWidth="130"
              :showLabel="true"
              :rules="state.rules.formitem7"
              :required="state.detailsModel.formitem7.required"
              :visible="state.detailsModel.formitem7.visible" 
              :layoutOpts="{parentLayout: 'TABLE_24COL',colLG: 18,colMD: 24,}"
              >
              <div class="form-editor-container" style="">
              <AppInput
                name="formitem7"
                :disabled="state.detailsModel.formitem7.disabled"
                type="text"
                :value="state.data.formitem7"
                @editorEvent="onEditorEvent"
              />
              </div>
            </AppFormItem>
            <AppFormGroup 
              name="grouppanel8"
              title="组合逻辑控制"
              :visible="state.detailsModel.grouppanel8.visible" 
              :layoutOpts="{selfLayout: 'TABLE_24COL',parentLayout: 'TABLE_24COL',colMD: 24,}"
              :infoGroupMode="false"
              :titleBarCloseMode="0"
              :showCaption="true"
              :uIActionGroup="state.detailsModel.grouppanel8.uIActionGroup"
              @componentEvent="onComponentEvent">
                <AppFormGroup 
                  name="grouppanel5"
                  title="分组面板"
                  :visible="state.detailsModel.grouppanel5.visible" 
                  :layoutOpts="{selfLayout: 'TABLE_24COL',parentLayout: 'TABLE_24COL',colMD: 24,}"
                  :infoGroupMode="false"
                  :titleBarCloseMode="0"
                  :showCaption="false"
                  :uIActionGroup="state.detailsModel.grouppanel5.uIActionGroup"
                  @componentEvent="onComponentEvent">
                    <AppFormItem 
                      name="formitem11"
                      label="值1"
                      labelPos="LEFT"
                      :labelWidth="130"
                      :showLabel="true"
                      :rules="state.rules.formitem11"
                      :required="state.detailsModel.formitem11.required"
                      :visible="state.detailsModel.formitem11.visible" 
                      :layoutOpts="{parentLayout: 'TABLE_24COL',colLG: 6,colMD: 24,}"
                      >
                      <div class="form-editor-container" style="">
                      <AppInput
                        name="formitem11"
                        :disabled="state.detailsModel.formitem11.disabled"
                        type="text"
                        :value="state.data.formitem11"
                        @editorEvent="onEditorEvent"
                      />
                      </div>
                    </AppFormItem>
                    <AppFormItem 
                      name="formitem12"
                      label="值2"
                      labelPos="LEFT"
                      :labelWidth="130"
                      :showLabel="true"
                      :rules="state.rules.formitem12"
                      :required="state.detailsModel.formitem12.required"
                      :visible="state.detailsModel.formitem12.visible" 
                      :layoutOpts="{parentLayout: 'TABLE_24COL',colLG: 6,colMD: 24,}"
                      >
                      <div class="form-editor-container" style="">
                      <AppInput
                        name="formitem12"
                        :disabled="state.detailsModel.formitem12.disabled"
                        type="text"
                        :value="state.data.formitem12"
                        @editorEvent="onEditorEvent"
                      />
                      </div>
                    </AppFormItem>
                    <AppFormItem 
                      name="formitem13"
                      label="表单项"
                      labelPos="LEFT"
                      :labelWidth="130"
                      :showLabel="true"
                      :rules="state.rules.formitem13"
                      :required="state.detailsModel.formitem13.required"
                      :visible="state.detailsModel.formitem13.visible" 
                      :layoutOpts="{parentLayout: 'TABLE_24COL',colLG: 12,colMD: 24,}"
                      >
                      <div class="form-editor-container" style="">
                      <AppInput
                        name="formitem13"
                        :disabled="state.detailsModel.formitem13.disabled"
                        placeholder="值1和值2有值时启用"
                        type="text"
                        :value="state.data.formitem13"
                        @editorEvent="onEditorEvent"
                      />
                      </div>
                    </AppFormItem>
                </AppFormGroup>
                <AppFormGroup 
                  name="grouppanel7"
                  title="分组面板"
                  :visible="state.detailsModel.grouppanel7.visible" 
                  :layoutOpts="{selfLayout: 'TABLE_24COL',parentLayout: 'TABLE_24COL',colMD: 24,}"
                  :infoGroupMode="false"
                  :titleBarCloseMode="0"
                  :showCaption="false"
                  :uIActionGroup="state.detailsModel.grouppanel7.uIActionGroup"
                  @componentEvent="onComponentEvent">
                    <AppFormItem 
                      name="formitem14"
                      label="值3"
                      labelPos="LEFT"
                      :labelWidth="130"
                      :showLabel="true"
                      :rules="state.rules.formitem14"
                      :required="state.detailsModel.formitem14.required"
                      :visible="state.detailsModel.formitem14.visible" 
                      :layoutOpts="{parentLayout: 'TABLE_24COL',colLG: 6,colMD: 24,}"
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
                      label="值4"
                      labelPos="LEFT"
                      :labelWidth="130"
                      :showLabel="true"
                      :rules="state.rules.formitem15"
                      :required="state.detailsModel.formitem15.required"
                      :visible="state.detailsModel.formitem15.visible" 
                      :layoutOpts="{parentLayout: 'TABLE_24COL',colLG: 6,colMD: 24,}"
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
                    <AppFormItem 
                      name="formitem16"
                      label="表单项"
                      labelPos="LEFT"
                      :labelWidth="130"
                      :showLabel="true"
                      :rules="state.rules.formitem16"
                      :required="state.detailsModel.formitem16.required"
                      :visible="state.detailsModel.formitem16.visible" 
                      :layoutOpts="{parentLayout: 'TABLE_24COL',colLG: 12,colMD: 24,}"
                      >
                      <div class="form-editor-container" style="">
                      <AppInput
                        name="formitem16"
                        :disabled="state.detailsModel.formitem16.disabled"
                        placeholder="值3或值4有值时启用"
                        type="text"
                        :value="state.data.formitem16"
                        @editorEvent="onEditorEvent"
                      />
                      </div>
                    </AppFormItem>
                </AppFormGroup>
            </AppFormGroup>
        </AppFormGroup>
    </AppFormGroup>
    <AppFormGroup 
      name="group1"
      title="层级选择"
      :visible="state.detailsModel.group1.visible" 
      :layoutOpts="{selfLayout: 'TABLE_24COL',parentLayout: 'TABLE_24COL',colMD: 24,}"
      :infoGroupMode="false"
      :titleBarCloseMode="0"
      :showCaption="true"
      :uIActionGroup="state.detailsModel.group1.uIActionGroup"
      @componentEvent="onComponentEvent">
        <AppFormGroup 
          name="grouppanel1"
          title="省市区"
          :visible="state.detailsModel.grouppanel1.visible" 
          :layoutOpts="{selfLayout: 'FLEX',parentLayout: 'TABLE_24COL',colMD: 24,}"
          :infoGroupMode="false"
          :titleBarCloseMode="0"
          :showCaption="false"
          :uIActionGroup="state.detailsModel.grouppanel1.uIActionGroup"
          @componentEvent="onComponentEvent">
            <AppFormItem 
              name="provincename"
              label="省份"
              labelPos="LEFT"
              :labelWidth="130"
              :showLabel="true"
              :rules="state.rules.provincename"
              :required="state.detailsModel.provincename.required"
              :visible="state.detailsModel.provincename.visible" 
              :layoutOpts="{parentLayout: 'FLEX',grow: -1,}"
              >
              <div class="form-editor-container" style="">
              <AppDataPicker
                name="provincename"
                :data="state.data"
                valueItem="provinceid"
                :disabled="state.detailsModel.provincename.disabled"
                :context="state.context"
                :viewParams="state.viewParams"
                deMajorField="provincename"
                deKeyField="provinceid"
                :isDropdown="true"
                :value="state.data.provincename"
                @editorEvent="onEditorEvent"
              />
              </div>
            </AppFormItem>
            <AppFormItem 
              name="cityname"
              label="市"
              labelPos="LEFT"
              :labelWidth="25"
              :showLabel="true"
              :rules="state.rules.cityname"
              :required="state.detailsModel.cityname.required"
              :visible="state.detailsModel.cityname.visible" 
              :layoutOpts="{parentLayout: 'FLEX',grow: -1,}"
              >
              <div class="form-editor-container" style="">
              <AppDataPicker
                name="cityname"
                :data="state.data"
                valueItem="cityid"
                :disabled="state.detailsModel.cityname.disabled"
                :localParam="{ 'n_provinceid_eq':'%provinceid%' }"
                :context="state.context"
                :viewParams="state.viewParams"
                deMajorField="cityname"
                deKeyField="cityid"
                :isDropdown="true"
                :value="state.data.cityname"
                @editorEvent="onEditorEvent"
              />
              </div>
            </AppFormItem>
            <AppFormItem 
              name="districtname"
              label="区/县"
              labelPos="LEFT"
              :labelWidth="45"
              :showLabel="true"
              :rules="state.rules.districtname"
              :required="state.detailsModel.districtname.required"
              :visible="state.detailsModel.districtname.visible" 
              :layoutOpts="{parentLayout: 'FLEX',grow: -1,}"
              >
              <div class="form-editor-container" style="">
              <AppDataPicker
                name="districtname"
                :data="state.data"
                valueItem="districtid"
                :disabled="state.detailsModel.districtname.disabled"
                :localParam="{ 'n_cityid_eq':'%cityid%' }"
                :context="state.context"
                :viewParams="state.viewParams"
                deMajorField="districtname"
                deKeyField="districtid"
                :isDropdown="true"
                :value="state.data.districtname"
                @editorEvent="onEditorEvent"
              />
              </div>
            </AppFormItem>
        </AppFormGroup>
    </AppFormGroup>
    <AppFormGroup 
      name="grouppanel9"
      title="表单项更新（直接代码）"
      :visible="state.detailsModel.grouppanel9.visible" 
      :layoutOpts="{selfLayout: 'TABLE_24COL',parentLayout: 'TABLE_24COL',colMD: 24,}"
      :infoGroupMode="false"
      :titleBarCloseMode="0"
      :showCaption="true"
      :uIActionGroup="state.detailsModel.grouppanel9.uIActionGroup"
      @componentEvent="onComponentEvent">
        <AppFormGroup 
          name="grouppanel10"
          title="分组面板"
          :visible="state.detailsModel.grouppanel10.visible" 
          :layoutOpts="{selfLayout: 'FLEX',parentLayout: 'TABLE_24COL',colLG: 24,colMD: 24,}"
          :infoGroupMode="false"
          :titleBarCloseMode="0"
          :showCaption="false"
          :uIActionGroup="state.detailsModel.grouppanel10.uIActionGroup"
          @componentEvent="onComponentEvent">
            <AppFormItem 
              name="fieldx1"
              label="(x值"
              labelPos="LEFT"
              :labelWidth="130"
              :showLabel="true"
              :rules="state.rules.fieldx1"
              :required="state.detailsModel.fieldx1.required"
              :visible="state.detailsModel.fieldx1.visible" 
              :layoutOpts="{parentLayout: 'FLEX',grow: -1,}"
              >
              <div class="form-editor-container" style="">
              <AppInput
                name="fieldx1"
                :disabled="state.detailsModel.fieldx1.disabled"
                type="number"
                :value="state.data.fieldx1"
                @editorEvent="onEditorEvent"
              />
              </div>
            </AppFormItem>
            <AppFormItem 
              name="fieldy1"
              label="+Y值"
              labelPos="LEFT"
              :labelWidth="50"
              :showLabel="true"
              :rules="state.rules.fieldy1"
              :required="state.detailsModel.fieldy1.required"
              :visible="state.detailsModel.fieldy1.visible" 
              :layoutOpts="{parentLayout: 'FLEX',grow: -1,}"
              >
              <div class="form-editor-container" style="">
              <AppInput
                name="fieldy1"
                :disabled="state.detailsModel.fieldy1.disabled"
                type="number"
                :value="state.data.fieldy1"
                @editorEvent="onEditorEvent"
              />
              </div>
            </AppFormItem>
            <AppFormItem 
              name="fieldz1"
              label=")*2=Z值"
              labelPos="LEFT"
              :labelWidth="80"
              :showLabel="true"
              :rules="state.rules.fieldz1"
              :required="state.detailsModel.fieldz1.required"
              :visible="state.detailsModel.fieldz1.visible" 
              :layoutOpts="{parentLayout: 'FLEX',grow: -1,}"
              >
              <div class="form-editor-container" style="">
              <AppSpan
                name="fieldz1"
                :disabled="state.detailsModel.fieldz1.disabled"
                dataType="25"
                :value="state.data.fieldz1"
                :context="state.context"
                :viewParams="state.viewParams"/>
              </div>
            </AppFormItem>
        </AppFormGroup>
        <AppFormItem 
          name="formitem18"
          label=""
          labelPos="LEFT"
          :labelWidth="130"
          :showLabel="true"
          :rules="state.rules.formitem18"
          :required="state.detailsModel.formitem18.required"
          :visible="state.detailsModel.formitem18.visible" 
          :layoutOpts="{parentLayout: 'TABLE_24COL',colLG: 24,colMD: 24,}"
          class="el-alert el-alert--info is-light"
          >
          <div class="form-editor-container" style="">
          <AppSpan
            name="formitem18"
            :disabled="state.detailsModel.formitem18.disabled"
            dataType="25"
            :value="state.data.formitem18"
            :context="state.context"
            :viewParams="state.viewParams"/>
          </div>
        </AppFormItem>
    </AppFormGroup>
    <AppFormGroup 
      name="grouppanel2"
      title="表单项更新（调用行为）"
      :visible="state.detailsModel.grouppanel2.visible" 
      :layoutOpts="{selfLayout: 'TABLE_24COL',parentLayout: 'TABLE_24COL',colMD: 24,}"
      :infoGroupMode="false"
      :titleBarCloseMode="0"
      :showCaption="true"
      :uIActionGroup="state.detailsModel.grouppanel2.uIActionGroup"
      @componentEvent="onComponentEvent">
        <AppFormGroup 
          name="grouppanel6"
          title="分组面板"
          :visible="state.detailsModel.grouppanel6.visible" 
          :layoutOpts="{selfLayout: 'FLEX',parentLayout: 'TABLE_24COL',colLG: 24,colMD: 24,}"
          :infoGroupMode="false"
          :titleBarCloseMode="0"
          :showCaption="false"
          :uIActionGroup="state.detailsModel.grouppanel6.uIActionGroup"
          @componentEvent="onComponentEvent">
            <AppFormItem 
              name="fieldx"
              label="(x值"
              labelPos="LEFT"
              :labelWidth="130"
              :showLabel="true"
              :rules="state.rules.fieldx"
              :required="state.detailsModel.fieldx.required"
              :visible="state.detailsModel.fieldx.visible" 
              :layoutOpts="{parentLayout: 'FLEX',grow: -1,}"
              >
              <div class="form-editor-container" style="">
              <AppInput
                name="fieldx"
                :disabled="state.detailsModel.fieldx.disabled"
                type="text"
                :value="state.data.fieldx"
                @editorEvent="onEditorEvent"
              />
              </div>
            </AppFormItem>
            <AppFormItem 
              name="fieldy"
              label="+Y值"
              labelPos="LEFT"
              :labelWidth="50"
              :showLabel="true"
              :rules="state.rules.fieldy"
              :required="state.detailsModel.fieldy.required"
              :visible="state.detailsModel.fieldy.visible" 
              :layoutOpts="{parentLayout: 'FLEX',grow: -1,}"
              >
              <div class="form-editor-container" style="">
              <AppInput
                name="fieldy"
                :disabled="state.detailsModel.fieldy.disabled"
                type="text"
                :value="state.data.fieldy"
                @editorEvent="onEditorEvent"
              />
              </div>
            </AppFormItem>
            <AppFormItem 
              name="fieldz"
              label=")*2=Z值"
              labelPos="LEFT"
              :labelWidth="80"
              :showLabel="true"
              :rules="state.rules.fieldz"
              :required="state.detailsModel.fieldz.required"
              :visible="state.detailsModel.fieldz.visible" 
              :layoutOpts="{parentLayout: 'FLEX',grow: -1,}"
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
        <AppFormItem 
          name="formitem17"
          label=""
          labelPos="LEFT"
          :labelWidth="130"
          :showLabel="true"
          :rules="state.rules.formitem17"
          :required="state.detailsModel.formitem17.required"
          :visible="state.detailsModel.formitem17.visible" 
          :layoutOpts="{parentLayout: 'TABLE_24COL',colLG: 24,colMD: 24,}"
          class="el-alert el-alert--info is-light"
          >
          <div class="form-editor-container" style="">
          <AppSpan
            name="formitem17"
            :disabled="state.detailsModel.formitem17.disabled"
            dataType="25"
            :value="state.data.formitem17"
            :context="state.context"
            :viewParams="state.viewParams"/>
          </div>
        </AppFormItem>
    </AppFormGroup>
    <AppFormGroup 
      name="grouppanel3"
      :title="state.data.formitem8"
      :visible="state.detailsModel.grouppanel3.visible" 
      :layoutOpts="{selfLayout: 'TABLE_24COL',parentLayout: 'TABLE_24COL',colMD: 24,}"
      :infoGroupMode="false"
      :titleBarCloseMode="0"
      :showCaption="true"
      :uIActionGroup="state.detailsModel.grouppanel3.uIActionGroup"
      @componentEvent="onComponentEvent">
        <AppFormItem 
          name="formitem8"
          label=""
          labelPos="NONE"
          :labelWidth="0"
          :showLabel="false"
          :rules="state.rules.formitem8"
          :required="state.detailsModel.formitem8.required"
          :visible="state.detailsModel.formitem8.visible" 
          :layoutOpts="{parentLayout: 'TABLE_24COL',colMD: 24,}"
          >
          <div class="form-editor-container" style="">
          <AppInput
            name="formitem8"
            :disabled="state.detailsModel.formitem8.disabled"
            type="text"
            :value="state.data.formitem8"
            @editorEvent="onEditorEvent"
          />
          </div>
        </AppFormItem>
    </AppFormGroup>
    <AppFormGroup 
      name="grouppanel4"
      title="动态表单项标签标题"
      :visible="state.detailsModel.grouppanel4.visible" 
      :layoutOpts="{selfLayout: 'TABLE_24COL',parentLayout: 'TABLE_24COL',colMD: 24,}"
      :infoGroupMode="false"
      :titleBarCloseMode="0"
      :showCaption="true"
      :uIActionGroup="state.detailsModel.grouppanel4.uIActionGroup"
      @componentEvent="onComponentEvent">
        <AppFormItem 
          name="formitem10"
          label=""
          labelPos="NONE"
          :labelWidth="0"
          :showLabel="false"
          :rules="state.rules.formitem10"
          :required="state.detailsModel.formitem10.required"
          :visible="state.detailsModel.formitem10.visible" 
          :layoutOpts="{parentLayout: 'TABLE_24COL',colLG: 12,colMD: 24,}"
          >
          <div class="form-editor-container" style="">
          <AppInput
            name="formitem10"
            :disabled="state.detailsModel.formitem10.disabled"
            placeholder="请输入信息以触发"
            type="text"
            :value="state.data.formitem10"
            @editorEvent="onEditorEvent"
          />
          </div>
        </AppFormItem>
        <AppFormItem 
          name="formitem9"
          :label="state.data.formitem10"
          labelPos="LEFT"
          :labelWidth="130"
          :showLabel="true"
          :rules="state.rules.formitem9"
          :required="state.detailsModel.formitem9.required"
          :visible="state.detailsModel.formitem9.visible" 
          :layoutOpts="{parentLayout: 'TABLE_24COL',colLG: 12,colMD: 24,}"
          >
          <div class="form-editor-container" style="">
          <AppInput
            name="formitem9"
            :disabled="state.detailsModel.formitem9.disabled"
            type="text"
            :value="state.data.formitem9"
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
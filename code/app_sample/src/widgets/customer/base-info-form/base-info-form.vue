<script setup lang="ts">
import { Subject } from 'rxjs';
import { ctrlState } from './base-info-form-state';
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
    name="BaseInfo"
    class="app-form app-info-form"
    style=""
    :model="state.data"
    :rules="state.rules"
    ref="xDataCtrl"
  >
    <AppFormGroup 
      name="group1"
      title="客户基本信息"
      :visible="state.detailsModel.group1.visible" 
      :layoutOpts="{selfLayout: 'TABLE_24COL',parentLayout: 'TABLE_24COL',colMD: 24,}"
      :infoGroupMode="true"
      :titleBarCloseMode="0"
      :showCaption="false"
      :uIActionGroup="state.detailsModel.group1.uIActionGroup"
      @componentEvent="onComponentEvent">
        <AppFormGroup 
          name="grouppanel2"
          title="头部"
          :visible="state.detailsModel.grouppanel2.visible" 
          :layoutOpts="{selfLayout: 'TABLE_24COL',parentLayout: 'TABLE_24COL',colMD: 24,}"
          :infoGroupMode="true"
          :titleBarCloseMode="0"
          :showCaption="false"
          :uIActionGroup="state.detailsModel.grouppanel2.uIActionGroup"
          @componentEvent="onComponentEvent">
            <AppFormGroup 
              name="grouppanel7"
              title="头部左边"
              :visible="state.detailsModel.grouppanel7.visible" 
              :layoutOpts="{selfLayout: 'TABLE_24COL',parentLayout: 'TABLE_24COL',colLG: 12,colMD: 12,}"
              :infoGroupMode="true"
              :titleBarCloseMode="0"
              :showCaption="false"
              :uIActionGroup="state.detailsModel.grouppanel7.uIActionGroup"
              @componentEvent="onComponentEvent">
                <AppFormItem 
                  name="customername"
                  label=""
                  labelPos="LEFT"
                  :labelWidth="130"
                  :showLabel="true"
                  :rules="state.rules.customername"
                  :required="state.detailsModel.customername.required"
                  :visible="state.detailsModel.customername.visible" 
                  :layoutOpts="{parentLayout: 'TABLE_24COL',colMD: 24,}"
                  >
                  <div class="form-editor-container" style="width: 400.0px;height: 80.0px">
                  <AppSpan
                    name="customername"
                    :disabled="state.detailsModel.customername.disabled"
                    dataType="25"
                    :value="state.data.customername"
                    :context="state.context"
                    :viewParams="state.viewParams"/>
                  </div>
                </AppFormItem>
                <AppFormItem 
                  name="type"
                  label=""
                  labelPos="LEFT"
                  :labelWidth="130"
                  :showLabel="true"
                  :rules="state.rules.type"
                  :required="state.detailsModel.type.required"
                  :visible="state.detailsModel.type.visible" 
                  :layoutOpts="{parentLayout: 'TABLE_24COL',colMD: 24,}"
                  >
                  <div class="form-editor-container" style="">
                  <AppSpan
                    name="type"
                    :disabled="state.detailsModel.type.disabled"
                    codeListTag="Sample__CustomerType"
                    codeListType="STATIC"
                    dataType="25"
                    :value="state.data.type"
                    :context="state.context"
                    :viewParams="state.viewParams"/>
                  </div>
                </AppFormItem>
            </AppFormGroup>
            <AppFormGroup 
              name="grouppanel8"
              title="头部右边"
              :visible="state.detailsModel.grouppanel8.visible" 
              :layoutOpts="{selfLayout: 'TABLE_24COL',parentLayout: 'TABLE_24COL',colLG: 12,colMD: 12,}"
              :infoGroupMode="true"
              :titleBarCloseMode="0"
              :showCaption="false"
              :uIActionGroup="state.detailsModel.grouppanel8.uIActionGroup"
              @componentEvent="onComponentEvent">
                <AppFormItem 
                  name="image"
                  label="图像"
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
        </AppFormGroup>
        <AppFormGroup 
          name="grouppanel3"
          title="中间"
          :visible="state.detailsModel.grouppanel3.visible" 
          :layoutOpts="{selfLayout: 'TABLE_24COL',parentLayout: 'TABLE_24COL',colMD: 24,}"
          :infoGroupMode="true"
          :titleBarCloseMode="0"
          :showCaption="false"
          :uIActionGroup="state.detailsModel.grouppanel3.uIActionGroup"
          @componentEvent="onComponentEvent">
            <AppFormGroup 
              name="grouppanel6"
              title="地址"
              :visible="state.detailsModel.grouppanel6.visible" 
              :layoutOpts="{selfLayout: 'TABLE_24COL',parentLayout: 'TABLE_24COL',colLG: 12,colMD: 12,}"
              :infoGroupMode="true"
              :titleBarCloseMode="0"
              :showCaption="false"
              :uIActionGroup="state.detailsModel.grouppanel6.uIActionGroup"
              @componentEvent="onComponentEvent">
                <AppFormItem 
                  name="pcustomername"
                  label="上级客户"
                  labelPos="LEFT"
                  :labelWidth="130"
                  :showLabel="true"
                  :rules="state.rules.pcustomername"
                  :required="state.detailsModel.pcustomername.required"
                  :visible="state.detailsModel.pcustomername.visible" 
                  :layoutOpts="{parentLayout: 'TABLE_24COL',colMD: 24,}"
                  >
                  <div class="form-editor-container" style="">
                  <AppSpan
                    name="pcustomername"
                    :disabled="state.detailsModel.pcustomername.disabled"
                    dataType="25"
                    :value="state.data.pcustomername"
                    :context="state.context"
                    :viewParams="state.viewParams"/>
                  </div>
                </AppFormItem>
                <AppFormGroup 
                  name="grouppanel1"
                  title="省市区"
                  :visible="state.detailsModel.grouppanel1.visible" 
                  :layoutOpts="{selfLayout: 'FLEX',parentLayout: 'TABLE_24COL',colMD: 24,}"
                  :infoGroupMode="true"
                  :titleBarCloseMode="0"
                  :showCaption="false"
                  :uIActionGroup="state.detailsModel.grouppanel1.uIActionGroup"
                  @componentEvent="onComponentEvent">
                    <AppFormItem 
                      name="provincename"
                      label="公司地址"
                      labelPos="LEFT"
                      :labelWidth="130"
                      :showLabel="true"
                      :rules="state.rules.provincename"
                      :required="state.detailsModel.provincename.required"
                      :visible="state.detailsModel.provincename.visible" 
                      :layoutOpts="{parentLayout: 'FLEX',grow: 1,}"
                      >
                      <div class="form-editor-container" style="">
                      <AppSpan
                        name="provincename"
                        :disabled="state.detailsModel.provincename.disabled"
                        dataType="25"
                        :value="state.data.provincename"
                        :context="state.context"
                        :viewParams="state.viewParams"/>
                      </div>
                    </AppFormItem>
                    <AppFormItem 
                      name="cityname"
                      label="市"
                      labelPos="NONE"
                      :labelWidth="0"
                      :showLabel="false"
                      :rules="state.rules.cityname"
                      :required="state.detailsModel.cityname.required"
                      :visible="state.detailsModel.cityname.visible" 
                      :layoutOpts="{parentLayout: 'FLEX',grow: 1,}"
                      >
                      <div class="form-editor-container" style="">
                      <AppSpan
                        name="cityname"
                        :disabled="state.detailsModel.cityname.disabled"
                        dataType="25"
                        :localParam="{ 'n_provinceid_eq':'%provinceid%' }"
                        :value="state.data.cityname"
                        :context="state.context"
                        :viewParams="state.viewParams"/>
                      </div>
                    </AppFormItem>
                    <AppFormItem 
                      name="districtname"
                      label="区/县"
                      labelPos="NONE"
                      :labelWidth="0"
                      :showLabel="false"
                      :rules="state.rules.districtname"
                      :required="state.detailsModel.districtname.required"
                      :visible="state.detailsModel.districtname.visible" 
                      :layoutOpts="{parentLayout: 'FLEX',grow: 1,}"
                      >
                      <div class="form-editor-container" style="">
                      <AppSpan
                        name="districtname"
                        :disabled="state.detailsModel.districtname.disabled"
                        dataType="25"
                        :localParam="{ 'n_cityid_eq':'%cityid%' }"
                        :value="state.data.districtname"
                        :context="state.context"
                        :viewParams="state.viewParams"/>
                      </div>
                    </AppFormItem>
                </AppFormGroup>
                <AppFormItem 
                  name="street"
                  label=""
                  labelPos="LEFT"
                  :labelWidth="130"
                  :showLabel="true"
                  :rules="state.rules.street"
                  :required="state.detailsModel.street.required"
                  :visible="state.detailsModel.street.visible" 
                  :layoutOpts="{parentLayout: 'TABLE_24COL',colMD: 24,}"
                  >
                  <div class="form-editor-container" style="">
                  <AppSpan
                    name="street"
                    :disabled="state.detailsModel.street.disabled"
                    dataType="25"
                    :value="state.data.street"
                    :context="state.context"
                    :viewParams="state.viewParams"/>
                  </div>
                </AppFormItem>
                <AppFormItem 
                  name="taxno"
                  label="税号"
                  labelPos="LEFT"
                  :labelWidth="130"
                  :showLabel="true"
                  :rules="state.rules.taxno"
                  :required="state.detailsModel.taxno.required"
                  :visible="state.detailsModel.taxno.visible" 
                  :layoutOpts="{parentLayout: 'TABLE_24COL',colMD: 24,}"
                  >
                  <div class="form-editor-container" style="">
                  <AppSpan
                    name="taxno"
                    :disabled="state.detailsModel.taxno.disabled"
                    dataType="25"
                    :value="state.data.taxno"
                    :context="state.context"
                    :viewParams="state.viewParams"/>
                  </div>
                </AppFormItem>
            </AppFormGroup>
            <AppFormGroup 
              name="grouppanel4"
              title="联系方式"
              :visible="state.detailsModel.grouppanel4.visible" 
              :layoutOpts="{selfLayout: 'TABLE_24COL',parentLayout: 'TABLE_24COL',colLG: 12,colMD: 12,}"
              :infoGroupMode="true"
              :titleBarCloseMode="0"
              :showCaption="false"
              :uIActionGroup="state.detailsModel.grouppanel4.uIActionGroup"
              @componentEvent="onComponentEvent">
                <AppFormItem 
                  name="phone"
                  label="电话"
                  labelPos="LEFT"
                  :labelWidth="130"
                  :showLabel="true"
                  :rules="state.rules.phone"
                  :required="state.detailsModel.phone.required"
                  :visible="state.detailsModel.phone.visible" 
                  :layoutOpts="{parentLayout: 'TABLE_24COL',colMD: 24,}"
                  >
                  <div class="form-editor-container" style="">
                  <AppSpan
                    name="phone"
                    :disabled="state.detailsModel.phone.disabled"
                    dataType="25"
                    :value="state.data.phone"
                    :context="state.context"
                    :viewParams="state.viewParams"/>
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
                  :layoutOpts="{parentLayout: 'TABLE_24COL',colMD: 24,}"
                  >
                  <div class="form-editor-container" style="">
                  <AppSpan
                    name="mobile"
                    :disabled="state.detailsModel.mobile.disabled"
                    dataType="25"
                    :value="state.data.mobile"
                    :context="state.context"
                    :viewParams="state.viewParams"/>
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
                  <AppSpan
                    name="email"
                    :disabled="state.detailsModel.email.disabled"
                    dataType="25"
                    :value="state.data.email"
                    :context="state.context"
                    :viewParams="state.viewParams"/>
                  </div>
                </AppFormItem>
                <AppFormItem 
                  name="website"
                  label="网站地址"
                  labelPos="LEFT"
                  :labelWidth="130"
                  :showLabel="true"
                  :rules="state.rules.website"
                  :required="state.detailsModel.website.required"
                  :visible="state.detailsModel.website.visible" 
                  :layoutOpts="{parentLayout: 'TABLE_24COL',colMD: 24,}"
                  >
                  <div class="form-editor-container" style="">
                  <AppSpan
                    name="website"
                    :disabled="state.detailsModel.website.disabled"
                    dataType="25"
                    :value="state.data.website"
                    :context="state.context"
                    :viewParams="state.viewParams"/>
                  </div>
                </AppFormItem>
            </AppFormGroup>
        </AppFormGroup>
        <AppFormTabpanel 
          name="tabpanel1"
          :visible="state.detailsModel.tabpanel1.visible"
          :layoutOpts="{parentLayout: 'TABLE_24COL',colMD: 24,}"
        >
        </AppFormTabpanel>
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
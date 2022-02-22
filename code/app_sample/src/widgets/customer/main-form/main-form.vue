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
      title="客户基本信息"
      :visible="state.detailsModel.group1.visible" 
      :layoutOpts="{selfLayout: 'TABLE_24COL',parentLayout: 'TABLE_24COL',colMD: 24,}"
      :infoGroupMode="false"
      :titleBarCloseMode="0"
      :showCaption="false"
      :uIActionGroup="state.detailsModel.group1.uIActionGroup"
      @componentEvent="onComponentEvent">
        <AppFormGroup 
          name="grouppanel2"
          title="头部"
          :visible="state.detailsModel.grouppanel2.visible" 
          :layoutOpts="{selfLayout: 'TABLE_24COL',parentLayout: 'TABLE_24COL',colMD: 24,}"
          :infoGroupMode="false"
          :titleBarCloseMode="0"
          :showCaption="false"
          :uIActionGroup="state.detailsModel.grouppanel2.uIActionGroup"
          @componentEvent="onComponentEvent">
            <AppFormGroup 
              name="grouppanel7"
              title="头部左边"
              :visible="state.detailsModel.grouppanel7.visible" 
              :layoutOpts="{selfLayout: 'TABLE_24COL',parentLayout: 'TABLE_24COL',colLG: 12,colMD: 12,}"
              :infoGroupMode="false"
              :titleBarCloseMode="0"
              :showCaption="false"
              :uIActionGroup="state.detailsModel.grouppanel7.uIActionGroup"
              @componentEvent="onComponentEvent">
                <AppFormItem 
                  name="customername"
                  label="客户名称"
                  labelPos="LEFT"
                  :labelWidth="130"
                  :showLabel="true"
                  :rules="state.rules.customername"
                  :required="state.detailsModel.customername.required"
                  :visible="state.detailsModel.customername.visible" 
                  :layoutOpts="{parentLayout: 'TABLE_24COL',colMD: 24,}"
                  >
                  <div class="form-editor-container" style="width: 400.0px;height: 80.0px">
                  <AppInput
                    name="customername"
                    :disabled="state.detailsModel.customername.disabled"
                    :maxLength="200"
                    type="text"
                    :value="state.data.customername"
                    @editorEvent="onEditorEvent"
                  />
                  </div>
                </AppFormItem>
                <AppFormItem 
                  name="type"
                  label="类型"
                  labelPos="LEFT"
                  :labelWidth="130"
                  :showLabel="true"
                  :rules="state.rules.type"
                  :required="state.detailsModel.type.required"
                  :visible="state.detailsModel.type.visible" 
                  :layoutOpts="{parentLayout: 'TABLE_24COL',colMD: 24,}"
                  >
                  <div class="form-editor-container" style="">
                  <AppRadioGroup
                    name="type"
                    :data="state.data"
                    codeListTag="Sample__CustomerType"
                    codeListType="STATIC"
                    
                    :disabled="state.detailsModel.type.disabled"
                    :context="state.context"
                    :viewParams="state.viewParams"
                    :value="state.data.type"
                    @editorEvent="onEditorEvent"
                  />
                  </div>
                </AppFormItem>
            </AppFormGroup>
            <AppFormGroup 
              name="grouppanel8"
              title="头部右边"
              :visible="state.detailsModel.grouppanel8.visible" 
              :layoutOpts="{selfLayout: 'TABLE_24COL',parentLayout: 'TABLE_24COL',colLG: 12,colMD: 12,}"
              :infoGroupMode="false"
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
          :infoGroupMode="false"
          :titleBarCloseMode="0"
          :showCaption="false"
          :uIActionGroup="state.detailsModel.grouppanel3.uIActionGroup"
          @componentEvent="onComponentEvent">
            <AppFormGroup 
              name="grouppanel6"
              title="地址"
              :visible="state.detailsModel.grouppanel6.visible" 
              :layoutOpts="{selfLayout: 'TABLE_24COL',parentLayout: 'TABLE_24COL',colLG: 12,colMD: 12,}"
              :infoGroupMode="false"
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
                  <AppDataPicker
                    name="pcustomername"
                    :data="state.data"
                    valueItem="pcustomerid"
                    :disabled="state.detailsModel.pcustomername.disabled"
                    :context="state.context"
                    :viewParams="state.viewParams"
                    deMajorField="customername"
                    deKeyField="customerid"
                    pickUpView="CustomerPickupView"
                    :value="state.data.pcustomername"
                    @editorEvent="onEditorEvent"
                  />
                  </div>
                </AppFormItem>
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
                      labelPos="NONE"
                      :labelWidth="0"
                      :showLabel="false"
                      :rules="state.rules.cityname"
                      :required="state.detailsModel.cityname.required"
                      :visible="state.detailsModel.cityname.visible" 
                      :layoutOpts="{parentLayout: 'FLEX',grow: 1,}"
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
                      labelPos="NONE"
                      :labelWidth="0"
                      :showLabel="false"
                      :rules="state.rules.districtname"
                      :required="state.detailsModel.districtname.required"
                      :visible="state.detailsModel.districtname.visible" 
                      :layoutOpts="{parentLayout: 'FLEX',grow: 1,}"
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
                <AppFormItem 
                  name="street"
                  label="街道"
                  labelPos="LEFT"
                  :labelWidth="130"
                  :showLabel="true"
                  :rules="state.rules.street"
                  :required="state.detailsModel.street.required"
                  :visible="state.detailsModel.street.visible" 
                  :layoutOpts="{parentLayout: 'TABLE_24COL',colMD: 24,}"
                  >
                  <div class="form-editor-container" style="">
                  <AppInput
                    name="street"
                    :disabled="state.detailsModel.street.disabled"
                    placeholder="街道"
                    :maxLength="100"
                    type="text"
                    :value="state.data.street"
                    @editorEvent="onEditorEvent"
                  />
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
                  <AppInput
                    name="taxno"
                    :disabled="state.detailsModel.taxno.disabled"
                    :maxLength="100"
                    type="text"
                    :value="state.data.taxno"
                    @editorEvent="onEditorEvent"
                  />
                  </div>
                </AppFormItem>
            </AppFormGroup>
            <AppFormGroup 
              name="grouppanel4"
              title="联系方式"
              :visible="state.detailsModel.grouppanel4.visible" 
              :layoutOpts="{selfLayout: 'TABLE_24COL',parentLayout: 'TABLE_24COL',colLG: 12,colMD: 12,}"
              :infoGroupMode="false"
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
                  :layoutOpts="{parentLayout: 'TABLE_24COL',colMD: 24,}"
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
                  <AppInput
                    name="website"
                    :disabled="state.detailsModel.website.disabled"
                    :maxLength="100"
                    type="text"
                    :value="state.data.website"
                    @editorEvent="onEditorEvent"
                  />
                  </div>
                </AppFormItem>
            </AppFormGroup>
        </AppFormGroup>
        <AppFormItem 
          name="formitem"
          label="主从数据多选"
          labelPos="LEFT"
          :labelWidth="130"
          :showLabel="true"
          :rules="state.rules.formitem"
          :required="state.detailsModel.formitem.required"
          :visible="state.detailsModel.formitem.visible" 
          :layoutOpts="{parentLayout: 'TABLE_24COL',colMD: 24,}"
          >
          <div class="form-editor-container" style="">
          <AppDataPicker
            name="formitem"
            :data="state.data"
            :disabled="state.detailsModel.formitem.disabled"
            :context="state.context"
            :viewParams="state.viewParams"
            pickUpView="OrderMPickupView"
            :multiple="true"
            :value="state.data.formitem"
            @editorEvent="onEditorEvent"
          />
          </div>
        </AppFormItem>
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
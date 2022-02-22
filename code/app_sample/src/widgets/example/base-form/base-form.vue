<script setup lang="ts">
import { Subject } from 'rxjs';
import { ctrlState } from './base-form-state';
import { FormControl, IActionParam, IParam, ControlAction, IContext } from '@core';
import Example2GridView9 from '@views/sample/example2-grid-view9';
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
    name="Base"
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
        tab="表单分页"  
      >
        <template #tab>
          <AppIconText text="表单分页"/>
        </template>
        <AppFormRaw 
          name="rawitem1"
          :visible="state.detailsModel.rawitem1.visible"
          class="el-alert el-alert--info is-light"
          contentType="RAW"
          :layoutOpts="{parentLayout: 'TABLE_24COL',colMD: 24,}"
          value="显示标题的表单分组"
          />
        <AppFormGroup 
          name="group1"
          title="表单分组"
          :visible="state.detailsModel.group1.visible" 
          :layoutOpts="{selfLayout: 'TABLE_24COL',parentLayout: 'TABLE_24COL',colMD: 24,}"
          :infoGroupMode="false"
          :titleBarCloseMode="0"
          :showCaption="true"
          :uIActionGroup="state.detailsModel.group1.uIActionGroup"
          @componentEvent="onComponentEvent">
            <AppFormItem 
              name="formitem1"
              label="表单项"
              labelPos="LEFT"
              :labelWidth="130"
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
            <AppFormGroup 
              name="grouppanel3"
              title="表单分组（子分组）"
              :visible="state.detailsModel.grouppanel3.visible" 
              :layoutOpts="{selfLayout: 'TABLE_24COL',parentLayout: 'TABLE_24COL',colMD: 24,}"
              style="height: 150.0px;"
              :infoGroupMode="false"
              :titleBarCloseMode="0"
              :showCaption="true"
              :uIActionGroup="state.detailsModel.grouppanel3.uIActionGroup"
              @componentEvent="onComponentEvent">
                <AppFormItem 
                  name="formitem3"
                  label="表单项"
                  labelPos="LEFT"
                  :labelWidth="130"
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
                <AppFormItem 
                  name="formitemex1"
                  label="复合表单项"
                  labelPos="LEFT"
                  :labelWidth="130"
                  :showLabel="true"
                  :rules="state.rules.formitemex1"
                  :required="state.detailsModel.formitemex1.required"
                  :visible="state.detailsModel.formitemex1.visible" 
                  :layoutOpts="{parentLayout: 'TABLE_24COL',colMD: 24,}"
                  >
                  <div class="form-editor-container" style="width: 160.0px;">
                  <AppDatePicker
                    name="formitemex1"
                    :disabled="state.detailsModel.formitemex1.disabled"
                    dateFormat="YYYY-MM-DD HH:mm:ss"
                    dateType="dateTime"
                    :value="state.data.formitemex1"
                    @editorEvent="onEditorEvent"
                  />
                  </div>
                </AppFormItem>
            </AppFormGroup>
        </AppFormGroup>
        <AppFormRaw 
          name="rawitem2"
          :visible="state.detailsModel.rawitem2.visible"
          class="el-alert el-alert--info is-light"
          contentType="RAW"
          :layoutOpts="{parentLayout: 'TABLE_24COL',colMD: 24,}"
          value="无标题表单分组"
          />
        <AppFormGroup 
          name="grouppanel1"
          title="无标题"
          :visible="state.detailsModel.grouppanel1.visible" 
          :layoutOpts="{selfLayout: 'TABLE_24COL',parentLayout: 'TABLE_24COL',colMD: 24,}"
          :infoGroupMode="false"
          :titleBarCloseMode="0"
          :showCaption="false"
          :uIActionGroup="state.detailsModel.grouppanel1.uIActionGroup"
          @componentEvent="onComponentEvent">
            <AppFormItem 
              name="formitem"
              label="表单项"
              labelPos="LEFT"
              :labelWidth="130"
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
          name="rawitem7"
          :visible="state.detailsModel.rawitem7.visible"
          class="el-alert el-alert--info is-light"
          contentType="RAW"
          :layoutOpts="{parentLayout: 'TABLE_24COL',colMD: 24,}"
          value="按钮"
          />
        <AppFormButton
          name="button1"
          :layoutOpts="{parentLayout: 'TABLE_24COL',colMD: 24,}"
          :visible="state.detailsModel.button1.visible"
          :showCaption="true"
          labelCssName="formgroup-bold-center"
          caption="触发界面行为" 
          :uIAction="state.detailsModel.button1.uIAction"
          @action="onComponentEvent"
        />
        <AppFormRaw 
          name="rawitem5"
          :visible="state.detailsModel.rawitem5.visible"
          class="el-alert el-alert--info is-light"
          contentType="RAW"
          :layoutOpts="{parentLayout: 'TABLE_24COL',colMD: 24,}"
          value="关系界面"
          />
        <AppFormDruipart 
          name="druipart1" 
          title="示例明细"
          :formSubject="state.formSubject"
          :visible="state.detailsModel.druipart1.visible"
          viewCodeName="Example2GridView9"
          :layoutOpts="{parentLayout: 'TABLE_24COL',colMD: 24,}"
          style="height: 300.0px;"
          paramItem="srfkey"
          deCodeName="example"
          :context="context"
          :viewParams="viewParams"
          :data="state.data"
          :viewSubject="state.viewSubject">
            <template #default="druipartParams">
            <Example2GridView9
              :class="['app-view-layout--from-druipart']"
              :context="druipartParams.context"
              :viewParams="druipartParams.viewParams"
              :viewDefaultUsage="false"
              :showCaptionBar="false"
              openType="EMBED"
              :viewSubject="state.viewSubject"
              @viewEvent="druipartParams.viewEvent"
            >
            </Example2GridView9>
            </template>
        </AppFormDruipart>
        <AppFormRaw 
          name="rawitem6"
          :visible="state.detailsModel.rawitem6.visible"
          class="el-alert el-alert--info is-light"
          contentType="RAW"
          :layoutOpts="{parentLayout: 'TABLE_24COL',colMD: 24,}"
          value="嵌入页面"
          />
        <AppFormIframe
          name="iframe1"
          :visible="state.detailsModel.iframe1.visible"
          :layoutOpts="{parentLayout: 'TABLE_24COL',colMD: 24,}"
          style="height: 200.0px;"
          iFrameUrl="https://www.yuque.com/ibiz" 
        />
        <AppFormRaw 
          name="rawitem11"
          :visible="state.detailsModel.rawitem11.visible"
          class="el-alert el-alert--info is-light"
          contentType="RAW"
          :layoutOpts="{parentLayout: 'TABLE_24COL',colMD: 24,}"
          value="形式为图片的直接内容"
          />
        <AppFormRaw 
          name="rawitem12"
          :visible="state.detailsModel.rawitem12.visible"
          contentType="HTML"
          :layoutOpts="{parentLayout: 'TABLE_24COL',colMD: 24,}"
          :value="`<p>&lt;img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIgAAAAyCAYAAACH65NBAAAEuUlEQVR4nO2by08TURTGr8Yt7c6FlrVAWaoR3Gl8rmABshFJ8LHwFRtNQCVUQSQRa0A08UECutGSgDtAwaUYH7tWdGuLiUvLH6DzDWkzlM6ZcTp35nZ6fkkToO3MZe4353zn3Dtbtkfq/wqGMWGr3wNg1IYFwpCwQBgSFghDwgIx4ezpTrE0PyN+Z76J2eSkOHbkoN9D8oUtKlYxmJxQTY2j76bSKyKXWxOZ7C/tteroGGOJIXGirWXT3/tuDYunz184OmaloqRAcNe6wR9NKHMLi2Ik8di2WJqb9uoRw4zdTYccC68SCXSKCYdqREdbq/iy/E4M9PfY+s5xi1SyXxNQNRFogRhB2hpN3Cn7OKGws9RXqVSNQACiiZXZTKW/k+9/WP7k5pCUp6oEAgbiPXrqMePV9Kz48PFzyfeeTby0FFDQqDqB1EZ26kaUoqv7gng9/abwe1ariFDB3IzflT085ai4Kqa1vYsM85j8c5rfOHr4gOlnRh48EvcSj8oaY7Wwze8BuA3Eg9fX5UURiewo+Zn1CGIuELM+zJ9cTk8zdj/vhGcTL/TyXBUCJ5A8P7OrpgJJEz4C4qFK4lICsVtC2wH+RyUjHEgPAhNaayIO8LOKGl3l4qtABuO9ut/AmodbNEbrxOTzh7oZNeN1cta18wUd31IM8vaZ7pP6z5hUu1BtcDsgRaiU41XHtwhyrruz8LNZ38Ft0t9+aNXLuCfnckJubU3zRyt+D2MDvkWQvInERenzoL+AqNHa1ikleqBnUltrntLCoZCINuyyPE5f/7By0c03gaAZFY3W63eMFxcFxvV2vEdcjt1w/diXYtfJ96cmxi0FgtSHLq5qeC4QTFS0oU7fr+F1OYe1GCBDJGZgbwnVtAOIQKp2aT31IJigz8uLYnZ6SntNennqDWO4Fjvv2blKbTwyAv9lFYH8xLMIgotlXG5HBHEC1kWs+hioiqjO5tUr58Wr5BupG3+wamy1vQCmGalWZTwRSLE4gNO1EORpO9812zaYB1FE1p0LgY5q56eAOZdlmt1EeopBwwrm0AgWy2T7D0x+lohSzU17pJwX4phJTpFbCtbFcUp5cQDpAhm81bvhYq33IrxZSaVSEdVpdYodcQCIo1L2lUgVCBa+jA4e4kBYDSIQxej9IUtxoIKqFHEAqQLpMHiAvDi8Cqu4m5v3yUkjxUAUiBxWSwbYdKRir4NCqkk17gBHnV9KHDCw/3PR0H2lJh4dzcaGOn2thwKCdYuBeK+lOBA1UqkVS9GW8zyPDKQKxLgfo9iUwgOMaZVNOBz+L4FAUPmGVzm4dSfj/7DqdQAICP0fK9AXgUdRBc8aZflNNQjH6EMsLczoHuVSrNerIRRAdePWkv+xo+4+kol1G5WQGkHm374vmFSE/OKw75dhM0t3TkA6cxNsa1QJqRHkiclzrOgDQBx+GDacd25hybXjUau4QUCqQOA74NyNILwjx3otDoiy6/TFiqsi/EZ6qx1Pw8/NL4mO9haRyfzyfIJg+hAx4DnspJUcEeIhss2fV78bWg5KPhfDqEMgd7Uz7sECYUhYIAwJC4QhYYEwJCwQhoQFwpCwQBgSFghDwgJhSFggDAkLhCH5Bxhw3GRo/OTpAAAAAElFTkSuQmCC' /&gt;</p>`"
          />
        <AppFormRaw 
          name="rawitem3"
          :visible="state.detailsModel.rawitem3.visible"
          class="el-alert el-alert--info is-light"
          contentType="RAW"
          :layoutOpts="{parentLayout: 'TABLE_24COL',colMD: 24,}"
          value="分页部件"
          />
        <AppFormTabpanel 
          name="tabpanel1"
          :visible="state.detailsModel.tabpanel1.visible"
          :layoutOpts="{parentLayout: 'TABLE_24COL',colMD: 24,}"
        >
        </AppFormTabpanel>
      </AppFormPage>
      <AppFormPage
        name="formpage2"
        :layoutOpts="{selfLayout: 'TABLE_24COL',}"
        :visible="state.detailsModel.formpage2.visible"
        key="formpage2"
        tab="表单分页2"  
      >
        <template #tab>
          <AppIconText text="表单分页2"/>
        </template>
        <AppFormGroup 
          name="grouppanel2"
          title="分组"
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
              :labelWidth="130"
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
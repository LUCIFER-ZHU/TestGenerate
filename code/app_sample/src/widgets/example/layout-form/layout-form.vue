<script setup lang="ts">
import { Subject } from 'rxjs';
import { ctrlState } from './layout-form-state';
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
    name="Layout"
    class="app-form"
    style=""
    :model="state.data"
    :rules="state.rules"
    ref="xDataCtrl"
  >
    <AppFormGroup 
      name="group1"
      title="栅格布局"
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
          :layoutOpts="{selfLayout: 'TABLE_24COL',parentLayout: 'TABLE_24COL',colMD: 24,}"
          :infoGroupMode="false"
          :titleBarCloseMode="0"
          :showCaption="false"
          :uIActionGroup="state.detailsModel.grouppanel1.uIActionGroup"
          @componentEvent="onComponentEvent">
            <AppFormRaw 
              name="rawitem1"
              :visible="state.detailsModel.rawitem1.visible"
              class="el-alert el-alert--warning is-light"
              contentType="RAW"
              :layoutOpts="{parentLayout: 'TABLE_24COL',colLG: 1,colMD: 24,}"
              value="1"
              />
            <AppFormRaw 
              name="rawitem2"
              :visible="state.detailsModel.rawitem2.visible"
              class="el-alert el-alert--success is-light"
              contentType="RAW"
              :layoutOpts="{parentLayout: 'TABLE_24COL',colLG: 1,colMD: 24,}"
              value="1"
              />
        </AppFormGroup>
        <AppFormGroup 
          name="grouppanel2"
          title="分组面板"
          :visible="state.detailsModel.grouppanel2.visible" 
          :layoutOpts="{selfLayout: 'TABLE_24COL',parentLayout: 'TABLE_24COL',colMD: 24,}"
          :infoGroupMode="false"
          :titleBarCloseMode="0"
          :showCaption="false"
          :uIActionGroup="state.detailsModel.grouppanel2.uIActionGroup"
          @componentEvent="onComponentEvent">
            <AppFormRaw 
              name="rawitem3"
              :visible="state.detailsModel.rawitem3.visible"
              class="el-alert el-alert--warning is-light"
              contentType="RAW"
              :layoutOpts="{parentLayout: 'TABLE_24COL',colLG: 4,colMD: 24,}"
              value="4"
              />
            <AppFormRaw 
              name="rawitem4"
              :visible="state.detailsModel.rawitem4.visible"
              class="el-alert el-alert--success is-light"
              contentType="RAW"
              :layoutOpts="{parentLayout: 'TABLE_24COL',colLG: 4,colMD: 24,}"
              value="4"
              />
        </AppFormGroup>
        <AppFormGroup 
          name="grouppanel3"
          title="分组面板"
          :visible="state.detailsModel.grouppanel3.visible" 
          :layoutOpts="{selfLayout: 'TABLE_24COL',parentLayout: 'TABLE_24COL',colMD: 24,}"
          :infoGroupMode="false"
          :titleBarCloseMode="0"
          :showCaption="false"
          :uIActionGroup="state.detailsModel.grouppanel3.uIActionGroup"
          @componentEvent="onComponentEvent">
            <AppFormRaw 
              name="rawitem5"
              :visible="state.detailsModel.rawitem5.visible"
              class="el-alert el-alert--warning is-light"
              contentType="RAW"
              :layoutOpts="{parentLayout: 'TABLE_24COL',colLG: 8,colMD: 24,}"
              value="8"
              />
            <AppFormRaw 
              name="rawitem6"
              :visible="state.detailsModel.rawitem6.visible"
              class="el-alert el-alert--success is-light"
              contentType="RAW"
              :layoutOpts="{parentLayout: 'TABLE_24COL',colLG: 8,colMD: 24,}"
              value="8"
              />
        </AppFormGroup>
        <AppFormGroup 
          name="grouppanel4"
          title="分组面板"
          :visible="state.detailsModel.grouppanel4.visible" 
          :layoutOpts="{selfLayout: 'TABLE_24COL',parentLayout: 'TABLE_24COL',colMD: 24,}"
          :infoGroupMode="false"
          :titleBarCloseMode="0"
          :showCaption="false"
          :uIActionGroup="state.detailsModel.grouppanel4.uIActionGroup"
          @componentEvent="onComponentEvent">
            <AppFormRaw 
              name="rawitem7"
              :visible="state.detailsModel.rawitem7.visible"
              class="el-alert el-alert--warning is-light"
              contentType="RAW"
              :layoutOpts="{parentLayout: 'TABLE_24COL',colLG: 12,colMD: 24,}"
              value="12"
              />
            <AppFormRaw 
              name="rawitem8"
              :visible="state.detailsModel.rawitem8.visible"
              class="el-alert el-alert--success is-light"
              contentType="RAW"
              :layoutOpts="{parentLayout: 'TABLE_24COL',colLG: 12,colMD: 24,}"
              value="12"
              />
        </AppFormGroup>
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
            <AppFormRaw 
              name="rawitem9"
              :visible="state.detailsModel.rawitem9.visible"
              class="el-alert el-alert--warning is-light"
              contentType="RAW"
              :layoutOpts="{parentLayout: 'TABLE_24COL',colLG: 24,colMD: 24,}"
              value="24"
              />
        </AppFormGroup>
        <AppFormGroup 
          name="grouppanel6"
          title="偏移"
          :visible="state.detailsModel.grouppanel6.visible" 
          :layoutOpts="{selfLayout: 'TABLE_24COL',parentLayout: 'TABLE_24COL',colMD: 24,}"
          :infoGroupMode="false"
          :titleBarCloseMode="0"
          :showCaption="false"
          :uIActionGroup="state.detailsModel.grouppanel6.uIActionGroup"
          @componentEvent="onComponentEvent">
            <AppFormRaw 
              name="rawitem10"
              :visible="state.detailsModel.rawitem10.visible"
              class="el-alert el-alert--warning is-light"
              contentType="RAW"
              :layoutOpts="{parentLayout: 'TABLE_24COL',colLG: 4,colLGOffset: 1,colMD: 24,}"
              value="4（偏移1）"
              />
            <AppFormRaw 
              name="rawitem11"
              :visible="state.detailsModel.rawitem11.visible"
              class="el-alert el-alert--success is-light"
              contentType="RAW"
              :layoutOpts="{parentLayout: 'TABLE_24COL',colLG: 12,colLGOffset: 7,colMD: 24,}"
              value="12（偏移7）"
              />
        </AppFormGroup>
        <AppFormGroup 
          name="grouppanel8"
          title="定高宽"
          :visible="state.detailsModel.grouppanel8.visible" 
          :layoutOpts="{selfLayout: 'TABLE_24COL',parentLayout: 'TABLE_24COL',colMD: 24,}"
          :infoGroupMode="false"
          :titleBarCloseMode="0"
          :showCaption="false"
          :uIActionGroup="state.detailsModel.grouppanel8.uIActionGroup"
          @componentEvent="onComponentEvent">
            <AppFormRaw 
              name="rawitem12"
              :visible="state.detailsModel.rawitem12.visible"
              class="el-alert el-alert--warning is-light"
              style="width: 100px; height: 100px; "
              rawStyle="width: 100.0px; height: 100.0px;"
              contentType="RAW"
              :layoutOpts="{parentLayout: 'TABLE_24COL',colMD: 24,}"
              value="12（100*100）"
              />
        </AppFormGroup>
    </AppFormGroup>
    <AppFormGroup 
      name="grouppanel7"
      title="Flex布局"
      :visible="state.detailsModel.grouppanel7.visible" 
      :layoutOpts="{selfLayout: 'TABLE_24COL',parentLayout: 'TABLE_24COL',colMD: 24,}"
      :infoGroupMode="false"
      :titleBarCloseMode="0"
      :showCaption="false"
      :uIActionGroup="state.detailsModel.grouppanel7.uIActionGroup"
      @componentEvent="onComponentEvent">
        <AppFormGroup 
          name="grouppanel10"
          title="Flex从上到下"
          :visible="state.detailsModel.grouppanel10.visible" 
          :layoutOpts="{selfLayout: 'FLEX',dir: 'column', 
parentLayout: 'TABLE_24COL',colLG: 12,colMD: 24,}"
          :infoGroupMode="false"
          :titleBarCloseMode="0"
          :showCaption="true"
          :uIActionGroup="state.detailsModel.grouppanel10.uIActionGroup"
          @componentEvent="onComponentEvent">
            <AppFormRaw 
              name="rawitem14"
              :visible="state.detailsModel.rawitem14.visible"
              class="el-alert el-alert--warning is-light"
              style="width: 100px; height: 100px; "
              rawStyle="width: 100.0px; height: 100.0px;"
              contentType="RAW"
              :layoutOpts="{parentLayout: 'FLEX',grow: -1,}"
              value="A"
              />
            <AppFormRaw 
              name="rawitem15"
              :visible="state.detailsModel.rawitem15.visible"
              class="el-alert el-alert--success is-light"
              style="width: 100px; height: 100px; "
              rawStyle="width: 100.0px; height: 100.0px;"
              contentType="RAW"
              :layoutOpts="{parentLayout: 'FLEX',grow: -1,}"
              value="B"
              />
            <AppFormRaw 
              name="rawitem16"
              :visible="state.detailsModel.rawitem16.visible"
              class="el-alert el-alert--info is-light"
              style="width: 100px; height: 100px; "
              rawStyle="width: 100.0px; height: 100.0px;"
              contentType="RAW"
              :layoutOpts="{parentLayout: 'FLEX',grow: -1,}"
              value="C"
              />
        </AppFormGroup>
        <AppFormGroup 
          name="grouppanel12"
          title="Flex从下到上"
          :visible="state.detailsModel.grouppanel12.visible" 
          :layoutOpts="{selfLayout: 'FLEX',dir: 'column-reverse', 
parentLayout: 'TABLE_24COL',colLG: 12,colMD: 24,}"
          :infoGroupMode="false"
          :titleBarCloseMode="0"
          :showCaption="true"
          :uIActionGroup="state.detailsModel.grouppanel12.uIActionGroup"
          @componentEvent="onComponentEvent">
            <AppFormRaw 
              name="rawitem17"
              :visible="state.detailsModel.rawitem17.visible"
              class="el-alert el-alert--warning is-light"
              style="width: 100px; height: 100px; "
              rawStyle="width: 100.0px; height: 100.0px;"
              contentType="RAW"
              :layoutOpts="{parentLayout: 'FLEX',grow: -1,}"
              value="A"
              />
            <AppFormRaw 
              name="rawitem18"
              :visible="state.detailsModel.rawitem18.visible"
              class="el-alert el-alert--success is-light"
              style="width: 100px; height: 100px; "
              rawStyle="width: 100.0px; height: 100.0px;"
              contentType="RAW"
              :layoutOpts="{parentLayout: 'FLEX',grow: -1,}"
              value="B"
              />
            <AppFormRaw 
              name="rawitem19"
              :visible="state.detailsModel.rawitem19.visible"
              class="el-alert el-alert--info is-light"
              style="width: 100px; height: 100px; "
              rawStyle="width: 100.0px; height: 100.0px;"
              contentType="RAW"
              :layoutOpts="{parentLayout: 'FLEX',grow: -1,}"
              value="C"
              />
        </AppFormGroup>
        <AppFormGroup 
          name="grouppanel13"
          title="Flex水平向左"
          :visible="state.detailsModel.grouppanel13.visible" 
          :layoutOpts="{selfLayout: 'FLEX',dir: 'row', 
parentLayout: 'TABLE_24COL',colLG: 12,colMD: 24,}"
          style="height: 200.0px;"
          :infoGroupMode="false"
          :titleBarCloseMode="0"
          :showCaption="true"
          :uIActionGroup="state.detailsModel.grouppanel13.uIActionGroup"
          @componentEvent="onComponentEvent">
            <AppFormRaw 
              name="rawitem20"
              :visible="state.detailsModel.rawitem20.visible"
              class="el-alert el-alert--warning is-light"
              style="width: 100px; height: 100px; "
              rawStyle="width: 100.0px; height: 100.0px;"
              contentType="RAW"
              :layoutOpts="{parentLayout: 'FLEX',grow: -1,}"
              value="A"
              />
            <AppFormRaw 
              name="rawitem21"
              :visible="state.detailsModel.rawitem21.visible"
              class="el-alert el-alert--success is-light"
              style="width: 100px; height: 100px; "
              rawStyle="width: 100.0px; height: 100.0px;"
              contentType="RAW"
              :layoutOpts="{parentLayout: 'FLEX',grow: -1,}"
              value="B"
              />
            <AppFormRaw 
              name="rawitem22"
              :visible="state.detailsModel.rawitem22.visible"
              class="el-alert el-alert--info is-light"
              style="width: 100px; height: 100px; "
              rawStyle="width: 100.0px; height: 100.0px;"
              contentType="RAW"
              :layoutOpts="{parentLayout: 'FLEX',grow: -1,}"
              value="C"
              />
        </AppFormGroup>
        <AppFormGroup 
          name="grouppanel14"
          title="Flex水平向右"
          :visible="state.detailsModel.grouppanel14.visible" 
          :layoutOpts="{selfLayout: 'FLEX',dir: 'row-reverse', 
parentLayout: 'TABLE_24COL',colLG: 12,colMD: 24,}"
          style="height: 200.0px;"
          :infoGroupMode="false"
          :titleBarCloseMode="0"
          :showCaption="true"
          :uIActionGroup="state.detailsModel.grouppanel14.uIActionGroup"
          @componentEvent="onComponentEvent">
            <AppFormRaw 
              name="rawitem23"
              :visible="state.detailsModel.rawitem23.visible"
              class="el-alert el-alert--warning is-light"
              style="width: 100px; height: 100px; "
              rawStyle="width: 100.0px; height: 100.0px;"
              contentType="RAW"
              :layoutOpts="{parentLayout: 'FLEX',grow: -1,}"
              value="A"
              />
            <AppFormRaw 
              name="rawitem24"
              :visible="state.detailsModel.rawitem24.visible"
              class="el-alert el-alert--success is-light"
              style="width: 100px; height: 100px; "
              rawStyle="width: 100.0px; height: 100.0px;"
              contentType="RAW"
              :layoutOpts="{parentLayout: 'FLEX',grow: -1,}"
              value="B"
              />
            <AppFormRaw 
              name="rawitem25"
              :visible="state.detailsModel.rawitem25.visible"
              class="el-alert el-alert--info is-light"
              style="width: 100px; height: 100px; "
              rawStyle="width: 100.0px; height: 100.0px;"
              contentType="RAW"
              :layoutOpts="{parentLayout: 'FLEX',grow: -1,}"
              value="C"
              />
        </AppFormGroup>
        <AppFormGroup 
          name="grouppanel15"
          title="Flex水平居中"
          :visible="state.detailsModel.grouppanel15.visible" 
          :layoutOpts="{selfLayout: 'FLEX',align: 'center',parentLayout: 'TABLE_24COL',colLG: 12,colMD: 24,}"
          style="height: 200.0px;"
          :infoGroupMode="false"
          :titleBarCloseMode="0"
          :showCaption="true"
          :uIActionGroup="state.detailsModel.grouppanel15.uIActionGroup"
          @componentEvent="onComponentEvent">
            <AppFormRaw 
              name="rawitem26"
              :visible="state.detailsModel.rawitem26.visible"
              class="el-alert el-alert--warning is-light"
              style="width: 100px; height: 100px; "
              rawStyle="width: 100.0px; height: 100.0px;"
              contentType="RAW"
              :layoutOpts="{parentLayout: 'FLEX',grow: -1,}"
              value="A"
              />
            <AppFormRaw 
              name="rawitem27"
              :visible="state.detailsModel.rawitem27.visible"
              class="el-alert el-alert--success is-light"
              style="width: 100px; height: 100px; "
              rawStyle="width: 100.0px; height: 100.0px;"
              contentType="RAW"
              :layoutOpts="{parentLayout: 'FLEX',grow: -1,}"
              value="B"
              />
            <AppFormRaw 
              name="rawitem28"
              :visible="state.detailsModel.rawitem28.visible"
              class="el-alert el-alert--info is-light"
              style="width: 100px; height: 100px; "
              rawStyle="width: 100.0px; height: 100.0px;"
              contentType="RAW"
              :layoutOpts="{parentLayout: 'FLEX',grow: -1,}"
              value="C"
              />
        </AppFormGroup>
        <AppFormGroup 
          name="grouppanel16"
          title="Flex水平两端对齐"
          :visible="state.detailsModel.grouppanel16.visible" 
          :layoutOpts="{selfLayout: 'FLEX',align: 'space-between',parentLayout: 'TABLE_24COL',colLG: 12,colMD: 24,}"
          style="height: 200.0px;"
          :infoGroupMode="false"
          :titleBarCloseMode="0"
          :showCaption="true"
          :uIActionGroup="state.detailsModel.grouppanel16.uIActionGroup"
          @componentEvent="onComponentEvent">
            <AppFormRaw 
              name="rawitem29"
              :visible="state.detailsModel.rawitem29.visible"
              class="el-alert el-alert--warning is-light"
              style="width: 100px; height: 100px; "
              rawStyle="width: 100.0px; height: 100.0px;"
              contentType="RAW"
              :layoutOpts="{parentLayout: 'FLEX',grow: -1,}"
              value="A"
              />
            <AppFormRaw 
              name="rawitem30"
              :visible="state.detailsModel.rawitem30.visible"
              class="el-alert el-alert--success is-light"
              style="width: 100px; height: 100px; "
              rawStyle="width: 100.0px; height: 100.0px;"
              contentType="RAW"
              :layoutOpts="{parentLayout: 'FLEX',grow: -1,}"
              value="B"
              />
            <AppFormRaw 
              name="rawitem31"
              :visible="state.detailsModel.rawitem31.visible"
              class="el-alert el-alert--info is-light"
              style="width: 100px; height: 100px; "
              rawStyle="width: 100.0px; height: 100.0px;"
              contentType="RAW"
              :layoutOpts="{parentLayout: 'FLEX',grow: -1,}"
              value="C"
              />
        </AppFormGroup>
        <AppFormGroup 
          name="grouppanel17"
          title="Flex水平间隔相同"
          :visible="state.detailsModel.grouppanel17.visible" 
          :layoutOpts="{selfLayout: 'FLEX',align: 'space-around',parentLayout: 'TABLE_24COL',colLG: 12,colMD: 24,}"
          style="height: 200.0px;"
          :infoGroupMode="false"
          :titleBarCloseMode="0"
          :showCaption="true"
          :uIActionGroup="state.detailsModel.grouppanel17.uIActionGroup"
          @componentEvent="onComponentEvent">
            <AppFormRaw 
              name="rawitem32"
              :visible="state.detailsModel.rawitem32.visible"
              class="el-alert el-alert--warning is-light"
              style="width: 100px; height: 100px; "
              rawStyle="width: 100.0px; height: 100.0px;"
              contentType="RAW"
              :layoutOpts="{parentLayout: 'FLEX',grow: -1,}"
              value="A"
              />
            <AppFormRaw 
              name="rawitem33"
              :visible="state.detailsModel.rawitem33.visible"
              class="el-alert el-alert--success is-light"
              style="width: 100px; height: 100px; "
              rawStyle="width: 100.0px; height: 100.0px;"
              contentType="RAW"
              :layoutOpts="{parentLayout: 'FLEX',grow: -1,}"
              value="B"
              />
            <AppFormRaw 
              name="rawitem34"
              :visible="state.detailsModel.rawitem34.visible"
              class="el-alert el-alert--info is-light"
              style="width: 100px; height: 100px; "
              rawStyle="width: 100.0px; height: 100.0px;"
              contentType="RAW"
              :layoutOpts="{parentLayout: 'FLEX',grow: -1,}"
              value="C"
              />
        </AppFormGroup>
        <AppFormGroup 
          name="grouppanel19"
          title="Flex垂直上对齐"
          :visible="state.detailsModel.grouppanel19.visible" 
          :layoutOpts="{selfLayout: 'FLEX',vAlign: 'flex-start',parentLayout: 'TABLE_24COL',colLG: 12,colMD: 24,}"
          style="height: 200.0px;"
          :infoGroupMode="false"
          :titleBarCloseMode="0"
          :showCaption="true"
          :uIActionGroup="state.detailsModel.grouppanel19.uIActionGroup"
          @componentEvent="onComponentEvent">
            <AppFormRaw 
              name="rawitem35"
              :visible="state.detailsModel.rawitem35.visible"
              class="el-alert el-alert--warning is-light"
              style="width: 100px; height: 40px; "
              rawStyle="width: 100.0px; height: 40.0px;"
              contentType="RAW"
              :layoutOpts="{parentLayout: 'FLEX',grow: -1,}"
              value="A"
              />
            <AppFormRaw 
              name="rawitem36"
              :visible="state.detailsModel.rawitem36.visible"
              class="el-alert el-alert--success is-light"
              style="width: 100px; height: 70px; "
              rawStyle="width: 100.0px; height: 70.0px;"
              contentType="RAW"
              :layoutOpts="{parentLayout: 'FLEX',grow: -1,}"
              value="B"
              />
            <AppFormRaw 
              name="rawitem37"
              :visible="state.detailsModel.rawitem37.visible"
              class="el-alert el-alert--info is-light"
              style="width: 100px; height: 100px; "
              rawStyle="width: 100.0px; height: 100.0px;"
              contentType="RAW"
              :layoutOpts="{parentLayout: 'FLEX',grow: -1,}"
              value="C"
              />
        </AppFormGroup>
        <AppFormGroup 
          name="grouppanel20"
          title="Flex垂直下对齐"
          :visible="state.detailsModel.grouppanel20.visible" 
          :layoutOpts="{selfLayout: 'FLEX',vAlign: 'flex-end',parentLayout: 'TABLE_24COL',colLG: 12,colMD: 24,}"
          style="height: 200.0px;"
          :infoGroupMode="false"
          :titleBarCloseMode="0"
          :showCaption="true"
          :uIActionGroup="state.detailsModel.grouppanel20.uIActionGroup"
          @componentEvent="onComponentEvent">
            <AppFormRaw 
              name="rawitem38"
              :visible="state.detailsModel.rawitem38.visible"
              class="el-alert el-alert--warning is-light"
              style="width: 100px; height: 40px; "
              rawStyle="width: 100.0px; height: 40.0px;"
              contentType="RAW"
              :layoutOpts="{parentLayout: 'FLEX',grow: -1,}"
              value="A"
              />
            <AppFormRaw 
              name="rawitem39"
              :visible="state.detailsModel.rawitem39.visible"
              class="el-alert el-alert--success is-light"
              style="width: 100px; height: 70px; "
              rawStyle="width: 100.0px; height: 70.0px;"
              contentType="RAW"
              :layoutOpts="{parentLayout: 'FLEX',grow: -1,}"
              value="B"
              />
            <AppFormRaw 
              name="rawitem40"
              :visible="state.detailsModel.rawitem40.visible"
              class="el-alert el-alert--info is-light"
              style="width: 100px; height: 100px; "
              rawStyle="width: 100.0px; height: 100.0px;"
              contentType="RAW"
              :layoutOpts="{parentLayout: 'FLEX',grow: -1,}"
              value="C"
              />
        </AppFormGroup>
        <AppFormGroup 
          name="grouppanel21"
          title="Flex垂直居中"
          :visible="state.detailsModel.grouppanel21.visible" 
          :layoutOpts="{selfLayout: 'FLEX',vAlign: 'center',parentLayout: 'TABLE_24COL',colLG: 12,colMD: 24,}"
          style="height: 200.0px;"
          :infoGroupMode="false"
          :titleBarCloseMode="0"
          :showCaption="true"
          :uIActionGroup="state.detailsModel.grouppanel21.uIActionGroup"
          @componentEvent="onComponentEvent">
            <AppFormRaw 
              name="rawitem41"
              :visible="state.detailsModel.rawitem41.visible"
              class="el-alert el-alert--warning is-light"
              style="width: 100px; height: 40px; "
              rawStyle="width: 100.0px; height: 40.0px;"
              contentType="RAW"
              :layoutOpts="{parentLayout: 'FLEX',grow: -1,}"
              value="A"
              />
            <AppFormRaw 
              name="rawitem42"
              :visible="state.detailsModel.rawitem42.visible"
              class="el-alert el-alert--success is-light"
              style="width: 100px; height: 70px; "
              rawStyle="width: 100.0px; height: 70.0px;"
              contentType="RAW"
              :layoutOpts="{parentLayout: 'FLEX',grow: -1,}"
              value="B"
              />
            <AppFormRaw 
              name="rawitem43"
              :visible="state.detailsModel.rawitem43.visible"
              class="el-alert el-alert--info is-light"
              style="width: 100px; height: 100px; "
              rawStyle="width: 100.0px; height: 100.0px;"
              contentType="RAW"
              :layoutOpts="{parentLayout: 'FLEX',grow: -1,}"
              value="C"
              />
        </AppFormGroup>
        <AppFormGroup 
          name="grouppanel22"
          title="Flex垂直基线对齐"
          :visible="state.detailsModel.grouppanel22.visible" 
          :layoutOpts="{selfLayout: 'FLEX',vAlign: 'baseline',parentLayout: 'TABLE_24COL',colLG: 12,colMD: 24,}"
          style="height: 200.0px;"
          :infoGroupMode="false"
          :titleBarCloseMode="0"
          :showCaption="true"
          :uIActionGroup="state.detailsModel.grouppanel22.uIActionGroup"
          @componentEvent="onComponentEvent">
            <AppFormRaw 
              name="rawitem44"
              :visible="state.detailsModel.rawitem44.visible"
              class="el-alert el-alert--warning is-light baseline-warning"
              style="width: 100px; height: 40px; "
              rawStyle="width: 100.0px; height: 40.0px;"
              contentType="RAW"
              :layoutOpts="{parentLayout: 'FLEX',grow: -1,}"
              value="A"
              />
            <AppFormRaw 
              name="rawitem45"
              :visible="state.detailsModel.rawitem45.visible"
              class="el-alert el-alert--success is-light"
              style="width: 100px; height: 70px; "
              rawStyle="width: 100.0px; height: 70.0px;"
              contentType="RAW"
              :layoutOpts="{parentLayout: 'FLEX',grow: -1,}"
              value="B"
              />
            <AppFormRaw 
              name="rawitem46"
              :visible="state.detailsModel.rawitem46.visible"
              class="el-alert el-alert--info is-light baseline-message"
              style="width: 100px; height: 100px; "
              rawStyle="width: 100.0px; height: 100.0px;"
              contentType="RAW"
              :layoutOpts="{parentLayout: 'FLEX',grow: -1,}"
              value="C"
              />
        </AppFormGroup>
        <AppFormGroup 
          name="grouppanel23"
          title="Flex垂直占满"
          :visible="state.detailsModel.grouppanel23.visible" 
          :layoutOpts="{selfLayout: 'FLEX',vAlign: 'stretch',parentLayout: 'TABLE_24COL',colLG: 12,colMD: 24,}"
          style="height: 200.0px;"
          :infoGroupMode="false"
          :titleBarCloseMode="0"
          :showCaption="true"
          :uIActionGroup="state.detailsModel.grouppanel23.uIActionGroup"
          @componentEvent="onComponentEvent">
            <AppFormRaw 
              name="rawitem47"
              :visible="state.detailsModel.rawitem47.visible"
              class="el-alert el-alert--warning is-light"
              style="width: 100px; "
              rawStyle="width: 100.0px; "
              contentType="RAW"
              :layoutOpts="{parentLayout: 'FLEX',grow: -1,}"
              value="A"
              />
            <AppFormRaw 
              name="rawitem48"
              :visible="state.detailsModel.rawitem48.visible"
              class="el-alert el-alert--success is-light"
              style="width: 100px; "
              rawStyle="width: 100.0px; "
              contentType="RAW"
              :layoutOpts="{parentLayout: 'FLEX',grow: -1,}"
              value="B"
              />
            <AppFormRaw 
              name="rawitem49"
              :visible="state.detailsModel.rawitem49.visible"
              class="el-alert el-alert--info is-light"
              style="width: 100px; "
              rawStyle="width: 100.0px; "
              contentType="RAW"
              :layoutOpts="{parentLayout: 'FLEX',grow: -1,}"
              value="C"
              />
        </AppFormGroup>
        <AppFormGroup 
          name="grouppanel24"
          title="Flex自适应"
          :visible="state.detailsModel.grouppanel24.visible" 
          :layoutOpts="{selfLayout: 'FLEX',parentLayout: 'TABLE_24COL',colLG: 12,colMD: 24,}"
          style="height: 200.0px;"
          :infoGroupMode="false"
          :titleBarCloseMode="0"
          :showCaption="true"
          :uIActionGroup="state.detailsModel.grouppanel24.uIActionGroup"
          @componentEvent="onComponentEvent">
            <AppFormRaw 
              name="rawitem50"
              :visible="state.detailsModel.rawitem50.visible"
              class="el-alert el-alert--warning is-light"
              contentType="RAW"
              :layoutOpts="{parentLayout: 'FLEX',grow: 1,}"
              value="A"
              />
            <AppFormRaw 
              name="rawitem51"
              :visible="state.detailsModel.rawitem51.visible"
              class="el-alert el-alert--success is-light"
              contentType="RAW"
              :layoutOpts="{parentLayout: 'FLEX',grow: 3,}"
              value="B"
              />
            <AppFormRaw 
              name="rawitem52"
              :visible="state.detailsModel.rawitem52.visible"
              class="el-alert el-alert--info is-light"
              contentType="RAW"
              :layoutOpts="{parentLayout: 'FLEX',grow: 1,}"
              value="C"
              />
        </AppFormGroup>
    </AppFormGroup>
    <AppFormGroup 
      name="grouppanel11"
      title="分组面板"
      :visible="state.detailsModel.grouppanel11.visible" 
      :layoutOpts="{selfLayout: 'TABLE_24COL',parentLayout: 'TABLE_24COL',colMD: 24,}"
      :infoGroupMode="false"
      :titleBarCloseMode="0"
      :showCaption="false"
      :uIActionGroup="state.detailsModel.grouppanel11.uIActionGroup"
      @componentEvent="onComponentEvent">
    </AppFormGroup>
    <AppFormGroup 
      name="grouppanel9"
      title="表单项标签布局"
      :visible="state.detailsModel.grouppanel9.visible" 
      :layoutOpts="{selfLayout: 'TABLE_24COL',parentLayout: 'TABLE_24COL',colMD: 24,}"
      :infoGroupMode="false"
      :titleBarCloseMode="0"
      :showCaption="true"
      :uIActionGroup="state.detailsModel.grouppanel9.uIActionGroup"
      @componentEvent="onComponentEvent">
        <AppFormItem 
          name="formitem"
          label="上方标签"
          labelPos="TOP"
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
        <AppFormItem 
          name="formitem1"
          label="左侧标签"
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
        <AppFormItem 
          name="formitem2"
          label="左侧标签（宽200）"
          labelPos="LEFT"
          :labelWidth="200"
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
        <AppFormItem 
          name="formitem4"
          label="右侧标签"
          labelPos="RIGHT"
          :labelWidth="130"
          :showLabel="true"
          :rules="state.rules.formitem4"
          :required="state.detailsModel.formitem4.required"
          :visible="state.detailsModel.formitem4.visible" 
          :layoutOpts="{parentLayout: 'TABLE_24COL',colMD: 24,}"
          >
          <div class="form-editor-container" style="">
          <AppInput
            name="formitem4"
            :disabled="state.detailsModel.formitem4.disabled"
            type="text"
            :value="state.data.formitem4"
            @editorEvent="onEditorEvent"
          />
          </div>
        </AppFormItem>
        <AppFormItem 
          name="formitem5"
          label="下方标签"
          labelPos="BOTTOM"
          :labelWidth="130"
          :showLabel="true"
          :rules="state.rules.formitem5"
          :required="state.detailsModel.formitem5.required"
          :visible="state.detailsModel.formitem5.visible" 
          :layoutOpts="{parentLayout: 'TABLE_24COL',colMD: 24,}"
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
        <AppFormRaw 
          name="rawitem13"
          :visible="state.detailsModel.rawitem13.visible"
          class="el-alert el-alert--info is-light"
          contentType="RAW"
          :layoutOpts="{parentLayout: 'TABLE_24COL',colMD: 24,}"
          value="无标签"
          />
        <AppFormItem 
          name="formitem3"
          label=""
          labelPos="NONE"
          :labelWidth="0"
          :showLabel="false"
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
    </AppFormGroup>
    <AppFormGroup 
      name="grouppanel18"
      title="表单项编辑器布局"
      :visible="state.detailsModel.grouppanel18.visible" 
      :layoutOpts="{selfLayout: 'TABLE_24COL',parentLayout: 'TABLE_24COL',colMD: 24,}"
      :infoGroupMode="false"
      :titleBarCloseMode="0"
      :showCaption="true"
      :uIActionGroup="state.detailsModel.grouppanel18.uIActionGroup"
      @componentEvent="onComponentEvent">
        <AppFormItem 
          name="formitem6"
          label="表单项"
          labelPos="LEFT"
          :labelWidth="130"
          :showLabel="true"
          :rules="state.rules.formitem6"
          :required="state.detailsModel.formitem6.required"
          :visible="state.detailsModel.formitem6.visible" 
          :layoutOpts="{parentLayout: 'TABLE_24COL',colMD: 24,}"
          >
          <div class="form-editor-container" style="width: 200.0px;">
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
          label="表单项"
          labelPos="LEFT"
          :labelWidth="130"
          :showLabel="true"
          :rules="state.rules.formitem7"
          :required="state.detailsModel.formitem7.required"
          :visible="state.detailsModel.formitem7.visible" 
          :layoutOpts="{parentLayout: 'TABLE_24COL',colMD: 24,}"
          >
          <div class="form-editor-container" style="height: 150.0px">
          <AppInput
            name="formitem7"
            :disabled="state.detailsModel.formitem7.disabled"
            :showMaxLength="true"
            type="textarea"
            :value="state.data.formitem7"
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
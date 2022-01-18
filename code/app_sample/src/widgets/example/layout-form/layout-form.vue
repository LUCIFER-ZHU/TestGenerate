<script setup lang="ts">
import { Subject } from 'rxjs';
import { ctrlState } from './layout-form-state';
import { FormControl, IActionParam, IParam, ControlAction, IContext } from '@core';

interface Props {
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
const { state, onEditorEvent, onComponentEvent } = new FormControl(ctrlState, props, emit).moduleInstall();

// 暴露内部状态及能力
defineExpose({ state, name: 'form' });
</script>
<template>
  <a-form name="Layout"
    class="app-form"
    style="" :model="state.data" :rules="state.rules">
<a-col
  :lg="{span: 24, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormGroup 
    v-show="state.detailsModel.group1.visible" 
    name="group1" 
    title="栅格布局"
    titleStyle=""
    :infoGroupMode="false"
    :titleBarCloseMode="0"
    :showCaption="true"
    :uIActionGroup="state.detailsModel.group1.uIActionGroup"
    @componentEvent="onComponentEvent">
    <a-row>
<a-col
  :lg="{span: 24, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormGroup 
    v-show="state.detailsModel.grouppanel1.visible" 
    name="grouppanel1" 
    title="分组面板"
    titleStyle=""
    :infoGroupMode="false"
    :titleBarCloseMode="0"
    :showCaption="false"
    :uIActionGroup="state.detailsModel.grouppanel1.uIActionGroup"
    @componentEvent="onComponentEvent">
    <a-row>
<a-col
  :lg="{span: 1, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppRaw 
    name="rawitem1"
    v-show="state.detailsModel.rawitem1.visible"
    class="el-alert el-alert--warning is-light"
    
    contentType="RAW"
    style="height: -1.0px;width: -1.0px"
    value="1"/>
  </a-col>
<a-col
  :lg="{span: 1, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppRaw 
    name="rawitem2"
    v-show="state.detailsModel.rawitem2.visible"
    class="el-alert el-alert--success is-light"
    
    contentType="RAW"
    style="height: -1.0px;width: -1.0px"
    value="1"/>
  </a-col>
    </a-row>
  </AppFormGroup>
</a-col>
<a-col
  :lg="{span: 24, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormGroup 
    v-show="state.detailsModel.grouppanel2.visible" 
    name="grouppanel2" 
    title="分组面板"
    titleStyle=""
    :infoGroupMode="false"
    :titleBarCloseMode="0"
    :showCaption="false"
    :uIActionGroup="state.detailsModel.grouppanel2.uIActionGroup"
    @componentEvent="onComponentEvent">
    <a-row>
<a-col
  :lg="{span: 4, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppRaw 
    name="rawitem3"
    v-show="state.detailsModel.rawitem3.visible"
    class="el-alert el-alert--warning is-light"
    
    contentType="RAW"
    style="height: -1.0px;width: -1.0px"
    value="4"/>
  </a-col>
<a-col
  :lg="{span: 4, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppRaw 
    name="rawitem4"
    v-show="state.detailsModel.rawitem4.visible"
    class="el-alert el-alert--success is-light"
    
    contentType="RAW"
    style="height: -1.0px;width: -1.0px"
    value="4"/>
  </a-col>
    </a-row>
  </AppFormGroup>
</a-col>
<a-col
  :lg="{span: 24, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormGroup 
    v-show="state.detailsModel.grouppanel3.visible" 
    name="grouppanel3" 
    title="分组面板"
    titleStyle=""
    :infoGroupMode="false"
    :titleBarCloseMode="0"
    :showCaption="false"
    :uIActionGroup="state.detailsModel.grouppanel3.uIActionGroup"
    @componentEvent="onComponentEvent">
    <a-row>
<a-col
  :lg="{span: 8, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppRaw 
    name="rawitem5"
    v-show="state.detailsModel.rawitem5.visible"
    class="el-alert el-alert--warning is-light"
    
    contentType="RAW"
    style="height: -1.0px;width: -1.0px"
    value="8"/>
  </a-col>
<a-col
  :lg="{span: 8, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppRaw 
    name="rawitem6"
    v-show="state.detailsModel.rawitem6.visible"
    class="el-alert el-alert--success is-light"
    
    contentType="RAW"
    style="height: -1.0px;width: -1.0px"
    value="8"/>
  </a-col>
    </a-row>
  </AppFormGroup>
</a-col>
<a-col
  :lg="{span: 24, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormGroup 
    v-show="state.detailsModel.grouppanel4.visible" 
    name="grouppanel4" 
    title="分组面板"
    titleStyle=""
    :infoGroupMode="false"
    :titleBarCloseMode="0"
    :showCaption="false"
    :uIActionGroup="state.detailsModel.grouppanel4.uIActionGroup"
    @componentEvent="onComponentEvent">
    <a-row>
<a-col
  :lg="{span: 12, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppRaw 
    name="rawitem7"
    v-show="state.detailsModel.rawitem7.visible"
    class="el-alert el-alert--warning is-light"
    
    contentType="RAW"
    style="height: -1.0px;width: -1.0px"
    value="12"/>
  </a-col>
<a-col
  :lg="{span: 12, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppRaw 
    name="rawitem8"
    v-show="state.detailsModel.rawitem8.visible"
    class="el-alert el-alert--success is-light"
    
    contentType="RAW"
    style="height: -1.0px;width: -1.0px"
    value="12"/>
  </a-col>
    </a-row>
  </AppFormGroup>
</a-col>
<a-col
  :lg="{span: 24, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormGroup 
    v-show="state.detailsModel.grouppanel5.visible" 
    name="grouppanel5" 
    title="分组面板"
    titleStyle=""
    :infoGroupMode="false"
    :titleBarCloseMode="0"
    :showCaption="false"
    :uIActionGroup="state.detailsModel.grouppanel5.uIActionGroup"
    @componentEvent="onComponentEvent">
    <a-row>
<a-col
  :lg="{span: 24, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppRaw 
    name="rawitem9"
    v-show="state.detailsModel.rawitem9.visible"
    class="el-alert el-alert--warning is-light"
    
    contentType="RAW"
    style="height: -1.0px;width: -1.0px"
    value="24"/>
  </a-col>
    </a-row>
  </AppFormGroup>
</a-col>
<a-col
  :lg="{span: 24, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormGroup 
    v-show="state.detailsModel.grouppanel6.visible" 
    name="grouppanel6" 
    title="偏移"
    titleStyle=""
    :infoGroupMode="false"
    :titleBarCloseMode="0"
    :showCaption="false"
    :uIActionGroup="state.detailsModel.grouppanel6.uIActionGroup"
    @componentEvent="onComponentEvent">
    <a-row>
<a-col
  :lg="{span: 4, offset: 1 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppRaw 
    name="rawitem10"
    v-show="state.detailsModel.rawitem10.visible"
    class="el-alert el-alert--warning is-light"
    
    contentType="RAW"
    style="height: -1.0px;width: -1.0px"
    value="4（偏移1）"/>
  </a-col>
<a-col
  :lg="{span: 12, offset: 7 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppRaw 
    name="rawitem11"
    v-show="state.detailsModel.rawitem11.visible"
    class="el-alert el-alert--success is-light"
    
    contentType="RAW"
    style="height: -1.0px;width: -1.0px"
    value="12（偏移7）"/>
  </a-col>
    </a-row>
  </AppFormGroup>
</a-col>
<a-col
  :lg="{span: 24, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormGroup 
    v-show="state.detailsModel.grouppanel8.visible" 
    name="grouppanel8" 
    title="定高宽"
    titleStyle=""
    :infoGroupMode="false"
    :titleBarCloseMode="0"
    :showCaption="false"
    :uIActionGroup="state.detailsModel.grouppanel8.uIActionGroup"
    @componentEvent="onComponentEvent">
    <a-row>
<a-col
  :lg="{span: 12, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppRaw 
    name="rawitem12"
    v-show="state.detailsModel.rawitem12.visible"
    class="el-alert el-alert--warning is-light"
    
    contentType="RAW"
    style="height: 100.0px;width: 100.0px"
    value="12（100*100）"/>
  </a-col>
    </a-row>
  </AppFormGroup>
</a-col>
    </a-row>
  </AppFormGroup>
</a-col>
<a-col
  :lg="{span: 24, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormGroup 
    v-show="state.detailsModel.grouppanel7.visible" 
    name="grouppanel7" 
    title="Flex布局"
    titleStyle=""
    :infoGroupMode="false"
    :titleBarCloseMode="0"
    :showCaption="false"
    :uIActionGroup="state.detailsModel.grouppanel7.uIActionGroup"
    @componentEvent="onComponentEvent">
    <a-row>
<a-col
  :lg="{span: 12, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormGroup 
    v-show="state.detailsModel.grouppanel10.visible" 
    name="grouppanel10" 
    title="Flex从上到下"
    titleStyle=""
    :infoGroupMode="false"
    :titleBarCloseMode="0"
    :showCaption="true"
    :uIActionGroup="state.detailsModel.grouppanel10.uIActionGroup"
    @componentEvent="onComponentEvent">
    <div class="app-form-layout-flex" style="flex-direction: column;">
<a-col
 >
  <AppRaw 
    name="rawitem14"
    v-show="state.detailsModel.rawitem14.visible"
    class="el-alert el-alert--warning is-light"
    
    contentType="RAW"
    style="height: 100.0px;width: 100.0px"
    value="A"/>
  </a-col>
<a-col
 >
  <AppRaw 
    name="rawitem15"
    v-show="state.detailsModel.rawitem15.visible"
    class="el-alert el-alert--success is-light"
    
    contentType="RAW"
    style="height: 100.0px;width: 100.0px"
    value="B"/>
  </a-col>
<a-col
 >
  <AppRaw 
    name="rawitem16"
    v-show="state.detailsModel.rawitem16.visible"
    class="el-alert el-alert--info is-light"
    
    contentType="RAW"
    style="height: 100.0px;width: 100.0px"
    value="C"/>
  </a-col>
    </div>
  </AppFormGroup>
</a-col>
<a-col
  :lg="{span: 12, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormGroup 
    v-show="state.detailsModel.grouppanel12.visible" 
    name="grouppanel12" 
    title="Flex从下到上"
    titleStyle=""
    :infoGroupMode="false"
    :titleBarCloseMode="0"
    :showCaption="true"
    :uIActionGroup="state.detailsModel.grouppanel12.uIActionGroup"
    @componentEvent="onComponentEvent">
    <div class="app-form-layout-flex" style="flex-direction: column-reverse;">
<a-col
 >
  <AppRaw 
    name="rawitem17"
    v-show="state.detailsModel.rawitem17.visible"
    class="el-alert el-alert--warning is-light"
    
    contentType="RAW"
    style="height: 100.0px;width: 100.0px"
    value="A"/>
  </a-col>
<a-col
 >
  <AppRaw 
    name="rawitem18"
    v-show="state.detailsModel.rawitem18.visible"
    class="el-alert el-alert--success is-light"
    
    contentType="RAW"
    style="height: 100.0px;width: 100.0px"
    value="B"/>
  </a-col>
<a-col
 >
  <AppRaw 
    name="rawitem19"
    v-show="state.detailsModel.rawitem19.visible"
    class="el-alert el-alert--info is-light"
    
    contentType="RAW"
    style="height: 100.0px;width: 100.0px"
    value="C"/>
  </a-col>
    </div>
  </AppFormGroup>
</a-col>
<a-col
  :lg="{span: 12, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormGroup 
    v-show="state.detailsModel.grouppanel13.visible" 
    name="grouppanel13" 
    title="Flex水平向左"
    titleStyle=""
    :infoGroupMode="false"
    :titleBarCloseMode="0"
    :showCaption="true"
    :uIActionGroup="state.detailsModel.grouppanel13.uIActionGroup"
    @componentEvent="onComponentEvent">
    <div class="app-form-layout-flex" style="flex-direction: row;">
<a-col
 >
  <AppRaw 
    name="rawitem20"
    v-show="state.detailsModel.rawitem20.visible"
    class="el-alert el-alert--warning is-light"
    
    contentType="RAW"
    style="height: 100.0px;width: 100.0px"
    value="A"/>
  </a-col>
<a-col
 >
  <AppRaw 
    name="rawitem21"
    v-show="state.detailsModel.rawitem21.visible"
    class="el-alert el-alert--success is-light"
    
    contentType="RAW"
    style="height: 100.0px;width: 100.0px"
    value="B"/>
  </a-col>
<a-col
 >
  <AppRaw 
    name="rawitem22"
    v-show="state.detailsModel.rawitem22.visible"
    class="el-alert el-alert--info is-light"
    
    contentType="RAW"
    style="height: 100.0px;width: 100.0px"
    value="C"/>
  </a-col>
    </div>
  </AppFormGroup>
</a-col>
<a-col
  :lg="{span: 12, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormGroup 
    v-show="state.detailsModel.grouppanel14.visible" 
    name="grouppanel14" 
    title="Flex水平向右"
    titleStyle=""
    :infoGroupMode="false"
    :titleBarCloseMode="0"
    :showCaption="true"
    :uIActionGroup="state.detailsModel.grouppanel14.uIActionGroup"
    @componentEvent="onComponentEvent">
    <div class="app-form-layout-flex" style="flex-direction: row-reverse;">
<a-col
 >
  <AppRaw 
    name="rawitem23"
    v-show="state.detailsModel.rawitem23.visible"
    class="el-alert el-alert--warning is-light"
    
    contentType="RAW"
    style="height: 100.0px;width: 100.0px"
    value="A"/>
  </a-col>
<a-col
 >
  <AppRaw 
    name="rawitem24"
    v-show="state.detailsModel.rawitem24.visible"
    class="el-alert el-alert--success is-light"
    
    contentType="RAW"
    style="height: -1.0px;width: -1.0px"
    value="B"/>
  </a-col>
<a-col
 >
  <AppRaw 
    name="rawitem25"
    v-show="state.detailsModel.rawitem25.visible"
    class="el-alert el-alert--info is-light"
    
    contentType="RAW"
    style="height: 100.0px;width: 100.0px"
    value="C"/>
  </a-col>
    </div>
  </AppFormGroup>
</a-col>
<a-col
  :lg="{span: 12, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormGroup 
    v-show="state.detailsModel.grouppanel15.visible" 
    name="grouppanel15" 
    title="Flex水平居中"
    titleStyle=""
    :infoGroupMode="false"
    :titleBarCloseMode="0"
    :showCaption="true"
    :uIActionGroup="state.detailsModel.grouppanel15.uIActionGroup"
    @componentEvent="onComponentEvent">
    <div class="app-form-layout-flex" style="justify-content: center;">
<a-col
 >
  <AppRaw 
    name="rawitem26"
    v-show="state.detailsModel.rawitem26.visible"
    class="el-alert el-alert--warning is-light"
    
    contentType="RAW"
    style="height: 100.0px;width: 100.0px"
    value="A"/>
  </a-col>
<a-col
 >
  <AppRaw 
    name="rawitem27"
    v-show="state.detailsModel.rawitem27.visible"
    class="el-alert el-alert--success is-light"
    
    contentType="RAW"
    style="height: 100.0px;width: 100.0px"
    value="B"/>
  </a-col>
<a-col
 >
  <AppRaw 
    name="rawitem28"
    v-show="state.detailsModel.rawitem28.visible"
    class="el-alert el-alert--info is-light"
    
    contentType="RAW"
    style="height: 100.0px;width: 100.0px"
    value="C"/>
  </a-col>
    </div>
  </AppFormGroup>
</a-col>
<a-col
  :lg="{span: 12, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormGroup 
    v-show="state.detailsModel.grouppanel16.visible" 
    name="grouppanel16" 
    title="Flex水平两端对齐"
    titleStyle=""
    :infoGroupMode="false"
    :titleBarCloseMode="0"
    :showCaption="true"
    :uIActionGroup="state.detailsModel.grouppanel16.uIActionGroup"
    @componentEvent="onComponentEvent">
    <div class="app-form-layout-flex" style="justify-content: space-between;">
<a-col
 >
  <AppRaw 
    name="rawitem29"
    v-show="state.detailsModel.rawitem29.visible"
    class="el-alert el-alert--warning is-light"
    
    contentType="RAW"
    style="height: 100.0px;width: 100.0px"
    value="A"/>
  </a-col>
<a-col
 >
  <AppRaw 
    name="rawitem30"
    v-show="state.detailsModel.rawitem30.visible"
    class="el-alert el-alert--success is-light"
    
    contentType="RAW"
    style="height: 100.0px;width: 100.0px"
    value="B"/>
  </a-col>
<a-col
 >
  <AppRaw 
    name="rawitem31"
    v-show="state.detailsModel.rawitem31.visible"
    class="el-alert el-alert--info is-light"
    
    contentType="RAW"
    style="height: 100.0px;width: 100.0px"
    value="C"/>
  </a-col>
    </div>
  </AppFormGroup>
</a-col>
<a-col
  :lg="{span: 12, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormGroup 
    v-show="state.detailsModel.grouppanel17.visible" 
    name="grouppanel17" 
    title="Flex水平间隔相同"
    titleStyle=""
    :infoGroupMode="false"
    :titleBarCloseMode="0"
    :showCaption="true"
    :uIActionGroup="state.detailsModel.grouppanel17.uIActionGroup"
    @componentEvent="onComponentEvent">
    <div class="app-form-layout-flex" style="justify-content: space-around;">
<a-col
 >
  <AppRaw 
    name="rawitem32"
    v-show="state.detailsModel.rawitem32.visible"
    class="el-alert el-alert--warning is-light"
    
    contentType="RAW"
    style="height: 100.0px;width: 100.0px"
    value="A"/>
  </a-col>
<a-col
 >
  <AppRaw 
    name="rawitem33"
    v-show="state.detailsModel.rawitem33.visible"
    class="el-alert el-alert--success is-light"
    
    contentType="RAW"
    style="height: 100.0px;width: 100.0px"
    value="B"/>
  </a-col>
<a-col
 >
  <AppRaw 
    name="rawitem34"
    v-show="state.detailsModel.rawitem34.visible"
    class="el-alert el-alert--info is-light"
    
    contentType="RAW"
    style="height: 100.0px;width: 100.0px"
    value="C"/>
  </a-col>
    </div>
  </AppFormGroup>
</a-col>
<a-col
  :lg="{span: 12, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormGroup 
    v-show="state.detailsModel.grouppanel19.visible" 
    name="grouppanel19" 
    title="Flex垂直上对齐"
    titleStyle=""
    :infoGroupMode="false"
    :titleBarCloseMode="0"
    :showCaption="true"
    :uIActionGroup="state.detailsModel.grouppanel19.uIActionGroup"
    @componentEvent="onComponentEvent">
    <div class="app-form-layout-flex" style="align-items: flex-start;">
<a-col
 >
  <AppRaw 
    name="rawitem35"
    v-show="state.detailsModel.rawitem35.visible"
    class="el-alert el-alert--warning is-light"
    
    contentType="RAW"
    style="height: 40.0px;width: 100.0px"
    value="A"/>
  </a-col>
<a-col
 >
  <AppRaw 
    name="rawitem36"
    v-show="state.detailsModel.rawitem36.visible"
    class="el-alert el-alert--success is-light"
    
    contentType="RAW"
    style="height: 70.0px;width: 100.0px"
    value="B"/>
  </a-col>
<a-col
 >
  <AppRaw 
    name="rawitem37"
    v-show="state.detailsModel.rawitem37.visible"
    class="el-alert el-alert--info is-light"
    
    contentType="RAW"
    style="height: 100.0px;width: 100.0px"
    value="C"/>
  </a-col>
    </div>
  </AppFormGroup>
</a-col>
<a-col
  :lg="{span: 12, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormGroup 
    v-show="state.detailsModel.grouppanel20.visible" 
    name="grouppanel20" 
    title="Flex垂直下对齐"
    titleStyle=""
    :infoGroupMode="false"
    :titleBarCloseMode="0"
    :showCaption="true"
    :uIActionGroup="state.detailsModel.grouppanel20.uIActionGroup"
    @componentEvent="onComponentEvent">
    <div class="app-form-layout-flex" style="align-items: flex-end;">
<a-col
 >
  <AppRaw 
    name="rawitem38"
    v-show="state.detailsModel.rawitem38.visible"
    class="el-alert el-alert--warning is-light"
    
    contentType="RAW"
    style="height: 40.0px;width: 100.0px"
    value="A"/>
  </a-col>
<a-col
 >
  <AppRaw 
    name="rawitem39"
    v-show="state.detailsModel.rawitem39.visible"
    class="el-alert el-alert--success is-light"
    
    contentType="RAW"
    style="height: 70.0px;width: 100.0px"
    value="B"/>
  </a-col>
<a-col
 >
  <AppRaw 
    name="rawitem40"
    v-show="state.detailsModel.rawitem40.visible"
    class="el-alert el-alert--info is-light"
    
    contentType="RAW"
    style="height: 100.0px;width: 100.0px"
    value="C"/>
  </a-col>
    </div>
  </AppFormGroup>
</a-col>
<a-col
  :lg="{span: 12, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormGroup 
    v-show="state.detailsModel.grouppanel21.visible" 
    name="grouppanel21" 
    title="Flex垂直居中"
    titleStyle=""
    :infoGroupMode="false"
    :titleBarCloseMode="0"
    :showCaption="true"
    :uIActionGroup="state.detailsModel.grouppanel21.uIActionGroup"
    @componentEvent="onComponentEvent">
    <div class="app-form-layout-flex" style="align-items: center;">
<a-col
 >
  <AppRaw 
    name="rawitem41"
    v-show="state.detailsModel.rawitem41.visible"
    class="el-alert el-alert--warning is-light"
    
    contentType="RAW"
    style="height: 40.0px;width: 100.0px"
    value="A"/>
  </a-col>
<a-col
 >
  <AppRaw 
    name="rawitem42"
    v-show="state.detailsModel.rawitem42.visible"
    class="el-alert el-alert--success is-light"
    
    contentType="RAW"
    style="height: 70.0px;width: 100.0px"
    value="B"/>
  </a-col>
<a-col
 >
  <AppRaw 
    name="rawitem43"
    v-show="state.detailsModel.rawitem43.visible"
    class="el-alert el-alert--info is-light"
    
    contentType="RAW"
    style="height: 100.0px;width: 100.0px"
    value="C"/>
  </a-col>
    </div>
  </AppFormGroup>
</a-col>
<a-col
  :lg="{span: 12, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormGroup 
    v-show="state.detailsModel.grouppanel22.visible" 
    name="grouppanel22" 
    title="Flex垂直基线对齐"
    titleStyle=""
    :infoGroupMode="false"
    :titleBarCloseMode="0"
    :showCaption="true"
    :uIActionGroup="state.detailsModel.grouppanel22.uIActionGroup"
    @componentEvent="onComponentEvent">
    <div class="app-form-layout-flex" style="align-items: baseline;">
<a-col
 >
  <AppRaw 
    name="rawitem44"
    v-show="state.detailsModel.rawitem44.visible"
    class="el-alert el-alert--warning is-light baseline-warning"
    
    contentType="RAW"
    style="height: 40.0px;width: 100.0px"
    value="A"/>
  </a-col>
<a-col
 >
  <AppRaw 
    name="rawitem45"
    v-show="state.detailsModel.rawitem45.visible"
    class="el-alert el-alert--success is-light"
    
    contentType="RAW"
    style="height: 70.0px;width: 100.0px"
    value="B"/>
  </a-col>
<a-col
 >
  <AppRaw 
    name="rawitem46"
    v-show="state.detailsModel.rawitem46.visible"
    class="el-alert el-alert--info is-light baseline-message"
    
    contentType="RAW"
    style="height: 100.0px;width: 100.0px"
    value="C"/>
  </a-col>
    </div>
  </AppFormGroup>
</a-col>
<a-col
  :lg="{span: 12, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormGroup 
    v-show="state.detailsModel.grouppanel23.visible" 
    name="grouppanel23" 
    title="Flex垂直占满"
    titleStyle=""
    :infoGroupMode="false"
    :titleBarCloseMode="0"
    :showCaption="true"
    :uIActionGroup="state.detailsModel.grouppanel23.uIActionGroup"
    @componentEvent="onComponentEvent">
    <div class="app-form-layout-flex" style="align-items: stretch;">
<a-col
 >
  <AppRaw 
    name="rawitem47"
    v-show="state.detailsModel.rawitem47.visible"
    class="el-alert el-alert--warning is-light"
    
    contentType="RAW"
    style="height: -1.0px;width: 100.0px"
    value="A"/>
  </a-col>
<a-col
 >
  <AppRaw 
    name="rawitem48"
    v-show="state.detailsModel.rawitem48.visible"
    class="el-alert el-alert--success is-light"
    
    contentType="RAW"
    style="height: -1.0px;width: 100.0px"
    value="B"/>
  </a-col>
<a-col
 >
  <AppRaw 
    name="rawitem49"
    v-show="state.detailsModel.rawitem49.visible"
    class="el-alert el-alert--info is-light"
    
    contentType="RAW"
    style="height: -1.0px;width: 100.0px"
    value="C"/>
  </a-col>
    </div>
  </AppFormGroup>
</a-col>
<a-col
  :lg="{span: 12, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormGroup 
    v-show="state.detailsModel.grouppanel24.visible" 
    name="grouppanel24" 
    title="Flex自适应"
    titleStyle=""
    :infoGroupMode="false"
    :titleBarCloseMode="0"
    :showCaption="true"
    :uIActionGroup="state.detailsModel.grouppanel24.uIActionGroup"
    @componentEvent="onComponentEvent">
    <div class="app-form-layout-flex" style="">
<a-col
 >
  <AppRaw 
    name="rawitem50"
    v-show="state.detailsModel.rawitem50.visible"
    class="el-alert el-alert--warning is-light"
    
    contentType="RAW"
    style="height: -1.0px;width: -1.0px"
    value="A"/>
  </a-col>
<a-col
 >
  <AppRaw 
    name="rawitem51"
    v-show="state.detailsModel.rawitem51.visible"
    class="el-alert el-alert--success is-light"
    
    contentType="RAW"
    style="height: -1.0px;width: -1.0px"
    value="B"/>
  </a-col>
<a-col
 >
  <AppRaw 
    name="rawitem52"
    v-show="state.detailsModel.rawitem52.visible"
    class="el-alert el-alert--info is-light"
    
    contentType="RAW"
    style="height: -1.0px;width: -1.0px"
    value="C"/>
  </a-col>
    </div>
  </AppFormGroup>
</a-col>
    </a-row>
  </AppFormGroup>
</a-col>
<a-col
  :lg="{span: 24, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormGroup 
    v-show="state.detailsModel.grouppanel11.visible" 
    name="grouppanel11" 
    title="分组面板"
    titleStyle=""
    :infoGroupMode="false"
    :titleBarCloseMode="0"
    :showCaption="false"
    :uIActionGroup="state.detailsModel.grouppanel11.uIActionGroup"
    @componentEvent="onComponentEvent">
    <a-row>
    </a-row>
  </AppFormGroup>
</a-col>
<a-col
  :lg="{span: 24, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormGroup 
    v-show="state.detailsModel.grouppanel9.visible" 
    name="grouppanel9" 
    title="表单项标签布局"
    titleStyle=""
    :infoGroupMode="false"
    :titleBarCloseMode="0"
    :showCaption="true"
    :uIActionGroup="state.detailsModel.grouppanel9.uIActionGroup"
    @componentEvent="onComponentEvent">
    <a-row>
<a-col
  :lg="{span: 24, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormItem v-show="state.detailsModel.formitem.visible" name="formitem" label="上方标签">
<appInput
  name="formitem"
  type="text"
  :value="state.data.formitem"
  @editorEvent="onEditorEvent"
/> 
  </AppFormItem>
</a-col>
<a-col
  :lg="{span: 24, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormItem v-show="state.detailsModel.formitem1.visible" name="formitem1" label="左侧标签">
<appInput
  name="formitem1"
  type="text"
  :value="state.data.formitem1"
  @editorEvent="onEditorEvent"
/> 
  </AppFormItem>
</a-col>
<a-col
  :lg="{span: 24, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormItem v-show="state.detailsModel.formitem2.visible" name="formitem2" label="左侧标签（宽200）">
<appInput
  name="formitem2"
  type="text"
  :value="state.data.formitem2"
  @editorEvent="onEditorEvent"
/> 
  </AppFormItem>
</a-col>
<a-col
  :lg="{span: 24, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormItem v-show="state.detailsModel.formitem4.visible" name="formitem4" label="右侧标签">
<appInput
  name="formitem4"
  type="text"
  :value="state.data.formitem4"
  @editorEvent="onEditorEvent"
/> 
  </AppFormItem>
</a-col>
<a-col
  :lg="{span: 24, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormItem v-show="state.detailsModel.formitem5.visible" name="formitem5" label="下方标签">
<appInput
  name="formitem5"
  type="text"
  :value="state.data.formitem5"
  @editorEvent="onEditorEvent"
/> 
  </AppFormItem>
</a-col>
<a-col
  :lg="{span: 24, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppRaw 
    name="rawitem13"
    v-show="state.detailsModel.rawitem13.visible"
    class="el-alert el-alert--info is-light"
    
    contentType="RAW"
    style="height: -1.0px;width: -1.0px"
    value="无标签"/>
  </a-col>
<a-col
  :lg="{span: 24, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormItem v-show="state.detailsModel.formitem3.visible" name="formitem3" label="">
<appInput
  name="formitem3"
  type="text"
  :value="state.data.formitem3"
  @editorEvent="onEditorEvent"
/> 
  </AppFormItem>
</a-col>
    </a-row>
  </AppFormGroup>
</a-col>
<a-col
  :lg="{span: 24, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormGroup 
    v-show="state.detailsModel.grouppanel18.visible" 
    name="grouppanel18" 
    title="表单项编辑器布局"
    titleStyle=""
    :infoGroupMode="false"
    :titleBarCloseMode="0"
    :showCaption="true"
    :uIActionGroup="state.detailsModel.grouppanel18.uIActionGroup"
    @componentEvent="onComponentEvent">
    <a-row>
<a-col
  :lg="{span: 24, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormItem v-show="state.detailsModel.formitem6.visible" name="formitem6" label="表单项">
<appInput
  name="formitem6"
  type="text"
  :value="state.data.formitem6"
  @editorEvent="onEditorEvent"
/> 
  </AppFormItem>
</a-col>
<a-col
  :lg="{span: 24, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormItem v-show="state.detailsModel.formitem7.visible" name="formitem7" label="表单项">
<appInput
  name="formitem7"
  :showMaxLength="true"
  type="textarea"
  :value="state.data.formitem7"
  @editorEvent="onEditorEvent"
/> 
  </AppFormItem>
</a-col>
    </a-row>
  </AppFormGroup>
</a-col>
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
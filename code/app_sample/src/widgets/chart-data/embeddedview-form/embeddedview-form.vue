<script setup lang="ts">
import { Subject } from 'rxjs';
import { ctrlState } from './embeddedview-form-state';
import { FormControl, IActionParam, IParam, ControlAction, IContext } from '@core';
import ChartDataKanbanView from '@views/sample/chart-data-kanban-view';
import ChartDataTreeView from '@views/sample/chart-data-tree-view';
import ChartDataTreeExpForChartView from '@views/sample/chart-data-tree-exp-for-chart-view';
import ChartDataUsr3ListView from '@views/sample/chart-data-usr3-list-view';
import ChartDataListExpView from '@views/sample/chart-data-list-exp-view';
import ChartDataDataView from '@views/sample/chart-data-data-view';
import ChartDataDataViewExpView from '@views/sample/chart-data-data-view-exp-view';
import ChartDataTreeGridExView from '@views/sample/chart-data-tree-grid-ex-view';
interface Props {
  name:string,
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
const { name, state, load, loadDraft, save, remove, refresh, onEditorEvent, onComponentEvent, getData } = new FormControl(ctrlState, props, emit).moduleInstall();

// 暴露内部状态及能力
defineExpose({ name, state, load, loadDraft, save, remove, refresh, getData });
</script>
<template>
  <a-form name="Embeddedview" class="app-form" style="" :model="state.data" :rules="state.rules">
<a-col
  :lg="{span: 24, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormGroup 
    v-show="state.detailsModel.grouppanel2.visible" 
    name="grouppanel2" 
    title="看板"
    style=""
    :infoGroupMode="false"
    :titleBarCloseMode="0"
    :showCaption="true"
    :uIActionGroup="state.detailsModel.grouppanel2.uIActionGroup"
    @componentEvent="onComponentEvent">
    <a-row>
<a-col
  :lg="{span: 24, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormDruipart 
    v-show="state.detailsModel.druipart5.visible" 
    
    style="height: 300.0px"
    name="druipart5" 
    title="看板视图" 
    :context="context"
    :viewParams="viewParams"
    :data="state.data"
    :viewSubject="state.viewSubject"
    v-slot="druipartParams">
    <ChartDataKanbanView
      :class="['app-view-layout--from-druipart']"
      :context="druipartParams.context"
      :viewParams="druipartParams.viewParams"
      :viewDefaultUsage="false"
      :noViewCaption="true"
      @viewEvent="druipartParams.viewEvent"
    >
    </ChartDataKanbanView>
  </AppFormDruipart>
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
    v-show="state.detailsModel.grouppanel1.visible" 
    name="grouppanel1" 
    title="树"
    style=""
    :infoGroupMode="false"
    :titleBarCloseMode="0"
    :showCaption="true"
    :uIActionGroup="state.detailsModel.grouppanel1.uIActionGroup"
    @componentEvent="onComponentEvent">
    <a-row>
<a-col
  :lg="{span: 24, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormDruipart 
    v-show="state.detailsModel.druipart3.visible" 
    
    style="height: 200.0px"
    name="druipart3" 
    title="树视图" 
    :context="context"
    :viewParams="viewParams"
    :data="state.data"
    :viewSubject="state.viewSubject"
    v-slot="druipartParams">
    <ChartDataTreeView
      :class="['app-view-layout--from-druipart']"
      :context="druipartParams.context"
      :viewParams="druipartParams.viewParams"
      :viewDefaultUsage="false"
      :noViewCaption="true"
      @viewEvent="druipartParams.viewEvent"
    >
    </ChartDataTreeView>
  </AppFormDruipart>
</a-col>
<a-col
  :lg="{span: 24, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormDruipart 
    v-show="state.detailsModel.druipart4.visible" 
    
    style="height: 400.0px"
    name="druipart4" 
    title="树导航视图" 
    :context="context"
    :viewParams="viewParams"
    :data="state.data"
    :viewSubject="state.viewSubject"
    v-slot="druipartParams">
    <ChartDataTreeExpForChartView
      :class="['app-view-layout--from-druipart']"
      :context="druipartParams.context"
      :viewParams="druipartParams.viewParams"
      :viewDefaultUsage="false"
      :noViewCaption="true"
      @viewEvent="druipartParams.viewEvent"
    >
    </ChartDataTreeExpForChartView>
  </AppFormDruipart>
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
    v-show="state.detailsModel.group1.visible" 
    name="group1" 
    title="列表"
    style=""
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
  <AppFormDruipart 
    v-show="state.detailsModel.druipart1.visible" 
    
    style="height: 300.0px"
    name="druipart1" 
    title="列表视图" 
    :context="context"
    :viewParams="viewParams"
    :data="state.data"
    :viewSubject="state.viewSubject"
    v-slot="druipartParams">
    <ChartDataUsr3ListView
      :class="['app-view-layout--from-druipart']"
      :context="druipartParams.context"
      :viewParams="druipartParams.viewParams"
      :viewDefaultUsage="false"
      :noViewCaption="true"
      @viewEvent="druipartParams.viewEvent"
    >
    </ChartDataUsr3ListView>
  </AppFormDruipart>
</a-col>
<a-col
  :lg="{span: 24, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormDruipart 
    v-show="state.detailsModel.druipart2.visible" 
    
    style="height: 400.0px"
    name="druipart2" 
    title="列表导航视图" 
    :context="context"
    :viewParams="viewParams"
    :data="state.data"
    :viewSubject="state.viewSubject"
    v-slot="druipartParams">
    <ChartDataListExpView
      :class="['app-view-layout--from-druipart']"
      :context="druipartParams.context"
      :viewParams="druipartParams.viewParams"
      :viewDefaultUsage="false"
      :noViewCaption="true"
      @viewEvent="druipartParams.viewEvent"
    >
    </ChartDataListExpView>
  </AppFormDruipart>
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
    title="数据视图"
    style=""
    :infoGroupMode="false"
    :titleBarCloseMode="0"
    :showCaption="true"
    :uIActionGroup="state.detailsModel.grouppanel3.uIActionGroup"
    @componentEvent="onComponentEvent">
    <a-row>
<a-col
  :lg="{span: 24, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormDruipart 
    v-show="state.detailsModel.druipart6.visible" 
    
    style="height: 400.0px"
    name="druipart6" 
    title="数据视图" 
    :context="context"
    :viewParams="viewParams"
    :data="state.data"
    :viewSubject="state.viewSubject"
    v-slot="druipartParams">
    <ChartDataDataView
      :class="['app-view-layout--from-druipart']"
      :context="druipartParams.context"
      :viewParams="druipartParams.viewParams"
      :viewDefaultUsage="false"
      :noViewCaption="true"
      @viewEvent="druipartParams.viewEvent"
    >
    </ChartDataDataView>
  </AppFormDruipart>
</a-col>
<a-col
  :lg="{span: 24, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormDruipart 
    v-show="state.detailsModel.druipart7.visible" 
    
    style="height: 400.0px"
    name="druipart7" 
    title="卡片导航" 
    :context="context"
    :viewParams="viewParams"
    :data="state.data"
    :viewSubject="state.viewSubject"
    v-slot="druipartParams">
    <ChartDataDataViewExpView
      :class="['app-view-layout--from-druipart']"
      :context="druipartParams.context"
      :viewParams="druipartParams.viewParams"
      :viewDefaultUsage="false"
      :noViewCaption="true"
      @viewEvent="druipartParams.viewEvent"
    >
    </ChartDataDataViewExpView>
  </AppFormDruipart>
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
    title="树表格"
    style=""
    :infoGroupMode="false"
    :titleBarCloseMode="0"
    :showCaption="true"
    :uIActionGroup="state.detailsModel.grouppanel4.uIActionGroup"
    @componentEvent="onComponentEvent">
    <a-row>
<a-col
  :lg="{span: 24, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormDruipart 
    v-show="state.detailsModel.druipart8.visible" 
    
    style="height: 400.0px"
    name="druipart8" 
    title="树表格" 
    :context="context"
    :viewParams="viewParams"
    :data="state.data"
    :viewSubject="state.viewSubject"
    v-slot="druipartParams">
    <ChartDataTreeGridExView
      :class="['app-view-layout--from-druipart']"
      :context="druipartParams.context"
      :viewParams="druipartParams.viewParams"
      :viewDefaultUsage="false"
      :noViewCaption="true"
      @viewEvent="druipartParams.viewEvent"
    >
    </ChartDataTreeGridExView>
  </AppFormDruipart>
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
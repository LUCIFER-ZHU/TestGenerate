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
    name="Embeddedview"
    class="app-form"
    style=""
    :model="state.data"
    :rules="state.rules"
    ref="xDataCtrl"
  >
    <AppFormGroup 
      name="grouppanel2"
      title="看板"
      :visible="state.detailsModel.grouppanel2.visible" 
      :layoutOpts="{selfLayout: 'TABLE_24COL',parentLayout: 'TABLE_24COL',colMD: 24,}"
      :infoGroupMode="false"
      :titleBarCloseMode="0"
      :showCaption="true"
      :uIActionGroup="state.detailsModel.grouppanel2.uIActionGroup"
      @componentEvent="onComponentEvent">
        <AppFormDruipart 
          name="druipart5" 
          title="看板视图"
          :formSubject="state.formSubject"
          :visible="state.detailsModel.druipart5.visible"
          viewCodeName="ChartDataKanbanView"
          :layoutOpts="{parentLayout: 'TABLE_24COL',colMD: 24,}"
          style="height: 300.0px;"
          paramItem="srfkey"
          deCodeName="chartdata"
          :context="context"
          :viewParams="viewParams"
          :data="state.data"
          :viewSubject="state.viewSubject">
            <template #default="druipartParams">
            <ChartDataKanbanView
              :class="['app-view-layout--from-druipart']"
              :context="druipartParams.context"
              :viewParams="druipartParams.viewParams"
              :viewDefaultUsage="false"
              :showCaptionBar="false"
              openType="EMBED"
              :viewSubject="state.viewSubject"
              @viewEvent="druipartParams.viewEvent"
            >
            </ChartDataKanbanView>
            </template>
        </AppFormDruipart>
    </AppFormGroup>
    <AppFormGroup 
      name="grouppanel1"
      title="树"
      :visible="state.detailsModel.grouppanel1.visible" 
      :layoutOpts="{selfLayout: 'TABLE_24COL',parentLayout: 'TABLE_24COL',colMD: 24,}"
      :infoGroupMode="false"
      :titleBarCloseMode="0"
      :showCaption="true"
      :uIActionGroup="state.detailsModel.grouppanel1.uIActionGroup"
      @componentEvent="onComponentEvent">
        <AppFormDruipart 
          name="druipart3" 
          title="树视图"
          :formSubject="state.formSubject"
          :visible="state.detailsModel.druipart3.visible"
          viewCodeName="ChartDataTreeView"
          :layoutOpts="{parentLayout: 'TABLE_24COL',colMD: 24,}"
          style="height: 200.0px;"
          paramItem="srfkey"
          deCodeName="chartdata"
          :context="context"
          :viewParams="viewParams"
          :data="state.data"
          :viewSubject="state.viewSubject">
            <template #default="druipartParams">
            <ChartDataTreeView
              :class="['app-view-layout--from-druipart']"
              :context="druipartParams.context"
              :viewParams="druipartParams.viewParams"
              :viewDefaultUsage="false"
              :showCaptionBar="false"
              openType="EMBED"
              :viewSubject="state.viewSubject"
              @viewEvent="druipartParams.viewEvent"
            >
            </ChartDataTreeView>
            </template>
        </AppFormDruipart>
        <AppFormDruipart 
          name="druipart4" 
          title="树导航视图"
          :formSubject="state.formSubject"
          :visible="state.detailsModel.druipart4.visible"
          viewCodeName="ChartDataTreeExpForChartView"
          :layoutOpts="{parentLayout: 'TABLE_24COL',colMD: 24,}"
          style="height: 400.0px;"
          paramItem="srfkey"
          deCodeName="chartdata"
          :context="context"
          :viewParams="viewParams"
          :data="state.data"
          :viewSubject="state.viewSubject">
            <template #default="druipartParams">
            <ChartDataTreeExpForChartView
              :class="['app-view-layout--from-druipart']"
              :context="druipartParams.context"
              :viewParams="druipartParams.viewParams"
              :viewDefaultUsage="false"
              :showCaptionBar="false"
              openType="EMBED"
              :viewSubject="state.viewSubject"
              @viewEvent="druipartParams.viewEvent"
            >
            </ChartDataTreeExpForChartView>
            </template>
        </AppFormDruipart>
    </AppFormGroup>
    <AppFormGroup 
      name="group1"
      title="列表"
      :visible="state.detailsModel.group1.visible" 
      :layoutOpts="{selfLayout: 'TABLE_24COL',parentLayout: 'TABLE_24COL',colMD: 24,}"
      :infoGroupMode="false"
      :titleBarCloseMode="0"
      :showCaption="true"
      :uIActionGroup="state.detailsModel.group1.uIActionGroup"
      @componentEvent="onComponentEvent">
        <AppFormDruipart 
          name="druipart1" 
          title="列表视图"
          :formSubject="state.formSubject"
          :visible="state.detailsModel.druipart1.visible"
          viewCodeName="ChartDataUsr3ListView"
          :layoutOpts="{parentLayout: 'TABLE_24COL',colMD: 24,}"
          style="height: 300.0px;"
          paramItem="srfkey"
          deCodeName="chartdata"
          :context="context"
          :viewParams="viewParams"
          :data="state.data"
          :viewSubject="state.viewSubject">
            <template #default="druipartParams">
            <ChartDataUsr3ListView
              :class="['app-view-layout--from-druipart']"
              :context="druipartParams.context"
              :viewParams="druipartParams.viewParams"
              :viewDefaultUsage="false"
              :showCaptionBar="false"
              openType="EMBED"
              :viewSubject="state.viewSubject"
              @viewEvent="druipartParams.viewEvent"
            >
            </ChartDataUsr3ListView>
            </template>
        </AppFormDruipart>
        <AppFormDruipart 
          name="druipart2" 
          title="列表导航视图"
          :formSubject="state.formSubject"
          :visible="state.detailsModel.druipart2.visible"
          viewCodeName="ChartDataListExpView"
          :layoutOpts="{parentLayout: 'TABLE_24COL',colMD: 24,}"
          style="height: 400.0px;"
          paramItem="srfkey"
          deCodeName="chartdata"
          :context="context"
          :viewParams="viewParams"
          :data="state.data"
          :viewSubject="state.viewSubject">
            <template #default="druipartParams">
            <ChartDataListExpView
              :class="['app-view-layout--from-druipart']"
              :context="druipartParams.context"
              :viewParams="druipartParams.viewParams"
              :viewDefaultUsage="false"
              :showCaptionBar="false"
              openType="EMBED"
              :viewSubject="state.viewSubject"
              @viewEvent="druipartParams.viewEvent"
            >
            </ChartDataListExpView>
            </template>
        </AppFormDruipart>
    </AppFormGroup>
    <AppFormGroup 
      name="grouppanel3"
      title="数据视图"
      :visible="state.detailsModel.grouppanel3.visible" 
      :layoutOpts="{selfLayout: 'TABLE_24COL',parentLayout: 'TABLE_24COL',colMD: 24,}"
      :infoGroupMode="false"
      :titleBarCloseMode="0"
      :showCaption="true"
      :uIActionGroup="state.detailsModel.grouppanel3.uIActionGroup"
      @componentEvent="onComponentEvent">
        <AppFormDruipart 
          name="druipart6" 
          title="数据视图"
          :formSubject="state.formSubject"
          :visible="state.detailsModel.druipart6.visible"
          viewCodeName="ChartDataDataView"
          :layoutOpts="{parentLayout: 'TABLE_24COL',colMD: 24,}"
          style="height: 400.0px;"
          paramItem="srfkey"
          deCodeName="chartdata"
          :context="context"
          :viewParams="viewParams"
          :data="state.data"
          :viewSubject="state.viewSubject">
            <template #default="druipartParams">
            <ChartDataDataView
              :class="['app-view-layout--from-druipart']"
              :context="druipartParams.context"
              :viewParams="druipartParams.viewParams"
              :viewDefaultUsage="false"
              :showCaptionBar="false"
              openType="EMBED"
              :viewSubject="state.viewSubject"
              @viewEvent="druipartParams.viewEvent"
            >
            </ChartDataDataView>
            </template>
        </AppFormDruipart>
        <AppFormDruipart 
          name="druipart7" 
          title="卡片导航"
          :formSubject="state.formSubject"
          :visible="state.detailsModel.druipart7.visible"
          viewCodeName="ChartDataDataViewExpView"
          :layoutOpts="{parentLayout: 'TABLE_24COL',colMD: 24,}"
          style="height: 400.0px;"
          paramItem="srfkey"
          deCodeName="chartdata"
          :context="context"
          :viewParams="viewParams"
          :data="state.data"
          :viewSubject="state.viewSubject">
            <template #default="druipartParams">
            <ChartDataDataViewExpView
              :class="['app-view-layout--from-druipart']"
              :context="druipartParams.context"
              :viewParams="druipartParams.viewParams"
              :viewDefaultUsage="false"
              :showCaptionBar="false"
              openType="EMBED"
              :viewSubject="state.viewSubject"
              @viewEvent="druipartParams.viewEvent"
            >
            </ChartDataDataViewExpView>
            </template>
        </AppFormDruipart>
    </AppFormGroup>
    <AppFormGroup 
      name="grouppanel4"
      title="树表格"
      :visible="state.detailsModel.grouppanel4.visible" 
      :layoutOpts="{selfLayout: 'TABLE_24COL',parentLayout: 'TABLE_24COL',colMD: 24,}"
      :infoGroupMode="false"
      :titleBarCloseMode="0"
      :showCaption="true"
      :uIActionGroup="state.detailsModel.grouppanel4.uIActionGroup"
      @componentEvent="onComponentEvent">
        <AppFormDruipart 
          name="druipart8" 
          title="树表格"
          :formSubject="state.formSubject"
          :visible="state.detailsModel.druipart8.visible"
          viewCodeName="ChartDataTreeGridExView"
          :layoutOpts="{parentLayout: 'TABLE_24COL',colMD: 24,}"
          style="height: 400.0px;"
          paramItem="srfkey"
          deCodeName="chartdata"
          :context="context"
          :viewParams="viewParams"
          :data="state.data"
          :viewSubject="state.viewSubject">
            <template #default="druipartParams">
            <ChartDataTreeGridExView
              :class="['app-view-layout--from-druipart']"
              :context="druipartParams.context"
              :viewParams="druipartParams.viewParams"
              :viewDefaultUsage="false"
              :showCaptionBar="false"
              openType="EMBED"
              :viewSubject="state.viewSubject"
              @viewEvent="druipartParams.viewEvent"
            >
            </ChartDataTreeGridExView>
            </template>
        </AppFormDruipart>
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
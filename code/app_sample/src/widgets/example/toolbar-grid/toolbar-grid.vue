<script setup lang="ts">
import { Subject } from 'rxjs';
import { ctrlState } from './toolbar-grid-state';
import { GridControl, IActionParam, IParam, IContext, ControlAction, deepCopy } from '@core';
import AppToolbar from '@components/common/app-toolbar.vue';

interface Props {
  name:string,
  parent: IParam;
  context: IContext;
  viewParams: IParam;
  multiple?: boolean;
  rowEditState?: boolean;
  rowActiveMode?: 0 | 1 | 2;
  selectedData?: IParam[];
  selectFirstDefault?: boolean;
  controlAction: ControlAction;
  showBusyIndicator?: boolean;
  viewSubject: Subject<IActionParam>;
}

const props = withDefaults(defineProps < Props > (), {
  viewSubject: () => new Subject < IActionParam > (),
  showBusyIndicator: true,
  multiple: false,
  rowEditState: false,
  rowActiveMode: 0,
  selectFirstDefault: false,
})

// emit声明
interface CtrlEmit {
  (name: "ctrlEvent", value: IActionParam): void;
}

// emit声明
const emit = defineEmits<CtrlEmit>();

// 安装功能模块，提供状态和能力
const { name, state, useCustom, onEditorEvent, onToolbarEvent, onActionColEvent, newRow, remove, save, load, refresh, getData, exportExcel } = new GridControl(ctrlState, props, emit).moduleInstall();
const { useScrollOption, useRowKey, useRowClassName, useCustomRow, useRowSelectionOption, onResizeColumn, onGridChange, useExpandedRowKeys, onExpandedRowsChange } = useCustom;
const renderBatchToolbar = (total: number, range: IParam[]) => {
  return (
    h('div', { class: 'app-grid-batchtoolbar-container' }, [
      h(AppToolbar, {
        mode: 'button',
        class: 'app-grid-batchtoolbar',
        name: 'grid_batchtoolbar',
        actionModel: state.batchToolbar,
        onOnToolbarEvent: (event: any) => onToolbarEvent(event)
      }),
      `显示 ${range[0]} - ${range[1]} 条数据，共 ${total} 条数据`
    ])
  )
}

// 暴露内部状态及能力
defineExpose({ name, state, newRow, remove, save, load, refresh, getData, exportExcel });
</script>
<template>
    <a-form name="grid" class="app-grid-form"  >
      <a-table
        bordered
        sticky
        class="app-grid"
        :rowKey="useRowKey"
        :showHeader="true"
        :scroll="useScrollOption"
        :sortDirections="['ascend', 'descend']"
        :data-source="state.items"
        :row-selection="useRowSelectionOption"
        :expandedRowKeys="useExpandedRowKeys"
        :columns="state.columnsModel"
        :pagination="Object.assign(state.mdCtrlPaging.pagination, {
          showTotal: (total, range) => {
            return renderBatchToolbar(total, range);
          }
        })"
        :customRow="useCustomRow"
        :rowClassName="useRowClassName"
        @change="onGridChange"
        @expandedRowsChange="onExpandedRowsChange"
        @resizeColumn="onResizeColumn"
      >
        <template #emptyText>
          <div class="not-data">
            <span class="empty-text">
              无数据
            </span>
            <AppToolbar
              mode="button"
              class="app-grid-quicktoolbar"
              name="grid_quicktoolbar"
              :actionModel="state.quickToolbar"
              @onToolbarEvent="onToolbarEvent"
            ></AppToolbar>
          </div>
        </template>
        <template #headerCell="{title, column}">
          <div v-if="Object.is(column.dataIndex, 'examplename')" class="header-cell">

              <span class="title">{{title}}</span>
            
          </div>
          <div v-if="Object.is(column.dataIndex, 'groupgridcolumn1')" class="header-cell">

              <span class="title">{{title}}</span>
            
          </div>
          <div v-if="Object.is(column.dataIndex, 'uagridcolumn1')" class="header-cell">

              <span class="title">{{title}}</span>
            
          </div>
        </template>
        <template #bodyCell="{ column, text, record, index }">
          <div v-if="Object.is(column.dataIndex, 'examplename')" class="table-cell">
            <div class="text-cell">
              <span class="text">{{text}}</span>
              
            </div>
          </div>
          <div v-if="Object.is(column.dataIndex, 'fieldx')" class="table-cell">
            <div class="text-cell">
              <span class="text">{{text}}</span>
              
            </div>
          </div>
          <div v-if="Object.is(column.dataIndex, 'fieldy')" class="table-cell">
            <div class="text-cell">
              <span class="text">{{text}}</span>
              
            </div>
          </div>
          <div v-if="Object.is(column.dataIndex, 'fieldz')" class="table-cell">
            <div class="text-cell">
              <span class="text">{{text}}</span>
              
            </div>
          </div>
          <div v-if="Object.is(column.dataIndex, 'uagridcolumn1')" class="table-cell">
            <AppToolbar
              mode="link"
              name="uagridcolumn1"
              :actionModel="record.uagridcolumn1"
              @onToolbarEvent="onActionColEvent($event, record)"/>
          </div>
        </template>

      </a-table>
  </a-form>
</template>
<style lang="scss">
  .app-grid {
    height: 100%;
    padding-top: 8px;

    .table-striped {
      background-color: #fafafa;
    }
  }
</style>
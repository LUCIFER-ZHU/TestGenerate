<script setup lang="ts">
import { Subject } from 'rxjs';
import { ctrlState } from './main-2-grid-state';
import { GridControl, IActionParam, IParam, IContext, ControlAction, deepCopy } from '@core';

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
        :pagination="state.mdCtrlPaging.pagination"
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
          </div>
        </template>
        <template #headerCell="{title, column}">
          <div v-if="Object.is(column.dataIndex, 'chartdataname')" class="header-cell h1-title">

              <span class="title">{{title}}</span>
            
          </div>
          <div v-if="Object.is(column.dataIndex, 'chartdate')" class="header-cell">

              <span class="title">{{title}}</span>
            
          </div>
          <div v-if="Object.is(column.dataIndex, 'datatype')" class="header-cell">

              <span class="title">{{title}}</span>
            
          </div>
          <div v-if="Object.is(column.dataIndex, 'nian')" class="header-cell">

              <span class="title">{{title}}</span>
            
          </div>
          <div v-if="Object.is(column.dataIndex, 'data')" class="header-cell">

              <span class="title">{{title}}</span>
            
          </div>
          <div v-if="Object.is(column.dataIndex, 'time')" class="header-cell">

              <span class="title">{{title}}</span>
            
          </div>
          <div v-if="Object.is(column.dataIndex, 'person')" class="header-cell">

              <span class="title">{{title}}</span>
            
          </div>
          <div v-if="Object.is(column.dataIndex, 'updatedate')" class="header-cell">

              <span class="title">{{title}}</span>
            
          </div>
          <div v-if="Object.is(column.dataIndex, 'uagridcolumn1')" class="header-cell">

              <span class="title">{{title}}</span>
            
          </div>
        </template>
        <template #bodyCell="{ column, text, record, index }">
          <div v-if="Object.is(column.dataIndex, 'chartdataname')" class="table-cell gird-red-border">
            <div v-if="state.rowEditState" class="editor-cell">
              <AppFormItem
                name="chartdataname"
                :error="state.gridEditState.chartdataname?.[index]?.message"
                :rules="state.rules.chartdataname"
                :showLabel="false"
              >
              <AppInput
                name="chartdataname"
                :maxLength="200"
                type="text"
                :value="record.chartdataname"
                @editorEvent="onEditorEvent($event,index)"
              />
              </AppFormItem>
            </div>
            <div v-else class="text-cell">
              <span class="text">{{text}}</span>
              
            </div>
          </div>
          <div v-if="Object.is(column.dataIndex, 'chartdate')" class="table-cell">
            <div v-if="state.rowEditState" class="editor-cell">
              <AppFormItem
                name="chartdate"
                :error="state.gridEditState.chartdate?.[index]?.message"
                :rules="state.rules.chartdate"
                :showLabel="false"
              >
              <AppDatePicker
                name="chartdate"
                dateFormat="YYYY-MM-DD HH:mm:ss"
                dateType="dateTime"
                :value="record.chartdate"
                @editorEvent="onEditorEvent($event,index)"
              />
              </AppFormItem>
            </div>
            <div v-else class="text-cell">
              <AppSpan
                name="chartdate"
                :value="text"
                :dataType="0"
                valueFormat="YYYY-MM-DD HH:mm:ss"
                :precision="0"
              ></AppSpan>

            </div>
          </div>
          <div v-if="Object.is(column.dataIndex, 'datatype')" class="table-cell">
            <div class="text-cell">
              <AppCodelist
                name="datatype"
                codeListTag="Sample__DataType"
                :context="state.context"
                :data="record"
                :value="text"
                :viewParams="state.viewParams"
              ></AppCodelist>
            </div>
          </div>
          <div v-if="Object.is(column.dataIndex, 'nian')" class="table-cell">
            <div v-if="state.rowEditState" class="editor-cell">
              <AppFormItem
                name="nian"
                :error="state.gridEditState.nian?.[index]?.message"
                :rules="state.rules.year"
                :showLabel="false"
              >
              <AppInput
                name="nian"
                type="text"
                :value="record.nian"
                @editorEvent="onEditorEvent($event,index)"
              />
              </AppFormItem>
            </div>
            <div v-else class="text-cell">
              <span class="text">{{text}}</span>
              
            </div>
          </div>
          <div v-if="Object.is(column.dataIndex, 'data')" class="table-cell">
            <div v-if="state.rowEditState" class="editor-cell">
              <AppFormItem
                name="data"
                :error="state.gridEditState.data?.[index]?.message"
                :rules="state.rules.data"
                :showLabel="false"
              >
              <AppInput
                name="data"
                type="number"
                :value="record.data"
                @editorEvent="onEditorEvent($event,index)"
              />
              </AppFormItem>
            </div>
            <div v-else class="text-cell">
              <span class="text">{{text}}</span>
              
            </div>
          </div>
          <div v-if="Object.is(column.dataIndex, 'time')" class="table-cell">
            <div v-if="state.rowEditState" class="editor-cell">
              <AppFormItem
                name="time"
                :error="state.gridEditState.time?.[index]?.message"
                :rules="state.rules.datetime"
                :showLabel="false"
              >
              <AppDatePicker
                name="time"
                dateFormat="YYYY-MM-DD HH:mm:ss"
                dateType="dateTime"
                :value="record.time"
                @editorEvent="onEditorEvent($event,index)"
              />
              </AppFormItem>
            </div>
            <div v-else class="text-cell">
              <AppSpan
                name="time"
                :value="text"
                :dataType="0"
                valueFormat="YYYY-MM-DD HH:mm:ss"
                :precision="0"
              ></AppSpan>

            </div>
          </div>
          <div v-if="Object.is(column.dataIndex, 'person')" class="table-cell">
            <div class="text-cell">
              <AppCodelist
                name="person"
                codeListTag="SysOperator"
                :context="state.context"
                :data="record"
                :value="text"
                :viewParams="state.viewParams"
              ></AppCodelist>
            </div>
          </div>
          <div v-if="Object.is(column.dataIndex, 'updatedate')" class="table-cell">
            <div class="text-cell">
              <AppSpan
                name="updatedate"
                :value="text"
                :dataType="0"
                valueFormat="YYYY-MM-DD HH:mm:ss"
                :precision="0"
              ></AppSpan>

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
        <template #summary>
          <a-table-summary>
            <a-table-summary-row>
              <a-table-summary-cell align="center">数据聚合</a-table-summary-cell>
              <a-table-summary-cell v-for="(item, index) in state.gridAgg.aggData" :key="index">
                <span>{{item}}</span>
              </a-table-summary-cell>
            </a-table-summary-row>
          </a-table-summary>
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
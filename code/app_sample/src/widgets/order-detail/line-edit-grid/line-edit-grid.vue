<script setup lang="ts">
import { Subject } from 'rxjs';
import { ctrlState } from './line-edit-grid-state';
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
          <div v-if="Object.is(column.dataIndex, 'productname')" class="header-cell">

              <span class="title">{{title}}</span>
            
          </div>
          <div v-if="Object.is(column.dataIndex, 'price')" class="header-cell">

              <span class="title">{{title}}</span>
            
          </div>
          <div v-if="Object.is(column.dataIndex, 'qty')" class="header-cell">

              <span class="title">{{title}}</span>
            
          </div>
          <div v-if="Object.is(column.dataIndex, 'amount')" class="header-cell">

              <span class="title">{{title}}</span>
            
          </div>
          <div v-if="Object.is(column.dataIndex, 'productid')" class="header-cell">

              <span class="title">{{title}}</span>
            
          </div>
        </template>
        <template #bodyCell="{ column, text, record, index }">
          <div v-if="Object.is(column.dataIndex, 'productname')" class="table-cell">
            <div v-if="state.rowEditState" class="editor-cell">
              <AppFormItem
                name="productname"
                :error="state.gridEditState.productname?.[index]?.message"
                :rules="state.rules.productname"
                :showLabel="false"
              >
              <AppDataPicker
                name="productname"
                :data="state.data"
                valueItem="productid"
                :context="state.context"
                :viewParams="state.viewParams"
                deMajorField="productname"
                deKeyField="productid"
                pickUpView="ProductPickupView"
                :value="record.productname"
                @editorEvent="onEditorEvent($event,index)"
              />
              </AppFormItem>
            </div>
            <div v-else class="text-cell">
              <span class="text">{{text}}</span>
              
            </div>
          </div>
          <div v-if="Object.is(column.dataIndex, 'price')" class="table-cell">
            <div v-if="state.rowEditState" class="editor-cell">
              <AppFormItem
                name="price"
                :error="state.gridEditState.price?.[index]?.message"
                :rules="state.rules.price"
                :showLabel="false"
              >
              <AppInput
                name="price"
                type="text"
                :value="record.price"
                @editorEvent="onEditorEvent($event,index)"
              />
              </AppFormItem>
            </div>
            <div v-else class="text-cell">
              <span class="text">{{text}}</span>
              
            </div>
          </div>
          <div v-if="Object.is(column.dataIndex, 'qty')" class="table-cell">
            <div v-if="state.rowEditState" class="editor-cell">
              <AppFormItem
                name="qty"
                :error="state.gridEditState.qty?.[index]?.message"
                :rules="state.rules.qty"
                :showLabel="false"
              >
              <AppInput
                name="qty"
                type="text"
                :value="record.qty"
                @editorEvent="onEditorEvent($event,index)"
              />
              </AppFormItem>
            </div>
            <div v-else class="text-cell">
              <span class="text">{{text}}</span>
              
            </div>
          </div>
          <div v-if="Object.is(column.dataIndex, 'amount')" class="table-cell">
            <div class="text-cell">
              <span class="text">{{text}}</span>
              
            </div>
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
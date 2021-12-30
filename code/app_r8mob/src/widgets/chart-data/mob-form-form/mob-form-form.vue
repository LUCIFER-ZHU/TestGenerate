<script setup lang="ts">
import { Subject } from 'rxjs';
import { CtrlConfig } from './mob-form-form-config';
import { FormControl, IActionParam, IParam, ControlAction } from '@ibiz-core';

interface Props {
  context: IParam;
  viewParams?: IParam;
  controlAction: ControlAction;
  showBusyIndicator?: boolean;
  viewSubject: Subject<IActionParam>;
}

const props = withDefaults(defineProps<Props>(), {
  viewSubject: () => new Subject<IActionParam>(),
  showBusyIndicator: true,
})

// emit声明
interface CtrlEmit {
  (name: "ctrlEvent", value: IActionParam): void;
}

const emit = defineEmits<CtrlEmit>();

// 安装功能模块，提供状态和能力方法
const { state, handleEditorEvent } = new FormControl(CtrlConfig).moduleInstall(props);

</script>
<template>
  <a-form 
    name="MobForm" 
    class="ibiz-form"
    style=""
    :model="state.data" 
    :rules="state.rules">
    <a-tabs class="app-form-page">

<a-tab-pane key="formpage1" tab="基本信息">
  <a-row>
<a-col :span="24">
  <IbizFormGroup name="group1" title="图表基本信息">
    <a-row>
<a-col :span="24">
  <IbizFormItem name="chartdataname" label="图表名称">
    /*未找到模板[MOBTEXT]*/  </IbizFormItem>
</a-col>
<a-col :span="24">
  <IbizFormItem name="data" label="数据">
    /*未找到模板[MOBTEXT]*/  </IbizFormItem>
</a-col>
    </a-row>
  </IbizFormGroup>
</a-col>
<a-col :span="24">
  <IbizFormItem name="season" label="季度">
    /*未找到模板[MOBTEXTAREA]*/  </IbizFormItem>
</a-col>
<a-col :span="24">
  <IbizFormItem name="totalprice" label="总计价格">
    /*未找到模板[MOBTEXT]*/  </IbizFormItem>
</a-col>
<a-col :span="24">
  <IbizFormItem name="datatype" label="数据分类">
    /*未找到模板[MOBRADIOLIST]*/  </IbizFormItem>
</a-col>
<a-col :span="24">
  <IbizFormItem name="formitem1" label="评分器">
    /*未找到模板[MOBRATING]*/  </IbizFormItem>
</a-col>
<a-col :span="24">
  <IbizFormItem name="data1" label="步进器">
    /*未找到模板[MOBSTEPPER]*/  </IbizFormItem>
</a-col>
<a-col :span="24">
  <IbizFormItem name="formitem" label="数据选择">
    /*未找到模板[MOBPICKER]*/  </IbizFormItem>
</a-col>
<a-col :span="24">
  <IbizFormItem name="formitem2" label="值项">
    /*未找到模板[HIDDEN]*/  </IbizFormItem>
</a-col>
<a-col :span="24">
  <IbizFormItem name="formitem3" label="标签">
<IbizSpan
  name="formitem3"
  :value="state.data.formitem3"
  dataType="25"
  :contextProp="state.context"
  :viewParamsProp="state.viewParams"/>
  </IbizFormItem>
</a-col>
<a-col :span="24">
  <IbizFormItem name="formitem4" label="滑动输入条">
    /*未找到模板[MOBSLIDER]*/  </IbizFormItem>
</a-col>
<a-col :span="24">
  <IbizFormItem name="formitem5" label="开关">
    /*未找到模板[MOBSWITCH]*/  </IbizFormItem>
</a-col>
<a-col :span="24">
  <IbizFormItem name="formitem6" label="下拉列表框">
    /*未找到模板[MOBDROPDOWNLIST]*/  </IbizFormItem>
</a-col>
<a-col :span="24">
  <IbizFormItem name="formitem7" label="时间选择">
    /*未找到模板[MOBDATE]*/  </IbizFormItem>
</a-col>
    /*未找到模板[BUTTON]*/<a-col :span="24">
  <IbizFormGroup name="grouppanel1" title="数据选择测试">
    <a-row>
<a-col :span="24">
  <IbizFormItem name="formitem8" label="多数据单选">
    /*未找到模板[MOBPICKER]*/  </IbizFormItem>
</a-col>
<a-col :span="24">
  <IbizFormItem name="formitem9" label="值项">
    /*未找到模板[MOBTEXT]*/  </IbizFormItem>
</a-col>
<a-col :span="24">
  <IbizFormItem name="formitem10" label="多数据多选">
    /*未找到模板[MOBMPICKER]*/  </IbizFormItem>
</a-col>
<a-col :span="24">
  <IbizFormItem name="formitem11" label="值项">
    /*未找到模板[MOBTEXT]*/  </IbizFormItem>
</a-col>
<a-col :span="24">
  <IbizFormItem name="formitem12" label="树单选">
    /*未找到模板[MOBPICKER]*/  </IbizFormItem>
</a-col>
<a-col :span="24">
  <IbizFormItem name="formitem13" label="值项">
    /*未找到模板[MOBTEXT]*/  </IbizFormItem>
</a-col>
<a-col :span="24">
  <IbizFormItem name="formitem14" label="树多选">
    /*未找到模板[MOBMPICKER]*/  </IbizFormItem>
</a-col>
<a-col :span="24">
  <IbizFormItem name="formitem15" label="值项">
    /*未找到模板[MOBTEXT]*/  </IbizFormItem>
</a-col>
    </a-row>
  </IbizFormGroup>
</a-col>
  </a-row>
</a-tab-pane>
<a-tab-pane key="formpage2" tab="表单分页">
  <a-row>
<a-col :span="24">
  <IbizFormItem name="year" label="年份">
    /*未找到模板[MOBTEXT]*/  </IbizFormItem>
</a-col>
  </a-row>
</a-tab-pane>    </a-tabs>
  </a-form>
</template>
<style lang="scss">
.ibiz-form {
  margin: 20px !important;
}
</style>
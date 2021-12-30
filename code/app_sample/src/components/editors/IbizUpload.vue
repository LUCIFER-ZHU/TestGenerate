<script setup lang="ts">
import { EditorBase, IActionParam, IParam } from "@ibiz-core";
import { UploadOutlined, PlusOutlined  } from '@ant-design/icons-vue';
import { ref, Ref } from "vue";
interface UploadProps {
  /**
   * 传入值
   * @type {any}
   * @memberof UploadProps
   */
  value: number;

  /**
   * 属性项名称
   *
   * @type {string}
   * @memberof UploadProps
   */
  name: string;

  /**
   * 接收文件类型
   *
   * @type {boolean}
   */
  accept: string;

  /**
   * 上传请求的 http 方法
   *
   * @type {boolean}
   */
  method: string;

  /**
   * 文件是否多选
   *
   * @type {boolean}
   */
  multiple: boolean;

  /**
   * 是否展示文件列表
   *
   * @type {boolean}
   */
  showUploadList: boolean;

  /**
   * 最大文件数
   *
   * @type {boolean}
   */
  limit: number;

  /**
   * 文件列表样式
   *
   * @type {boolean}
   */
  listType: string;

  /**
   * 按钮提示信息
   *
   * @type {boolean}
   */
  tooltip: string;

  /**
   * 只读模式
   *
   * @type {boolean}
   */
  readonly?: boolean;

  /**
   * 是否禁用
   * @type {boolean}
   * @memberof AppUpload
   */
  disabled?: boolean;
}

interface EditorEmit {
  (name: "editorEvent", value: IActionParam): void;
}

const props = withDefaults(defineProps<UploadProps>(), {
  disabled: false,
  readonly: false,
  method: 'post',
  multiple: false,
  showUploadList: true,
  tooltip: '点击上传',
  accept:"*",
  limit: 999,
  listType: 'text',
});
const emit = defineEmits<EditorEmit>();
const { getDownloadUrl, getRequestingHeader, getUploadUrl } = new EditorBase();
const uploadUrl = getUploadUrl();
const downloadUrl = getDownloadUrl();
const headers = getRequestingHeader();
const fileList: Ref<IParam[]> = ref([])
const previewFile = (file: IParam) => {
  //todo

}
const onChange = ($event: any) => {
  fileList.value = $event.fileList;
  emit("editorEvent", {
    tag: props.name,
    action: "valueChange",
    data: $event,
  });
};
</script>

<template>
  <div :class="['app-editor-container', `app-upload-${name}`]">
    <a-upload
      v-model:fileList="fileList"
      :class="{'ant-upload--limit': fileList.length == limit}"
      :action="uploadUrl"
      :method="method"
      :accept="accept"
      :headers="headers"
      :multiple="multiple"
      :previewFile="previewFile"
      :showUploadList="showUploadList"
      :list-type="listType"
      :disabled="disabled || readonly"
      @change="onChange">
      <a-button v-if="Object.is(listType,'text')">
        <upload-outlined></upload-outlined>
        {{tooltip}}
      </a-button>
      <div v-else>
        <plus-outlined />
        <div class="ant-upload-text">{{tooltip}}</div>
      </div>
    </a-upload>
  </div>
</template>

<style lang="scss">
.app-editor-container {
  width: 100%;
  height: 100%;
  text-align: left;
  .ant-upload--limit {
    .ant-upload-select-picture-card,.ant-upload-select-text {
      display: none;
    }
    .ant-upload-list-text {
      >div:first-child {
        .ant-upload-list-item {
          margin-top: 4px;
        }
      }
    }
  }
  .ant-upload-select-picture-card {
    .ant-upload-text {
      margin-top: 8px;
      color: #666;
    }
  }
}
</style>

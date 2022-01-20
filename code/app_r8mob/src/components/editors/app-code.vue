<script setup lang="ts">
import * as monaco from 'monaco-editor';
import 'monaco-editor/esm/vs/basic-languages/javascript/javascript.contribution';
import 'monaco-editor/esm/vs/editor/contrib/find/findController.js';
import { IParam, EditorBase, IContext, IActionParam } from '@core';
import { getCurrentInstance, onBeforeMount, onMounted, ref, Ref, watch } from 'vue';
import { FullscreenOutlined, FullscreenExitOutlined } from '@ant-design/icons-vue';

interface IToolbarItem {
  key: string; //标识
  text: string; //文本值
  component: any; //组件
  visible: boolean; //显示状态
}
interface CodeProps {
  /**
   * @description 编辑器名称
   */
  name: string;

  /**
   * 当前值
   *
   * @type {*}
   * @memberof AppCodeEditor
   */
  value?: string;

  /**
   * 主题
   *
   * @type {string}
   * @memberof AppCodeEditor
   */
  theme?: 'vs-light' | 'vs-dark';

  /**
   * 语言
   *
   * @type {string}
   * @memberof AppCodeEditor
   */
  language?: 'json' | 'javascript' | 'typescript' | 'css' | 'less' | 'sass' | 'java';

  /**
   * 只读模式
   *
   * @type {boolean}
   * @memberof AppCodeEditor
   */
  readonly?: boolean;

  /**
   * 是否显示小地图
   *
   * @type {boolean}
   * @memberof AppCodeEditor
   */
  isMinimap?: boolean;

  /**
   * 是否能够更换语言
   *
   * @type {boolean}
   * @memberof AppCodeEditor
   */
  isChangeLanguage?: boolean;
}

const props = withDefaults(defineProps<CodeProps>(), {
  value: '',
  theme: 'vs-light',
  language: 'typescript',
  readonly: false,
  isMinimap: true,
  isChangeLanguage: true,
});

interface EditorEmit {
  (name: 'editorEvent', value: IActionParam): void;
}

const emit = defineEmits<EditorEmit>();

/**
 * 代码编辑器对象
 *
 * @type {*}
 * @memberof AppCodeEditor
 */
let codeEditor: any;

// 当前使用语言
let presentLanguage: Ref<string> = ref('');

// 语言列表
let languages: string[] = ['json', 'javascript', 'typescript', 'css', 'less', 'sass', 'java', 'sql'];

// 右侧工具栏项
let rightToolbarItems: Ref<IToolbarItem[]> = ref([
  {
    key: 'fullScreen',
    text: '全屏',
    component: 'full-screen',
    visible: true,
  },
  {
    key: 'quitFullScreen',
    text: '退出全屏',
    component: 'exit-full-screen',
    visible: false,
  },
]);

/**
 * 绘制图标
 *
 * @param {string} type
 * @return {*}
 * @memberof AppCodeEditor
 */
const renderIcon = (type: string) => {
  return `<a-icon type="step-backward" />`;
};

onBeforeMount(() => {
  presentLanguage.value = props.language;
});

onMounted(() => {
  initCodeEditor();
  watch(
    () => props.value,
    (newVal: any, oldVal: any) => {
      codeEditor.setValue(newVal);
    },
  );
});

onBeforeMount(() => {
  window.removeEventListener('resize', resize);
});

// 通过ref属性获取编辑器元素
const codeEditorRef = ref(null);

/**
 * 初始化编辑器
 *
 * @memberof AppCodeEditor
 */
const initCodeEditor = () => {
  if (codeEditorRef.value) {
    codeEditor = monaco.editor.create(codeEditorRef.value, {
      value: props.value,
      theme: props.theme,
      language: presentLanguage.value,
      readOnly: props.readonly,
      minimap: { enabled: props.isMinimap },
    });
    registerEvent();
    window.addEventListener('resize', resize);
    window.addEventListener('fullscreenchange', fullscreenchange);
  }
};

/**
 * 初始化编辑器大小
 *
 * @memberof AppCodeEditor
 */
const resize = () => {
  codeEditor.layout();
};

/**
 * 全屏变化
 *
 * @memberof AppCodeEditor
 */
const fullscreenchange = () => {
  if (document.fullscreenElement) {
    const toolbarItem: any = rightToolbarItems.value.find(toolbarItem => toolbarItem.key === 'fullScreen');
    toolbarItem.visible = false;
    const item: any = rightToolbarItems.value.find(toolbarItem => toolbarItem.key === 'quitFullScreen');
    item.visible = true;
  } else {
    const toolbarItem: any = rightToolbarItems.value.find(toolbarItem => toolbarItem.key === 'quitFullScreen');
    toolbarItem.visible = false;
    const item: any = rightToolbarItems.value.find(toolbarItem => toolbarItem.key === 'fullScreen');
    item.visible = true;
  }
};

/**
 *注册事件
 *
 * @memberof AppCodeEditor
 */
const registerEvent = () => {
  if (!props.readonly) {
    codeEditor.onDidBlurEditorText(
      //数据发生改变
      (event: any) => {
        emit('editorEvent', { tag: props.name, action: 'valueChange', data: codeEditor.getValue() });
      },
    );
  }
};

/**
 * 工具栏点击项
 *
 * @param {IToolbarItem} toolbarItem
 * @memberof AppCodeEditor
 */
const toolBarClick = (toolbarItem: IToolbarItem) => {
  if (toolbarItem.key === 'fullScreen') {
    const editorContainer = document.getElementsByClassName('app-code-editor')[0];
    editorContainer.requestFullscreen();
  }
  if (toolbarItem.key === 'quitFullScreen') {
    document.exitFullscreen();
  }
};

/**
 * 切换语言
 *
 * @param {string} item
 * @memberof AppCodeEditor
 */
const onLanguageChange = (item: string) => {
  codeEditor.dispose();
  initCodeEditor();
  codeEditor.trigger('anyString', 'editor.action.formatDocument');
};
</script>

<template>
  <div :class="['app-editor-container', 'app-code', `app-code-${name}`]">
    <div :class="{toolbar: true, [theme]: true}">
      <div class="left-toolbar">
        <a-select
          ref="select"
          v-model:value="presentLanguage"
          style="width: 120px"
          :disabled="!isChangeLanguage"
          :bordered="false"
          @change="onLanguageChange"
        >
          <a-select-option
            :value="language"
            v-for="(language,index) in languages"
            :key="index"
          >{{language}}</a-select-option>
        </a-select>
      </div>
      <div class="right-toolbar">
        <template
          v-for="(toolbarItem) in rightToolbarItems"
          :key="toolbarItem.key"
        >
          <div
            class='toolbar-item'
            v-if="toolbarItem.visible"
            :title="toolbarItem.text"
            @click="toolBarClick(toolbarItem)"
          >
            <fullscreen-outlined v-if="toolbarItem.key == 'fullScreen'"/>
            <fullscreen-exit-outlined v-if="toolbarItem.key == 'quitFullScreen'"/>
          </div>
        </template>

      </div>
    </div>
    <div
      class='code-editor-wrapper'
      ref='codeEditorRef'
    ></div>
  </div>
</template>

<style lang='scss'>
.app-code {
  width: 100%;
  height: 100%;
  min-width: 300px;
  min-height: 300px;
  position: relative;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 12px 0px;
  border-radius: 4px;
  > .toolbar {
    display: flex;
    align-items: center;
    z-index: 1;
    font-size: 12px;
    font-weight: 800;
    justify-content: space-between;
    > .left-toolbar,
    .right-toolbar {
      > .toolbar-item {
        cursor: pointer;
        color: rgb(157, 165, 180);
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 2px;
      }
      > .toolbar-item:hover {
        background-color: rgba(106, 108, 109, 0.31);
      }
    }
  }

  > .toolbar.vs-dark {
    background-color: rgb(33, 37, 43);
  }

  .code-editor-wrapper {
    min-height: 278px;
    height: calc(100% - 22px);
    width: 100%;
    .monaco-editor .view-line {
      text-align: left;
    }
  }
}
</style>
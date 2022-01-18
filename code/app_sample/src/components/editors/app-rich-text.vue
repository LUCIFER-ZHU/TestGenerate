<script setup lang="ts">
import { Subject } from 'rxjs';
import axios from 'axios';
import { onMounted, onActivated, onDeactivated, onUnmounted } from 'vue';
import { createUUID } from 'qx-util';
import tinymce from 'tinymce/tinymce';
// import 'tinymce/themes/modern';
import 'tinymce/themes/silver';
import 'tinymce/plugins/link';
import 'tinymce/plugins/paste';
import 'tinymce/plugins/table';
import 'tinymce/plugins/image';
import 'tinymce/plugins/imagetools';
import 'tinymce/plugins/codesample';
import 'tinymce/plugins/code';
import 'tinymce/plugins/fullscreen';
import 'tinymce/plugins/preview';
import 'tinymce/plugins/fullscreen';
import 'tinymce/icons/default/icons.min.js';
import { EditorBase, IActionParam, IContext, IParam, UIUtil } from '@core';

const tinymceCode: any = tinymce;

interface RichTextProps {
  /**
   * @description 编辑器名称
   */
  name: string;

  /**
   * @description 编辑器值
   */
  value: string;

  /**
   * @description 表单数据或表格行数据
   */
  data: IParam;

  /**
   * @description 上下文
   */
  context: IContext;

  /**
   * @description 视图参数
   */
  viewParams: IParam;

  /**
   * @description 编辑器高度
   */
  height: number;

  /**
   * @description 上传参数
   *
   */
  uploadParams?: any;

  /**
   * @description 下载参数
   *
   */
  exportParams?: any;

  /**
   * @description 是否禁用
   *
   */
  disabled: boolean;
}

interface EditorEmit {
  (name: 'editorEvent', value: IActionParam): void;
}

const props = withDefaults(defineProps<RichTextProps>(), {
  disabled: false,
});
const emit = defineEmits<EditorEmit>();
const {
  getDownloadUrl,
  getRequestingHeader,
  getUploadUrl,
  getLocal,
  getUploadParams,
  getExportParams,
  getImgURLOfBase64,
} = new EditorBase();
const uploadUrl = getUploadUrl();
let downloadUrl = getDownloadUrl();
const headers = getRequestingHeader();
const uploadParams = getUploadParams(props.uploadParams, props.context, props.viewParams, props.data);
const exportParams = getExportParams(props.exportParams, props.context, props.viewParams, props.data);
const uuid: string = createUUID();
const curLocal: string = getLocal();
let richTextEditor: any = null;
let isActivated: boolean = true;
const imgSrcList: any[] = [];
const loadingImgMap: Map<string, any> = new Map();
const successImgMap: Map<string, any> = new Map();

const getImgUrl = (html: any) => {
  let imgs: Array<any> | null = html.match(/<img.*?(?:>|\/>)/gi) != null ? html.match(/<img.*?(?:>|\/>)/gi) : [];
  if (imgs && imgs.length > 0 && imgSrcList && imgSrcList.length > 0) {
    imgs.forEach((img: any, index: number) => {
      var reg = /data:image\/.*;base64,.*(?=[\'\"])/;
      if (img.match(reg) != null) {
        let base64: any = img.match(reg)[0];
        const _imgsrc = imgSrcList.find((_imgsrc: any) => Object.is(_imgsrc.key, base64));
        if (_imgsrc) {
          const newImg = img.replace(reg, '{' + _imgsrc.value + '}');
          html = html.replace(img, newImg);
        }
      }
    });
  }
  return html;
};

const getImgUrlBase64 = async (html: any) => {
  let imgs: Array<any> | null = html.match(/<img.*?(?:>|\/>)/gi) != null ? html.match(/<img.*?(?:>|\/>)/gi) : [];
  if (imgs && imgs.length > 0) {
    for (let item of imgs) {
      if (item.match(/src=[\'\"]?([^\'\"]*)[\'\"]?/gi) != null) {
        let src: any = item.match(/src=[\'\"]?([^\'\"]*)[\'\"]?/gi)[0];
        src = await getImgURLOfBase64(src.substring(5, src.length - 1), loadingImgMap, successImgMap);
        const image = item.replace(/src=[\'\"]?([^\'\"]*)[\'\"]?/i, 'src="' + src + '"');
        html = html.replace(item, image);
      }
    }
  }
  return html;
};

const uploadFile = (url: string, formData: any) => {
  const subject: Subject<any> = new Subject<any>();
  axios({
    method: 'post',
    url: url,
    data: formData,
    headers: { 'Content-Type': 'image/png', Accept: 'application/json' },
  })
    .then((response: any) => {
      if (response.status === 200) {
        subject.next(response.data);
      } else {
        subject.error(response);
      }
    })
    .catch((response: any) => {
      subject.error(response);
    });
  return subject;
};
const init = () => {
  tinymceCode.init({
    selector: '#' + uuid,
    width: 'calc( 100% - 2px )',
    height: props.height,
    min_height: 400,
    branding: false,
    plugins: [
      'link',
      'paste',
      'table',
      'image',
      'codesample',
      'code',
      'fullscreen',
      'preview',
      // 'quickbars',
      'fullscreen',
    ],
    toolbar:
      'undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | outdent indent | link image | preview code fullscreen',
    contextmenu: 'cut copy paste pastetext inserttable link ',
    // quickbars_insert_toolbar: false,
    // quickbars_selection_toolbar: 'forecolor fontsizeselect fontselect',
    codesample_languages: [
      { text: 'HTML/XML', value: 'markup' },
      { text: 'JavaScript', value: 'javascript' },
      { text: 'CSS', value: 'css' },
      { text: 'PHP', value: 'php' },
      { text: 'Ruby', value: 'ruby' },
      { text: 'Python', value: 'python' },
      { text: 'Java', value: 'java' },
      { text: 'C', value: 'c' },
      { text: 'C#', value: 'csharp' },
      { text: 'C++', value: 'cpp' },
    ],
    paste_data_images: true,
    codesample_content_css: './assets/tinymce/prism.css',
    skin_url: './assets/tinymce/skins/lightgray/ui/oxide',
    language_url: './assets/tinymce/langs/' + curLocal + '.js',
    language: curLocal,
    setup: (editor: any) => {
      richTextEditor = editor;
      editor.on('blur', () => {
        let content = editor.getContent();
        content = getImgUrl(content);
        emit('editorEvent', {
          tag: props.name,
          action: 'valueChange',
          data: content,
        });
      });
    },
    images_upload_handler: (bolbinfo: any, success: any, failure: any) => {
      const formData = new FormData();
      formData.append('file', bolbinfo.blob(), bolbinfo.filename());
      let _url = uploadUrl;
      if (uploadParams.length > 0) {
        _url += '?';
        uploadParams.forEach((item: any, i: any) => {
          _url += `${Object.keys(item)[0]}=${Object.values(item)[0]}`;
          if (i < uploadParams.length - 1) {
            _url += '&';
          }
        });
      }
      // this.uploadUrl = _url;
      uploadFile(_url, formData).subscribe(
        (file: any) => {
          if (file.filename) {
            const id: string = file.fileid;
            const url: string = `${downloadUrl}/${id}`;
            getImgURLOfBase64(url, loadingImgMap, successImgMap).then((response: any) => {
              const imgsrc = imgSrcList.find((imgsrc: any) => Object.is(response, imgsrc.key));
              if (!imgsrc) {
                const item: any = { key: response, value: file.fileid + file.ext };
                imgSrcList.push(item);
              }
              success(response);
              let content = richTextEditor.getContent();
              content = getImgUrl(content);
              emit('editorEvent', {
                tag: props.name,
                action: 'valueChange',
                data: content,
              });
            });
          }
          if (exportParams.length > 0) {
            downloadUrl += '?';
            exportParams.forEach((item: any, i: any) => {
              downloadUrl += `${Object.keys(item)[0]}=${Object.values(item)[0]}`;
              if (i < exportParams.length - 1) {
                downloadUrl += '&';
              }
            });
          }
        },
        (error: any) => {
          console.log(error);
          failure('HTTP Error: ' + error.status);
        },
      );
    },
    init_instance_callback: (editor: any) => {
      richTextEditor = editor;
      const url = downloadUrl.indexOf('../') === 0 ? downloadUrl.substring(3) : downloadUrl;
      let value = props.value && props.value.length > 0 ? props.value : '';
      value = value.replace(
        /\{(\w+)\.(bmp|jpg|jpeg|png|tif|gif|pcx|tga|exif|fpx|svg|psd|cdr|pcd|dxf|ufo|eps|ai|raw|WMF|webp)\}/g,
        `${url}/$1`,
      );
      getImgUrlBase64(value).then((newValue: any) => {
        if (richTextEditor) {
          richTextEditor.setContent(newValue);
        }
        if (props.disabled) {
          richTextEditor.setMode('readonly');
        }
      });
    },
  });
};
onMounted(() => {
  init();
});
onActivated(() => {
  isActivated = true;
});
onDeactivated(() => {
  isActivated = false;
});
onUnmounted(() => {
  if (richTextEditor) {
    tinymceCode.remove('#' + uuid);
  }
});
</script>

<template>
  <div :class="['app-editor-container', 'app-rich-text', `app-rich-text-${name}`]">
    <textarea :id="uuid"></textarea>
  </div>
</template>

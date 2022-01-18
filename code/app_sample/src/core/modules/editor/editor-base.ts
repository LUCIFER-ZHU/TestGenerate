import { toRefs } from 'vue';
import { UIUtil, IParam, UIBase } from '@core';
import axios from 'axios';
/**
 * @description 部件基类
 * @export
 * @class EditorBase
 */
export class EditorBase {

  /**
   * @description 处理编辑器导航数据（查询代码表）
   * @export
   * @param {Record<string, any>} props 编辑器输入属性
   * @return {*} 
   */
  public handleEditorNavParams(props: Record<string, any>) {
    const { localContext, localParam, data } = toRefs(props);
    const { context, viewParams } = UIBase.useContextParams(props);
    const navParams = {
      navContext: context.value,
      navViewParam: viewParams.value,
    }
    if (localContext && Object.keys(localContext).length > 0) {
      const _context = UIUtil.computedNavData(data, navParams.navContext, navParams.navViewParam, localContext);
      Object.assign(navParams.navContext, _context);
    }
    if (localParam && Object.keys(localParam).length > 0) {
      const _param = UIUtil.computedNavData(data, navParams.navContext, navParams.navViewParam, localParam);
      Object.assign(navParams.navViewParam, _param);
    }
    return navParams;
  }

  /**
   * @description 加载代码表数据
   * @export
   * @param {string} codeListTag 代码表标识
   * @param {string} codeListType 代码表类型
   * @param {IParam} navContext 导航上下文
   * @param {IParam} navViewParam 导航视图参数
   * @param {boolean} isNumber 是否为数值类型
   * @return {Promise<any[]>}  {any[]}
   */
  public async loadCodeListData(codeListTag?: string, codeListType?: string, navContext?: IParam, navViewParam?: IParam): Promise<IParam[]> {
    const data: IParam[] = [
      {
        value: '243144',
        label: 'Jack',
      },
      {
        value: '7dawda',
        label: 'Lucy',
      },
      {
        value: 'disaweqeqeqbled',
        label: 'Disabled',
        disabled: true,
      },
      {
        value: 'yimirwqrqwenghe',
        label: 'Yiminghe',
      }
    ];
    if (codeListTag) { 
      // todo 调用代码表服务获取数据
    }
    return data;
  }

  /**
   * @description 处理层级代码表
   * @export
   * @param {IParam[]} codeListData 代码表数据
   */
  public handleLevelCodeList(codeListData: IParam[]): IParam[] {
    let items: IParam[] = [...codeListData]
    const hasChildren: boolean = codeListData.some((item:any) =>{
      return item.pvalue;
    })
    if(hasChildren){
      let list: IParam[] = [];
      items.forEach((codeItem: IParam) =>{
        if(!codeItem.pvalue){
          let valueField: string = codeItem.value;
          this.setChildCodeItems(valueField, items, codeItem);
          list.push(codeItem);
        }
      })
      items = list;
    }
    return items;
  }

  /**
   * @description 设置子代码表
   * @param {string} pValue 父代码项值
   * @param {IParam[]} result 代码表
   * @param {IParam} codeItem 代码项
   */
  public setChildCodeItems(pValue: string, result: IParam[], codeItem: IParam) {
    result.forEach((item: IParam) =>{
      if(item.pvalue == pValue){
        let valueField:string = item.value;
        this.setChildCodeItems(valueField, result, item);
        if(!codeItem.options){
          codeItem.children = [];
        }
        codeItem.children.push(item);
      }
    })
  }


  /**
   * @description 打开选择视图
   * @export
   */
  public openPickUpView() {
    //todo
  }

  /**
   * @description 打开链接视图
   * @export
   */
  public openLinkView() {
    //todo
  }


  /**
   * @description 获取文件上传路径
   * @export
   * @return {*}  {string}
   */
  public getUploadUrl(): string {
    //todo 环境参数
    // return AppServiceBase.getInstance().getAppEnvironment().BaseUrl + AppServiceBase.getInstance().getAppEnvironment().UploadFile;
    return "";
  }

  /**
   * @description 获取文件上传路径
   * @export
   * @return {*}  {string}
   */
  public getDownloadUrl(): string {
    //todo 环境参数
    // return AppServiceBase.getInstance().getAppEnvironment().ExportFile;
    return "";
  }

  /**
   * @description 获取文件请求头
   * @export
   * @return {*}  {IParam}
   */
  public getRequestingHeader(): IParam {
    //todo 请求头
    // if (AppServiceBase.getInstance().getAppEnvironment().SaaSMode) {
    //   let activeOrgData = getSessionStorage('activeOrgData');
    //   this.headers['srforgid'] = activeOrgData?.orgid;
    //   this.headers['srfsystemid'] = activeOrgData?.systemid;
    //   if(getSessionStorage("srfdynaorgid")){
    //       this.headers['srfdynaorgid'] = getSessionStorage("srfdynaorgid");
    //   }
    // } else {
    //     if(getSessionStorage("srfdynaorgid")){
    //         this.headers['srfdynaorgid'] = getSessionStorage("srfdynaorgid");
    //     }
    // }
    // if (getCookie('ibzuaa-token')) {
    //     this.headers['Authorization'] = `Bearer ${getCookie('ibzuaa-token')}`;
    // } else {
    //     // 第三方应用打开免登
    //     if (sessionStorage.getItem("srftoken")) {
    //         const token = sessionStorage.getItem('srftoken');
    //         this.headers['Authorization'] = `Bearer ${token}`;
    //     }
    // }
    return {};
  }

  /**
   * @description 获取上传参数
   * @return {*}  {IParam[]}
   * @memberof EditorBase
   */
  public getUploadParams(uploadParams: IParam, data: IParam, context: IParam, viewParams: IParam): IParam[] {
    return UIUtil.computedNavData(data, context, viewParams, uploadParams);
  }

  /**
   * @description 获取导出参数
   * @return {*}  {IParam[]}
   * @memberof EditorBase
   */
  public getExportParams(exportParams: IParam, data: IParam, context: IParam, viewParams: IParam): IParam[] {
    return UIUtil.computedNavData(data, context, viewParams, exportParams);
  }

  /**
   * @description 获取base64的图片url
   * @param {string} url
   * @param {Map<string, any>} loadingImgMap
   * @param {Map<string, any>} successImgMap
   * @return {*} 
   * @memberof EditorBase
   */
  public getImgURLOfBase64(url: string, loadingImgMap:  Map<string, any>, successImgMap:  Map<string, any>): Promise<string> {
    return new Promise((resolve, reject) => {
      let img = '/';
      // 富文本CV上传图片与鼠标移出抛值冲突问题,上传成功回调还没执行时就抛值
      var reg = /^\s*data:([a-z]+\/[a-z0-9-+.]+(;[a-z-]+=[a-z0-9-]+)?)?(;base64)?,([a-z0-9!$&',()*+;=\-._~:@\/?%\s]*?)\s*$/i;
      if (reg.test(url)) {
          return resolve(url);
      }
      // 缓存中有从缓存中拿
      if (successImgMap.get(url)) {
          let img = successImgMap.get(url);
          resolve(img);
      }
      const callback: Function = (url: string, promise: Promise<any>) => {
          promise.then((response: any) => {
              if (response && response.status === 200 && response.data) {
                  // 获取文件名
                  const disposition = response.headers['content-disposition'];
                  const filename = disposition.split('filename=')[1];
                  let type = 'image/png';
                  if (filename && filename.indexOf('.') > 0) {
                      const start = filename.lastIndexOf('.');
                      const expandedName = filename.substring(start + 1);
                      if (expandedName.match(/(bmp|jpg|jpeg|png|tif|gif|pcx|tga|exif|fpx|svg|psd|cdr|pcd|dxf|ufo|eps|ai|raw|WMF|webp)/gi) != null) {
                          type = 'image/' + expandedName;
                      } else {
                          resolve(img);
                      }
                  }
                  let blob = new Blob([response.data],{type: type});
                  this.blobToBase64(blob).then((res: any) => {
                      // 转化后的base64
                      img = `${res}`;
                      // 缓存图片
                      successImgMap.set(url, img);
                      resolve(img);
                  })
              } else {
                  resolve(img);
              }
          }).catch((result: any) => {
              return resolve(img);
          })
      }
      // 加载中
      if (loadingImgMap.get(url)) {
          callback(url, loadingImgMap.get(url));
      } else {
      let _url = url;
      if (!Object.is('/', _url.substring(0,1))) {
          _url = '/'+_url;
      }
      let result:Promise<any> = axios({method: 'get', url: _url, responseType: 'blob'});
      loadingImgMap.set(url, result);
      callback(url, result);
      }
  });
  }

  /**
   * @description blob对象转base64
   * @param {Blob} blob
   * @return {*}  {Promise<string>}
   * @memberof EditorBase
   */
  public blobToBase64(blob: Blob): Promise<string> {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.onload = (e: any) => {
          resolve(e.target.result);
      };
      fileReader.readAsDataURL(blob);
      fileReader.onerror = () => {
          reject(new Error('blobToBase64 error'));
      };
  });
  }

  /**
   * @description 获取当前国际化
   * @return {*}  {string}
   * @memberof EditorBase
   */
  public getLocal(): string {
    //todo
    return 'zh_CN';
  }
}

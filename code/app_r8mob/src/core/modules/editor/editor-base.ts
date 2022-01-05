import { toRefs } from 'vue';
import { UIUtil, IParam, UIBase } from '@core';
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
}

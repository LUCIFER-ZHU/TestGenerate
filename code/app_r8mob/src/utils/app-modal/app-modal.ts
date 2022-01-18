import { Subject } from 'rxjs';
import Router from '@/router';
import Antd from 'ant-design-vue';
import AppModalComponent from "./app-modal.vue";
import AppLoading from '@components/render/app-loading.vue';
import { IParam, ViewDetail } from '@core';

export class AppModal {

  /**
   * 实例对象
   *
   * @private
   * @static
   * @memberof AppModal
   */
  private static modal = new AppModal();

  /**
   *
   *
   * @type {*}
   * @memberof AppModal
   */
  public asyncComp: any;

  /**
   * Creates an instance of AppModal.
   * 
   * @memberof AppModal
   */
  private constructor() {
    if (AppModal.modal) {
      return AppModal.modal;
    }
  }

  /**
   * 获取单例对象
   *
   * @static
   * @returns {AppModal}
   * @memberof AppModal
   */
  public static getInstance(): AppModal {
    if (!AppModal.modal) {
      AppModal.modal = new AppModal();
    }
    return AppModal.modal;
  }

  /**
   * 创建vue对象
   *
   * @private
   * @param {view} ViewDetail 视图对象
   * @param {IParam} params 视图参数
   * @param {IParam} [options] 模态配置项
   * @return {*}  {Subject<any>}
   * @memberof AppModal
   */
  private createVueExample(view: ViewDetail, params: IParam, options?: IParam): Subject<any> {
    try {
      let subject: null | Subject<any> = new Subject<any>();
      let props = { view: view, context: params.context, viewParams: params.viewParams, isFullscreen: params.isFullscreen, subject: subject, options: options };
      let dir = view.fileDir?.replace(/@views/, '');
      //Vite 支持使用特殊的 import.meta.glob 函数从文件系统导入多个模块
      const modules = import.meta.glob('../../page/*/*/index.ts');
      const AsyncComp = defineAsyncComponent({
        // 工厂函数
        loader: modules['../../page' + dir + '/index.ts'],
        // 加载异步组件时要使用的组件
        loadingComponent: AppLoading,
        // 在显示 loadingComponent 之前的延迟 | 默认值：200（单位 ms）
        delay: 0,
      });
      if (AsyncComp) {
        const component = AppModalComponent;
        const div = document.createElement('div');
        document.body.appendChild(div);
        const app = createApp(component,
          {
            close: () => { document.body.removeChild(div); app.unmount(); },
            ...props
          }
        );
        app.component(view.name as string, AsyncComp);
        app.use(Router).use(Antd).mount(div);
      }
      return subject;
    } catch (error) {
      console.error(error);
      return new Subject<any>();
    }
  }

  /**
   *  打开模态视图
   *
   * @param {View} view 视图对象
   * @param {IParam} params 视图参数
   * @param {IParam} [options] 模态配置项
   * @return {*}  {Subject<any>}
   * @memberof AppModal
   */
  public openModal(view: ViewDetail, params: IParam, options?: IParam): Subject<any> {
    try {
      const subject = this.createVueExample(view, params, options);
      return subject;
    } catch (error) {
      console.log(error);
      return new Subject<any>();
    }
  }

  /**
   * 获取节点标识
   *
   * @private
   * @returns {string}
   * @memberof AppModal
   */
  private getUUID(): string {
    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
  }

}
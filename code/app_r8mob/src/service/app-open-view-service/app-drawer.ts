import { Subject } from 'rxjs';
import Router from '@/router';
import Antd from 'ant-design-vue';
import AppDrawerComponent from "@components/common/app-drawer.vue";
import AppLoading from '@components/common/app-loading.vue';
import { IParam, ViewDetail } from '@core';

export class AppDrawer {

  /**
   * 实例对象
   *
   * @private
   * @static
   * @memberof AppDrawer
   */
  private static drawer = new AppDrawer();

  /**
   * 构造方法
   * 
   * @memberof AppDrawer
   */
  constructor() {
    if (AppDrawer.drawer) {
      return AppDrawer.drawer;
    }
  }

  /**
   * 获取实例对象
   *
   * @static
   * @returns
   * @memberof AppDrawer
   */
  public static getInstance() {
    if (!AppDrawer.drawer) {
      AppDrawer.drawer = new AppDrawer();
    }
    return AppDrawer.drawer;
  }

  /**
   * 创建 Vue 实例对象
   *
   * @private
   * @param {view} ViewDetail 视图对象
   * @param {IParam} params 视图参数
   * @param {IParam} [options] 模态配置项
   * @return {*}  {Subject<any>}
   * @memberof AppDrawer
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
        const component = AppDrawerComponent;
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
   * 打开抽屉
   *
   * @param {View} view 视图对象
   * @param {IParam} params 视图参数
   * @param {IParam} [options] 模态配置项
   * @returns {Subject<any>}
   * @memberof AppDrawer
   */
  public openDrawer(view: ViewDetail, params: IParam, options?: IParam): Subject<any> {
    try {
      const subject = this.createVueExample(view, params, options);
      return subject;
    } catch (error) {
      console.log(error);
      return new Subject<any>();
    }
  }

  /**
   * 生成uuid
   *
   * @private
   * @returns {string}
   * @memberof AppDrawer
   */
  private getUUID(): string {
    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
  }


}
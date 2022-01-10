import { Subject } from 'rxjs';
import Router from '@/router';
import Antd from 'ant-design-vue';
import AppPopoverComponent from "./app-popover.vue";
import IbizLoading from '@components/render/IbizLoading.vue';
import { IParam, ViewDetail } from '@core';
import './app-popover.scss';

export class AppPopover {

  /**
   * 实例对象
   *
   * @private
   * @static
   * @memberof AppPopover
   */
  private static popover = new AppPopover();

  /**
   * 构造方法
   * 
   * @memberof AppPopover
   */
  constructor() {
    if (AppPopover.popover) {
      return AppPopover.popover;
    }
  }

  /**
   * 获取实例对象
   *
   * @static
   * @returns
   * @memberof AppPopover
   */
  public static getInstance() {
    if (!AppPopover.popover) {
      AppPopover.popover = new AppPopover();
    }
    return AppPopover.popover;
  }

  /**
   * 创建 Vue 实例对象
   *
   * @private
   * @param event
   * @param {view} ViewDetail 视图对象
   * @param {IParam} params 视图参数
   * @param {IParam} [options] 模态配置项
   * @return {*}  {Subject<any>}
   * @memberof AppPopover
   */
  private createVueExample(event:any, view: ViewDetail, params: IParam, options?: IParam): Subject<any> {
    try {
      // 阻止事件冒泡
      event.stopPropagation();
      // 获取悬浮窗相对位置的元素
      const element: Element = event.toElement || event.srcElement;
      console.log(11,element);
      
      let subject: null | Subject<any> = new Subject<any>();
      let props = { element: element, view: view, context: params.context, viewParams: params.viewParams, isFullscreen: params.isFullscreen, subject: subject, options: options };
      let dir = view.fileDir?.replace(/@page/, '');
      //Vite 支持使用特殊的 import.meta.glob 函数从文件系统导入多个模块
      const modules = import.meta.glob('../../page/*/*/index.ts');
      const AsyncComp = defineAsyncComponent({
        // 工厂函数
        loader: modules['../../page' + dir + '/index.ts'],
        // 加载异步组件时要使用的组件
        loadingComponent: IbizLoading,
        // 在显示 loadingComponent 之前的延迟 | 默认值：200（单位 ms）
        delay: 0,
      });
      if (AsyncComp) {
        const component = AppPopoverComponent;
        const div = document.createElement('div');
        div.className = 'app-popover-wrapper';
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
   * @param {*} event
   * @param {View} view 视图对象
   * @param {IParam} params 视图参数
   * @param {IParam} [options] 模态配置项
   * @returns {Subject<any>}
   * @memberof AppPopover
   */
  public openPopover(event:any,view: ViewDetail, params: IParam, options?: IParam): Subject<any> {
    try {
      const subject = this.createVueExample(event, view, params, options);
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
   * @memberof AppPopover
   */
  private getUUID(): string {
    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
  }


}
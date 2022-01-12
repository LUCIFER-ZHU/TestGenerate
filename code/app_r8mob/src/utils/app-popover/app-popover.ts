import { Subject } from 'rxjs';
import Router from '@/router';
import Antd from 'ant-design-vue';
import AppPopoverComponent from "./app-popover.vue";
import IbizLoading from '@components/render/IbizLoading.vue';
import { IParam, ViewDetail } from '@core';
import './app-popover.scss';
import { createPopper, Instance } from '@popperjs/core/lib/popper-lite.js';
import preventOverflow from '@popperjs/core/lib/modifiers/preventOverflow.js';
import flip from '@popperjs/core/lib/modifiers/flip.js';
import { Placement } from '@popperjs/core/lib/enums';

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
   * PopperJs实例
   *
   * @private
   * @type {Instance}
   * @memberof AppPopover
   */
  private popperExample?: Instance;

  /**
   * 是否显示悬浮窗
   *
   * @private
   * @type {boolean}
   * @memberof AppPopover
   */
  private showPopper: boolean = false;

  /**
   * 是否在点击空白区域时自动关闭
   *
   * @private
   * @type {boolean}
   * @memberof AppPopover
   */
  private isAutoClose: boolean = true;

  /**
   * 是否在离开该飘窗区域时自动关闭
   *
   * @private
   * @type {boolean}
   * @memberof AppPopover
   */
  private isMoveOutClose: boolean = false;  

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
      // 处理关闭模式（点击空白区域关闭、鼠标离开飘窗区域）
      if (params.isAutoClose) {
        this.isAutoClose = params.isAutoClose;
      }
      if (params.isMoveOutClose) {
        this.isMoveOutClose = params.isMoveOutClose;
      }
      // 获取悬浮窗相对位置的元素
      const element: Element = event.toElement || event.srcElement;
      let subject: null | Subject<any> = new Subject<any>();
      let props = { element: element, view: view, context: params.context, viewParams: params.viewParams, isFullscreen: params.isFullscreen, subject: subject, options: options };
      // 解析文件路径
      let dir = view.fileDir?.replace(/@views/, '');
      // Vite 支持使用特殊的 import.meta.glob 函数从文件系统导入多个模块
      const modules = import.meta.glob('../../page/*/*/index.ts');
      // 创建一个只有在需要时才会加载的异步组件
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
        // 创建dom
        const container = document.createElement('div');
        container.className = 'app-popover-wrapper';
        const div = document.createElement('div');
        container.appendChild(div);
        document.body.appendChild(container);
        this.showPopper = true;
        const app = createApp(component,
          {
            mouseout: () => {
              if (!this.showPopper || !this.isMoveOutClose) {
                  return;
              }
              this.popperDestroy();
              document.body.removeChild(container); 
              app.unmount();    
            },
            ...props
          }
        );
        app.component(view.name as string, AsyncComp);
        app.use(Router).use(Antd).mount(div);
        // 创建Popover实例
        this.popperExample = createPopper(element, div, {
            placement: view.placement as Placement,
            strategy: 'absolute',
            modifiers: [preventOverflow, flip]
        });
        // 点击空白区域时事件处理
        container.addEventListener('click', () => {
            if (!this.showPopper || !this.isAutoClose) {
                return;
            }
            this.popperDestroy();
            document.body.removeChild(container); 
            app.unmount();
        })
      }
      return subject;
    } catch (error) {
      console.error(error);
      return new Subject<any>();
    }
  }

  /**
   * 打开飘窗
   *
   * @param {*} event
   * @param {View} view 视图对象
   * @param {IParam} params 视图参数
   * @param {IParam} [options] 模态配置项
   * @returns {Subject<any>}
   * @memberof AppPopover
   */
  public openPopover(event:any, view: ViewDetail, params: IParam, options?: IParam): Subject<any> {
    try {
      const subject = this.createVueExample(event, view, params, options);
      return subject;
    } catch (error) {
      console.log(error);
      return new Subject<any>();
    }
  }

  /**
   * 销毁popper(带回填数据)
   *
   * @memberof AppPopover
   */
  public popperDestroy(): void {
      if (this.popperExample) {
          this.popperExample.destroy();
          this.showPopper = false;
      }
  }


}
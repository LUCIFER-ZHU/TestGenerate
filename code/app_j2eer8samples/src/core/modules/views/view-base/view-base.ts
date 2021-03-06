import { Ref } from 'vue';
import { useRoute } from 'vue-router';
import { ViewPropsBase, ViewStateBase, UIBase, IParam, UIUtil, deepCopy, IActionParam } from '@core';

/**
 * @description 视图基类
 * @export
 * @class ViewBase
 */
export class ViewBase {

  /**
   * 响应状态
   *
   * @type {ViewStateBase}
   * @memberof ViewBase
   */
  public declare state: ViewStateBase;

  /**
   * 输入参数
   *
   * @type {IParam}
   * @memberof ViewBase
   */
  public declare props: IParam;

  /**
   * 输出事件
   *
   * @type {Function}
   * @memberof ViewBase
   */
  public declare emit: Function;

  /**
   * 当前视图具有数据能力部件
   *
   * @type {IParam}
   * @memberof ViewBase
   */
  public declare xDataControl: IParam;

  /**
   * Creates an instance of ViewBase.
   * @param {*} options 配置参数
   * @param {IParam} props 输入参数
   * @param {IParam} emit  输出参数
   * @memberof ViewBase
   */
  constructor(options: any, props: IParam, emit: Function) {
    this.state = reactive(deepCopy(options) as any);
    this.props = props;
    this.emit = emit;
  }

  /**
   * @description 处理视图初始化
   *
   * @memberof ViewBase
   */
  public useViewInit() { }

  /**
   * @description 处理响应式状态（state中的对象属性）
   * @memberof ViewBase
   */
  protected handleReactiveState() {
    this.state.viewSubject = toRef(this.props, 'viewSubject') as any;
    if (this.props.showCaptionBar === false) {
      this.state.showCaptionBar = false;
    }
  }

  /**
   * 通知状态
   *
   * @param { tag: string, action: string, data: any } { tag, action, data }
   * @memberof ViewEngine
   */
  public next({ tag, action, data }: { tag: string, action: string, data: any }): void {
    const { viewSubject } = this.props;
    viewSubject.next({ tag: tag, action: action, data: data })
  }

  /**
   * 关闭视图
   *
   */
  public closeView() {
    // 路由模式直接返回
    if (Object.is(this.props.openType, 'ROUTE')) {
      window.history.back();
    } else {
      // 非路由模式继续向外抛关闭视图事件
      this.emit('onViewEvent', { tag: this.state.viewName, action: 'closeView', data: this.xDataControl?.getData() });
    }
  }

  /**
   * @description 处理视图导航参数
   * 
   * @param props 输入属性
   * @param context 应用上下文
   * @param viewParams 视图参数
   */
  private handleViewContextParams(props: ViewPropsBase, context: Ref<IParam | undefined>, viewParams: Ref<IParam | undefined>) {
    if (!context.value) context.value = {};
    if (!viewParams.value) viewParams.value = {};
    const { appViewNavContexts, appViewNavParams } = this.state;
    if (Object.is(props.openType, 'ROUTE')) {
      // 应用上下文
      const appData = App.getAppData();
      Object.assign(context.value, appData.context ? appData.context : {});
      // 视图应用上下文
      const pageContext = {};
      const routeParams = useRoute()?.params;
      if (routeParams && (Object.keys(routeParams).length > 0)) {
        Object.keys(routeParams).forEach((key: string) => {
          if (routeParams[key]) {
            Object.assign(pageContext, { [key]: decodeURIComponent(routeParams[key] as string) });
          }
        })
      }
      Object.assign(context.value, pageContext);
      // 视图参数
      const pageViewParams = {};
      const routeQuerys = useRoute()?.query;
      if (routeQuerys && (Object.keys(routeQuerys).length > 0)) {
        Object.keys(routeQuerys).forEach((key: string) => {
          if (routeQuerys[key]) {
            Object.assign(pageViewParams, { [key]: routeQuerys[key] });
          }
        })
      }
      Object.assign(viewParams.value, pageViewParams);
      // 视图自定义应用上下文
      const pageCustomContext = UIUtil.computedNavData(null, context.value, viewParams.value, appViewNavContexts);
      Object.assign(context.value, pageCustomContext);
      // 视图自定义视图参数
      const pageCustomViewParams = UIUtil.computedNavData(null, context.value, viewParams.value, appViewNavParams);
      Object.assign(viewParams.value, pageCustomViewParams);
    } else {
      // 视图自定义应用上下文
      const customContext = UIUtil.computedNavData(null, context.value, viewParams.value, appViewNavContexts);
      Object.assign(context.value, customContext);
      // 视图自定义视图参数
      const pageCustomViewParams = UIUtil.computedNavData(null, context.value, viewParams.value, appViewNavParams);
      Object.assign(viewParams.value, pageCustomViewParams);
    }
  }

  /**
   * @description 使用视图上下文参数逻辑块
   * 
   * @param {ViewPropsBase} props 传入的Props
   * @param {Function} emit 事件
   * @memberof ViewBase
   */
  public useViewContextParams() {
    const context = UIBase.toOneWayRef(this.props, 'context');
    const viewParams = UIBase.toOneWayRef(this.props, 'viewParams');
    // 导航视图参数处理
    this.handleViewContextParams(this.props, context, viewParams);
    watch(context, (newVal: any, oldVal: any) => {
      //  context转响应式对象
      this.handleViewContextParams(this.props, isRef(newVal) ? newVal : ref(newVal), viewParams);
    });
    // 把Ref赋值到State上进行解包
    this.state.context = context;
    this.state.viewParams = viewParams;
  }

  /**
   *@description 获取UI服务
   *
   * @memberof ViewBase
   */
  public async getUIService() {
    const { appEntityCodeName, context } = this.state;
    if (appEntityCodeName) {
      return await App.getUIService(appEntityCodeName.toLowerCase(), context);
    }
  }

  /**
   *@description 获取数据服务
   *
   * @memberof ViewBase
   */
  public async getDataService() {
    const { appEntityCodeName, context } = this.state;
    if (appEntityCodeName) {
      return await App.getDataService(appEntityCodeName.toLowerCase(), context)
    }
  }

  /**
   * @description 使用计数器服务
   * 
   * @memberof ViewBase
   */
  public useCounterService() { }

  /**
   * 处理部件事件
   *
   * @param {IActionParam} actionParam
   * @memberof ViewBase
   */
  public onCtrlEvent(actionParam: IActionParam) {
    const { tag, action, data } = actionParam;
    if (Object.is(action, 'closeView')) {
      this.closeView();
    }
  }

  /**
   * @description 安装视图所有功能模块的方法
   * 
   * @memberof ViewBase
   */
  public moduleInstall() {
    // 处理视图状态
    this.handleReactiveState();
    // 处理视图导航参数
    this.useViewContextParams();
    // 使用计数器服务
    this.useCounterService();
    // 处理视图初始化
    this.useViewInit();
    return {
      state: this.state,
      onCtrlEvent: this.onCtrlEvent.bind(this),
    };
  }
}

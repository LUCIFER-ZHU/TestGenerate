import { Ref } from 'vue';
import { useRoute } from 'vue-router';
import { ViewPropsBase, ViewStateBase, UIBase, IParam, UIUtil } from '@core';

/**
 * @description 视图基类
 * @export
 * @class ViewBase
 */
export class ViewBase {

  /**
   * @description 视图状态
   * @type {ViewStateBase}
   * @memberof ViewBase
   */
  public viewState: ViewStateBase;

  /**
   * Creates an instance of ViewBase.
   * @param {*} options 配置参数
   * @memberof ViewBase
   */
  constructor(options: any) {
    this.viewState = reactive(options);
  }

  /**
   * @description 事件
   * @type {*}
   * @memberof ViewBase
   */
  emit: any;

  /**
   * @description 根据props调整设置部分视图基类
   * @param {ViewPropsBase} props 传入参数
   * @memberof ViewBase
   */
  public setState(props: ViewPropsBase) {
    // todo 项目级配置入口，优先级大于平台，提供全局的一次性配置

    // 只读属性处理：把props的属性的Ref赋给state，以维持响应性。
    this.viewState.viewSubject = toRef(props, 'viewSubject') as any;
  }

  /**
   * @description 处理视图导航参数
   * @param props 输入属性
   * @param context 应用上下文
   * @param viewParams 视图参数
   */
  public handleViewContextParams(props: ViewPropsBase, context: Ref<IParam | undefined>, viewParams: Ref<IParam | undefined>) {
    if (!context.value) context.value = {};
    if (!viewParams.value) viewParams.value = {};
    const { appViewNavContexts, appViewNavParams } = this.viewState;
    if (Object.is(props.openType, 'ROUTE')) {
      // 应用上下文
      const appContext = App.getAppData();
      Object.assign(context.value, appContext);
      // 视图应用上下文
      const pageContext = {};
      const routeParams = useRoute().params;
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
      const routeQuerys = useRoute().query;
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
   * @param {ViewPropsBase} props 传入的Props
   * @return {*} 
   * @memberof ViewBase
   */
  public useViewContextParams(props: ViewPropsBase) {
    const context = UIBase.toOneWayRef(props, 'context');
    const viewParams = UIBase.toOneWayRef(props, 'viewParams');
    // 导航视图参数处理
    this.handleViewContextParams(props, context, viewParams);
    watch(context, (newVal: any, oldVal: any) => {
      this.handleViewContextParams(props, newVal, viewParams);
    });
    // 把Ref赋值到State上进行解包
    this.viewState.context = context;
    this.viewState.viewParams = viewParams;
    return { context, viewParams };
  }

  /**
   * @description 使用计数器服务模块
   * @param {ViewPropsBase} props 传入参数
   * @memberof ViewBase
   */
  public useCounterService(props: ViewPropsBase) { }

  /**
   * @description 安装视图所有功能模块的方法
   * @param {ViewPropsBase} props 传入的Props
   * @param {Function} [emit] [emit] 事件
   * @return {*} 
   * @memberof ViewBase
   */
  public moduleInstall(props: ViewPropsBase, emit?: Function) {
    this.emit = emit?.bind(this);
    this.setState(props);
    this.useViewContextParams(props);
    this.useCounterService(props);
    return {
      state: this.viewState,
    };
  }
}

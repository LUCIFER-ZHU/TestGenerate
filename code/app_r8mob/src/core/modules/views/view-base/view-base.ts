import { Ref } from 'vue';
import { useRoute } from 'vue-router';
import { ViewPropsBase, ViewStateBase, UIBase, IParam } from '@core';

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
      if (Object.is(props.openType, 'ROUTE')) {
          const appContext = {};
          Object.assign(context.value, appContext);
          const pageContext = useRoute().params;
          Object.assign(context.value, pageContext);
          const pageCustomContext = {};
          Object.assign(context.value, pageCustomContext);
          console.log(context);
          const pageViewParams = useRoute().query;
          Object.assign(viewParams.value, pageViewParams);
          const pageCustomViewParams = {};
          Object.assign(viewParams.value, pageCustomViewParams);
          console.log(viewParams);
      } else {
          const customContext = {};
          Object.assign(context.value, customContext);
          const pageCustomViewParams = {};
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
        this.handleViewContextParams(props, newVal,viewParams);
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
  public useCounterService(props: ViewPropsBase){}

  /**
   * @description 安装视图所有功能模块的方法
   * @param {ViewPropsBase} props 传入的Props
   * @param {Function} [emit] [emit] 事件
   * @return {*} 
   * @memberof ViewBase
   */
  public moduleInstall(props: ViewPropsBase, emit?: Function) {
    this.setState(props);
    this.useViewContextParams(props);
    this.useCounterService(props);
    return {
      state: this.viewState,
    };
  }
}

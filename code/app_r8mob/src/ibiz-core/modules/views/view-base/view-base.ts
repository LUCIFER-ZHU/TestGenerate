import { ViewPropsBase, ViewStateBase, toOneWayRef } from '@ibiz-core';

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
   * @description 使用视图上下文参数逻辑块
   * @param {ViewPropsBase} props 传入的Props
   * @return {*} 
   * @memberof ViewBase
   */
  public useViewContextParams(props: ViewPropsBase) {
    const context = toOneWayRef(props, 'context');
    const viewParams = toOneWayRef(props, 'viewParams');

    // 把Ref赋值到State上进行解包
    this.viewState.context = context;
    this.viewState.viewParams = viewParams;

    // 视图部分额外处理
    // todo 导航参数处理，自定义参数处理。
    // todo viewparams 视图级隔离，如果没有用导航参数这些指定，则把上一层的都消除。

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

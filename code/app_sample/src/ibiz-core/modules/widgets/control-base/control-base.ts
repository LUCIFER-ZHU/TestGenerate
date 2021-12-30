import { ControlPropsBase, ControlStateBase, toOneWayRef } from '@ibiz-core';
import { RouteLocationNormalizedLoaded, Router, useRoute, useRouter } from 'vue-router';

/**
 * @description 部件基类
 * @export
 * @class ControlBase
 */
export class ControlBase {

  /**
   * @description 部件状态
   * @type {ControlStateBase}
   * @memberof ControlBase
   */
  public controlState: ControlStateBase;

  /**
   * @description 路由器
   * @type {Router}
   * @memberof ControlBase
   */
  public router: Router = useRouter();

  /**
  * @description 路由
  * @type {RouteLocationNormalizedLoaded}
  * @memberof ControlBase
  */
  public route: RouteLocationNormalizedLoaded = useRoute();

  /**
   * @description 事件
   * @type {*}
   * @memberof ControlBase
   */
  public emit: any;

  /**
   * Creates an instance of ControlBase.
   * @param {*} options 配置参数
   * @memberof ControlBase
   */
  constructor(options: any) {
    this.controlState = reactive(options);
  }

  /**
   * @description 根据props调整设置部分部件基类
   * @param {ControlPropsBase} props 传入props
   * @memberof ControlBase
   */
  public setState(props: ControlPropsBase) {
    // toDo 项目级配置入口，优先级大于平台，提供全局的一次性配置
    
    // 只读属性处理：把props的属性的Ref赋给state，以维持响应性。
    this.controlState.viewSubject = toRef(props, 'viewSubject') as any;
  }

  /**
   * @description 使用部件上下文参数逻辑块
   * @param {ControlPropsBase} props
   * @return {*} 
   * @memberof ControlBase
   */
  public useControlContextParams(props: ControlPropsBase) {
    const context = toOneWayRef(props, 'context');
    const viewParams = toOneWayRef(props, 'viewParams');

    // 把Ref赋值到State上进行解包
    this.controlState.context = context;
    this.controlState.viewParams = viewParams;

    return { context, viewParams };
  }

  /**
   * @description 安装部件所有功能模块的方法
   * @param {ControlPropsBase} props 传入的Props
   * @param {Function} [emit] 事件
   * @return {*} 
   * @memberof ControlBase
   */
  public moduleInstall(props: ControlPropsBase, emit?: Function) {
    this.emit = emit?.bind(this);
    this.setState(props);
    this.useControlContextParams(props);
    return {
      state: this.controlState,
    };
  }
}

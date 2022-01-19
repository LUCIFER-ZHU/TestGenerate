import { ControlPropsBase, ControlStateBase, IActionParam, IParam, UIBase } from '@core';

/**
 * @description 部件基类
 * @export
 * @class ControlBase
 */
export class ControlBase {

  /**
   * 部件状态数据
   *
   * @type {ControlStateBase}
   * @memberof ControlBase
   */
  public declare state: ControlStateBase;

  /**
   * 输入参数
   *
   * @type {IParam}
   * @memberof ControlBase
   */
  public declare props: IParam;

  /**
   * 输出事件
   *
   * @type {Function}
   * @memberof ControlBase
   */
  public declare emit: Function;

  /**
   * Creates an instance of ControlBase.
   * @param {*} options 配置参数
   * @param {ControlPropsBase} props 输入参数
   * @param {Function} emit 输出事件
   * @memberof ControlBase
   */
  constructor(options: any, props: ControlPropsBase, emit: Function) {
    this.state = reactive(options);
    this.props = props;
    this.emit = emit;
  }

  /**
   * @description 根据props调整设置部分部件基类
   * @memberof ControlBase
   */
  public setState() {
    this.state.viewSubject = toRef(this.props, 'viewSubject') as any;
  }

  /**
   * @description 使用部件上下文参数逻辑块
   * @return {*} 
   * @memberof ControlBase
   */
  public useControlContextParams() {
    const context = UIBase.toOneWayRef(this.props, 'context');
    const viewParams = UIBase.toOneWayRef(this.props, 'viewParams');
    // 把Ref赋值到State上进行解包
    this.state.context = context;
    this.state.viewParams = viewParams;
  }

  /**
   * 获取当前激活数据
   *
   * @memberof ControlBase
   */
  public getData(): IParam[] {
    return [];
  }

  /**
   * @description 安装部件所有功能模块的方法
   * @param {ControlPropsBase} props 传入的Props
   * @param {Function} [emit] 事件
   * @return {*} 
   * @memberof ControlBase
   */
  public moduleInstall() {
    this.setState();
    this.useControlContextParams();
    return {
      state: this.state,
      activeData: this.getData()
    };
  }
}

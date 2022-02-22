import { ControlBase, IParam, MainControlState } from '@core';

/**
 * @description 实体部件
 * @export
 * @class MainControl
 * @extends {ControlBase}
 */
export class MainControl extends ControlBase {

  /**
   * @description 部件状态
   * @type {MainControlState}
   * @memberof MainControl
   */
  public declare state: MainControlState;

  /**
   * @description 数据部件组件
   * @private
   * @type {IParam}
   * @memberof MainControl
   */
  private declare xData: IParam;

  /**
   * 界面行为服务
   *
   * @type {(IParam | undefined)}
   * @memberof MainControl
   */
  public appUIService: IParam | undefined;

  /**
   * @memberof MainControl
   */
  public setState() {
    super.setState();
    this.state.showBusyIndicator = toRef(this.props, 'showBusyIndicator') as any;
    this.state.controlAction = toRef(this.props, 'controlAction') as any;
  }

  /**
   *@description 使用UI服务
   *
   * @memberof MainControl
   */
  public useUIService() {
    const { context, appEntityCodeName } = this.state;
    if (appEntityCodeName) {
      App.getUIService(appEntityCodeName.toLowerCase(), context).then((service: IParam) => {
        this.appUIService = service;
        this.state.UIService = this.appUIService;
      })
    }
  }

  /**
   * @description 使用设置数据部件模块
   * @private
   * @return {*} 
   * @memberof MainControl
   */
  private useSetXDataCtrl() {
    const xData = ref(null);
    this.xData = xData;
    return xData;
  }

  /**
   * @description 获取数据部件
   * @return {*} 
   * @memberof MainControl
   */
  public getXDataCtrl() {
    return this.xData;
  }

  /**
   * @description 安装部件所有功能模块的方法
   * @return {*} 
   * @memberof MainControl
   */
  public moduleInstall() {
    const superParams = super.moduleInstall();
    // 使用UI服务
    this.useUIService();    
    return {
      ...superParams,
      xDataCtrl: this.useSetXDataCtrl()
    };
  }
}

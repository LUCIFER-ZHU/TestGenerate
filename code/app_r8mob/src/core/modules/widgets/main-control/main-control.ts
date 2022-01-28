import { ControlBase, IParam, MainControlProps, MainControlState, UIUtil } from '@core';

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
   * 获取指定数据的操作权限
   *
   * @param {IParam} data 指定数据
   * @param {IParam} actionModel 界面行为模型
   * @memberof MainControl
   */
  public async getActionAuthState(data: IParam, actionModel: IParam) {
    const { context, appEntityCodeName } = this.state;
    const tempUIservice = await App.getUIService(appEntityCodeName.toLowerCase(), context);
    UIUtil.calcActionItemAuthState(data, actionModel, tempUIservice);
    return actionModel;
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
   * @description 安装部件所有功能模块的方法
   * @return {*} 
   * @memberof MainControl
   */
  public moduleInstall() {
    const superParams = super.moduleInstall();
    // 使用UI服务
    this.useUIService();    
    return {
      ...superParams
    };
  }
}

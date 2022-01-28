import { IActionParam, MainControl, UIUtil } from '@core';
import { TabViewPanelControlProps } from './tab-view-panel-control-prop';
import { TabViewPanelControlState } from './tab-view-panel-control-state';

/**
 * @description 分页视图面板部件
 * @export
 * @class TabViewPanelControl
 * @extends {MainControl}
 */
export class TabViewPanelControl extends MainControl {
  /**
   * @description 部件状态
   * @type {FormControlState}
   * @memberof TabViewPanelControl
   */
  public declare state: TabViewPanelControlState;

  /**
   * 支持导航参数的处理
   * 监听props里的context和viewParams,
   * 当发生改变时处理一遍导航参数
   *
   */
  public useNavParams() {
    const { navContexts, navParams, navFilter, appDeCodeName } = this.state;
    const { context, viewParams } = toRefs(this.state);
    watch(
      [context, viewParams],
      (newValues: any[], prevValues: any[]) => {
        // 处理导航过滤项
        if(navFilter && appDeCodeName && this.state.context[appDeCodeName.toLowerCase()]){
          this.state.context[navFilter] = this.state.context[appDeCodeName.toLowerCase()];
        }

        // 处理导航上下文
        if (navContexts && Object.keys(navContexts).length > 0) {
          const _context = UIUtil.computedNavData({}, this.state.context, this.state.viewParams, navContexts);
          Object.assign(this.state.context, _context);
        }

        // 处理导航视图参数
        if (navParams && Object.keys(navParams).length > 0) {
          const _param = UIUtil.computedNavData({}, this.state.context, this.state.viewParams, navParams);
          Object.assign(this.state.viewParams, _param);
        }
      },
      {
        immediate: true,
      },
    );
  }

  /**
   * 部件事件
   *
   * @param {IActionParam} actionParam
   * @memberof TabViewPanelControl
   */
  public onViewEvent(actionParam: IActionParam) {
    const { tag, action, data } = actionParam;
    const { controlName } = this.state;
  }

  /**
   * @description 安装部件所有功能模块的方法
   * @return {*}
   * @memberof TabViewPanelControl
   */
  public moduleInstall() {
    const superParams = super.moduleInstall();
    this.useNavParams();
    return {
      ...superParams,
      onViewEvent: this.onViewEvent.bind(this)
    };
  }
}

import { deepCopy, ExpBarControl, IActionParam, IParam, UIUtil } from "@core";
import { TreeExpBarControlState } from "./tree-exp-bar-control-state";

/**
 * @description 导航栏部件
 * @export
 * @class TreeExpBarControl
 * @extends {ExpBarControl}
 */
export class TreeExpBarControl extends ExpBarControl {
  /**
   * @description 部件状态
   * @type {ExpBarControlState}
   * @memberof TreeExpBarControl
   */
  public declare state: TreeExpBarControlState;

  /**
   * @description 选中数据变化
   * @protected
   * @param {any[]} args
   * @return {*} 
   * @memberof TreeExpBarControl
   */
  protected onSelectionChange(args: any[]) {
    if (args.length == 0) {
      this.calcToolbarItemState(true);
      return;
    }
    const arg: any = args[0];
    if (!arg.id) {
      this.calcToolbarItemState(true);
      return;
    }
    const nodeType = arg.id.split(';')[0];
    //  获取导航视图
    const refView = this.getExpItemView({ nodeType: nodeType });
    // TODO 选择视图面板支持
    if (refView) {
      const { selection } = this.state;
      const { tempContext, tempViewParams } = this.computeNavParams(arg);
      //  置空
      Object.assign(selection, {});
      Object.assign(selection, {
        viewName: refView.viewName,
        context: tempContext,
        viewParams: tempViewParams
      });
      this.calcToolbarItemState(false);
    } else {
      this.calcToolbarItemState(true);
    }
  }

  /**
   * @description 获取导航视图
   * @protected
   * @param {*} [arg={}]
   * @return {*}  {(IParam | null)}
   * @memberof TreeExpBarControl
   */
  protected getExpItemView(arg: any = {}): IParam | null {
    const expMode: string = `EXPITEM:${arg.nodeType}`;
    const { viewRefs } = this.state;
    if (viewRefs && viewRefs.length > 0) {
      const viewRef = viewRefs.find((_viewRef: any) => _viewRef.name == expMode);
      return viewRef ? deepCopy(viewRef) : null;
    } else {
      return null;
    }
  }

  /**
   * @description 计算导航参数
   * @protected
   * @param {*} arg
   * @return {*}  {{ tempContext: any, tempViewParams: any }}
   * @memberof TreeExpBarControl
   */
  protected computeNavParams(arg: any): { tempContext: any, tempViewParams: any } {
    const tempContext: any = {};
    const tempViewParams: any = {};
    let { counter, context } = this.state;
    if (arg && arg.navfilter) {
      Object.defineProperty(tempViewParams, arg.navfilter, {
        value: arg.srfkey,
        writable: true,
        enumerable: true,
        configurable: true
      })
      Object.assign(tempContext, { srfcounter: counter });
    }
    Object.assign(tempContext, deepCopy(context));
    if (arg.srfappctx) {
      Object.assign(tempContext, deepCopy(arg.srfappctx));
    }
    if (arg.srfparentdename) {
      Object.assign(tempContext, { srfparentdename: arg.srfparentdename });
    }
    if (arg.srfparentdemapname) {
      Object.assign(tempContext, { srfparentdemapname: arg.srfparentdemapname });
    }
    if (arg.srfparentkey) {
      Object.assign(tempContext, { srfparentkey: arg.srfparentkey });
    }
    // 计算导航上下文
    if (arg && arg.navigateContext && Object.keys(arg.navigateContext).length > 0) {
      let tempData: any = arg.curData ? arg.curData : {};
      Object.assign(tempData, arg);
      let _context = UIUtil.computedNavData(tempData, tempContext, tempViewParams, arg.navigateContext);
      Object.assign(tempContext, _context);
    }
    // 计算导航参数
    if (arg && arg.navigateParams && Object.keys(arg.navigateParams).length > 0) {
      let tempData: any = arg.curData ? arg.curData : {};
      Object.assign(tempData, arg);
      let _params = UIUtil.computedNavData(tempData, tempContext, tempViewParams, arg.navigateParams);
      Object.assign(tempViewParams, _params);
      counter += 1;
      Object.assign(tempContext, { srfcounter: counter });
    }
    return { tempContext, tempViewParams };
  }

  /**
   * @description 使用加载功能模块
   * @memberof TreeExpBarControl
   */
  public useLoad() {
    const { viewSubject, controlName, xDataControlName } = this.state;
    if (viewSubject) {
      let subscription = viewSubject.subscribe(({ tag, action, data }: IActionParam) => {
        if (Object.is(controlName, tag)) {
          viewSubject.next({ tag: xDataControlName, action: action, data: data })
        }
      })
      // 部件卸载时退订viewSubject
      onUnmounted(() => {
        subscription.unsubscribe();
      })
    }
  }

  /**
  * @description 安装部件所有功能模块的方法
  * @return {*}
  * @memberof TreeExpBarControl
  */
  public moduleInstall() {
    const superParams = super.moduleInstall();
    this.useLoad();
    return {
      ...superParams
    };
  }
}
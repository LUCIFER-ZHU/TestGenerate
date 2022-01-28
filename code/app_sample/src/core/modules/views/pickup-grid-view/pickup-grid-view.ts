import { IActionParam, IParam } from "@core";
import { MDView } from "../md-view";
import { PickupGridViewProps } from "./pickup-grid-view-prop";
import { PickupGridViewState } from "./pickup-grid-view-state";

/**
 * @description 选择视图
 * @export
 * @class PickupGridView
 * @extends {MainView}
 */
export class PickupGridView extends MDView {

  /**
   * @description 视图状态
   * @type {PickupGridViewState}
   * @memberof PickupGridView
   */
  public declare state: PickupGridViewState;

  /**
   * 当前视图表格部件
   *
   * @type {IParam}
   * @memberof PickupGridView
   */
  public declare grid: IParam;

  /**
   * @description 处理视图初始化
   *
   * @memberof PickupGridView
   */
  public useViewInit() {
    super.useViewInit();
    // 初始化搜索表格引用
    this.grid = ref(null);
  }

  /**
   * @description 使用加载功能模块
   * @param {PickupGridViewProps} props 传入的props
   * @memberof PickupGridView
   */
  public useLoad(props: PickupGridViewProps) {
    const { viewSubject } = this.state;
    onMounted(() => {
      viewSubject.next({ tag: 'grid', action: "load", data: {} })
    })
  }

  /**
   * 部件事件
   *
   * @param {IActionParam} actionParam
   * @memberof PickupGridView
   */
  public onCtrlEvent(actionParam: IActionParam) {
    const { tag, action, data } = actionParam;
    if (tag !== 'grid') {
      return;
    }
    if (action === 'selectionChange') {
      this.emit('viewEvent', actionParam)
    }
  }

  /**
   *  获取多数据部件
   *
   * @return {*}  {*}
   * @memberof PickupGridView
   */
  public getMDCtrl(): any {
    return unref(this.grid);
  }

  /**
   * @description 安装视图所有功能模块的方法
   * @param {PickupGridViewProps} props 传入的Props
   * @param {Function} [emit] [emit] 事件
   * @return {*} 
   * @memberof PickupGridView
   */
  public moduleInstall() {
    const superParams = super.moduleInstall();
    return {
      ...superParams,
      grid: this.grid      
    };
  }
}
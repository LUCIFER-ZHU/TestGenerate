import { IndexViewState, IParam, ViewBase } from '@core';

/**
 * @description 首页视图
 * @export
 * @class IndexView
 * @extends {IndexView}
 */
export class IndexView extends ViewBase {
  /**
   * 视图状态
   *
   * @type {IndexViewState}
   * @memberof IndexView
   */
  public declare state: IndexViewState;

  /**
   * 当前视图菜单部件
   *
   * @type {IParam}
   * @memberof IndexView
   */
  public declare menu: IParam;

  /**
   * @description 处理视图初始化
   *
   * @memberof IndexView
   */
  public useViewInit() {
    // 初始化菜单引用
    this.menu = ref(null);
    const { viewSubject } = this.state;
    onMounted(() => {
      const { viewParams } = this.state;
      viewSubject.next({ tag: this.getMenu().name, action: "load", data: viewParams });
    })
  }

  /**
   *  获取菜单部件
   *
   * @return {*}  {*}
   * @memberof IndexView
   */
  public getMenu(): any {
    if (this.menu.value) {
      return this.menu.value;
    } else {
      return null;
    }
  }

  /**
   * @description 安装视图所有功能模块的方法
   * 
   * @memberof IndexView
   */
  public moduleInstall() {
    const superParams = super.moduleInstall();
    return {
      ...superParams,
      menu: this.menu
    };
  }

}

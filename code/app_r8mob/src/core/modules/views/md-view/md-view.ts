import { IActionParam, IParam, MainView, MDViewState } from '@core';

/**
 * 多数据视图
 *
 * @export
 * @class MDView
 * @extends {MainView}
 */
export class MDView extends MainView {

  /**
   *  视图状态数据
   *
   * @type {MDViewState}
   * @memberof MDView
   */
  public declare state: MDViewState;

  /**
   * 当前视图搜索表单部件
   *
   * @type {IParam}
   * @memberof MDView
   */
  public declare searchForm: IParam;

  /**
   * 当前视图搜索栏部件
   *
   * @type {IParam}
   * @memberof MDView
   */
  public declare searchBar: IParam;

  /**
   * @description 处理视图初始化
   *
   * @memberof MDView
   */
  public useViewInit() {
    super.useViewInit();
    // 初始化搜索表单引用
    this.searchForm = ref(null);
    // 初始化搜索栏引用
    this.searchBar = ref(null);
    onMounted(() => {
      // 初始化数据能力部件
      this.xDataControl = this.getMDCtrl();
      const { isLoadDefault } = this.state;
      if (this.getSearchForm() && isLoadDefault) {
        const tag = this.getSearchForm().name;
        this.next({ tag: tag, action: 'loaddraft', data: null });
      } else if (this.getMDCtrl() && isLoadDefault) {
        const tag = this.getMDCtrl().name;
        this.next({ tag: tag, action: 'load', data: null });
      } else {
        this.state.isLoadDefault = true;
      }
    })
  }

  /**
   * 处理部件事件
   *
   * @param {IActionParam} actionParam
   * @memberof MDView
   */
  public handleCtrlEvent(actionParam: IActionParam) {
    const { tag, action, data } = actionParam;
    if (Object.is(tag, 'searchform')) {
      this.searchFormEvent(action, data);
    }
  }

  /**
   * 搜索表单事件
   *
   * @param {string} eventName
   * @param {*} [args={}]
   * @memberof MDView
   */
  public searchFormEvent(eventName: string, args: any = {}): void {
    if (Object.is(eventName, 'load')) {
      this.onSearchFormLoad(args);
    }
    if (Object.is(eventName, 'search')) {
      this.onSearchFormLoad(args);
    }
  }

  /**
   * 搜索表单加载完成
   *
   * @param {*} [args={}]
   * @memberof MDView
   */
  public onSearchFormLoad(args: any = {}): void {
    const { isLoadDefault, viewParams } = this.state;
    if (this.getMDCtrl() && isLoadDefault) {
      const tag = this.getMDCtrl().name;
      this.next({ tag: tag, action: 'load', data: viewParams });
    }
    this.state.isLoadDefault = true;
  }

  /**
   * 搜索表单搜索
   *
   * @param {*} [args={}]
   * @memberof MDView
   */
  public onSearchFormSearch(args: any = {}): void {
    const { isLoadDefault, viewParams } = this.state;
    if (this.getMDCtrl() && isLoadDefault) {
      const tag = this.getMDCtrl().name;
      this.next({ tag: tag, action: 'load', data: viewParams });
    }
    this.state.isLoadDefault = true;
  }

  /**
   * 多数据部件事件处理
   *
   * @param {string} eventName
   * @param {any[]} args
   * @memberof MDView
   */
  public MDCtrlEvent(eventName: string, args: any): void {
    if (Object.is(eventName, 'rowclick')) {
      this.doEdit(args);
    }
    if (Object.is(eventName, 'rowdblclick')) {
      this.doEdit(args);
    }
    if (Object.is(eventName, 'selectionchange')) {
      this.selectionChange(args);
    }
    if (Object.is(eventName, 'load')) {
      this.MDCtrlLoaded(args);
    }
    if (Object.is(eventName, 'beforeload')) {
      this.MDCtrlBeforeLoad(args)
    }
  }

  /**
   * 多数据部件加载之前
   *
   * @param {*} args
   * @memberof MDView
   */
  public MDCtrlBeforeLoad(args: any = {}) {
    if (this.getSearchForm()) {
      Object.assign(args, this.getSearchForm().getData());
    }
    if (this.getSearchBar()) {
      Object.assign(args, this.getSearchBar().getData());
    }
    // if (this.view && !this.view.isExpandSearchForm) {
    //   Object.assign(args, { query: this.view.query });
    // }
    // 快速分组和快速搜索栏
    // if (this.view && this.view.quickGroupData) {
    //   Object.assign(args, this.view.quickGroupData);
    // }
    // if (this.view && this.view.quickFormData) {
    //   Object.assign(args, this.view.quickFormData);
    // }
    // 自定义查询条件
    // const mdCtrl: any = this.getMDCtrl();
    // if (mdCtrl && mdCtrl.controlInstance && mdCtrl.controlInstance.customCond) {
    //   Object.assign(args, { srfdsscope: mdCtrl.controlInstance.customCond });
    // }
  }

  /**
   * 多数据部件加载完成
   *
   * @param {*} args
   * @memberof MDView
   */
  public MDCtrlLoaded(args: any) {
    throw new Error('Method not implemented.');
  }

  /**
   * 多数据部件选中数据
   *
   * @param {*} args
   * @memberof MDView
   */
  public selectionChange(args: any) {
    throw new Error('Method not implemented.');
  }

  /**
   *  执行编辑操作
   *
   * @param {*} args
   * @memberof MDView
   */
  public doEdit(args: any) {
    throw new Error('Method not implemented.');
  }

  /**
   * @description 安装视图所有功能模块的方法
   * 
   * @memberof MDView
   */
  public moduleInstall() {
    const superParams = super.moduleInstall();
    return {
      ...superParams,
      xDataControl: this.xDataControl,
      searchForm: this.searchForm,
      searchBar: this.searchBar
    };
  }

  /**
   * @description 获取搜索表单部件
   *
   * @return {*}  {*}
   * @memberof MDView
   */
  public getSearchForm(): any {
    if (this.searchForm.value) {
      return this.searchForm.value;
    } else {
      return null;
    }
  }

  /**
   * 获取搜索栏部件
   *
   * @returns {*}
   * @memberof MDView
   */
  public getSearchBar() {
    if (this.searchBar.value) {
      return this.searchBar.value;
    } else {
      return null;
    }
  }

  /**
   *  获取多数据部件
   *
   * @return {*}  {*}
   * @memberof MDView
   */
  public getMDCtrl(): any { }

}

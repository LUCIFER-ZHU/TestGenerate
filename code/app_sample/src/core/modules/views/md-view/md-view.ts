import { IActionParam, IParam, MainView, MDViewState, ViewUtil } from '@core';

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
    });
  }

  /**
   * 处理部件事件
   *
   * @param {IActionParam} actionParam
   * @memberof MDView
   */
  public onCtrlEvent(actionParam: IActionParam) {
    const { tag, action, data } = actionParam;
    if (Object.is(tag, 'searchform')) {
      this.handleSearchFormEvent(action, data);
    }
  }

  /**
   * 搜索表单事件
   *
   * @param {string} eventName
   * @param {*} [args={}]
   * @memberof MDView
   */
  public handleSearchFormEvent(eventName: string, args: any = {}): void {
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
   * @description 快速分组查询
   * @param {*} [args={}]
   * @memberof MDView
   */
  public handleQuickGroupSearch(args: any = {}): void {
    const { viewParams } = this.state;
    Object.assign(viewParams, { quickGroup: args.data });
    const tag = this.getMDCtrl().name;
    this.next({ tag: tag, action: 'load', data: viewParams });
  }

  /**
   * @description 快速搜索查询
   * @param {*} [args={}]
   * @memberof MDView
   */
  public handleQuickSearch(args: any = {}): void {
    const { viewParams } = this.state;
    const query = args?.target?._value || '';
    Object.assign(viewParams, { query: query });
    const tag = this.getMDCtrl().name;
    this.next({ tag: tag, action: 'load', data: viewParams });
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
    if (Object.is(eventName, 'beforeload')) {
      this.MDCtrlBeforeLoad(args);
    }
    if (Object.is(eventName, 'load')) {
      this.MDCtrlLoaded(args);
    }
    if (Object.is(eventName, 'rowClick')) {
      this.doEdit(args);
    }
    if (Object.is(eventName, 'rowDbClick')) {
      this.doEdit(args);
    }
    if (Object.is(eventName, 'selectionChange')) {
      this.selectionChange(args);
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
    console.log('数据加载完成', args);
  }

  /**
   * 多数据部件选中数据
   *
   * @param {*} args
   * @memberof MDView
   */
  public selectionChange(args: any) {
    // 抛出数据
    this.emit("onViewEvent", { tag: this.state.viewName, action: 'selectionChange', data: args });
    // 计算按钮权限 todo
  }

  /**
   *  执行编辑操作
   *
   * @param {*} args
   * @memberof MDView
   */
  public doEdit(args: any) {
    //准备打开视图
    if (!this.state?.viewLogics?.openData?.openDataViewName) {
      return;
    }
    const viewName = this.state.viewLogics.openData.openDataViewName;
    const view = App.getViewInfo(viewName);
    if (!view) {
      return;
    }
    // 准备参数
    const tempContext = {};
    Object.assign(tempContext, { [this.state.keyPSDEField]: args[0].srfkey });
    Object.assign(tempContext, this.state.context);
    const params = {
      context: tempContext,
      viewParams: this.state.viewParams,
      data: args,
      event: undefined,
      actionEnvironment: this
    }
    ViewUtil.openData(view, params);
  }

  /**
   * @description 处理快速分组事件
   * @param {IActionParam} $event
   * @memberof MDView
   */
  public onQuickGroupEvent($event: IActionParam) {
    if ($event) {
      this.handleQuickGroupSearch($event);
    }
  }

  /**
   * @description 处理快速搜索事件
   * @param {any} $event
   * @memberof MDView
   */
  public onQuickSearchEvent($event: any) {
    if ($event) {
      this.handleQuickSearch($event);
    }
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
      searchBar: this.searchBar,
      onQuickGroupEvent: this.onQuickGroupEvent.bind(this),
      onQuickSearchEvent: this.onQuickSearchEvent.bind(this),
    };
  }

  /**
   * @description 获取搜索表单部件
   *
   * @return {*}  {*}
   * @memberof MDView
   */
  public getSearchForm(): any {
    return unref(this.searchForm);
  }

  /**
   * 获取搜索栏部件
   *
   * @returns {*}
   * @memberof MDView
   */
  public getSearchBar() {
    return unref(this.searchBar);
  }

  /**
   *  获取多数据部件
   *
   * @return {*}  {*}
   * @memberof MDView
   */
  public getMDCtrl(): any { }
}

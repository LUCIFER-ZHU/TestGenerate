import { hasFunction, IContext, IParam, isExist, isExistAndNotEmpty, ViewUtil } from '@core';

/**
 * 界面行为参数对象
 *
 * @export
 * @interface IUIActionParams
 */
export interface IUIActionParams {
  /**
   * 上下文参数
   */
  context: IContext;
  /**
   * 视图参数
   */
  viewParams: IParam;
  /**
   * 当前激活数据
   */
  data: IParam;
  /**
   * js事件源对象
   */
  event: MouseEvent;
  /**
   * 当前上下文环境引用
   */
  actionEnvironment: IParam;
}

/**
 * 系统预置界面行为
 *
 * @export
 * @class AppSysAction
 */
export class AppSysAction {
  /**
   * 执行预置界面行为
   *
   * @static
   * @param {IParam} uiAction 界面行为对象
   * @param {IUIActionParams} params 界面行为参数对象
   * @memberof AppSysAction
   */
  public static async execute(uiAction: IParam, params: IUIActionParams) {
    const tag = uiAction.uIActionTag;
    switch (tag) {
      case 'Edit':
        this.edit(params);
        break;
      case 'New':
        this.new(params);
        break;
      case 'Save':
        this.save(params);
        break;
      case 'SaveRow':
        this.saveRow(params);
        break;
      case 'Remove':
        this.remove(params);
        break;
      case 'ToggleRowEdit':
        this.toggleRowEdit(params);
        break;
      case 'NewRow':
        this.newRow(params);
        break;
      case 'Refresh':
        this.refresh(params);
        break;
      case 'Exit':
        this.exit(params);
        break;
      case 'SaveAndExit':
        this.saveAndExit(params);
        break;
      case 'RemoveAndExit':
        this.removeAndExit(params);
        break;
      case 'SaveAndNew':
        this.saveAndNew(params);
        break;
      case 'ToggleFilter':
        this.toggleFilter(params);
        break;
      case 'ExportExcel':
        this.exportExcel(params);
        break;
      default:
        App.getNotificationService().info({
          message: '提示',
          description: `暂未支持${tag}`
        });
    }
  }

  /**
   * 编辑
   *
   * @static
   * @param params 界面行为参数对象
   * @return {*} 
   */
  public static edit(params: IUIActionParams) {
    const { actionEnvironment, data } = params;
    // 准备视图参数
    if (!actionEnvironment || !actionEnvironment.state) {
      return;
    }
    let viewName: string = '';
    //  获取视图名称
    const getOpenViewName = (state: any) => {
      if (
        state.viewLogics
        && state.viewLogics.openData
        && state.viewLogics.openData.openDataViewName
      ) {
        viewName = state.viewLogics.openData.openDataViewName;
        return;
      }
      //  在父容器中查找openData逻辑
      if (state.parent && state.parent.state) {
        getOpenViewName(state.parent.state);
      }
    }
    getOpenViewName(actionEnvironment.state);
    if (!isExistAndNotEmpty(viewName)) {
      return;
    }
    const view = App.getViewInfo(viewName);
    if (!view) {
      console.warn("视图参数不足");
      return;
    }
    // 准备数据参数
    if (!data || !Array.isArray(data) || (data.length == 0)) {
      console.warn("数据参数不足");
      return;
    }
    Object.assign(params.context, { [actionEnvironment.state.appEntityCodeName?.toLowerCase()]: data[0].srfkey });
    ViewUtil.openData(view, params);
  }

  /**
   * 新建
   *
   * @param params 界面行为参数对象
   * @return {*}
   */
  public static new(params: IUIActionParams) {
    const { actionEnvironment, data } = params;
    // 准备视图参数
    if (!actionEnvironment || !actionEnvironment.state) {
      return;
    }
    let viewName: string = '';
    //  获取视图名称
    const getNewViewName = (state: any) => {
      if (
        state.viewLogics
        && state.viewLogics.newData
        && state.viewLogics.newData.newDataViewName
      ) {
        viewName = state.viewLogics.newData.newDataViewName;
        return;
      }
      //  在父容器中查找openData逻辑
      if (state.parent && state.parent.state) {
        getNewViewName(state.parent.state);
      }
    }
    getNewViewName(actionEnvironment.state);
    if (!isExistAndNotEmpty(viewName)) {
      return;
    }
    const view = App.getViewInfo(viewName);
    if (!view) {
      return;
    }
    // 准备数据参数
    Object.assign(params.viewParams, { w: new Date().getTime() });
    ViewUtil.newData(view, params);
  }
  
  /**
   * 行编辑
   * 
   * @param params 界面行为参数对象
   * @return {*}
   */
  public static toggleRowEdit(params: IUIActionParams) {
    const { actionEnvironment } = params;
    if (isExist(actionEnvironment.state.rowEditState)) {
      actionEnvironment.state.rowEditState = !actionEnvironment.state.rowEditState;
    }
  }

  /**
   * 新建行
   * 
   * @param params 界面行为参数对象
   * @return {*}
   */
  public static newRow(params: IUIActionParams) {
    const { actionEnvironment } = params;
    // 视图里获取多数据部件
    if (actionEnvironment.xDataControl && hasFunction(actionEnvironment.xDataControl, "newRow")) {
      actionEnvironment.xDataControl.newRow();
    } else if (isExist(actionEnvironment.newRow)) {
      actionEnvironment.newRow();
    }
  }

  /**
   * 保存
   * 
   * @param params 界面行为参数对象
   * @return {*}
   */
  public static save(params: IUIActionParams) {
    const { actionEnvironment } = params;
    // 视图里获取多数据部件
    if (actionEnvironment.xDataControl && hasFunction(actionEnvironment.xDataControl, "save")) {
      actionEnvironment.xDataControl.save();
    } else if (isExist(actionEnvironment.save)) {
      actionEnvironment.save();
    }
  }

  /**
   * 保存行
   * 
   * @param params 界面行为参数对象
   * @return {*}
   */
  public static saveRow(params: IUIActionParams) {
    const { actionEnvironment } = params;
    // 视图里获取多数据部件
    if (actionEnvironment.xDataControl && hasFunction(actionEnvironment.xDataControl, "save")) {
      actionEnvironment.xDataControl.save();
    } else if (isExist(actionEnvironment.save)) {
      actionEnvironment.save();
    }
  }

  /**
   * 删除
   * 
   * @param params 界面行为参数对象
   * @return {*}
   */
  public static remove(params: IUIActionParams) {
    const { actionEnvironment, data } = params;
    // 视图里获取多数据部件
    if (actionEnvironment.xDataControl && hasFunction(actionEnvironment.xDataControl, "remove")) {
      actionEnvironment.xDataControl.remove(data);
    } else if (isExist(actionEnvironment.remove)) {
      actionEnvironment.remove(data);
    }
  }

  /**
   * 刷新
   * 
   * @param params 界面行为参数对象
   * @return {*}
   */
  public static refresh(params: IUIActionParams) {
    const { actionEnvironment } = params;
    // 视图里获取多数据部件
    if (actionEnvironment.xDataControl && hasFunction(actionEnvironment.xDataControl, "refresh")) {
      actionEnvironment.xDataControl.refresh();
    } else if (isExist(actionEnvironment.refresh)) {
      actionEnvironment.refresh();
    }
  }

  /**
   * 关闭
   * 
   * @param params 界面行为参数对象
   * @return {*}
   */
  public static exit(params: IUIActionParams) {
    const { actionEnvironment } = params;
    if (isExist(actionEnvironment.closeView)) {
      actionEnvironment.closeView();
    }
  }

  /**
   * 保存并关闭
   * 
   * @param params 界面行为参数对象
   * @return {*}
   */
  public static async saveAndExit(params: IUIActionParams) {
    const { actionEnvironment } = params;
    if (actionEnvironment.xDataControl && hasFunction(actionEnvironment.xDataControl, "save")) {
      await actionEnvironment.xDataControl.save();
    } else if (isExist(actionEnvironment.save)) {
      await actionEnvironment.save();
    }
    // 关闭视图
    this.exit(params);
  }

  /**
   * 保存并新建
   *
   * @static
   * @param {IUIActionParams} params
   * @memberof AppSysAction
   */
  public static async saveAndNew(params: IUIActionParams) {
    const { actionEnvironment } = params;
    if (actionEnvironment.xDataControl && hasFunction(actionEnvironment.xDataControl, "save")) {
      await actionEnvironment.xDataControl.save();
    } else if (isExist(actionEnvironment.save)) {
      await actionEnvironment.save();
    }
    // 跳转新建页面
    const view = App.getViewInfo(actionEnvironment.state.viewCodeName);
    if (!view) {
      return;
    }
    // 准备数据参数
    Object.assign(params.viewParams, { w: new Date().getTime() });
    ViewUtil.newData(view, params);
  }

  /**
   * 删除并关闭
   * 
   * @param params 界面行为参数对象
   * @return {*}
   */
  public static async removeAndExit(params: IUIActionParams) {
    const { actionEnvironment } = params;
    // 视图里获取多数据部件
    if (actionEnvironment.xDataControl && hasFunction(actionEnvironment.xDataControl, "remove")) {
      await actionEnvironment.xDataControl.remove();
    } else if (isExist(actionEnvironment.remove)) {
      await actionEnvironment.remove();
    }
    // 关闭视图
    this.exit(params);
  }

  /**
   * 过滤
   * 
   * @param params 界面行为参数对象
   * @return {*}
   */
  public static toggleFilter(params: IUIActionParams) {
    const { actionEnvironment } = params;
    if (isExist(actionEnvironment.state.expandSearchForm)) {
      actionEnvironment.state.expandSearchForm = !actionEnvironment.state.expandSearchForm;
    }
  }

  /**
   * 导出
   * 
   * @param params 界面行为参数对象
   * @return {*}
   */
  public static async exportExcel(params: IUIActionParams) {
    const { actionEnvironment } = params;
    // 视图里获取多数据部件
    if (actionEnvironment.xDataControl && hasFunction(actionEnvironment.xDataControl, "exportExcel")) {
      await actionEnvironment.xDataControl.exportExcel();
    } else if (isExist(actionEnvironment.exportExcel)) {
      await actionEnvironment.exportExcel();
    }
  }
}

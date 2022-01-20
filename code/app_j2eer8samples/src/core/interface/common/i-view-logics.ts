/**
 * 新建数据视图 视图逻辑配置信息
 *
 * @export
 * @interface IViewLogics
 */
export interface INewDataViewLogics {
  /**
   * 打开方式
   *
   * @type {string}
   * @memberof ViewDetail
   */
  openMode?: 'INDEXViewDetailTAB' | 'POPUPAPP' | 'POPUPMODAL' | 'DRAWER' | 'POPOVER' | string;

  /**
   * 新建数据视图名称
   *
   */
  newDataViewName?: string;
}

/**
 * 编辑数据视图 视图逻辑配置信息
 *
 * @export
 * @interface IViewLogics
 */
 export interface IOpenDataViewLogics {
  /**
   * 打开方式
   *
   * @type {string}
   * @memberof ViewDetail
   */
  openMode?: 'INDEXViewDetailTAB' | 'POPUPAPP' | 'POPUPMODAL' | 'DRAWER' | 'POPOVER' | string;

  /**
   * 新建数据视图名称
   *
   */
  openDataViewName?: string;
}

/**
 * 视图逻辑配置信息
 *
 * @export
 * @interface IViewLogics
 */
export interface IViewLogics {
  /**
   * 新建数据视图 视图逻辑配置信息
   */
  newData?: INewDataViewLogics;

  /**
   * 编辑数据视图 视图逻辑配置信息
   */
  openData?: IOpenDataViewLogics;
}

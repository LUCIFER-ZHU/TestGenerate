import { notEmpty } from '@ibiz-core';
import qs from 'qs';

/**
 * 路由相关处理逻辑工具类
 *
 * @export
 * @class RouteTool
 */
export class RouteTool {

  /**
   * 处理路由路径
   * @static
   * @param view 视图信息
   * @param context 上下文
   * @param viewParams 视图参数
   * @return {*}
   */
  public static buildUpRoutePath(view: any, context: any, viewParams: any, route: any): string {
    const { deResPaths, parameters } = view;
    const indexRoutePath = this.getIndexRoutePath(route);
    const deResRoutePath = this.getDeResRoutePath(context, deResPaths);
    const deRoutePath = this.getActiveRoutePath(parameters, context, viewParams);
    return `${indexRoutePath}${deResRoutePath}${deRoutePath}`;
  }

  /**
   * 获取首页根路由路径
   *
   * @static
   * @param {Route} route 路由对象
   * @returns {string}
   * @memberof RouteTool
   */
  public static getIndexRoutePath(route: any): string {
    const parameter = route.meta?.parameters?.[0] || { pathName: "apps", parameterName: "app" };
    const {pathName, parameterName} = parameter;
    const param = route.params[parameterName];
    if (notEmpty(param)) {
      return `/${pathName}/${param}`;
    }
    return `/${pathName}`;
  }

  /**
   * 获取关系实体路径(部分匹配)
   * - 优先匹配路径节点数多的路径
   * - 取最终匹配节点个数最多的组合
   * - 路径节点必须从后往前连续匹配，中间缺失的舍弃前面匹配的节点
   * - 一个也没匹配返回/{实体自身的pathName}
   *
   * @static
   * @param {*} [viewParam={}] 视图上下文
   * @param {any[]} deResPaths 关系实体参数对象数组
   * @returns {string}
   * @memberof RouteTool
   */
  public static getDeResRoutePath(context: any = {}, deResPaths: any[]): string {
    let routePath: string = '';
    // 首先给deResPaths排序，关系多的排前面。
    deResPaths.sort((a: any[], b: any[]) => a.length - b.length);

    // 最多匹配路径节点数
    let maxMatch: number = 0;
    // 开始匹配，先遍历关系路径，在遍历关系路径的每个节点
    deResPaths.some((deResPath: any[]) => {
      // 如果节点个数小于最大匹配，则后面都无需在计算了。
      if (maxMatch > deResPath.length) {
        return true;
      }

      // 当前匹配路径节点数
      let curMatch: number = 0;
      let curRoutPath: string = '';

      deResPath.some((deResNode: any, index: number) => {
        let value: any = context[deResNode.parameterName];
        if (notEmpty(value)) {
          curMatch++;
          curRoutPath += `/${deResNode.pathName}/${value}`;
        } else if (curMatch != 0 || index == deResPath.length) {
          // 如果前面一个路径节点已经匹配则前一段路径作废,继续匹配后面的。
          // 如果最后一个节点也没值,则整个路径作废。
          curMatch = 0;
          curRoutPath = '';
        }
      });

      // 当前匹配个数大于最大匹配时，修改最大匹配和最终结果
      if (curMatch > maxMatch) {
        maxMatch = curMatch;
        routePath = curRoutPath;
      }
    });

    // 如果一个匹配的没有，即没有任何主键匹配上，关系路径为实体自身的pathName
    if(routePath == ''){
      routePath = "/"+deResPaths[deResPaths.length -1][0].pathName;
    }

    return routePath;
  }

  /**
   * 计算请求关系实体路径(全部匹配)
   * - 优先匹配路径节点数多的路径
   * - 取最终匹配节点个数最多的组合
   * - 路径的每个节点必须全部匹配
   * - 一个也没匹配返回/{实体自身的pathName}/undefined
   *
   * @static
   * @param {*} [viewParam={}] 视图上下文
   * @param {any[]} deResPaths 关系实体参数对象数组
   * @returns {string}
   * @memberof RouteTool
   */
  public static buildDeResRequestPath(context: any = {}, deResPaths: any[]): string {
    let routePath: string = '';
    // 首先给deResPaths排序，关系多的排前面。
    deResPaths.sort((a: any[], b: any[]) => a.length - b.length);

    // 最多匹配路径节点数
    let maxMatch: number = 0;
    // 开始匹配，先遍历关系路径，在遍历关系路径的每个节点
    deResPaths.some((deResPath: any[]) => {
      // 如果节点个数小于最大匹配，则后面都无需在计算了。(省略多余运算)
      if (maxMatch > deResPath.length) {
        return true;
      }

      // 当前匹配路径节点数
      let curMatch: number = 0;
      let curRoutPath: string = '';

      deResPath.some((deResNode: any, index: number) => {
        let value: any = context[deResNode.parameterName];
        if (notEmpty(value)) {
          curMatch++;
          curRoutPath += `/${deResNode.pathName}/${value}`;
        } else {
          // 只要有一个节点没值,则整个路径作废。
          curMatch = 0;
          curRoutPath = '';
          return true
        }
      });

      // 当前匹配个数大于最大匹配时，修改最大匹配和最终结果
      if (curMatch > maxMatch) {
        maxMatch = curMatch;
        routePath = curRoutPath;
      }
    });

    // 如果一个匹配的没有，即没有任何主键匹配上，关系路径为实体自身的/pathName/undefined
    if(routePath == ''){
      routePath = "/"+deResPaths[deResPaths.length -1][0].pathName+"/undefined";
    }

    return routePath;
  }

  /**
   * 当前激活路由路径
   *
   * @static
   * @param parameters 当前视图参数对象
   * @param context 视图上下文
   * @param [viewParams={}] 视图参数
   * @return {*}
   */
  public static getActiveRoutePath(parameters: any[], context: any, viewParams: any = {}): string {
    let routePath: string = '';
    const [{ parameterName }] = parameters;
    routePath = `/views/${parameterName}`;
    if (Object.keys(viewParams).length > 0) {
      routePath = `${routePath}?${qs.stringify(viewParams, { delimiter: ';' })}`;
    }
    return routePath;
  }

  /**
   * 格式化路由参数
   *
   * @static
   * @param {*} params
   * @returns {*}
   * @memberof RouteTool
   */
  public static formatRouteParams(params: any, route: any, context: any, viewparams: any): void {
    Object.keys(params).forEach((key: string, index: number) => {
      const param: string | null | undefined = params[key];
      if (!param || Object.is(param, '') || Object.is(param, 'null')) {
        return;
      }
      if (param.indexOf('=') > 0) {
        const _param = qs.parse(param, { delimiter: ';' });
        Object.assign(context, _param);
      } else {
        Object.assign(context, { [key]: param });
      }
    });
    if (route && route.fullPath && route.fullPath.indexOf('?') > -1) {
      const _viewparams: any = route.fullPath.slice(route.fullPath.indexOf('?') + 1);
      const _viewparamArray: Array<string> = decodeURIComponent(_viewparams).split(';');
      if (_viewparamArray.length > 0) {
        _viewparamArray.forEach((item: any) => {
          Object.assign(viewparams, qs.parse(item));
        });
      }
    }
  }

  /**
   * 首页路由结构参数
   *
   * @private
   * @static
   * @type {any[]}
   * @memberof RouteTool
   */
  private static indexParameters: any[] = [];

  /**
   * 设置首页路由结构参数
   *
   * @static
   * @param {any[]} parameters
   * @memberof RouteTool
   */
  public static setIndexParameters(parameters: any[]): void {
    this.indexParameters = [...parameters];
  }

  /**
   * 获取首页路由结构参数
   *
   * @static
   * @returns {any[]}
   * @memberof RouteTool
   */
  public static getIndexParameters(): any[] {
    return this.indexParameters;
  }

  /**
   * 首页视图参数
   *
   * @static
   * @type {*}
   * @memberof RouteTool
   */
  public static indexViewParam: any = {};

  /**
   * 设置首页视图参数
   *
   * @static
   * @param {*} [viewParam={}]
   * @memberof RouteTool
   */
  public static setIndexViewParam(viewParam: any = {}): void {
    Object.assign(this.indexViewParam, viewParam);
  }

  /**
   * 获取首页视图参数
   *
   * @static
   * @returns {*}
   * @memberof RouteTool
   */
  public static getIndexViewParam(): any {
    return this.indexViewParam;
  }

  /**
   * 计算界面行为项权限状态
   *
   * @static
   * @param {*} [data] 传入数据
   * @param {*} [ActionModel] 界面行为模型
   * @param {*} [UIService] 界面行为服务
   * @memberof RouteTool
   */
  public static calcActionItemAuthState(data: any, ActionModel: any, UIService: any) {
    let result: any[] = [];
    if (!UIService) return;
    for (const key in ActionModel) {
      if (!ActionModel.hasOwnProperty(key)) {
        return result;
      }
      const _item = ActionModel[key];
      let dataActionResult: any;
      if (_item && _item['dataAccessAction']) {
        if (Object.is(_item['actionTarget'], 'NONE') || Object.is(_item['actionTarget'], '')) {
          dataActionResult = UIService.getAllOPPrivs(undefined, _item['dataAccessAction']);
        } else {
          if (data && Object.keys(data).length > 0) {
            dataActionResult = UIService.getAllOPPrivs(data, _item['dataAccessAction']);
          }
        }
      } else {
        dataActionResult = 1;
      }
      // 无权限:0;有权限:1
      if (dataActionResult === 0) {
        // 禁用:1;隐藏:2;隐藏且默认隐藏:6
        if (_item.getNoPrivDisplayMode === 1) {
          _item.disabled = true;
        }
        if (_item.getNoPrivDisplayMode === 2 || _item.getNoPrivDisplayMode === 6) {
          _item.visabled = false;
        } else {
          _item.visabled = true;
        }
      }
      if (dataActionResult === 1) {
        _item.visabled = true;
        _item.disabled = false;
      }
      // 返回权限验证的结果
      _item.dataActionResult = dataActionResult;
      result.push(dataActionResult);
    }
    return result;
  }

  /**
   * 计算界面行为项权限状态（树节点版本）
   *
   * @static
   * @param {*} [data] 传入数据
   * @param {*} [ActionModel] 界面行为模型
   * @param {*} [UIService] 界面行为服务
   * @memberof RouteTool
   */
  public static calcTreeActionItemAuthState(data: any, ActionModel: any, UIService: any) {
    let result: any[] = [];
    if (!UIService) return;
    for (const key in ActionModel) {
      if (!ActionModel.hasOwnProperty(key)) {
        return result;
      }
      const _item = ActionModel[key];
      let dataActionResult: any;
      if (Object.is(_item['actiontarget'], 'NONE') || Object.is(_item['actiontarget'], '')) {
        dataActionResult = UIService.getAllOPPrivs(undefined, _item['dataaccaction']);
      } else {
        if (_item && _item['dataaccaction'] && UIService.isEnableDEMainState) {
          if (data && Object.keys(data).length > 0) {
            dataActionResult = UIService.getAllOPPrivs(data, _item['dataaccaction']);
          }
        }
      }
      // 无权限:0;有权限:1
      if (dataActionResult === 0) {
        // 禁用:1;隐藏:2;隐藏且默认隐藏:6
        if (_item.noprivdisplaymode === 1) {
          _item.disabled = true;
        }
        if (_item.noprivdisplaymode === 2 || _item.noprivdisplaymode === 6) {
          _item.visabled = false;
        } else {
          _item.visabled = true;
        }
      }
      if (dataActionResult === 1) {
        _item.visabled = true;
        _item.disabled = false;
      }
      // 返回权限验证的结果
      _item.dataActionResult = dataActionResult;
      result.push(dataActionResult);
    }
    return result;
  }

  /**
   * 计算重定向上下文
   *
   * @static
   * @param {*} [tempContext] 上下文
   * @param {*} [data] 传入数据
   * @param {*} [redirectAppEntity] 应用实体对象
   * @memberof RouteTool
   */
  public static async calcRedirectContext(tempContext: any, data: any, redirectAppEntity: any) {
    if (
      redirectAppEntity &&
      redirectAppEntity.getMinorPSAppDERSs() &&
      (redirectAppEntity.getMinorPSAppDERSs() as []).length > 0
    ) {
      for (const item of redirectAppEntity.getMinorPSAppDERSs()) {
        const parentPSAppDEFieldCodeName: string = item.M.getParentPSAppDEField?.codeName;
        if (parentPSAppDEFieldCodeName) {
          const curData: any = data;
          if (curData && curData[parentPSAppDEFieldCodeName.toLowerCase()]) {
            const majorAppEntity: any = item.getMajorPSAppDataEntity();
            await majorAppEntity.fill();
            if (!tempContext[majorAppEntity.codeName.toLowerCase()]) {
              Object.assign(tempContext, {
                [majorAppEntity.codeName.toLowerCase()]: curData[parentPSAppDEFieldCodeName.toLowerCase()],
              });
            }
          }
        }
      }
    }
  }
}

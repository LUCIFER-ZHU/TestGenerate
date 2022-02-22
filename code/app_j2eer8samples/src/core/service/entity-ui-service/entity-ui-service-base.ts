import { IParam } from "@core";

/**
 * 界面服务基类
 *
 * @export
 * @class UIServiceBase
 */
export class UIServiceBase {

  /**
   * 应用上下文
   *
   * @protected
   * @type {IParam}
   * @memberof UIServiceBase
   */
  protected context: IParam;

  /**
   * 应用实体主键属性
   *
   * @protected
   * @type {string}
   * @memberof UIServiceBase
   */
  protected appDeKeyFieldName: string = '';

  /**
   * 是否启用主状态
   *
   * @protected
   * @type {boolean}
   * @memberof UIServiceBase
   */
  protected isEnableDEMainState: boolean = false;

  /**
   * 主状态属性集合
   *
   * @memberof  UIServiceBase
   */
  protected mainStateFields: Array<string> = [];

  /**
   * 主状态集合Map
   *
   * @memberof  UIServiceBase
   */
  protected allDeMainStateMap: Map<string, string> = new Map();

  /**
   * 主状态操作标识Map
   *
   * @memberof  UIServiceBase
   */
  protected allDeMainStateOPPrivsMap: Map<string, any> = new Map();

  /**
   *
   * @param {*} [opts={}]
   * @memberof UIServiceBase
   */
  constructor(context: IParam = {}) {
    this.context = context;
  }

  /**
   * 获取数据对象所有的操作标识
   *
   * @param data 当前数据
   * @param dataAccAction 数据操作标识
   * @memberof  UIServiceBase
   */
  protected getAllOPPrivs(data: any, dataAccAction: string) {
    if (!App.getEnvironmentParam().enablePermissionValid) {
      return 1;
    }
    if (data && (Object.keys(data).length > 0)) {
      const key: string = `${data[this.appDeKeyFieldName?.toLowerCase()]}`;
      const result = App.getAppAuthService().getOPEnableAuth(this.context, dataAccAction, key, this.getDEMainStateOPPrivs(data));
      return result[dataAccAction];
    } else {
      const result = App.getAppAuthService().getOPEnableAuth(this.context, dataAccAction);
      return result[dataAccAction];
    }
  }

  /**
   * 获取数据对象当前操作标识
   *
   * @param data 当前数据
   * @memberof  UIServiceBase
   */
  protected getDEMainStateOPPrivs(data: any) {
    const mainStateTag = this.getDEMainStateTag(data);
    if (mainStateTag) {
      return this.allDeMainStateOPPrivsMap.get(mainStateTag);
    } else {
      return null;
    }
  }

  /**
   * 获取数据对象的主状态标识
   *
   * @param data 当前数据
   * @memberof  UIServiceBase
   */
  protected getDEMainStateTag(data: IParam) {
    const mainStateFields: string[] = this.mainStateFields;
    if (mainStateFields.length === 0) return null;
    mainStateFields.forEach((singleMainField: any) => {
      if (!(singleMainField in data)) {
        console.warn(
          `当前数据对象不包含属性「${singleMainField}」，根据「${singleMainField}」属性进行的主状态计算默认为空值`,
        );
      }
    });
    for (let i = 0; i <= 1; i++) {
      let strTag: string =
        data[mainStateFields[0]] != null && data[mainStateFields[0]] !== ''
          ? i == 0
            ? `${data[mainStateFields[0]]}`
            : ''
          : '';
      if (mainStateFields.length >= 2) {
        for (let j = 0; j <= 1; j++) {
          let strTag2: string =
            data[mainStateFields[1]] != null && data[mainStateFields[1]] !== ''
              ? `${strTag}__${j == 0 ? `${data[mainStateFields[1]]}` : ''}`
              : strTag;
          if (mainStateFields.length >= 3) {
            for (let k = 0; k <= 1; k++) {
              let strTag3: string =
                data[mainStateFields[2]] != null && data[mainStateFields[2]] !== ''
                  ? `${strTag2}__${k == 0 ? `${data[mainStateFields[2]]}` : ''}`
                  : strTag2;
              // 判断是否存在
              return this.allDeMainStateMap.get(strTag3);
            }
          } else {
            return this.allDeMainStateMap.get(strTag2);
          }
        }
      } else {
        return this.allDeMainStateMap.get(strTag);
      }
    }
    return null;
  }

}

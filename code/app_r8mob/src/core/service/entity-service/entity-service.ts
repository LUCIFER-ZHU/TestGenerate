import { Http, IContext, IParam, RouteUtil } from '@core';
/**
 * 实体服务基类
 * @export
 * @class EntityService
 */
export class EntityService {

  /**
   * 应用上下文
   *
   * @protected
   * @type {*}
   * @memberof EntityService
   */
  protected context: any;

  /**
   *  实体关系路径集合
   *
   * @protected
   * @type {any[]}
   * @memberof EntityService
   */
  protected deResPaths: any[] = [];

  /**
   * 应用实体代码名
   *
   * @protected
   * @type {string}
   * @memberof EntityService
   */
  protected appEntityCodeName: string = '';

  /**
   * 应用实体代码名（复数形式）
   *
   * @protected
   * @type {string}
   * @memberof EntityService
   */
  protected appEntityCodeNames: string = '';

  /**
   * 应用实体主键属性代码名
   *
   * @protected
   * @type {string}
   * @memberof EntityService
   */
  protected appEntityKeyCodeName: string = '';

  /**
   * 应用实体主信息属性代码名
   *
   * @protected
   * @type {string}
   * @memberof EntityService
   */
  protected appEntityTextCodeName: string = '';

  /**
   * HTTP服务类
   *
   * @protected
   * @memberof EntityService
   */
  protected http = Http.getInstance();

  /**
   * Creates an instance of EntityService.
   * @param {IParam} [opts] 应用上下文
   * @param {string} [dbName] 本地存储表
   * @param {(0 | 1 | 3)} [storageMode] 存储模式
   * @memberof EntityService
   */
  constructor(opts: IParam = {}, dbName?: string, storageMode?: 0 | 1 | 3) {
    this.context = opts;
    this.initBasicData();
  }

  /**
   * 初始化基础数据
   *
   * @protected
   * @memberof EntityService
   */
  protected initBasicData() { }

  /**
   *  计算请求的实体关系路径
   *
   * @protected
   * @param {*} context 视图上下文
   * @param {boolean} isSelfAppend 是否拼接实体自身的主键值
   * @return {*} 
   * @memberof EntityService
   */
  protected buildDeResPath(context: IContext, isSelfAppend: boolean) {
    let deResPath = RouteUtil.buildDeResRequestPath(context, this.deResPaths);
    // 不需要自身的主键值的删除末尾/xxxx
    if (!isSelfAppend) {
      deResPath = deResPath.substring(0, deResPath.lastIndexOf("/"))
    }
    return deResPath;
  }

  /**
   * 执行行为之前
   *
   * @protected
   * @param {IContext} context 应用上下文
   * @param {IParam} data 视图参数
   * @param {string} method 方法名
   * @memberof EntityService
   */
  protected beforeExecuteAction(context: IContext, data: IParam, method: string) {
    if (!method) return;
    switch (method) {
      // 新建删除接口无效属性
      case 'Create':
        if (!data.srffrontuf || data.srffrontuf != 1) {
          data[this.appEntityCodeName] = null;
        }
        if (data.srffrontuf != null) {
          delete data.srffrontuf;
        }
        break;
      // 加载草稿删除接口无效属性
      case 'GetDraft':
        delete data[this.appEntityCodeName];
        if (this.appEntityKeyCodeName) {
          delete data[this.appEntityKeyCodeName];
        }
        break;
      default:
        break;
    }
  }

  /**
   * 执行行为之后
   *
   * @protected
   * @param {IContext} context 应用上下文
   * @param {IParam} data 视图参数
   * @param {string} method 方法名
   * @memberof EntityService
   */
  protected afterExecuteAction(context: IContext, data: IParam, method: string) {
    if (!method) return;

  }

}
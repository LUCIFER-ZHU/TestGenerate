import { Http, RouteUtil } from '@core';
/**
 * 实体服务基类
 * @export
 * @class EntityService
 */
export class EntityService{

  constructor(opts?: any) {
    
  }

  /**
   * 实体关系路径集合
   * @protected
   */
  protected deResPaths: any[] = []

  /**
   * HTTP服务类
   * @protected
   */
  protected http = Http.getInstance();

  /**
   * 计算请求的实体关系路径
   *
   * @protected
   * @param context 视图上下文
   * @param isSelfAppend 是否拼接实体自身的主键值。
   */
  protected buildDeResPath(context: any, isSelfAppend: boolean){
    let deResPath = RouteUtil.buildDeResRequestPath(context,this.deResPaths);
    // 不需要自身的主键值的删除末尾/xxxx
    if(!isSelfAppend){
      deResPath = deResPath.substring(0,deResPath.lastIndexOf("/"))
    }
    return deResPath;
  }

  // TODO 预置方法
  public GET(){}
  
}
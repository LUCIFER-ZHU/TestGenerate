import { ControlVOBase, EntityService } from "@ibiz-core";

export class ControlServiceBase<T extends ControlVOBase> {
  /**
   * 构造函数
   * @param controlVOType
   */
  constructor(private controlVOType: new (data: any)=> T,public entityService: EntityService){}

  /**
   * 新建部件界面数据对象
   * @param $DO 后台数据对象
   * @return {*} 
   */
  public newControlVO($DO: any){
    return new this.controlVOType($DO);
  }

  /**
   * 请求前处理函数
   *
   * @param [context={}]
   * @param [data={}]
   * @param [opts={}]
   */
  public handleRequestData(context: any, data: any, opts: any = {}) {
    return { context, data };
  }

  /**
   * 请求后处理函数
   *
   * @param [context={}]
   * @param [data={}]
   * @param [opts={}]
   */
  public handleResponse(response: any, opts: any = {}) {
    // TODO 转化代码表
    return response;
  }
}

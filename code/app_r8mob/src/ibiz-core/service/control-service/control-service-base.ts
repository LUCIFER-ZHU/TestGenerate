export class ControlServiceBase {
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

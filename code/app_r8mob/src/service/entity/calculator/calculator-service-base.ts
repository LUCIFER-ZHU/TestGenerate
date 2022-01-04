import { Http, EntityService } from '@ibiz-core';

/**
 * 计算器服务对象基类
 *
 * @export
 * @class Calculator
 * @extends {EntityBaseService}
 */
export class CalculatorServiceBase extends EntityService {
  
  constructor(opts?: any) {
      super(opts);
      // 初始化关系实体路径集合
      this.deResPaths = [
          [{"pathName":"calculators","parameterName":"calculator"}]
      ]
  }

  protected SYSTEMNAME = '';
  protected APPNAME = '';
  protected APPDENAME = 'Calculator';
  protected APPDENAMEPLURAL = "Calculator";



}
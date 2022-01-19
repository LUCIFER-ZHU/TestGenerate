import { IContext, IParam, EntityService } from '@core';

/**
 * 计算器服务对象基类
 *
 * @export
 * @class Calculator
 * @extends {EntityBaseService}
 */
export class CalculatorServiceBase extends EntityService {
  
  /**
  * Creates an instance of CalculatorServiceBase.
  *
  * @param {*} [opts={}]
  * @memberof CalculatorServiceBase
  */
  constructor(opts: IParam = {}) {
      super(opts,'Calculator');
  }

  /**
   * 初始化基础数据
   *
   * @protected
   * @memberof ChartDataServiceBase
   */
  protected initBasicData() {
    this.appEntityCodeName = 'calculator';
    this.appEntityCodeNames = 'calculators';
    this.appEntityKeyCodeName = 'calculatorid';
      this.appEntityTextCodeName = 'calculatorname';
    // 初始化关系实体路径集合
    this.deResPaths = [
        [{"pathName":"calculators","parameterName":"calculator"}]
    ]
  }

}
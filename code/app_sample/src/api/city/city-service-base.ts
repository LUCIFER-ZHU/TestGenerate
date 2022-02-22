import { IContext, IParam, EntityService } from '@core';

/**
 * 市服务对象基类
 *
 * @export
 * @class City
 * @extends {EntityBaseService}
 */
export class CityServiceBase extends EntityService {
  
  /**
  * Creates an instance of CityServiceBase.
  *
  * @param {*} [opts={}]
  * @memberof CityServiceBase
  */
  constructor(opts: IParam = {}) {
      super(opts,'City');
  }

  /**
   * 初始化基础数据
   *
   * @protected
   * @memberof ChartDataServiceBase
   */
  protected initBasicData() {
    this.appEntityCodeName = 'city';
    this.appEntityCodeNames = 'cities';
    this.appEntityKeyCodeName = 'cityid';
      this.appEntityTextCodeName = 'cityname';
    // 初始化关系实体路径集合
    this.deResPaths = [
        [{"pathName":"provinces","parameterName":"province"},{"pathName":"cities","parameterName":"city"}]
    ]
  }

}
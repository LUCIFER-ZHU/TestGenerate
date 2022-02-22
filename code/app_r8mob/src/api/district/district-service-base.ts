import { IContext, IParam, EntityService } from '@core';

/**
 * 区服务对象基类
 *
 * @export
 * @class District
 * @extends {EntityBaseService}
 */
export class DistrictServiceBase extends EntityService {
  
  /**
  * Creates an instance of DistrictServiceBase.
  *
  * @param {*} [opts={}]
  * @memberof DistrictServiceBase
  */
  constructor(opts: IParam = {}) {
      super(opts,'District');
  }

  /**
   * 初始化基础数据
   *
   * @protected
   * @memberof ChartDataServiceBase
   */
  protected initBasicData() {
    this.appEntityCodeName = 'district';
    this.appEntityCodeNames = 'districts';
    this.appEntityKeyCodeName = 'districtid';
      this.appEntityTextCodeName = 'districtname';
    // 初始化关系实体路径集合
    this.deResPaths = [
        [{"pathName":"cities","parameterName":"city"},{"pathName":"districts","parameterName":"district"}]
    ]
  }

}
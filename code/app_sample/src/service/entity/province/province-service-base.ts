import { Http, EntityService } from '@ibiz-core';

/**
 * 省份服务对象基类
 *
 * @export
 * @class Province
 * @extends {EntityBaseService}
 */
export class ProvinceServiceBase extends EntityService {
  
  constructor(opts?: any) {
      super(opts);
      // 初始化关系实体路径集合
      this.deResPaths = [
          [{"pathName":"provinces","parameterName":"province"}]
      ]
  }

  protected SYSTEMNAME = '';
  protected APPNAME = '';
  protected APPDENAME = 'Province';
  protected APPDENAMEPLURAL = "Province";



}
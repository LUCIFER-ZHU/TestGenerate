import { Http, EntityService } from '@ibiz-core';

/**
 * 请假申请服务对象基类
 *
 * @export
 * @class LeaveApplication
 * @extends {EntityBaseService}
 */
export class LeaveApplicationServiceBase extends EntityService {
  
  constructor(opts?: any) {
      super(opts);
      // 初始化关系实体路径集合
      this.deResPaths = [
          [{"pathName":"leaveapplications","parameterName":"leaveapplication"}]
      ]
  }

  protected SYSTEMNAME = '';
  protected APPNAME = '';
  protected APPDENAME = 'LeaveApplication';
  protected APPDENAMEPLURAL = "LeaveApplication";



}
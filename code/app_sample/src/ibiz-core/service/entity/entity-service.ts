import { Http } from '@ibiz-core';
/**
 * 实体服务基类
 * @export
 * @class EntityService
 */
export class EntityService{

  [key: string]: any;

  constructor(opts?: any) {
    
  }

  protected http = Http.getInstance();

  // TODO
  public GET(){}
  
}
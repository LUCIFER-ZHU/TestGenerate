import { INavDataParam, IParam, ViewDetail } from "@core";
import { Subject } from 'rxjs';
/**
 * @description 打开视图服务接口
 * @export
 * @interface INavDataService
 */
export interface INavDataService {

  
  addNavData(curNavData: INavDataParam): void;

  getNavData(): Array<INavDataParam>;

  getPreNavData(tag: string): INavDataParam | null;

  skipNavData(tag: string): void;

  removeNavData(tag: string): void;

  removeNavDataFirst(): void;

  removeNavDataLast(): void;

  removeAllNavData(): void;
}
import { ExpViewState } from '@core';

/**
 * @description 树导航视图状态
 * @export
 * @interface TabExpViewState
 * @extends {ExpViewState}
 */
export interface TabExpViewState extends ExpViewState {
  /**
   * 默认打开的分页name
   */
  defaultActivePanel?: string;
}

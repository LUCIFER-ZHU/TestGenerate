export interface ControlAction {
  /**
   * 加载行为（单数据）
   */
  loadAction?: string;

  /**
   * 获取行为（多数据）
   */
  fetchAction?: string;

  /**
   * 加载草稿行为
   */
  loadDraftAction?: string;

  /**
   * 新建行为
   */
  createAction?: string;

  /**
   * 删除行为
   */
  removeAction?: string;

  /**
   * 更新行为
   */
  updateAction?: string;
}

import { IParam, MainControlProps } from "@core";

/**
 * @description 搜索栏部件的props
 * @export
 * @interface TabExpPanelControlProps
 * @extends {MainControlProps}
 */
export interface TabExpPanelControlProps extends MainControlProps {
  /**
   * 分页栏显示位置
   * 目前支持上，下，左，右
   */
  tabPosition: "left" | "right" | "top" | "bottom";

  /**
   * 默认打开的分页name
   */
  defaultActivePanel?: string;
}
import { IContext, IParam, ViewDetail } from "@core";

export class ViewUtil {

  /**
   * 打开编辑数据视图
   *
   * @param {any[]} args 数据参数
   * @param {*} actionEnvironment 视图容器对象
   * @param {*} fullargs 全量数据
   * @param {*} params 额外参数
   * @param {*} $event 事件源对象
   * @param {*} actionEnvironment 数据部件
   */
  public static async newData(view: ViewDetail, params: { context: IContext, viewParams: IParam, data: IParam, event: MouseEvent, actionEnvironment: IParam }) {
    const { context, viewParams, data, event, actionEnvironment } = params
    if (view) {
      const _data: any = {};
      // if (data[0].srfsourcekey) {
      //   data.srfsourcekey = args[0].srfsourcekey;
      // }
      // if (fullargs && (fullargs as any).copymode) {
      //   Object.assign(data, { copymode: (fullargs as any).copymode });
      // }

      // 删除上下文引用视图主键 todo
      // if (
      //   view.getPSAppDataEntity() &&
      //   tempContext[(view.getPSAppDataEntity() as IPSAppDataEntity)?.codeName.toLowerCase()]
      // ) {
      //   delete tempContext[(view.getPSAppDataEntity() as IPSAppDataEntity)?.codeName.toLowerCase()];
      // }
      // if (args.length > 0) {
      //   Object.assign(tempContext, args[0]);
      // }
      // 导航参数 todo
      // if (
      //   newviewRef.getPSNavigateContexts() &&
      //   (newviewRef.getPSNavigateContexts() as IPSNavigateContext[]).length > 0
      // ) {
      //   const localContext = Util.formatNavParam(newviewRef.getPSNavigateContexts());
      //   const _context: any = Util.computedNavData(
      //     fullargs[0],
      //     actionEnvironment.context,
      //     actionEnvironment.viewParam,
      //     localContext,
      //   );
      //   Object.assign(tempContext, _context);
      // }
      // if (newviewRef.getPSNavigateParams() && (newviewRef.getPSNavigateParams() as IPSNavigateParam[]).length > 0) {
      //   const localViewParam = Util.formatNavParam(newviewRef.getPSNavigateParams());
      //   const _param: any = Util.computedNavData(
      //     fullargs[0],
      //     actionEnvironment.context,
      //     actionEnvironment.viewParam,
      //     localViewParam,
      //   );
      //   Object.assign(data, _param);
      // }
      // 关闭视图回调
      const callback: Function = (result: any, actionEnvironment: any) => {
        if (!result || !Object.is(result.ret, 'OK')) {
          return;
        }
        if (!actionEnvironment || !(actionEnvironment.refresh instanceof Function)) {
          return;
        }
        actionEnvironment.refresh(result.datas);
      };
      const subject = App.getOpenViewService().openView(view, {
        context: context,
        viewParams: viewParams
      })
      subject?.subscribe((result: any) => {
        if (!result || !Object.is(result.ret, 'OK')) {
          return;
        }
        callback(result, actionEnvironment);
      })
    }
  }


  /**
   * 打开编辑视图逻辑
   * 打开的视图正常关闭后会刷新当前视图
   *
   * @static
   * @param {ViewDetail} view
   * @memberof ViewUtil
   */
  public static async openData(view: ViewDetail, params: { context: IContext, viewParams: IParam, data: IParam, event: MouseEvent | undefined, actionEnvironment: IParam }) {
    const { context, viewParams, data, event, actionEnvironment } = params
    if (view) {
      // const _data: any = {};
      const callback: Function = (result: any, actionEnvironment: any) => {
        if (!result || !Object.is(result.ret, 'OK')) {
          return;
        }
        if (!actionEnvironment || !(actionEnvironment.refresh instanceof Function)) {
          return;
        }
        actionEnvironment.refresh(result.datas);
      };
      const subject = App.getOpenViewService().openView(view, {
        context: context,
        viewParams: viewParams
      });
      subject?.subscribe((result: any) => {
        if (!result || !Object.is(result.ret, 'OK')) {
          return;
        }
        callback(result, actionEnvironment);
      })
    }
  }

}

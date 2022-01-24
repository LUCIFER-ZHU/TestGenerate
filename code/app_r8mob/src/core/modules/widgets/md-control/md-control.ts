import { MDControlState, MainControl, deepCopy, IActionParam, IParam, UIBase } from '@core';

/**
 * @description 多数据部件
 * @export
 * @class MDControl
 * @extends {MainControl}
 */
export class MDControl extends MainControl {
  /**
   * @description 多数据部件状态
   * @type {MDControlState}
   * @memberof MDControl
   */
  public declare state: MDControlState;

  /**
   * @description
   * @memberof MDControl
   */
  public setState() {
    super.setState();
    // 交联输入Props
    this.state.isMultiple = toRef(this.props, 'isMultiple') as any;
    this.state.rowEditState = toRef(this.props, 'rowEditState') as any;
    this.state.rowActiveMode = toRef(this.props, 'rowActiveMode') as any;
    this.state.selectedData = UIBase.toOneWayRef(this.props, 'selectedData') as any;
    this.state.selectFirstDefault = toRef(this.props, 'selectFirstDefault') as any;
  }

  /**
   * 加载行为
   *
   * @protected
   * @param [opt={}]
   */
  protected async load(opt: any = {}) {}

  /**
   * @description 使用加载功能模块
   * @return {*}
   * @memberof MDControl
   */
  public useLoad() {
    const { viewSubject, controlName } = this.state;

    const load = async (opt: any = {}) => {
      try {
        let { controlService, context, viewParams, showBusyIndicator, controlAction, mdCtrlSort, mdCtrlPaging } =
          this.state;
        if (!controlAction.fetchAction) {
          return;
        }

        // 组装查询参数
        const arg: any = { ...opt };
        let tempContext = deepCopy(context ? context : {});
        let tempViewParams = deepCopy(viewParams ? viewParams : {});
        const { noSort, minorSortDir, minorSortPSDEF } = mdCtrlSort;
        let { enablePagingBar, current, pageSize } = mdCtrlPaging;
        if (!noSort && minorSortDir && minorSortPSDEF) {
          Object.assign(tempViewParams, { sort: `${minorSortPSDEF},${minorSortDir}` });
        }
        if (enablePagingBar) {
          Object.assign(tempViewParams, { page: current - 1, size: pageSize });
        }
        Object.assign(arg, tempViewParams);

        // 组装视图其他查询参数
        this.emit('ctrlEvent', { tag: this.props.name, action: 'beforeload', data: arg });
        const response = await controlService.search(tempContext, arg, {
          action: controlAction.fetchAction,
          isLoading: showBusyIndicator,
        });
        if (response.status || response.status == 200) {
          this.state.items = response.data;
          this.emit('ctrlEvent', { tag: this.props.name, action: 'load', data: response.data });
          if (enablePagingBar) {
            this.state.mdCtrlPaging.pagination['total'] = response.total;
          }
          this.handleStateChange();
        }
      } catch (error) {
        // todo 错误异常处理
        console.log(error);
      }
    };

    // 在类里绑定能力方法
    this.load = load;

    // 订阅viewSubject,监听load行为
    if (viewSubject) {
      let subscription = viewSubject.subscribe(({ tag, action, data }: IActionParam) => {
        if (Object.is(controlName, tag) && Object.is('load', action)) {
          load(data);
        }
      });

      // 部件卸载时退订viewSubject
      onUnmounted(() => {
        subscription.unsubscribe();
      });
    }
    return load;
  }

  /**
   * 保存行为
   *
   * @protected
   * @param [opt={}]
   */
  protected async save(opt: any = {}) {}

  /**
   * @description 使用保存功能模块
   * @return {*}
   * @memberof MDControl
   */
  public useSave() {
    const { viewSubject, controlName } = this.state;
    const save = async (opt: any = {}) => {
      try {
        const { controlService, context, viewParams, showBusyIndicator, items, controlAction } = this.state;
        // TODO 值规则校验处理
        for (const item of items) {
          const { updateAction, createAction } = controlAction;
          const saveAction: any =
            item.rowDataState == 'update' ? updateAction : item.rowDataState == 'create' ? createAction : '';
          const saveFunName = item.rowDataState == 'update' ? 'update' : 'create'; 
          if (!saveAction) {
            return;
          }
          const arg: any = { ...opt };
          let _context = deepCopy(context);
          let _viewParams = deepCopy(viewParams);
          Object.assign(arg, item.getDo());
          Object.assign(arg, { viewParams: _viewParams });
          const response = await controlService[saveFunName](_context, arg, {
            action: saveAction,
            isLoading: showBusyIndicator,
          });
          if (response.status || response.status == 200) {
          }
        }
      } catch (error) {
        // TODO 错误异常处理
        console.log(error);
      }
    };

    // 在类里绑定能力方法
    this.save = save;

    // 订阅viewSubject,监听load行为
    if (viewSubject) {
      let subscription = viewSubject.subscribe(({ tag, action, data }: IActionParam) => {
        if (Object.is(controlName, tag) && Object.is('save', action)) {
          save(data);
        }
      });

      // 部件卸载时退订viewSubject
      onUnmounted(() => {
        subscription.unsubscribe();
      });
    }
    return save;
  }

  /**
   * 删除行为
   *
   * @protected
   * @param [opt={}]
   */
  protected async remove(opt: any = {}) {}

  /**
   * @description 使用删除功能模块
   * @return {*}
   * @memberof MDControl
   */
  public useRemove() {
    const { viewSubject, controlName } = this.state;
    const remove = async (opt: IParam[] = []) => {
      try {
        const { controlService, context, viewParams, showBusyIndicator, controlAction, appDeCodeName } = this.state;
        const { items } = toRefs(this.state);
        if (!controlAction.removeAction) {
          return;
        }
        const _data: IParam[] = [];
        opt.forEach((item: IParam, index: number) => {
          if (Object.is(item.srfuf, '0')) {
            items.value.some((val: any, num: number) => {
              if (JSON.stringify(val) == JSON.stringify(item)) {
                items.value.splice(num, 1);
                return true;
              }
            });
          } else {
            _data.push(opt[index]);
          }
        });
        if (_data.length > 0) {
          const keys: string[] = [];
          _data.forEach((item: IParam) => {
            keys.push(item.srfkey);
          });
          const _removeAction = keys.length > 1 ? 'removeBatch' : controlAction.removeAction;
          let _context = deepCopy(context);
          Object.assign(_context, { [appDeCodeName]: keys });
          let _viewParams = deepCopy(viewParams);
          const arg: IParam = {
            [appDeCodeName]: keys,
          };
          Object.assign(arg, { viewParams: _viewParams });
          const response = await controlService.remove(_context, arg, {
            action: _removeAction,
            isLoading: showBusyIndicator,
          });
          if (response.status || response.status == 200) {
          }
        }
      } catch (error) {
        // TODO 错误异常处理
        console.log(error);
      }
    };

    // 在类里绑定能力方法
    this.remove = remove;

    // 订阅viewSubject,监听load行为
    if (viewSubject) {
      let subscription = viewSubject.subscribe(({ tag, action, data }: IActionParam) => {
        if (Object.is(controlName, tag) && Object.is('remove', action)) {
          remove(data);
        }
      });

      // 部件卸载时退订viewSubject
      onUnmounted(() => {
        subscription.unsubscribe();
      });
    }
    return remove;
  }

  /**
   * 新建行行为（新增一条数据）
   *
   * @protected
   * @param [opt={}]
   */
  protected async newRow(opt: any = {}) {}

  /**
   * @description 使用新建功能模块
   * @return {*}
   * @memberof MDControl
   */
  public useNewRow() {
    const { viewSubject, controlName } = this.state;
    const newRow = async (opt: any = {}) => {
      try {
        const { controlService, context, viewParams, showBusyIndicator, controlAction } = this.state;
        const { items } = toRefs(this.state);
        if (!controlAction.loadDraftAction) {
          return;
        }
        let _context = deepCopy(context);
        let _viewParams = deepCopy(viewParams);
        const arg: any = { ...opt };
        Object.assign(arg, { viewParams: _viewParams });
        const response = await controlService.loadDraft(_context, arg, {
          action: controlAction.loadDraftAction,
          isLoading: showBusyIndicator,
        });
        if (response.status || response.status == 200) {
          items.value = [...items.value, [response.data]];
        }
      } catch (error) {
        // TODO 错误异常处理
        console.log(error);
      }
    };

    // 在类里绑定能力方法
    this.newRow = newRow;

    // 订阅viewSubject,监听load行为
    if (viewSubject) {
      let subscription = viewSubject.subscribe(({ tag, action, data }: IActionParam) => {
        if (Object.is(controlName, tag) && Object.is('newRow', action)) {
          newRow(data);
        }
      });
      // 部件卸载时退订viewSubject
      onUnmounted(() => {
        subscription.unsubscribe();
      });
    }

    return newRow;
  }

  /**
   * 刷新行为
   *
   * @protected
   * @param [opt={}]
   */
  protected async refresh(opt: any = {}) {}

  /**
   * @description 使用刷新功能模块
   * @return {*}
   * @memberof MDControl
   */
  public useRefresh() {
    const { viewSubject, controlName } = this.state;

    /**
     * 刷新行为
     *
     * @param [opt={}]
     * @return {*}
     */
    const refresh = async (opt: any = {}) => {
      this.load(opt);
    };

    // 在类里绑定能力方法
    this.refresh = refresh;

    // 订阅viewSubject,监听load行为
    if (viewSubject) {
      let subscription = viewSubject.subscribe(({ tag, action, data }: IActionParam) => {
        if (Object.is(controlName, tag) && Object.is('refresh', action)) {
          refresh(data);
        }
      });

      // 部件卸载时退订viewSubject
      onUnmounted(() => {
        subscription.unsubscribe();
      });
    }

    return refresh;
  }

  /**
   * 处理数据状态变化(逻辑数据+UI)
   *
   * @memberof MDControl
   */
  public handleStateChange() {}

  /**
   * 处理数据分组
   *
   * @memberof MDControl
   */
  public handleDataGroup() {
    const { enableGroup, groupField, groupMode } = this.state.mdCtrlGroup;
    if (enableGroup && groupField && !Object.is(groupMode, 'NONE')) {
      if (Object.is(groupMode, 'AUTO')) {
        this.autoGroupData();
      } else if (Object.is(groupMode, 'CODELIST')) {
        this.codeListGroupData();
      }
    }
  }

  /**
   * 自动分组
   *
   * @protected
   * @memberof MDControl
   */
  protected autoGroupData() {}

  /**
   * 代码表分组
   *
   * @protected
   * @memberof MDControl
   */
  protected codeListGroupData() {}

  /**
   * 获取当前激活数据
   *
   * @memberof MDControl
   */
  public getData(): IParam[] {
    return this.state.selectedData;
  }

  /**
   * @description 安装部件所有功能模块的方法
   * @return {*}
   * @memberof MDControl
   */
  public moduleInstall() {
    const superParams = super.moduleInstall();
    return {
      ...superParams,
      load: this.useLoad(),
      save: this.useSave(),
      remove: this.useRemove(),
      newRow: this.useNewRow(),
      refresh: this.useRefresh(),
    };
  }
}

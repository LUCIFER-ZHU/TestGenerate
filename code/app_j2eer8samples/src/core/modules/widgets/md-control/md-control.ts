import { MDControlState, MainControl, deepCopy, IActionParam, IParam, UIBase, isExistAndNotEmpty, UIUtil, ExportExcel, translateCodeList2Text } from '@core';
import { Modal } from 'ant-design-vue';

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
    if (this.props['selectedData']) {
      this.state.selectedData = UIBase.toOneWayRef(this.props, 'selectedData') as any;
    } else {
      if (!this.state.selectedData) {
        this.state.selectedData = ref([]) as any;
      }
    }
    this.state.selectFirstDefault = toRef(this.props, 'selectFirstDefault') as any;
  }

  /**
   * 加载行为
   *
   * @protected
   * @param [opt={}]
   */
  protected async load(opt: any = {}) { }

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
        if (!noSort) {
          if (arg && arg.sort) {
            Object.assign(tempViewParams, { sort: arg.sort });
          } else if (minorSortDir && minorSortPSDEF) {
            Object.assign(tempViewParams, { sort: `${minorSortPSDEF},${minorSortDir}` });
          }
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
      } catch (error: any) {
        App.getNotificationService().error({
          message: '加载数据失败',
          description: error?.data
        })
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
  protected async save(opt: any = {}) { }

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
        this.setUpdateDefault();
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
  protected async remove(opt: any = {}) { }

  /**
   * @description 使用删除功能模块
   * @return {*}
   * @memberof MDControl
   */
  public useRemove() {
    const { viewSubject, controlName } = this.state;
    const remove = async (opt: IParam[] = []) => {
      try {
        const { controlService, context, viewParams, showBusyIndicator, controlAction, appDeCodeName, appDeMajorFieldName } = this.state;
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
          //  删除确认信息
          let confirmInfo: string = '';
          _data.forEach((item: IParam, index: number) => {
            keys.push(item.srfkey);
            const text = item[appDeMajorFieldName.toLowerCase()] || item.srfmajortext;
            if (index < 5) {
              if (index !== 0 && isExistAndNotEmpty(text)) {
                confirmInfo += '、';
              }
              confirmInfo += text;
            }
          });
          confirmInfo += ` ${_data.length < 5 ? ' ' : ' ... '}共 ${_data.length} 条数据`;
          //  移除空白主键信息
          confirmInfo = confirmInfo.replace(/[null]/g, '').replace(/[undefined]/g, '');
          const removeData = async () => {
            const _removeAction = keys.length > 1 ? 'removeBatch' : controlAction.removeAction;
            let _context = deepCopy(context);
            Object.assign(_context, { [appDeCodeName.toLowerCase()]: keys });
            let _viewParams = deepCopy(viewParams);
            const arg: IParam = {
              [appDeCodeName.toLowerCase()]: keys,
            };
            Object.assign(arg, { viewParams: _viewParams });
            const response = await controlService.remove(_context, arg, {
              action: _removeAction,
              isLoading: showBusyIndicator,
            });
            if (response.status || response.status == 200) {
            }
          }
          //  弹出提示模态
          Modal.confirm({
            title: '删除警告',
            content: `确认删除 ${confirmInfo} 吗？删除操作将不可恢复`,
            okText: '确认',
            cancelText: '取消',
            onOk: () => {
              removeData();
            },
            onCancel: () => { }
          });
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
  protected async newRow(opt: any = {}) { }

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
        this.setCreateDefault(response.data);
        if (response.status || response.status == 200) {
          items.value.push(response.data);
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
  protected async refresh(opt: any = {}) { }

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
   * @description 导出
   * @protected
   * @param {*} [opt={}]
   * @memberof MDControl
   */
  protected async exportExcel(opt: any = {}) { }

  /**
   * @description 获取导出项
   * @protected
   * @return {*}  {IParam[]}
   * @memberof MDControl
   */
  protected getExportItems(): IParam[] {
    return this.state.exportItems || [];
  }

  private getExportHeader(exportItems: IParam[]): string[] {
    const headers: string[] = [];
    exportItems.forEach((item: IParam) => {
      headers.push(item.label);
    });
    return headers;
  }

  /**
   * @description 翻译导出数据
   * @private
   * @param {IParam[]} datas
   * @param {IParam[]} exportItems
   * @return {*} 
   * @memberof MDControl
   */
  private async formatExcelData(datas: IParam[], exportItems: IParam[]) {
    const { context, viewParams } = this.state;
    const codeListService = App.getCodeListService();
    const codeListColumn: Map<string, IParam[]> = new Map();
    //  获取代码表
    for (const item of exportItems) {
      if (item.codeListTag && !codeListColumn.has(`${item.field},${item.codeListTag}`)) {
        const codeListItems = await codeListService.getCodeListItems({
          tag: item.codeListTag,
          context: context,
          viewParams: viewParams
        });
        codeListColumn.set(`${item.field},${item.codeListTag}`, codeListItems);
      }
    }
    const items: IParam[] = [];
    if (codeListColumn.size > 0) {
      datas.forEach((data: IParam) => {
        const temp = deepCopy(data.$DO);
        codeListColumn.forEach((codeListItems: IParam[], key: string) => {
          const values = key.split(',');
          if (values.length === 2) {
            Object.assign(temp, { [values[0]]: translateCodeList2Text(values[1], temp[values[0]], codeListItems) });
          }
        });
        items.push(temp);
      })
    }
    return items.map((item: IParam) => exportItems.map((j: IParam) => item[j.field]));
  }

  /**
   * @description 执行导出
   * @private
   * @param {IParam[]} [_data=[]]
   * @memberof MDControl
   */
  private async doExport(_data: IParam[] = []) {
    const { appDeLogicName } = this.state;
    const exportItems = this.getExportItems();
    if (exportItems && exportItems.length > 0) {
      const tHeader: string[] = this.getExportHeader(exportItems);
      const data = await this.formatExcelData(_data, exportItems);
      const excel = await ExportExcel.getInstance().exportExcel();
      excel.export_json_to_excel({
        header: tHeader,
        data,
        filename: `${appDeLogicName}表`,
        authWidth: true,
        bookType: "xlsx"
      });
    }
  }

  /**
   * @description 使用导出功能模块
   * @return {*} 
   * @memberof MDControl
   */
  public useExportExcel() {
    const exportExcel = async (opt: IParam = {}) => {
      const {
        items,
        mdCtrlPaging,
        mdCtrlSort,
        controlService,
        context,
        viewParams,
        controlAction,
        showBusyIndicator
      } = this.state;
      let tempViewParams = deepCopy(viewParams ? viewParams : {});
      //  最大行
      if (Object.is(opt.type, 'maxRowCount')) {
        Object.assign(tempViewParams, { page: 0, size: opt.maxRowCount ? opt.maxRowCount : 1000 });
      // } else if (Object.is(opt.type, 'activatedPage')) {
      } else {
        //  当前激活页
        const { current, pageSize } = mdCtrlPaging;
        Object.assign(tempViewParams, { page: current - 1, size: pageSize });
        this.doExport(items);
        return;
      }
      //  远程获取
      const { noSort, minorSortDir, minorSortPSDEF } = mdCtrlSort;
      if (!noSort && minorSortDir && minorSortPSDEF) {
        Object.assign(tempViewParams, { sort: `${minorSortPSDEF},${minorSortDir}` });
      }
      const arg: any = {};
      Object.assign(arg, tempViewParams);
      this.emit('ctrlEvent', { tag: this.props.name, action: 'beforeload', data: arg });
      let tempContext = deepCopy(context ? context : {});
      try {
        const response = await controlService.search(tempContext, arg, {
            action: controlAction.fetchAction,
            isLoading: showBusyIndicator
        });
        if (!response || response.status !== 200) {
          App.getNotificationService().warning({
            message: '导出获取数据集失败',
            description: response.message
          });
        }
        this.doExport(response.data);
      } catch (error: any) {
        App.getNotificationService().error({
          message: '导出数据失败',
          description: error?.data
        });
      }
    }
    this.exportExcel = exportExcel;
    return exportExcel;
  }

  /**
   * 处理数据状态变化(逻辑数据+UI)
   *
   * @memberof MDControl
   */
  public handleStateChange() { }

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
  protected autoGroupData() { }

  /**
   * 代码表分组
   *
   * @protected
   * @memberof MDControl
   */
  protected codeListGroupData() { }

  /**
   * 新建默认值
   *
   * @protected
   * @param {IParam} [row={}]
   * @memberof MDControl
   */
  protected setCreateDefault(row: IParam = {}): void { }

  /**
   * 更新默认值
   *
   * @protected
   * @memberof MDControl
   */
  protected setUpdateDefault(): void { }

  /**
   * 获取指定数据的操作权限
   *
   * @param {IParam} data 指定数据
   * @memberof MDControl
   */
  public getActionAuthState(data: IParam, tempActionModel: IParam) {
    const { UIService } = toRefs(this.state);
    UIUtil.calcActionItemAuthState(data, tempActionModel, UIService);
    return tempActionModel;
  }

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
      exportExcel: this.useExportExcel()
    };
  }
}

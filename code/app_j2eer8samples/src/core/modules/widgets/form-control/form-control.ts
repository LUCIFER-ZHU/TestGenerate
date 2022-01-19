import {
  DataTypes,
  dateFormat,
  deepCopy,
  FormControlProps,
  FormControlState,
  IActionParam,
  IParam,
  MainControl,
  UIUtil,
  verifyValue,
} from '@core';

/**
 * @description 表单部件
 * @export
 * @class FormControl
 * @extends {MainControl}
 * @todo 部件加载loading，能否不写在行为方法里。
 */
export class FormControl extends MainControl {
  /**
   * @description 部件状态
   * @type {FormControlState}
   * @memberof FormControl
   */
  public declare state: FormControlState;

  /**
   * @description 检验表单动态逻辑
   * @param {IParam} data 表单数据
   * @param {IParam} logic 动态逻辑
   * @return {*}
   * @memberof FormControl
   */
  public verifyGroupLogic(data: IParam, logic: IParam) {
    if (logic.logicType == 'GROUP' && logic.logics?.length > 0) {
      let result: boolean = true;
      if (logic.groupOP == 'AND') {
        const falseItem = logic.logics.find((childLogic: IParam) => {
          return !this.verifyGroupLogic(data, childLogic);
        });
        result = falseItem ? false : true;
      } else if (logic.groupOP == 'OR') {
        const trueItem = logic.logics.find((childLogic: IParam) => {
          return this.verifyGroupLogic(data, childLogic);
        });
        result = trueItem ? true : false;
      }
      // 是否取反
      return logic.notMode ? !result : result;
    } else if (logic.logicType == 'SINGLE') {
      return verifyValue(data[logic.dEFDName], logic.condOP, logic.value);
    }
    return false;
  }

  /**
   * @description 在表单数据改变（单一属性变化）时被调用。会依次执行以下逻辑：
   * 1. 重置项逻辑
   * 2. 表单项更新
   * 3. 动态控制逻辑
   * 4. 自动保存逻辑
   * @param {string} name 表单项名称
   * @param {*} value 表单项值
   * @memberof FormControl
   */
  public handleFormDataChange(name: string, value: any) {
    const { enableAutoSave } = this.state;
    const { data } = toRefs(this.state);
    data.value[name] = value;
    this.resetFormData(name);
    this.formItemUpdate(name);
    this.formDynamicLogic(name);
    if (enableAutoSave) {
      this.save();
    }
  }

  /**
   * @description 表单项重置
   * @param {string} name
   * @memberof FormControl
   */
  public resetFormData(name: string) {
    const { detailsModel } = this.state;
    Object.values(detailsModel).forEach((item: IParam) => {
      if (item.resetItemName && Object.is(name, item.resetItemName)) {
        this.handleFormDataChange(item.name, null);
        if (item.valueItemName) {
          this.handleFormDataChange(item.valueItemName, null);
        }
      }
    });
  }

  /**
   * @description 表单项更新
   * @param {string} name 表单项名称
   * @memberof FormControl
   */
  public async formItemUpdate(name: string) {
    const { detailsModel, context, viewParams, controlService } = this.state;
    const { data } = toRefs(this.state);
    if (detailsModel[name] && detailsModel[name].formItemUpdate) {
      const formItemUpdate = detailsModel[name].formItemUpdate;
      if (formItemUpdate.customCode) {
        if (formItemUpdate.scriptCode) {
          eval(formItemUpdate.scriptCode);
        }
      } else {
        const arg = Object.assign(deepCopy(viewParams), data.value);
        const tempContext = deepCopy(context);
        const response = await controlService.frontLogic(
          tempContext,
          { viewParams: arg },
          { action: formItemUpdate.appDEMethod, isLoading: formItemUpdate.showBusyIndicator },
        );
        if (response.status && response.status == 200) {
          formItemUpdate.updateDetails?.forEach((detailsName: string) => {
            if (data.value.hasOwnProperty(detailsName)) {
              data.value[detailsName] = response.data[detailsName];
            }
          });
          this.afterFormAction('formItemUpdate');
        }
      }
    }
  }

  /**
   * @description 表单动态逻辑
   * @param {string} name 表单项名称
   * @memberof FormControl
   */
  public formDynamicLogic(name: string) {
    const { data } = this.state;
    const { detailsModel } = toRefs(this.state);
    Object.values(detailsModel.value).forEach((item: IParam) => {
      if (item.groupLogics?.length > 0) {
        item.groupLogics.forEach((logic: IParam) => {
          let relatedNames = logic.relatedDetailNames || [];
          if (Object.is(name, '') || relatedNames.indexOf(name) != -1) {
            let ret = this.verifyGroupLogic(data, logic);
            switch (logic.logicCat) {
              // 动态空输入，不满足则必填
              case 'ITEMBLANK':
                item.required = !ret;
                break;
              // 动态启用，满足则启用
              case 'ITEMENABLE':
                item.disabled = !ret;
                break;
              // 动态显示，满足则显示
              case 'PANELVISIBLE':
                item.visible = ret;
                break;
            }
          }
        });
      }
    });
  }

  /**
   * @description 表单执行某些整体数据发生变化行为之后，依次执行以下逻辑
   * 1.根据行为类型将主键合并到context中
   * 2.设置新建默认值和更新默认值
   * 4.计算行为权限状态
   * 5.设置表单项启用
   * 6.表单动态逻辑
   * @param {string} action
   * @memberof FormControl
   */
  public afterFormAction(action: string) {
    const { appDeCodeName, data } = this.state;
    const { context } = toRefs(this.state);
    if (appDeCodeName) {
      if (Object.is(action, 'save') || Object.is(action, 'autoSave') || Object.is(action, 'submit')) {
        if (data[appDeCodeName]) {
          Object.assign(context.value, { [appDeCodeName]: data[appDeCodeName] });
        }
      }
    }
    this.setDefaultValue(action);
    this.calcActionAuthState();
    this.setFormEnableCond();
    this.formDynamicLogic('');
  }

  /**
   * @description 设置表单启用项
   * @memberof FormControl
   */
  public setFormEnableCond() {
    const { data } = this.state;
    const { detailsModel } = toRefs(this.state);
    Object.values(detailsModel.value).forEach((item: IParam) => {
      if (Object.is(item.detailType, 'FORMITEM')) {
        switch (item.enableCond) {
          case 0:
            // 不启用
            item.disabled = false;
            break;
          case 1:
            // 新建
            item.disabled = data.srfuf != 0;
            break;
          case 2:
            // 更新
            item.disabled = data.srfuf != 1;
            break;
          case 3:
            // 启用
            item.disabled = true;
            break;
          default:
            break;
        }
      }
    });
  }

  /**
   * @description 计算行为权限状态
   * @memberof FormControl
   */
  public calcActionAuthState() {
    const { data, UIService, actionModel } = this.state;
    const { detailsModel } = toRefs(this.state);
    const tempModel = deepCopy(actionModel);
    UIUtil.calcActionItemAuthState(data, tempModel, UIService);
    Object.values(detailsModel.value).forEach((item: IParam) => {
      if (Object.is(item.detailType, 'BUTTON') && item.uIActionTag) {
        // 更新按钮的权限状态值
        item.visible = tempModel[item.uIActionTag].visible;
        item.disabled = tempModel[item.uIActionTag].disabled;
        item.isPower = tempModel[item.uIActionTag].dataActionResult === 1 ? true : false;
      } else if (Object.is(item.detailType, 'GROUPPANEL') && item.uIActionGroup?.details?.length > 0) {
        // 更新分组面板界面行为组的权限状态值
        item.uiActionGroup.details.forEach((actionDetail: any) => {
          actionDetail.visible = tempModel[actionDetail.uIActionTag].visible;
          actionDetail.disabled = tempModel[actionDetail.uIActionTag].disabled;
        });
      }
    });
  }

  /**
   * @description 设置默认值
   * @param {string} action 表单行为
   * @memberof FormControl
   */
  public setDefaultValue(action: string) {
    switch (action) {
      case 'loadDraft':
        this.setCreateDefault();
        break;
      case 'load':
        this.setUpdateDefault();
        break;
    }
  }

  /**
   * @description 设置新建默认值
   * @memberof FormControl
   */
  public setCreateDefault() {
    const { detailsModel, context, viewParams, controlService } = this.state;
    const { data } = toRefs(this.state);
    Object.values(detailsModel).forEach((detail: IParam) => {
      if (Object.is(detail.detailType, 'FORMITEM')) {
        if ((detail.createDV || detail.createDVT) && data.value.hasOwnProperty(detail.codeName)) {
          switch (detail.createDVT) {
            case 'CONTEXT':
              data.value[detail.codeName] = viewParams[detail.createDV];
              break;
            case 'SESSION':
              data.value[detail.codeName] = context[detail.createDV];
              break;
            case 'APPDATA':
              data.value[detail.codeName] = context[detail.createDV];
              break;
            case 'OPERATORNAME':
              data.value[detail.codeName] = context['srfusername'];
              break;
            case 'OPERATOR':
              data.value[detail.codeName] = context['srfuserid'];
              break;
            case 'CURTIME':
              data.value[detail.codeName] = dateFormat(new Date(), detail.valueFormat);
              break;
            case 'PARAM':
              data.value[detail.codeName] = controlService.getRemoteCopyData()?.[detail.codeName] || null;
              break;
            default:
              data.value[detail.codeName] = DataTypes.isNumber(detail.dataType)
                ? Number(detail?.createDV)
                : detail?.createDV;
              break;
          }
        }
      }
    });
  }

  /**
   * @description 设置更新默认值
   * @memberof FormControl
   */
  public setUpdateDefault() {
    const { detailsModel, context, viewParams, controlService } = this.state;
    const { data } = toRefs(this.state);
    Object.values(detailsModel).forEach((detail: IParam) => {
      if (Object.is(detail.detailType, 'FORMITEM')) {
        if ((detail.updateDV || detail.updateDVT) && data.value.hasOwnProperty(detail.codeName)) {
          switch (detail.updateDVT) {
            case 'CONTEXT':
              data.value[detail.codeName] = viewParams[detail.updateDV];
              break;
            case 'SESSION':
              data.value[detail.codeName] = context[detail.updateDV];
              break;
            case 'APPDATA':
              data.value[detail.codeName] = context[detail.updateDV];
              break;
            case 'OPERATORNAME':
              data.value[detail.codeName] = context['srfusername'];
              break;
            case 'OPERATOR':
              data.value[detail.codeName] = context['srfuserid'];
              break;
            case 'CURTIME':
              data.value[detail.codeName] = dateFormat(new Date(), detail.valueFormat);
              break;
            case 'PARAM':
              data.value[detail.codeName] = controlService.getRemoteCopyData()?.[detail.codeName] || null;
              break;
            default:
              data.value[detail.codeName] = DataTypes.isNumber(detail.dataType)
                ? Number(detail.updateDV)
                : detail.updateDV;
              break;
          }
        }
      }
    });
  }

  /**
   * 加载草稿行为
   *
   * @protected
   * @param [opt={}]
   */
  protected async loadDraft(opt: any = {}) {}

  /**
   * @description 使用加载草稿功能模块
   * @param {FormControlProps} props 传入的props
   * @return {*}
   * @memberof FormControl
   */
  public useLoadDraft() {
    const { viewSubject, controlName } = this.state;
    // 加载草稿
    const loadDraft = async (opt: any = {}) => {
      try {
        const { controlService, context, viewParams, showBusyIndicator, controlAction, appDeKeyFieldName } = this.state;
        const { data } = toRefs(this.state);
        if (!controlAction.loadDraftAction) {
          return;
        }
        // 处理请求参数
        let _context = deepCopy(context);
        let _viewParams = deepCopy(viewParams);

        // 发起请求处理与解析请求
        const response = await controlService.loadDraft(
          _context,
          { viewParams: _viewParams },
          { action: controlAction.loadDraftAction, isLoading: showBusyIndicator },
        );
        if (response.status && response.status == 200) {
          if (appDeKeyFieldName && response.data[appDeKeyFieldName]) {
            response.data[appDeKeyFieldName] = null;
          }
          data.value = response.data;
          this.afterFormAction('loadDraft');
        }
      } catch (error) {
        // TODO 错误异常处理
        console.log(error);
      }
    };

    // 在类里绑定能力方法
    this.loadDraft = loadDraft;

    // 订阅viewSubject,监听load行为
    if (viewSubject) {
      let subscription = viewSubject.subscribe(({ tag, action, data }: IActionParam) => {
        if (Object.is(controlName, tag) && Object.is('loadDraft', action)) {
          loadDraft(data);
        }
      });

      // 部件卸载时退订viewSubject
      onUnmounted(() => {
        subscription.unsubscribe();
      });
    }
    return loadDraft;
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
   * @memberof FormControl
   */
  public useLoad() {
    const { viewSubject, controlName } = this.state;

    /**
     * 加载行为
     *
     * @param [opt={}]
     * @return {*}
     */
    const load = async (opt: any = {}) => {
      try {
        const { controlService, context, viewParams, showBusyIndicator, controlAction } = this.state;
        const { data } = toRefs(this.state);
        if (!controlAction.loadAction) {
          return;
        }
        // 处理请求参数
        let _context = deepCopy(context);
        let _viewParams = deepCopy(viewParams);

        // 发起请求处理与解析请求
        const response = await controlService.get(
          _context,
          { viewParams: _viewParams },
          { action: controlAction.loadAction, isLoading: showBusyIndicator },
        );
        if (response.status && response.status == 200) {
          data.value = response.data;
          this.afterFormAction('load');
        }
      } catch (error) {
        // TODO 错误异常处理
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
   * @description 使用加载功能模块
   * @return {*}
   * @memberof FormControl
   */
  public useSave() {
    const { viewSubject, controlName } = this.state;

    /**
     * 保存行为
     *
     * @param [opt={}]
     * @return {*}
     */
    const save = async (opt: any = {}) => {
      try {
        // 获取需要的状态变量
        const { controlService, context, viewParams, showBusyIndicator, data } = this.state;

        // TODO 值规则校验处理

        // 判断实体行为
        const { updateAction, createAction } = this.state.controlAction;
        const saveAction: any = data.srfuf == '1' ? updateAction : createAction;
        const saveFunName = data.srfuf == '1' ? 'update' : 'create';
        if (!saveAction) {
          return;
        }

        // 处理请求参数
        let _context = deepCopy(context);
        let _viewParams = deepCopy(viewParams);
        const arg: any = { ...opt };
        Object.assign(arg, data.getDo());
        Object.assign(arg, { viewParams: _viewParams });

        // TODO 关系界面保存通知处理，做成异步。
        // TODO 拷贝相关。

        // 发起请求处理与解析请求
        const response = await controlService[saveFunName](_context, arg, {
          action: saveAction,
          isLoading: showBusyIndicator,
        });
        if (!response.status || response.status !== 200) {
          // TODO 统一Error格式
          return;
        }

        // 请求后处理
        this.state.data = response.data;

        // TODO 表单onFormLoad
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
   * @description 使用加载功能模块
   * @param {FormControlProps} props 传入的props
   * @return {*}
   * @memberof FormControl
   */
  public useRemove(props: FormControlProps) {
    const { viewSubject, controlName } = this.state;

    /**
     * 删除行为
     *
     * @param [opt={}]
     * @return {*}
     */
    const remove = async (opt: any = {}) => {
      try {
        // 获取需要的状态变量
        const { controlService, context, viewParams, showBusyIndicator } = this.state;

        // 判断实体行为
        const removeAction = this.state.controlAction.removeAction;
        if (!removeAction) {
          return;
        }

        // 处理请求参数
        let _context = deepCopy(context);
        let _viewParams = deepCopy(viewParams);
        const arg: any = opt[0];
        Object.assign(arg, { viewParams: _viewParams });

        // 发起请求处理与解析请求
        const response = await controlService.remove(_context, arg, {
          action: removeAction,
          isLoading: showBusyIndicator,
        });
        if (!response.status || response.status !== 200) {
          return;
        }

        // 请求后处理
        this.state.data = response.data;
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
        if (Object.is(controlName, tag) && Object.is('load', action)) {
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
   * @description 处理编辑器事件
   * @param {IActionParam} actionParam 行为参数
   * @memberof FormControl
   */
  public onEditorEvent(actionParam: IActionParam) {
    const { tag, action, data } = actionParam;
    switch (action) {
      case 'valueChange':
        this.handleFormDataChange(tag, data);
        break;
      default:
        break;
    }
  }

  /**
   * @description 处理组件事件
   * @param {IActionParam} actionParam 行为参数
   * @memberof FormControl
   */
  public onComponentEvent(actionParam: IActionParam) {
    const { tag, action, data } = actionParam;
    switch (action) {
      case 'formGroupAction':
        this.handleFormGroupAction(tag, data);
        break;
      default:
        break;
    }
  }

  /**
   * @description 处理表单分组行为
   * @param {string} tag
   * @param {*} data
   * @memberof FormControl
   */
  public handleFormGroupAction(tag: string, data: any) {
    console.log(tag, data);
  }

  /**
   * @description 安装部件所有功能模块的方法
   * @return {*}
   * @memberof FormControl [emit] 事件
   */
  public moduleInstall() {
    const superParams = super.moduleInstall();
    return {
      ...superParams,
      load: this.useLoad(),
      loadDraft: this.useLoadDraft(),
      save: this.useSave(),
      onEditorEvent: this.onEditorEvent.bind(this),
      onComponentEvent: this.onComponentEvent.bind(this),
    };
  }
}

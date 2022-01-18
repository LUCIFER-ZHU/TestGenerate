export const viewState = {
  viewCodeName: 'OrderDetailEditView',
  viewName: 'OrderDetailEditView',
  viewCaption: '订单明细',
  height: '0',
  width: '700',
  enableQuickGroup: false,
  appEntityName: 'OrderDetail',
  isLoadDefault: true,
  keyPSDEField: 'orderdetail',
  viewSysCss: '',
  subCaption: '',
  viewType: 'DEEDITVIEW',
  viewStyle: 'DEFAULT',
  showCaptionBar: true,
  xDataControlName:'form',
  openDataViewName: 'ExampleEditorEditView',
  appViewNavContexts:{  },
  appViewNavParams:{  },
  toolbar: [
    { id:'toolbar_tbitem1',name:'tbitem1',caption:'保存并关闭',groupExtractMode:'2',itemType:'DEUIACTION',noPrivDisplayMode:'2',showIcon:true,showCaption:true,tooltip:'保存并关闭',disabled: false, visible: true, imgPath: '',iconClass: 'sx-tb-saveandclose',xDataControlName:'form',uIAction:{codeName:'SaveAndExit',fullCodeName:'SaveAndExit',uIActionMode:'SYS',uIActionTag:'SaveAndExit',uIActionType:'DEUIACTION'} },
    { id:'toolbar_tbitem2',name:'tbitem2',caption:'关闭',groupExtractMode:'2',itemType:'DEUIACTION',noPrivDisplayMode:'2',showIcon:true,showCaption:true,tooltip:'关闭',disabled: false, visible: true, imgPath: '',iconClass: 'fa fa-sign-out',xDataControlName:'form',uIAction:{codeName:'Exit',fullCodeName:'Exit',uIActionMode:'SYS',uIActionTag:'Exit',uIActionType:'DEUIACTION'} },
  ],
  form:{
    action:{
      loadAction: 'Get',
      removeAction: 'Remove',
      updateAction: 'Update',
      loadDraftAction: 'GetDraft',
      createAction: 'Create'
    }
  }
};
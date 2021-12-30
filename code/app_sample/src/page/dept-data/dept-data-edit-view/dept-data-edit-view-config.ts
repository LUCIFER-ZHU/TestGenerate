export const ViewConfig = {
    viewCodeName: 'DeptDataEditView',
    viewName: 'DeptDataEditView',
    viewCaption: '部门数据',
    height: '0',
    width: '700',
    viewMsgGroup: '',
    viewUIActions: '[net.ibizsys.model.app.view.PSAppViewUIActionImpl@65327f5, net.ibizsys.model.app.view.PSAppViewUIActionImpl@2adddc06]',
    viewSysCss: '',
    viewSysImage: '',
    subCaption: '',
    viewType: 'DEEDITVIEW',
    viewStyle: 'DEFAULT',
    showCaptionBar: 'DEFAULT',
        editviewtoolbar:{
        name:'toolbar',
        items:[
            { name:'tbitem1',caption:'保存并关闭',groupExtractMode:'ITEM',itemType:'DEUIACTION',noPrivDisplayMode:'2',showIcon:true,showCaption:true,tooltip:'保存并关闭' },
            { name:'tbitem2',caption:'关闭',groupExtractMode:'ITEM',itemType:'DEUIACTION',noPrivDisplayMode:'2',showIcon:true,showCaption:true,tooltip:'关闭' },
        ]
    },
    controlsAction:{
      EditViewtoolbar:{
        loadAction: '',
        removeAction: '',
        updateAction: '',
        loadDraftAction: '',
        createAction: '',
      },
      Main:{
        loadAction: 'Get',
        removeAction: 'Remove',
        updateAction: 'Update',
        loadDraftAction: 'GetDraft',
        createAction: 'GetDraft',
      },
    }};
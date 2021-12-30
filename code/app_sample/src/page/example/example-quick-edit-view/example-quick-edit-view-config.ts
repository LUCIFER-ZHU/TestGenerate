export const ViewConfig = {
    viewCodeName: 'ExampleQuickEditView',
    viewName: 'ExampleQuickEditView',
    viewCaption: '示例',
    height: '0',
    width: '0',
    viewMsgGroup: '',
    viewUIActions: '[net.ibizsys.model.app.view.PSAppViewUIActionImpl@21fff664, net.ibizsys.model.app.view.PSAppViewUIActionImpl@6079cf5]',
    viewSysCss: '',
    viewSysImage: '',
    subCaption: '',
    viewType: 'DEEDITVIEW',
    viewStyle: 'DEFAULT',
    showCaptionBar: 'DEFAULT',
        quickeditviewtoolbar:{
        name:'toolbar',
        items:[
            { name:'tbitem1',caption:'保存并关闭',groupExtractMode:'ITEM',itemType:'DEUIACTION',noPrivDisplayMode:'2',showIcon:true,showCaption:true,tooltip:'保存并关闭' },
            { name:'tbitem2',caption:'关闭',groupExtractMode:'ITEM',itemType:'DEUIACTION',noPrivDisplayMode:'2',showIcon:true,showCaption:true,tooltip:'关闭' },
        ]
    },
    controlsAction:{
      QuickEditViewtoolbar:{
        loadAction: '',
        removeAction: '',
        updateAction: '',
        loadDraftAction: '',
        createAction: '',
      },
      HiddenFormItem:{
        loadAction: 'Get',
        removeAction: 'Remove',
        updateAction: 'Update',
        loadDraftAction: 'GetDraft',
        createAction: 'GetDraft',
      },
    }};
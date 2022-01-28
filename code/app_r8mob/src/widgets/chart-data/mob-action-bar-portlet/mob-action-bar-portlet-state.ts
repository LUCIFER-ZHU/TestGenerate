// 部件配置对象
export const ctrlState = {
  controlCodeName: 'MobActionBar',
  controlName: 'db_sysportlet2',
  showTitleBar: true,
  title: '操作栏',
  portletType: 'ACTIONBAR',
  // 部件高度
  height: 100,
  // 实体名称
  appEntityCodeName: 'ChartData',
  // 操作栏模型
  actionBarModelData: {
    MobEdit : {
      viewlogicname: 'u953df17',
      showCaption:true,
      actionName: '移动端编辑', 
      icon: '', 
      imagePath: '', 
      disabled: false, visabled: true, 
      dataAccessAction: true, 
      getNoPrivDisplayMode: 6,
      codeName:'MobEdit',
      fullCodeName:'ChartData_MobEdit',
      uIActionMode:'FRONT',
      uIActionTag:'MobEdit',
      uIActionType:'DEUIACTION',
    },
    Refresh : {
      viewlogicname: 'u0c7ccd3',
      showCaption:true,
      actionName: '刷新', 
      icon: 'fa fa-refresh', 
      imagePath: '', 
      disabled: false, visabled: true, 
      dataAccessAction: true, 
      getNoPrivDisplayMode: 6,
      codeName:'Refresh',
      fullCodeName:'Refresh',
      uIActionMode:'SYS',
      uIActionTag:'Refresh',
      uIActionType:'DEUIACTION',
    },
  },
};
import { IParam } from "@core";

export const AppCodeListConfig:IParam = {
  'Sample__ExampleDataType':{
    'name': '示例数据分类',
    'codeName': 'ExampleDataType',
    'codeListTag': 'Sample__ExampleDataType',
    'codeListType': 'STATIC',
    'isEnableCache': true,
    'cacheTimeout': -1,
    'emptyText': '未定义',
    'items':[
        {'value': '10', 'text': '示例类型一','codeName': 'Item_10' },
        {'value': '20', 'text': '示例类型二','codeName': 'Item_20' },
        {'value': '30', 'text': '示例类型三','codeName': 'Item_30' }
    ]
  },
  'SysOperator':{
    'name': '云系统操作者',
    'codeName': 'SysOperator',
    'codeListTag': 'SysOperator',
    'codeListType': 'DYNAMIC',
    'isEnableCache': true,
    'cacheTimeout': -1,'predefinedType': 'OPERATOR',
    'emptyText': '未定义',
  },
  'Sample__LeaveApplicationState':{
    'name': '请假申请状态',
    'codeName': 'LeaveApplicationState',
    'codeListTag': 'Sample__LeaveApplicationState',
    'codeListType': 'STATIC',
    'isEnableCache': true,
    'cacheTimeout': -1,
    'emptyText': '未定义',
    'items':[
        {'value': '10', 'text': '草稿','codeName': 'Item_10' },
        {'value': '20', 'text': '流程中','codeName': 'Item_20' },
        {'value': '30', 'text': '通过','codeName': 'Item_30' },
        {'value': '40', 'text': '驳回','codeName': 'Item_40' }
    ]
  },
  'CodeList33':{
    'name': '数据库类型',
    'codeName': 'CodeList33',
    'codeListTag': 'CodeList33',
    'codeListType': 'STATIC',
    'isEnableCache': true,
    'cacheTimeout': -1,
    'emptyText': '未定义',
    'items':[
        {'value': 'DB2', 'text': 'DB2','codeName': 'Db2' },
        {'value': 'ORACLE', 'text': 'ORACLE','codeName': 'Oracle' },
        {'value': 'MSSQL', 'text': 'MSSQLSERVER','codeName': 'Mssql' },
        {'value': 'MYSQL', 'text': 'MySQL','codeName': 'Mysql' },
        {'value': 'SYBASE', 'text': 'SYBASE','codeName': 'Sybase' },
        {'value': 'INFORMIX', 'text': 'INFORMIX','codeName': 'Informix' }
    ]
  },
  'Sample__OpportunityState':{
    'name': '商机状态',
    'codeName': 'OpportunityState',
    'codeListTag': 'Sample__OpportunityState',
    'codeListType': 'STATIC',
    'isEnableCache': true,
    'cacheTimeout': -1,
    'emptyText': '未定义',
    'items':[
        {'value': '0', 'text': '创建','codeName': 'Item_0' },
        {'value': '1', 'text': '验证','codeName': 'Item_1' },
        {'value': '2', 'text': '建议','codeName': 'Item_2' },
        {'value': '9', 'text': '赢得','codeName': 'Item_9' }
    ]
  },
  'Sample__CodeListViewMsgType':{
    'name': '视图消息类型',
    'codeName': 'CodeListViewMsgType',
    'codeListTag': 'Sample__CodeListViewMsgType',
    'codeListType': 'STATIC',
    'isEnableCache': true,
    'cacheTimeout': -1,
    'emptyText': '未定义',
    'items':[
        {'value': 'INFO', 'text': '常规信息','codeName': 'Info' },
        {'value': 'WARN', 'text': '警告信息','codeName': 'Warn' },
        {'value': 'ERROR', 'text': '错误信息','codeName': 'Error' },
        {'value': 'CUSTOM', 'text': '自定义信息','codeName': 'Custom' }
    ]
  },
  'Sample__TaskStatus':{
    'name': '任务状态',
    'codeName': 'TaskStatus',
    'codeListTag': 'Sample__TaskStatus',
    'codeListType': 'STATIC',
    'isEnableCache': true,
    'cacheTimeout': -1,
    'emptyText': '未定义',
    'items':[
        {'value': '10', 'text': '未开始','codeName': 'Item_10' },
        {'value': '20', 'text': '进行中','codeName': 'Item_20' },
        {'value': '30', 'text': '已完成','codeName': 'Item_30' },
        {'value': '40', 'text': '已暂停','codeName': 'Item_40' },
        {'value': '50', 'text': '已取消','codeName': 'Item_50' },
        {'value': '60', 'text': '已关闭','codeName': 'Item_60' }
    ]
  },
  'YesNo':{
    'name': '是否',
    'codeName': 'YesNo',
    'codeListTag': 'YesNo',
    'codeListType': 'STATIC',
    'isEnableCache': true,
    'cacheTimeout': -1,
    'emptyText': '未定义',
    'items':[
        {'value': '1', 'text': '是','codeName': 'Item_1' },
        {'value': '0', 'text': '否','codeName': 'Item_0' }
    ]
  },
  'Sample__DataType':{
    'name': '图表数据分类',
    'codeName': 'DataType',
    'codeListTag': 'Sample__DataType',
    'codeListType': 'STATIC',
    'isEnableCache': true,
    'cacheTimeout': -1,
    'emptyText': '未定义',
    'items':[
        {'value': 'home', 'text': '家居用品','codeName': 'Home' },
        {'value': 'necessary', 'text': '日用品','codeName': 'Necessary' },
        {'value': 'toy', 'text': '玩具','codeName': 'Toy' }
    ]
  },
  'Sample__OrderState':{
    'name': '订单状态',
    'codeName': 'OrderState',
    'codeListTag': 'Sample__OrderState',
    'codeListType': 'STATIC',
    'isEnableCache': true,
    'cacheTimeout': -1,
    'emptyText': '未定义',
    'items':[
        {'value': '10', 'text': '待支付','codeName': 'Item_10' },
        {'value': '20', 'text': '待处理','codeName': 'Item_20' },
        {'value': '30', 'text': '已完成','codeName': 'Item_30' }
    ]
  },
  'Sample__SampleCat':{
    'name': '示例分类',
    'codeName': 'SampleCat',
    'codeListTag': 'Sample__SampleCat',
    'codeListType': 'STATIC',
    'isEnableCache': true,
    'cacheTimeout': -1,
    'emptyText': '未定义',
    'items':[
        {'value': 'WEBR7D', 'text': '桌面应用','codeName': 'Webr7d' },
        {'value': 'MOBR7D', 'text': '移动端','codeName': 'Mobr7d' },
        {'value': 'JAVAR7D', 'text': '后台','codeName': 'Javar7d' }
    ]
  },
  'Sample__MapDataType':{
    'name': '地图数据类型',
    'codeName': 'MapDataType',
    'codeListTag': 'Sample__MapDataType',
    'codeListType': 'STATIC',
    'isEnableCache': true,
    'cacheTimeout': -1,
    'emptyText': '未定义',
    'items':[
        {'value': 'Nation', 'text': '国家','codeName': 'Nation' },
        {'value': 'Province', 'text': '省份','codeName': 'Province' },
        {'value': 'City', 'text': '城市','codeName': 'City' },
        {'value': 'District', 'text': '区县','codeName': 'District' }
    ]
  },
  'Sample__NextForm':{
    'name': '下一步表单',
    'codeName': 'NextForm',
    'codeListTag': 'Sample__NextForm',
    'codeListType': 'STATIC',
    'isEnableCache': true,
    'cacheTimeout': -1,
    'emptyText': '未定义',
    'items':[
        {'value': 'WizardForm2', 'text': '模式1','codeName': 'Wizardform2' },
        {'value': 'WizardForm3', 'text': '模式2','codeName': 'Wizardform3' },
        {'value': 'WizardForm4', 'text': '模式3','codeName': 'Wizardform4' }
    ]
  },
  'Sample__ActivityType':{
    'name': '活动类型',
    'codeName': 'ActivityType',
    'codeListTag': 'Sample__ActivityType',
    'codeListType': 'STATIC',
    'isEnableCache': true,
    'cacheTimeout': -1,
    'emptyText': '未定义',
    'items':[
        {'value': 'Meeting', 'text': '会议','codeName': 'Meeting' },
        {'value': 'Phone', 'text': '电话','codeName': 'Phone' },
        {'value': 'Email', 'text': '电子邮件','codeName': 'Email' },
        {'value': 'Other', 'text': '其它','codeName': 'Other' }
    ]
  },
  'Sample__CodeListViewMsgLocation':{
    'name': '视图消息位置',
    'codeName': 'CodeListViewMsgLocation',
    'codeListTag': 'Sample__CodeListViewMsgLocation',
    'codeListType': 'STATIC',
    'isEnableCache': true,
    'cacheTimeout': -1,
    'emptyText': '未定义',
    'items':[
        {'value': 'TOP', 'text': '视图上方','codeName': 'Top' },
        {'value': 'BOTTOM', 'text': '视图下方','codeName': 'Bottom' },
        {'value': 'BODY', 'text': '视图内容区','codeName': 'Body' },
        {'value': 'POPUP', 'text': '弹出','codeName': 'Popup' },
        {'value': 'CUSTOM', 'text': '自定义','codeName': 'Custom' }
    ]
  },
  'Sample__CustomerType':{
    'name': '客户类型',
    'codeName': 'CustomerType',
    'codeListTag': 'Sample__CustomerType',
    'codeListType': 'STATIC',
    'isEnableCache': true,
    'cacheTimeout': -1,
    'emptyText': '未定义',
    'items':[
        {'value': '10', 'text': '政府单位','codeName': 'Item_10' },
        {'value': '20', 'text': '企事业单位','codeName': 'Item_20' },
        {'value': '30', 'text': '国企','codeName': 'Item_30' },
        {'value': '40', 'text': '民企','codeName': 'Item_40' }
    ]
  },
  'Sample__Priority':{
    'name': '优先级',
    'codeName': 'Priority',
    'codeListTag': 'Sample__Priority',
    'codeListType': 'STATIC',
    'isEnableCache': true,
    'cacheTimeout': -1,
    'emptyText': '未定义',
    'items':[
        {'value': '1', 'text': '低','codeName': 'Low' },
        {'value': '2', 'text': '中','codeName': 'Middle' },
        {'value': '3', 'text': '高','codeName': 'High' }
    ]
  },
  'Sample__Gender':{
    'name': '性别',
    'codeName': 'Gender',
    'codeListTag': 'Sample__Gender',
    'codeListType': 'STATIC',
    'isEnableCache': true,
    'cacheTimeout': -1,
    'emptyText': '未定义',
    'items':[
        {'value': '1', 'text': '男','codeName': 'Item_1' },
        {'value': '0', 'text': '女','codeName': 'Item_0' }
    ]
  }
}
import { IParam } from "@core";

export const AppCodeListConfig:IParam = {
  'SysOperator':{
    'name': '云系统操作者',
    'codeName': 'SysOperator',
    'codeListTag': 'SysOperator',
    'codeListType': 'DYNAMIC',
    'isEnableCache': true,
    'cacheTimeout': -1,'predefinedType': 'OPERATOR',
    'emptyText': '未定义',
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
  }
}
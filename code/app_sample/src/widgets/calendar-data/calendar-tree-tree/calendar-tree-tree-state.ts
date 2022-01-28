import { ControlVOBase, TreeControlVO, TreeNodeVO, TreeNodeRSVO, TreeService } from "@core";
import { CalendarDataService } from '@api/calendar-data/calendar-data-service';

export class ControlVO extends ControlVOBase implements TreeControlVO {

  get rootVisible(): boolean {
    return false;
  }

  get treeNodes(): TreeNodeVO[] {
    return [
      {
        allowDrag: false,
        allowDrop: false,
        allowEditText: false,
        allowOrder: false,
        appendPNodeId: false,
        counterId: '',
        counterMode: 0,
        disableSelect: false,
        enableCheck: false,
        enableQuickSearch: false,
        expandFirstOnly: false,
        expanded: false,
        hasPSDETreeNodeRSs: true,
        id: 'ROOT',
        navFilter: '',
        nodeValue: 'root',
        nodeType: 'ROOT',
        rootNode: true,
        selectFirstOnly: false,
        selected: false,
        text: '默认根节点',
        treeNodeType: 'STATIC',
      },
      {
        allowDrag: false,
        allowDrop: false,
        allowEditText: false,
        allowOrder: false,
        appDataEntity: {
          codeName: 'CalendarData',
          keyField: 'CalendarDataId',
          majorField: 'CalendarDataName',
        },
        appendPNodeId: false,
        counterId: '',
        counterMode: 0,
        disableSelect: false,
        enableCheck: false,
        enableQuickSearch: false,
        expandFirstOnly: false,
        expanded: false,
        hasPSDETreeNodeRSs: false,
        id: 'EventAndInvoke',
        navFilter: '',
        nodeType: 'EventAndInvoke',
        rootNode: false,
        selectFirstOnly: false,
        selected: false,
        text: '事件及调用',
        treeNodeType: 'STATIC',
      },
      {
        allowDrag: false,
        allowDrop: false,
        allowEditText: false,
        allowOrder: false,
        appDataEntity: {
          codeName: 'CalendarData',
          keyField: 'CalendarDataId',
          majorField: 'CalendarDataName',
        },
        appendPNodeId: false,
        counterId: '',
        counterMode: 0,
        disableSelect: false,
        enableCheck: false,
        enableQuickSearch: false,
        expandFirstOnly: false,
        expanded: false,
        hasPSDETreeNodeRSs: false,
        id: 'MDataSource',
        navFilter: '',
        navView: {
          viewName: 'CalendarDataMDataSourceCalendarView'
        },
        nodeType: 'MDataSource',
        rootNode: false,
        selectFirstOnly: false,
        selected: false,
        text: '多数据源',
        treeNodeType: 'STATIC',
      },
      {
        allowDrag: false,
        allowDrop: false,
        allowEditText: false,
        allowOrder: false,
        appDataEntity: {
          codeName: 'CalendarData',
          keyField: 'CalendarDataId',
          majorField: 'CalendarDataName',
        },
        appendPNodeId: false,
        counterId: '',
        counterMode: 0,
        disableSelect: false,
        enableCheck: false,
        enableQuickSearch: false,
        expandFirstOnly: false,
        expanded: false,
        hasPSDETreeNodeRSs: false,
        id: 'Base',
        navFilter: '',
        navView: {
          viewName: 'CalendarDataBaseCalendarView'
        },
        nodeType: 'Base',
        rootNode: false,
        selectFirstOnly: false,
        selected: false,
        text: '常规',
        treeNodeType: 'STATIC',
      },
      {
        allowDrag: false,
        allowDrop: false,
        allowEditText: false,
        allowOrder: false,
        appDataEntity: {
          codeName: 'CalendarData',
          keyField: 'CalendarDataId',
          majorField: 'CalendarDataName',
        },
        appendPNodeId: false,
        counterId: '',
        counterMode: 0,
        disableSelect: false,
        enableCheck: false,
        enableQuickSearch: false,
        expandFirstOnly: false,
        expanded: false,
        hasPSDETreeNodeRSs: false,
        id: 'Css',
        navFilter: '',
        navView: {
          viewName: 'CalendarDataBaseCalendarView_CSS'
        },
        nodeType: 'Css',
        rootNode: false,
        selectFirstOnly: false,
        selected: false,
        text: '界面样式',
        treeNodeType: 'STATIC',
      },
      {
        allowDrag: false,
        allowDrop: false,
        allowEditText: false,
        allowOrder: false,
        appDataEntity: {
          codeName: 'CalendarData',
          keyField: 'CalendarDataId',
          majorField: 'CalendarDataName',
        },
        appendPNodeId: false,
        counterId: '',
        counterMode: 0,
        disableSelect: false,
        enableCheck: false,
        enableQuickSearch: false,
        expandFirstOnly: false,
        expanded: false,
        hasPSDETreeNodeRSs: false,
        id: 'ItemLayout',
        navFilter: '',
        navView: {
          viewName: 'CalendarDataItemLayoutTimeLineCalendarView'
        },
        nodeType: 'ItemLayout',
        rootNode: false,
        selectFirstOnly: false,
        selected: false,
        text: '项布局',
        treeNodeType: 'STATIC',
      },
      {
        allowDrag: false,
        allowDrop: false,
        allowEditText: false,
        allowOrder: false,
        appDataEntity: {
          codeName: 'CalendarData',
          keyField: 'CalendarDataId',
          majorField: 'CalendarDataName',
        },
        appendPNodeId: false,
        counterId: '',
        counterMode: 0,
        disableSelect: false,
        enableCheck: false,
        enableQuickSearch: false,
        expandFirstOnly: false,
        expanded: false,
        hasPSDETreeNodeRSs: false,
        id: 'TimeLine',
        navFilter: '',
        navView: {
          viewName: 'CalendarDataTimeLineCalendarView'
        },
        nodeType: 'TimeLine',
        rootNode: false,
        selectFirstOnly: false,
        selected: false,
        text: '时间轴',
        treeNodeType: 'STATIC',
      },
    ];
  }

  get treeNodeRSs(): TreeNodeRSVO[] {
    return [
      {
        childDeTreeNode: {
          id: 'Base'
        },
        parentPSDETreeNode: { id: 'ROOT' },
        parentValueLevel: 1,
        searchMode: 3
      },
      {
        childDeTreeNode: {
          id: 'MDataSource'
        },
        parentPSDETreeNode: { id: 'ROOT' },
        parentValueLevel: 1,
        searchMode: 3
      },
      {
        childDeTreeNode: {
          id: 'Css'
        },
        parentPSDETreeNode: { id: 'ROOT' },
        parentValueLevel: 1,
        searchMode: 3
      },
      {
        childDeTreeNode: {
          id: 'ItemLayout'
        },
        parentPSDETreeNode: { id: 'ROOT' },
        parentValueLevel: 1,
        searchMode: 3
      },
      {
        childDeTreeNode: {
          id: 'TimeLine'
        },
        parentPSDETreeNode: { id: 'ROOT' },
        parentValueLevel: 1,
        searchMode: 3
      },
      {
        childDeTreeNode: {
          id: 'EventAndInvoke'
        },
        parentPSDETreeNode: { id: 'ROOT' },
        parentValueLevel: 1,
        searchMode: 3
      },
    ];
  }
}

export const ctrlState = {
  controlCodeName: 'CalendarTree',
  controlName: 'treeexpbar_tree',
  controlService: new TreeService<ControlVO>(ControlVO, new CalendarDataService() ),
  currentSelectedNode: {},
  data: [],
  echoSelectedNodes: [],
  expandedKeys: [],
  selectedKeys: [],
  selectedNodes: []
};
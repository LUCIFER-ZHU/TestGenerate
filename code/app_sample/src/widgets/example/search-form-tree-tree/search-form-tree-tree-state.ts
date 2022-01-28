import { ControlVOBase, TreeControlVO, TreeNodeVO, TreeNodeRSVO, TreeService } from "@core";
import { ExampleService } from '@api/example/example-service';

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
        appDataEntity: {
          codeName: 'Example',
          keyField: 'ExampleId',
          majorField: 'ExampleName',
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
        id: 'AutoSearch',
        navFilter: '',
        navView: {
          viewName: 'CustomerAutoSearchGridView'
        },
        nodeType: 'AutoSearch',
        rootNode: false,
        selectFirstOnly: false,
        selected: false,
        text: '自动搜索',
        treeNodeType: 'STATIC',
      },
      {
        allowDrag: false,
        allowDrop: false,
        allowEditText: false,
        allowOrder: false,
        appDataEntity: {
          codeName: 'Example',
          keyField: 'ExampleId',
          majorField: 'ExampleName',
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
          codeName: 'Example',
          keyField: 'ExampleId',
          majorField: 'ExampleName',
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
        id: 'AdvSearch',
        navFilter: '',
        navView: {
          viewName: 'CustomerAdvSearchGridView'
        },
        nodeType: 'AdvSearch',
        rootNode: false,
        selectFirstOnly: false,
        selected: false,
        text: '高级搜索',
        treeNodeType: 'STATIC',
      },
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
          codeName: 'Example',
          keyField: 'ExampleId',
          majorField: 'ExampleName',
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
        id: 'ButtonStyle',
        navFilter: '',
        navView: {
          viewName: 'CustomerSearchFormButtonStyleCustomView'
        },
        nodeType: 'ButtonStyle',
        rootNode: false,
        selectFirstOnly: false,
        selected: false,
        text: '按钮样式',
        treeNodeType: 'STATIC',
      },
      {
        allowDrag: false,
        allowDrop: false,
        allowEditText: false,
        allowOrder: false,
        appDataEntity: {
          codeName: 'Example',
          keyField: 'ExampleId',
          majorField: 'ExampleName',
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
          id: 'ButtonStyle'
        },
        parentPSDETreeNode: { id: 'ROOT' },
        parentValueLevel: 1,
        searchMode: 3
      },
      {
        childDeTreeNode: {
          id: 'AutoSearch'
        },
        parentPSDETreeNode: { id: 'ROOT' },
        parentValueLevel: 1,
        searchMode: 3
      },
      {
        childDeTreeNode: {
          id: 'AdvSearch'
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
  controlCodeName: 'SearchFormTree',
  controlName: 'treeexpbar_tree',
  controlService: new TreeService<ControlVO>(ControlVO, new ExampleService() ),
  currentSelectedNode: {},
  data: [],
  echoSelectedNodes: [],
  expandedKeys: [],
  selectedKeys: [],
  selectedNodes: []
};
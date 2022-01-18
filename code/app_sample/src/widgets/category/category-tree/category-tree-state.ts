import { ControlVOBase, TreeControlVO, TreeNodeVO, TreeNodeRSVO, TreeService } from "@core";
import { CategoryService } from '@api/category/category-service';

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
          codeName: 'Category',
          majorField: 'true',
          keyField: 'CategoryId',
        },
        appDeDataSet: { codeName: 'FetchRoot' },
        appendPNodeId: false,
        counterId: '',
        counterMode: 0,
        disableSelect: false,
        enableCheck: true,
        enableQuickSearch: true,
        expandFirstOnly: true,
        expanded: true,
        hasPSDETreeNodeRSs: true,
        idPSAppDEField: { codeName: 'CategoryId' },
        id: 'RootCategory',
        navFilter: '',
        navigateParams: {
          categoryid: '%category%',
        },
        navView: {
          viewName: 'ProductByCategoryGridView'
        },
        nodeType: 'RootCategory',
        rootNode: false,
        selectFirstOnly: false,
        selected: false,
        textPSAppDEField: { codeName: 'CategoryName' },
        treeNodeType: 'DE',
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
        enableQuickSearch: true,
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
          codeName: 'Category',
          majorField: 'true',
          keyField: 'CategoryId',
        },
        appDeDataSet: { codeName: 'FetchDefault' },
        appendPNodeId: false,
        counterId: '',
        counterMode: 0,
        disableSelect: false,
        enableCheck: true,
        enableQuickSearch: true,
        expandFirstOnly: false,
        expanded: false,
        hasPSDETreeNodeRSs: true,
        idPSAppDEField: { codeName: 'CategoryId' },
        id: 'ChildCategory',
        navFilter: '',
        navigateParams: {
          categoryid: '%category%',
        },
        navView: {
          viewName: 'ProductByCategoryGridView'
        },
        nodeType: 'ChildCategory',
        rootNode: false,
        selectFirstOnly: false,
        selected: false,
        textPSAppDEField: { codeName: 'CategoryName' },
        treeNodeType: 'DE',
      },
    ];
  }

  get treeNodeRSs(): TreeNodeRSVO[] {
    return [
      {
        childDeTreeNode: {
          id: 'ChildCategory'
        },
        parentFilter: 'pcategoryid',
        parentPSDETreeNode: { id: 'ChildCategory' },
        parentValueLevel: 1,
        searchMode: 3
      },
      {
        childDeTreeNode: {
          id: 'ChildCategory'
        },
        parentFilter: 'pcategoryid',
        parentPSDETreeNode: { id: 'RootCategory' },
        parentValueLevel: 1,
        searchMode: 3
      },
      {
        childDeTreeNode: {
          id: 'RootCategory'
        },
        parentPSDETreeNode: { id: 'ROOT' },
        parentValueLevel: 1,
        searchMode: 3
      },
    ];
  }
}

export const ctrlState = {
  controlCodeName: 'Category',
  controlName: 'treeexpbar_tree',
  controlService: new TreeService<ControlVO>(ControlVO, new CategoryService() ),
  currentselectedNode: {},
  data: [],
  selectedNodes: []
};
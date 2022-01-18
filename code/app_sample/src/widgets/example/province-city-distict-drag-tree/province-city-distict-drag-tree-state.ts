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
          codeName: 'District',
          majorField: 'true',
          keyField: 'DistrictId',
        },
        appDeDataSet: { codeName: 'FetchDefault' },
        appendPNodeId: false,
        counterId: '',
        counterMode: 0,
        disableSelect: false,
        enableCheck: false,
        enableQuickSearch: false,
        expandFirstOnly: false,
        expanded: false,
        hasPSDETreeNodeRSs: false,
        idPSAppDEField: { codeName: 'DistrictId' },
        id: 'DISTRICT',
        navFilter: '',
        nodeType: 'DISTRICT',
        rootNode: false,
        selectFirstOnly: false,
        selected: false,
        textPSAppDEField: { codeName: 'DistrictName' },
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
          codeName: 'Province',
          majorField: 'true',
          keyField: 'ProvinceId',
        },
        appDeDataSet: { codeName: 'FetchDefault' },
        appendPNodeId: false,
        counterId: '',
        counterMode: 0,
        disableSelect: false,
        enableCheck: false,
        enableQuickSearch: false,
        expandFirstOnly: false,
        expanded: false,
        hasPSDETreeNodeRSs: true,
        idPSAppDEField: { codeName: 'ProvinceId' },
        id: 'PROVINCE',
        navFilter: '',
        nodeType: 'PROVINCE',
        rootNode: false,
        selectFirstOnly: false,
        selected: false,
        textPSAppDEField: { codeName: 'ProvinceName' },
        treeNodeType: 'DE',
      },
      {
        allowDrag: false,
        allowDrop: false,
        allowEditText: false,
        allowOrder: false,
        appDataEntity: {
          codeName: 'City',
          keyField: 'CityId',
          majorField: 'true',
        },
        appDeDataSet: { codeName: 'FetchDefault' },
        appendPNodeId: false,
        counterId: '',
        counterMode: 0,
        disableSelect: false,
        enableCheck: false,
        enableQuickSearch: false,
        expandFirstOnly: false,
        expanded: false,
        hasPSDETreeNodeRSs: true,
        idPSAppDEField: { codeName: 'CityId' },
        id: 'CITY',
        navFilter: '',
        nodeType: 'CITY',
        rootNode: false,
        selectFirstOnly: false,
        selected: false,
        textPSAppDEField: { codeName: 'CityName' },
        treeNodeType: 'DE',
      },
    ];
  }

  get treeNodeRSs(): TreeNodeRSVO[] {
    return [
      {
        childDeTreeNode: {
          id: 'CITY'
        },
        parentPSDER1N: { codeName: 'Province' },
        parentPSAppDEField: { codeName: 'ProvinceId' },
        parentPSDETreeNode: { id: 'PROVINCE' },
        parentValueLevel: 1,
        searchMode: 2
      },
      {
        childDeTreeNode: {
          id: 'PROVINCE'
        },
        parentPSDETreeNode: { id: 'ROOT' },
        parentValueLevel: 1,
        searchMode: 2
      },
      {
        childDeTreeNode: {
          id: 'DISTRICT'
        },
        parentPSDER1N: { codeName: 'City' },
        parentPSAppDEField: { codeName: 'CityId' },
        parentPSDETreeNode: { id: 'CITY' },
        parentValueLevel: 1,
        searchMode: 2
      },
    ];
  }
}

export const ctrlState = {
  controlCodeName: 'ProvinceCityDistict_Drag',
  controlName: 'tree',
  controlService: new TreeService<ControlVO>(ControlVO, new ExampleService() ),
  currentselectedNode: {},
  data: [],
  selectedNodes: []
};
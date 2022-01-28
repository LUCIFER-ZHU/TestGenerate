import { ControlVOBase, TreeControlVO, TreeNodeVO, TreeNodeRSVO, TreeService } from "@core";
import { ChartDataService } from '@api/chart-data/chart-data-service';

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
          codeName: 'ChartData',
          keyField: 'ChartDataId',
          majorField: 'ChartDataName',
        },
        appendPNodeId: false,
        counterId: '',
        counterMode: 0,
        disableSelect: false,
        enableCheck: false,
        enableQuickSearch: true,
        expandFirstOnly: false,
        expanded: false,
        hasPSDETreeNodeRSs: false,
        id: 'GaugeChart',
        navFilter: '',
        navView: {
          viewName: 'ChartDataGaugeChartView'
        },
        nodeType: 'GaugeChart',
        rootNode: false,
        selectFirstOnly: false,
        selected: false,
        text: '仪表盘',
        treeNodeType: 'STATIC',
      },
      {
        allowDrag: false,
        allowDrop: false,
        allowEditText: false,
        allowOrder: false,
        appDataEntity: {
          codeName: 'ChartData',
          keyField: 'ChartDataId',
          majorField: 'ChartDataName',
        },
        appendPNodeId: false,
        counterId: '',
        counterMode: 0,
        disableSelect: false,
        enableCheck: false,
        enableQuickSearch: true,
        expandFirstOnly: false,
        expanded: false,
        hasPSDETreeNodeRSs: false,
        id: 'RingPie',
        navFilter: '',
        navView: {
          viewName: 'ChartDataRingPieChartView'
        },
        nodeType: 'RingPie',
        rootNode: false,
        selectFirstOnly: false,
        selected: false,
        text: '环形饼图',
        treeNodeType: 'STATIC',
      },
      {
        allowDrag: false,
        allowDrop: false,
        allowEditText: false,
        allowOrder: false,
        appDataEntity: {
          codeName: 'ChartData',
          keyField: 'ChartDataId',
          majorField: 'ChartDataName',
        },
        appendPNodeId: false,
        counterId: '',
        counterMode: 0,
        disableSelect: false,
        enableCheck: false,
        enableQuickSearch: true,
        expandFirstOnly: false,
        expanded: false,
        hasPSDETreeNodeRSs: false,
        id: 'KLineChart',
        navFilter: '',
        navigateContext: {
          CHARTTYPE: 'kline',
        },
        navigateParams: {
          charttype: 'kline',
        },
        navView: {
          viewName: 'ChartDataKLineChartView'
        },
        nodeType: 'KLineChart',
        rootNode: false,
        selectFirstOnly: false,
        selected: false,
        text: 'K线图',
        treeNodeType: 'STATIC',
      },
      {
        allowDrag: false,
        allowDrop: false,
        allowEditText: false,
        allowOrder: false,
        appDataEntity: {
          codeName: 'ChartData',
          keyField: 'ChartDataId',
          majorField: 'ChartDataName',
        },
        appendPNodeId: false,
        counterId: '',
        counterMode: 0,
        disableSelect: false,
        enableCheck: false,
        enableQuickSearch: true,
        expandFirstOnly: false,
        expanded: false,
        hasPSDETreeNodeRSs: false,
        id: 'StackBar',
        navFilter: '',
        navView: {
          viewName: 'ChartDataStackBarChartView'
        },
        nodeType: 'StackBar',
        rootNode: false,
        selectFirstOnly: false,
        selected: false,
        text: '堆叠柱状图',
        treeNodeType: 'STATIC',
      },
      {
        allowDrag: false,
        allowDrop: false,
        allowEditText: false,
        allowOrder: false,
        appDataEntity: {
          codeName: 'ChartData',
          keyField: 'ChartDataId',
          majorField: 'ChartDataName',
        },
        appendPNodeId: false,
        counterId: '',
        counterMode: 0,
        disableSelect: false,
        enableCheck: false,
        enableQuickSearch: true,
        expandFirstOnly: false,
        expanded: false,
        hasPSDETreeNodeRSs: false,
        id: 'lineChart',
        navFilter: '',
        navigateContext: {
          CHARTTYPE: 'line',
        },
        navigateParams: {
          charttype: 'line',
        },
        navView: {
          viewName: 'ChartDataLineChartView'
        },
        nodeType: 'lineChart',
        rootNode: false,
        selectFirstOnly: false,
        selected: false,
        text: '折线图',
        treeNodeType: 'STATIC',
      },
      {
        allowDrag: false,
        allowDrop: false,
        allowEditText: false,
        allowOrder: false,
        appDataEntity: {
          codeName: 'ChartData',
          keyField: 'ChartDataId',
          majorField: 'ChartDataName',
        },
        appendPNodeId: false,
        counterId: '',
        counterMode: 0,
        disableSelect: false,
        enableCheck: false,
        enableQuickSearch: true,
        expandFirstOnly: false,
        expanded: false,
        hasPSDETreeNodeRSs: false,
        id: 'funnel',
        navFilter: '',
        navigateContext: {
          CHARTTYPE: 'funnel',
        },
        navigateParams: {
          charttype: 'funnel',
        },
        navView: {
          viewName: 'ChartDataFunnelChartView'
        },
        nodeType: 'funnel',
        rootNode: false,
        selectFirstOnly: false,
        selected: false,
        text: '漏斗图',
        treeNodeType: 'STATIC',
      },
      {
        allowDrag: false,
        allowDrop: false,
        allowEditText: false,
        allowOrder: false,
        appDataEntity: {
          codeName: 'ChartData',
          keyField: 'ChartDataId',
          majorField: 'ChartDataName',
        },
        appendPNodeId: false,
        counterId: '',
        counterMode: 0,
        disableSelect: false,
        enableCheck: false,
        enableQuickSearch: true,
        expandFirstOnly: false,
        expanded: false,
        hasPSDETreeNodeRSs: false,
        id: 'pieChart',
        navFilter: '',
        navigateContext: {
          CHARTTYPE: 'pie',
        },
        navigateParams: {
          charttype: 'pie',
        },
        navView: {
          viewName: 'ChartDataPieChartView'
        },
        nodeType: 'pieChart',
        rootNode: false,
        selectFirstOnly: false,
        selected: false,
        text: '饼图',
        treeNodeType: 'STATIC',
      },
      {
        allowDrag: false,
        allowDrop: false,
        allowEditText: false,
        allowOrder: false,
        appDataEntity: {
          codeName: 'ChartData',
          keyField: 'ChartDataId',
          majorField: 'ChartDataName',
        },
        appendPNodeId: false,
        counterId: '',
        counterMode: 0,
        disableSelect: false,
        enableCheck: false,
        enableQuickSearch: true,
        expandFirstOnly: false,
        expanded: false,
        hasPSDETreeNodeRSs: false,
        id: 'barChart',
        navFilter: '',
        navigateContext: {
          CHARTTYPE: 'bar',
        },
        navigateParams: {
          charttype: 'bar',
        },
        navView: {
          viewName: 'ChartDataBarChartView'
        },
        nodeType: 'barChart',
        rootNode: false,
        selectFirstOnly: false,
        selected: false,
        text: '柱状图',
        treeNodeType: 'STATIC',
      },
      {
        allowDrag: false,
        allowDrop: false,
        allowEditText: false,
        allowOrder: false,
        appDataEntity: {
          codeName: 'ChartData',
          keyField: 'ChartDataId',
          majorField: 'ChartDataName',
        },
        appendPNodeId: false,
        counterId: '',
        counterMode: 0,
        disableSelect: false,
        enableCheck: false,
        enableQuickSearch: true,
        expandFirstOnly: false,
        expanded: false,
        hasPSDETreeNodeRSs: false,
        id: 'scatter',
        navFilter: '',
        navigateContext: {
          CHARTTYPE: 'scatter',
        },
        navigateParams: {
          charttype: 'scatter',
        },
        navView: {
          viewName: 'ChartDataChartView'
        },
        nodeType: 'scatter',
        rootNode: false,
        selectFirstOnly: false,
        selected: false,
        text: '散点图',
        treeNodeType: 'STATIC',
      },
      {
        allowDrag: false,
        allowDrop: false,
        allowEditText: false,
        allowOrder: false,
        appDataEntity: {
          codeName: 'ChartData',
          keyField: 'ChartDataId',
          majorField: 'ChartDataName',
        },
        appendPNodeId: false,
        counterId: '',
        counterMode: 0,
        disableSelect: false,
        enableCheck: false,
        enableQuickSearch: true,
        expandFirstOnly: false,
        expanded: false,
        hasPSDETreeNodeRSs: false,
        id: 'map',
        navFilter: '',
        navigateContext: {
          CHARTTYPE: 'map',
        },
        navigateParams: {
          charttype: 'map',
        },
        navView: {
          viewName: 'ChartDataUsr3ChartView'
        },
        nodeType: 'map',
        rootNode: false,
        selectFirstOnly: false,
        selected: false,
        text: '地图',
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
          codeName: 'ChartData',
          keyField: 'ChartDataId',
          majorField: 'ChartDataName',
        },
        appendPNodeId: false,
        counterId: '',
        counterMode: 0,
        disableSelect: false,
        enableCheck: false,
        enableQuickSearch: true,
        expandFirstOnly: false,
        expanded: false,
        hasPSDETreeNodeRSs: false,
        id: 'AreaChart',
        navFilter: '',
        navigateContext: {
          CHARTTYPE: 'area',
        },
        navigateParams: {
          charttype: 'area',
        },
        navView: {
          viewName: 'ChartDataAreaChartView'
        },
        nodeType: 'AreaChart',
        rootNode: false,
        selectFirstOnly: false,
        selected: false,
        text: '区域图',
        treeNodeType: 'STATIC',
      },
      {
        allowDrag: false,
        allowDrop: false,
        allowEditText: false,
        allowOrder: false,
        appDataEntity: {
          codeName: 'ChartData',
          keyField: 'ChartDataId',
          majorField: 'ChartDataName',
        },
        appendPNodeId: false,
        counterId: '',
        counterMode: 0,
        disableSelect: false,
        enableCheck: false,
        enableQuickSearch: true,
        expandFirstOnly: false,
        expanded: false,
        hasPSDETreeNodeRSs: false,
        id: 'GroupBar',
        navFilter: '',
        navView: {
          viewName: 'ChartDataGroupBarChartView'
        },
        nodeType: 'GroupBar',
        rootNode: false,
        selectFirstOnly: false,
        selected: false,
        text: '分组柱状图',
        treeNodeType: 'STATIC',
      },
      {
        allowDrag: false,
        allowDrop: false,
        allowEditText: false,
        allowOrder: false,
        appDataEntity: {
          codeName: 'ChartData',
          keyField: 'ChartDataId',
          majorField: 'ChartDataName',
        },
        appendPNodeId: false,
        counterId: '',
        counterMode: 0,
        disableSelect: false,
        enableCheck: false,
        enableQuickSearch: true,
        expandFirstOnly: false,
        expanded: false,
        hasPSDETreeNodeRSs: false,
        id: 'RadarChart',
        navFilter: '',
        navigateContext: {
          CHARTTYPE: 'radar',
        },
        navigateParams: {
          charttype: 'radar',
        },
        navView: {
          viewName: 'ChartDataRadarChartView'
        },
        nodeType: 'RadarChart',
        rootNode: false,
        selectFirstOnly: false,
        selected: false,
        text: '雷达图',
        treeNodeType: 'STATIC',
      },
      {
        allowDrag: false,
        allowDrop: false,
        allowEditText: false,
        allowOrder: false,
        appDataEntity: {
          codeName: 'ChartData',
          keyField: 'ChartDataId',
          majorField: 'ChartDataName',
        },
        appendPNodeId: false,
        counterId: '',
        counterMode: 0,
        disableSelect: false,
        enableCheck: false,
        enableQuickSearch: true,
        expandFirstOnly: false,
        expanded: false,
        hasPSDETreeNodeRSs: false,
        id: 'mulChart',
        navFilter: '',
        navView: {
          viewName: 'ChartDataUsr2ChartView'
        },
        nodeType: 'mulChart',
        rootNode: false,
        selectFirstOnly: false,
        selected: false,
        text: '多序列',
        treeNodeType: 'STATIC',
      },
    ];
  }

  get treeNodeRSs(): TreeNodeRSVO[] {
    return [
      {
        childDeTreeNode: {
          id: 'lineChart'
        },
        parentPSDETreeNode: { id: 'ROOT' },
        parentValueLevel: 1,
        searchMode: 3
      },
      {
        childDeTreeNode: {
          id: 'pieChart'
        },
        parentPSDETreeNode: { id: 'ROOT' },
        parentValueLevel: 1,
        searchMode: 3
      },
      {
        childDeTreeNode: {
          id: 'RingPie'
        },
        parentPSDETreeNode: { id: 'ROOT' },
        parentValueLevel: 1,
        searchMode: 3
      },
      {
        childDeTreeNode: {
          id: 'barChart'
        },
        parentPSDETreeNode: { id: 'ROOT' },
        parentValueLevel: 1,
        searchMode: 3
      },
      {
        childDeTreeNode: {
          id: 'GroupBar'
        },
        parentPSDETreeNode: { id: 'ROOT' },
        parentValueLevel: 1,
        searchMode: 3
      },
      {
        childDeTreeNode: {
          id: 'StackBar'
        },
        parentPSDETreeNode: { id: 'ROOT' },
        parentValueLevel: 1,
        searchMode: 3
      },
      {
        childDeTreeNode: {
          id: 'funnel'
        },
        parentPSDETreeNode: { id: 'ROOT' },
        parentValueLevel: 1,
        searchMode: 3
      },
      {
        childDeTreeNode: {
          id: 'AreaChart'
        },
        parentPSDETreeNode: { id: 'ROOT' },
        parentValueLevel: 1,
        searchMode: 3
      },
      {
        childDeTreeNode: {
          id: 'KLineChart'
        },
        parentPSDETreeNode: { id: 'ROOT' },
        parentValueLevel: 1,
        searchMode: 3
      },
      {
        childDeTreeNode: {
          id: 'RadarChart'
        },
        parentPSDETreeNode: { id: 'ROOT' },
        parentValueLevel: 1,
        searchMode: 3
      },
      {
        childDeTreeNode: {
          id: 'GaugeChart'
        },
        parentPSDETreeNode: { id: 'ROOT' },
        parentValueLevel: 1,
        searchMode: 3
      },
      {
        childDeTreeNode: {
          id: 'scatter'
        },
        parentPSDETreeNode: { id: 'ROOT' },
        parentValueLevel: 1,
        searchMode: 3
      },
      {
        childDeTreeNode: {
          id: 'mulChart'
        },
        parentPSDETreeNode: { id: 'ROOT' },
        parentValueLevel: 1,
        searchMode: 3
      },
      {
        childDeTreeNode: {
          id: 'map'
        },
        parentPSDETreeNode: { id: 'ROOT' },
        parentValueLevel: 1,
        searchMode: 3
      },
    ];
  }
}

export const ctrlState = {
  controlCodeName: 'ExpForChart',
  controlName: 'treeexpbar_tree',
  controlService: new TreeService<ControlVO>(ControlVO, new ChartDataService() ),
  currentSelectedNode: {},
  data: [],
  echoSelectedNodes: [],
  expandedKeys: [],
  selectedKeys: [],
  selectedNodes: []
};
export const ctrlState = {
  controlCodeName: 'CardTreeExpViewtreeexpbar',
  controlName: 'treeexpbar',
  counter: 0,
  xDataControlName: 'treeexpbar_tree',
  selection: {},
  showTitleBar: false,
  split: 0.2,
  title: '',
  titleRes: '',
  viewRefs: [
    {
      name: 'EXPITEM:Base',
      viewName: 'KanbanDataCardBaseDataView',
      deKeyField: 'KanbanData',
    },
    {
      name: 'EXPITEM:kanban',
      viewName: 'KanbanDataCardKanbanView',
      deKeyField: 'KanbanData',
    },
    {
      name: 'EXPITEM:CssAndIcon',
      viewName: 'KanbanDataCardBaseDataView_CSS',
      deKeyField: 'KanbanData',
    },
    {
      name: 'EXPITEM:DataItem',
      viewName: 'KanbanDataCardDataItemDataView',
      deKeyField: 'KanbanData',
    },
    {
      name: 'EXPITEM:ValueFormat',
      viewName: 'KanbanDataValueFormatCardDataView',
      deKeyField: 'KanbanData',
    },
  ]
};

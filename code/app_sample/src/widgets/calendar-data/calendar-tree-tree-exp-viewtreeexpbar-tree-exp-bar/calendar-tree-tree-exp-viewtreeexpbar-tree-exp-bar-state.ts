export const ctrlState = {
  controlCodeName: 'CalendarTreeTreeExpViewtreeexpbar',
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
      viewName: 'CalendarDataBaseCalendarView',
      deKeyField: 'CalendarData',
    },
    {
      name: 'EXPITEM:TimeLine',
      viewName: 'CalendarDataTimeLineCalendarView',
      deKeyField: 'CalendarData',
    },
    {
      name: 'EXPITEM:Css',
      viewName: 'CalendarDataBaseCalendarView_CSS',
      deKeyField: 'CalendarData',
    },
    {
      name: 'EXPITEM:MDataSource',
      viewName: 'CalendarDataMDataSourceCalendarView',
      deKeyField: 'CalendarData',
    },
    {
      name: 'EXPITEM:ItemLayout',
      viewName: 'CalendarDataItemLayoutTimeLineCalendarView',
      deKeyField: 'CalendarData',
    },
  ]
};

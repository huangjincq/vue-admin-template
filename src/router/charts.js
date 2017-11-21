/*
* 图表模块
* */
const _import = require('./_import_' + process.env.NODE_ENV)

export default [
  {
    path: 'page1',
    name: '图表-1',
    component: _import('charts/page1'),
    children: [{ path: 'index', name: '简介', component: _import('introduction/index') }]
  },
  {
    path: 'page2',
    name: '图表-2',
    component: _import('charts/page2')
  }
]

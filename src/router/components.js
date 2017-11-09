/*
* 组件模块
* */
const _import = require('./_import_' + process.env.NODE_ENV)

export default [
  { path: 'index', name: '介绍', component: _import('components/index') }
]

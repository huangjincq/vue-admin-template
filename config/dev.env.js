'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  BASE_API: '"http://www.easy-mock.com/mock/59dc61571de3d46fa94cebc7/lolapp"'
})

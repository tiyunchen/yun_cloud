import {defineConfig} from 'umi';
import routers from "./src/config/routers";

const path = require('path')

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  favicon: '/logo.png',
  routes: routers,
  fastRefresh: {},
  antd: {
    dark: false,
    compact: true,
  },
  alias: {
    '@public': '/public'
  },
  theme: {
    'border-radius-base': '4px',
  },
  chainWebpack(config) {
    config.module.rule('less')
      .test(/\.less$/)
      .oneOf('css')
      .use('sass-resources-loader')
      .loader('sass-resources-loader')
      .options({
        resources: [
          path.resolve(__dirname, './src/styles/index.less'),// 全局样式
        ],
      })
      .end();
  },
  proxy: {
    '/api': {
      'target': 'http://localhost:3000',
      'changeOrigin': true,
      'pathRewrite': {'^/api': ''},
    },
  },
});

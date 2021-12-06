import {defineConfig} from 'umi';
import routers from "./src/config/routers";

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
    '@config': '/config',
    '@public': '/public'
  },
  theme: {
    'border-radius-base': '4px',
  },
  proxy: {
    '/api': {
      'target': 'http://localhost:3000',
      'changeOrigin': true,
      'pathRewrite': {'^/api': ''},
    },
  },
});

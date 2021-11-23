import { defineConfig, RequestConfig } from 'umi';
import routers from "./config/routers";

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
  theme: {
    'border-radius-base': '4px',
  },
  proxy: {
    '/api': {
      'target': 'http://localhost:3000',
      'changeOrigin': true,
      'pathRewrite': { '^/api' : '' },
    },
  },
});

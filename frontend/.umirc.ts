import { defineConfig } from '@umijs/max';
import routers from "./src/routers";

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: '@umijs/max',
  },
  routes: routers,
  proxy: {
    '/yun_service': {
      'target': 'http://localhost:8080',
      'changeOrigin': true,
      'pathRewrite': { '^/yun_service' : '' },
    },
  },
  npmClient: 'pnpm',
});


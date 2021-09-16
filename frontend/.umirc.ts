import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index' },
    {
      path: '/user', component: '@/pages/user',
      routes: [
        {
          path: '/user/login', component: '@/pages/user/login',exact: true,
        }
      ]
    },
  ],
  fastRefresh: {},
  antd: {
    dark: false,
    compact: true,
  },
});

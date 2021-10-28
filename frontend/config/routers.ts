export default [
  {
    path: '/',
    component: '@/pages/index',
    title: '探索世界'
  },
  {
    path: '/user', component: '@/pages/user',
    routes: [
      {
        path: '/user/login',
        component: '@/pages/user/login',
        exact: true,
        title: '用户登入'
      },
      {
        path: '/user/register',
        component: '@/pages/user/register',
        title: '用户注册',
        exact: true,
      }
    ]
  },
]

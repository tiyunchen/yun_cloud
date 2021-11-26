import allPath from './path'

export default [
  {
    path: allPath.home.url,
    component: '@/pages/index',
    title: '探索世界',
    routes: [
      {
        path: '/user',
        component: '@/pages/user',
        routes: [
          {
            path: allPath.login.url,
            component: '@/pages/user/login',
            exact: true,
            title: '用户登入'
          },
          {
            path: allPath.register.url,
            component: '@/pages/user/register',
            title: '用户注册',
            exact: true,
          }
        ]
      },
      {
        path: allPath.todoList.url,
        component: '@/pages/todo',
        title: '欢迎来到待办'
      },
      {
        path: allPath.xmind.url,
        // component: '@/pages/todo',
        title: '欢迎来到思维导图'
      }
    ]
  },

]

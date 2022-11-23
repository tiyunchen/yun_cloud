export default [
    {
        path: '/',
        redirect: '/home',
    },
    {
        name: '首页',
        path: '/home',
        component: './Home',
    },
    {
        name: '权限演示',
        path: '/access',
        component: './Access',
    },
    {
        name: ' CRUD 示例',
        path: '/table',
        component: './Table',
    },
    {
        name: '用户中心',
        path: '/user',
        component: './User',
        routes: [
            {
                path: '/user/login',
                component: './User/Login'
            },
            {
                path: '/user/register',
                component: './User/Register'
            }
        ]
    },
    {
        name: '待办',
        path: '/todo',
        component: './Todo',
    }
]

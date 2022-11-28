export const routePath = {
    home: '/',
    login: '/user/login',
    register: '/user/register',
    todo: '/todo'
}

export default [
    {
        path: routePath.home,
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
                path: routePath.login,
                component: './User/Login'
            },
            {
                path: routePath.register,
                component: './User/Register'
            }
        ]
    },
    {
        name: '待办',
        path: routePath.todo,
        component: './Todo',
    }
]

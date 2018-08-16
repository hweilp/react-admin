// import Main from '../views/main'
import Index from '../views/index/index'
import Login from '../views/passport/login'
import Register from '../views/passport/register'
import UserList from '../views/user/list'
import AdminList from '../views/admin/list'
import Error from '../views/error'

export default {
  menu: [
    {
      key:'10000',
      path: '/',
      title: '',
      icon: 'main',
      component: Login,
      pathName: 'Main'
    },
    {
      key:'20000',
      path: '/login',
      title: '登录',
      icon: 'login',
      component: Login,
      pathName: 'Login'
    },
    {
      key:'30000',
      path: '/register',
      title: '注册',
      icon: 'register',
      component: Register,
      pathName: 'Register'
    },
    {
      key:'40000',
      path: '/404',
      title: '404',
      icon: 'error',
      component: Error,
      pathName: 'Error'
    }
  ],
  auth: [
    {
      key:'40000',
      path: '*',
      title: '404',
      icon: 'error',
      component: Error,
      pathName: 'Error'
    },
    {
      key:'10000',
      path: '/',
      title: '',
      icon: 'main',
      component: Index,
      pathName: 'Index',
      auth:[],
      children: [
        {
          key:'10001',
          path: '/index',
          title: '首页',
          icon: 'index',
          component: Index,
          pathName: 'Index',
          auth:[]
        },
        {
          key:'10002',
          path: '/user/list',
          title: '用户',
          icon: 'user',
          component: UserList,
          pathName: 'UserList',
          auth:[]
        },
        {
          key:'10003',
          path: '/admin/list',
          title: '管理员',
          icon: 'admin',
          component: AdminList,
          pathName: 'AdminList',
          auth:[]
        },
        {
          key:'99999',
          path: '/404',
          title: '404',
          icon: 'error',
          component: Error,
          pathName: 'Error',
          auth:[]
        }
      ]
    },
    {
      key:'20000',
      path: '/login',
      title: '登录',
      icon: 'login',
      component: Login,
      pathName: 'Login'
    },
    {
      key:'30000',
      path: '/register',
      title: '注册',
      icon: 'register',
      component: Register,
      pathName: 'Register'
    }
  ]
}
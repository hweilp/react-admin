import Index from '../views/index/index'
import Login from '../views/passport/login'
import Register from '../views/passport/register'
import UserList from '../views/user/list'
import AdminList from '../views/admin/list'
import Error from '../views/error'

export default {
  menu: [
    {
      key:'10001',
      path: '/app/index',
      title: '首页',
      icon: 'index',
      component: Index,
      pathName: 'Index',
      auth:[]
    },
    {
      key:'10002',
      path: '/app/user/list',
      title: '用户',
      icon: 'user',
      component: UserList,
      pathName: 'UserList',
      auth:[]
    },
    {
      key:'10003',
      path: '/app/admin/list',
      title: '管理员',
      icon: 'admin',
      component: AdminList,
      pathName: 'AdminList',
      auth:[]
    },
  ]
}
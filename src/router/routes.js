import Index from '../views/index/index'
import UserList from '../views/user/list'
import AdminList from '../views/admin/list'

export default {
  menu: [
    {
      key:'10001',
      path: '/app/index',
      title: '首页',
      icon: 'home',
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
      auth:[],
      children: [
        {
          key:'10012',
          path: '/app/user/list',
          title: '用户列表',
        }
      ]
    },
    {
      key:'10003',
      path: '/app/admin/list',
      title: '管理员',
      icon: 'usergroup-add',
      component: AdminList,
      pathName: 'AdminList',
      auth:[]
    },
  ]
}
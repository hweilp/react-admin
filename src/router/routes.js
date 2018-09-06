import Index from '../views/index/index'
import Test from '../views/test'
import UserList from '../views/user/list'
import UserAdd from '../views/user/add'
import AdminList from '../views/admin/list'

export default {
  menu: [
    {
      key:'00000',
      path: '/app/test',
      title: '测试',
      icon: 'home',
      component: Test,
      pathName: 'Test',
      auth:[]
    },
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
      auth:[],
      children: [
        {
          key:'10012',
          path: '/app/user/list',
          component: UserList,
          title: '用户列表',
        },
        {
          key:'10013',
          path: '/app/user/add',
          component: UserAdd,
          title: '用户添加',
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
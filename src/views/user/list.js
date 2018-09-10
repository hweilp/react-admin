import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Button, Table, Modal, message } from 'antd'
import { connect } from 'react-redux'
import { UserList, UserDelete } from '../../api'


class UserLists extends Component{
  constructor (props) {
    super (props)
    this.state = {
      selectedRowKeys: [],
      loading: false,
      tabLoading: false,
      data: this.props.UserList.list,
      columns: [
        {
          title: '姓名',
          dataIndex: 'user_name',
          align: 'center'
        },
        {
          title: '电话',
          dataIndex: 'user_mobile',
          align: 'center'
        },
        {
          title: '头像',
          dataIndex: 'user_avatar',
          align: 'center',
          render: (text, record) => (
            <span>
              <img className={'table-img'} src={record.user_avatar} alt=""/>
            </span>
          )
        },
        {
          title: '注册时间',
          dataIndex: 'created_at',
          align: 'center'
        },
        {
          title: '操作',
          key: 'action',
          align: 'center',
          render: (text, record) => (
            <span>
              <NavLink className={'a-info'} to={'/app/user/detail?id=' + record.id + '&type=2'}>编辑</NavLink>
              <a className={'a-danger'} style={{marginLeft:'5px'}} onClick={this.handleDelete.bind(this, record)}>删除</a>
            </span>
          )
        }
      ],
      pageOptions: {
        total: 0,
        current: 1,
        pageSize: 10,
        pageSizeOptions: ['5', '10'],
      }
    }
  }
  componentWillMount = () => {
    this.getData()
  }
  // 数据获取
  async getData () {
    this.setState({
      tabLoading: true
    })
    const data = await UserList().then(res => (res))
    if (data.data) {
      data.data.list.map(item => {
        return item.key = item.id
      })
    }

    this.setState({
      tabLoading: false,
      loading: false,
      data: data.data ? data.data.list : []
    })
  }
  // 刷新
  reload = () => {
    this.setState({ loading: true })
    this.getData()
  }
  // 勾选
  onSelectChange = (selectedRowKeys) => {
    this.setState({ selectedRowKeys })
  }
  // 分页
  pageChange = (page, pageSize) => {
    // console.log(page, pageSize)
  }
  handleAdd = () => {
    this.props.history.push('/app/user/add')
  }
  handleEdit = (val) => {
    this.props.history.push({pathname: '/app/user/detail', query: {id: val.id}})
  }
  // 删除
  handleDelete = (val) => {
    let that = this
    Modal.confirm({
      title: '提示',
      content: '确认删除用户 ' + val.user_name,
      okText: '确认',
      cancelText: '取消',
      onOk: () => {
        console.log('ok')
        UserDelete({id: val.id}).then(res => {
          if (res.code === 2000) {
            message.success(res.msg)
            that.getData()
          }
        }).catch(err => {
          console.log(err)
        })
      },
      onCancel: () => {
      }
    })
  }
  render() {
    const { loading, selectedRowKeys, columns} = this.state
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
    }
    let pageOptions = {
      total: this.state.pageOptions.total,
      defaultCurrent: this.state.pageOptions.current,
      pageSize: this.state.pageOptions.pageSize,
      showSizeChanger: true,
      showQuickJumper: true,
      size: 'small',
      itemRender: (current, type, originalElement) => {
        if (type === 'pageSize') {
          return <a>条</a>
        }
        return originalElement;
      },
      showTotal:(total, range)=> (`共 ${total} 条`),
      pageSizeOptions: ['5', '10', '20', '40'],
      onShowSizeChange: (current, pageSize) => {
        this.pageChange(current, pageSize)
      },
      onChange:(current, pageSize) => {
        this.pageChange(current, pageSize)
      },
    }
    return (
      <div className="page-main">
        <div className={'page-title'}>
          <h3>用户列表</h3>
        </div>
        <div className={'page-opr'}>
          <Button icon="plus" onClick={this.handleAdd}>添加</Button>
          {/*<Button icon="search">搜索</Button>*/}
          <Button onClick={this.reload} loading={loading} icon="reload">刷新</Button>
        </div>
        <div className={'page-area'}>
          <Table loading={this.state.tabLoading} bordered rowSelection={rowSelection} columns={columns} dataSource={this.state.data} pagination={pageOptions}/>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return { UserList: state.UserReducer }
};

export default connect(mapStateToProps)(UserLists)

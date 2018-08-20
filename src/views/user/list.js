import React, { Component } from 'react'
import { Button, Table } from 'antd'
import { connect } from 'react-redux'
// import { user_list } from '../../store/action/action'
import { UserList } from '../../api'


class UserLists extends Component{
  constructor (props) {
    super (props)
    this.state = {
      selectedRowKeys: [],
      loading: false,
      data: this.props.UserList.list,
      columns: [
        {
          title: '姓名',
          dataIndex: 'user_name'
        },
        {
          title: '电话',
          dataIndex: 'user_mobile'
        },
        {
          title: '密码',
          dataIndex: 'password'
        },
        {
          title: '注册时间',
          dataIndex: 'created_at'
        },
        {
          title: '操作',
          key: 'action',
          render: (text, record) => (
            <span>
              <a className={'a-info'} onClick={this.handleEdit.bind(this, record.id)}>编辑</a>
              <a className={'a-danger'} style={{marginLeft:'5px'}} onClick={this.handleDelete.bind(this, record.id)}>删除</a>
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
    const data = await UserList().then(res => {
      return res.data
    })
    data.list.map(item => {
      return item.key = item.id
    })
    this.setState({
      loading: false,
      data: data.list
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
    console.log(page, pageSize)
  }
  handleEdit = (event) => {
    console.log(event)
  }
  // 删除
  handleDelete = (event) => {
    console.log(event)
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
      showTotal:(total, range)=> (`共 ${total} 条`),
      pageSizeOptions: ['5', '10', '15', '20'],
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
          <Button icon="search">搜索</Button>
          <Button onClick={this.reload} loading={loading} icon="reload">刷新</Button>
        </div>
        <div className={'page-area'}>
          <Table bordered rowSelection={rowSelection} columns={columns} dataSource={this.state.data} pagination={pageOptions}/>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return { UserList: state.UserReducer }
};

export default connect(mapStateToProps)(UserLists)

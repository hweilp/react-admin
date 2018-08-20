import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { Menu, Dropdown, Icon } from 'antd'
import { user_login_out } from '../../store/action/action'
import { Loginout } from '../../api'


class HeaderTop extends Component{
  constructor (props) {
    super (props)
    this.state = {
      visible: false
    }
  }
  loginOut = (e) => {
    Loginout().then( res => {
      this.props.dispatch(user_login_out())
    })
  }
  handleVisibleChange = (visible) => {
    this.setState({ visible });
  }

  render () {
    const userInfo = this.props.userInfo
    const menu = (
      <Menu>
        <Menu.Item key="1">
          <NavLink to={'/app/index'}>首 页</NavLink>
        </Menu.Item>
        <Menu.Item key="2" onClick={this.loginOut}>
          <a>退出登录</a>
        </Menu.Item>
      </Menu>
    );
    // console.log(this.props.LoginInfo)
    return (
      <header className={'header-top'}>
        <div className={'header-left'}>
          react - admin
        </div>
        <div className={'header-right'}>
          欢迎，
          <Dropdown
            overlay={menu}
            onVisibleChange={this.handleVisibleChange}
            visible={this.state.visible}
          >
            <a className="ant-dropdown-link" style={{color:'rgb(120, 182, 255)'}}>
              {userInfo.user_name}<Icon type="down" />
            </a>
          </Dropdown>

        </div>
      </header>
    )
  }
}

const mapStateToProps = (state) => {
  return { userInfo: state.LoginReducer.userInfo }
};

export default connect(mapStateToProps)(HeaderTop)

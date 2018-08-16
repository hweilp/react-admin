import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
// import { Menu, Icon } from 'antd'
import '../../styles/sliderMenu.less'


export default class SliderMenu extends Component{
  render () {
    return (
      <div className={'aside'}>
        <div className={'slider-item'}>
          <NavLink to="/app/user/list" replace>go to UserList</NavLink>
        </div>
        <div className={'slider-item'}>
          <NavLink to="/app/admin/list" replace>go to AdminList</NavLink>
        </div>
      </div>
    )
  }
}
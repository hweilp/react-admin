import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
import '../../styles/sliderMenu.less'


export default class SliderMenu extends Component{
  render () {
    return (
      <div className={'aside'}>
        <div className={'slider-item'}>
          <NavLink to="/user/list">go to UserList</NavLink>
        </div>
        <div className={'slider-item'}>
          <NavLink to="/admin/list">go to AdminList</NavLink>
        </div>
      </div>
    )
  }
}
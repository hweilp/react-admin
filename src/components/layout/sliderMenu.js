import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
import { Menu, Icon } from 'antd'
import Routes from '../../router/routes'
import '../../styles/sliderMenu.less'

const SubMenu = Menu.SubMenu

export default class SliderMenu extends Component{
  constructor (props) {
    super (props)
    this.state = {
      collapsed: false
    }
  }
  render () {
    return (
      <div className={'aside'}>
        <Menu
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          theme="dark"
          inlineCollapsed={this.state.collapsed}
        >
          {
            Routes.menu.map(item => {
              if (!item.noShow) {
                if (item.children) {
                  return <SubMenu key={item.key} title={<span><Icon type={item.icon} /><span>{item.title}</span></span>}>
                    {
                      item.children.map(items => {
                        if (!items.noShow) {
                          return <Menu.Item key={items.key}><NavLink to={items.path} replace>{items.title}</NavLink></Menu.Item>
                        } else {
                          return null
                        }
                      })
                    }
                  </SubMenu>
                } else {
                  return  <Menu.Item key={item.key}>
                    <Icon type={item.icon} />
                    <NavLink to={item.path} replace>{item.title}</NavLink>
                  </Menu.Item>
                }
              } else {
                return null
              }
            })
          }
        </Menu>
      </div>
    )
  }
}
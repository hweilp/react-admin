import React, { Component } from 'react'
import HeaderTop from '../components/layout/header'
import SliderMenu from '../components/layout/sliderMenu'
import '../styles/layout.less'

export default class Main extends Component{
  render () {
    return (
      <div className={'page-main'}>
        <HeaderTop />
        <div className={'page-content'}>
          <aside className={'page-aside'}>
            <SliderMenu/>
          </aside>
          <article className={'page-article'}>
            {this.props.children}
          </article>
        </div>
      </div>
    )
  }
}
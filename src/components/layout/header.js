import React, { Component } from 'react'

export default class HeaderTop extends Component{
  render () {
    return (
      <header className={'header-top'}>
        <div className={'header-left'}>
          this is header-left
        </div>
        <div className={'header-right'}>
          this is header-right
        </div>
      </header>
    )
  }
}
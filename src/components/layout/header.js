import React, { Component } from 'react'
import { connect } from 'react-redux'

class HeaderTop extends Component{
  constructor (props) {
    super (props)
    this.state = {}
  }
  render () {
    console.log(this.props.LoginInfo)
    return (
      <header className={'header-top'}>
        <div className={'header-left'}>
          react - admin
        </div>
        <div className={'header-right'}>
          欢迎， {this.props.LoginInfo.userInfo.userName}
        </div>
      </header>
    )
  }
}

const mapStateToProps = (state) => {
  return { LoginInfo: state.LoginReducer }
};

export default connect(mapStateToProps)(HeaderTop)

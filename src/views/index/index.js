import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
import Arae from '../../components/area/area'

class Index extends Component{
  onAreaCallback (val) {
    console.log(val)
  }
  render() {
    return (
      <div className="index">
        <div className="index-header">
          this is index
          <NavLink to="/login" style={{marign: '20px 0'}}>login</NavLink>
          <NavLink to="/register">register</NavLink>
          <Arae
            onAreaCallback={this.onAreaCallback.bind(this)}
            className={'area-view'}
            isThreeLevelLinkage={true}
            defaultValue={['500000', '500100', '500101']}
          />
        </div>
      </div>
    )
  }
}
export default Index

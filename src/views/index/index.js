import React, { Component } from 'react';
import {NavLink} from 'react-router-dom'

class Index extends Component{
  render() {
    return (
      <div className="index">
        <div className="index-header">
          this is index
          <NavLink to="/login" style={{marign: '20px 0'}}>login</NavLink>
          <NavLink to="/register">register</NavLink>
        </div>
      </div>
    );
  }
}
export default Index;

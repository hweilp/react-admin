import React, { Component } from 'react';

export default class UserList extends Component{
  render() {
    return (
      <div className="user-list">
        this is UserList
        <style>
          {`
            .user-list{background: grey; height:100%;}
          `}
        </style>
      </div>
    );
  }
}

import React, { Component } from 'react';

export default class Admin extends Component{
  render() {
    return (
      <div className="admin">
        this is admin
        <style>
          {`
            .admin{background: green; height:100%;}
          `}
        </style>
      </div>
    );
  }
}

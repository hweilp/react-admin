import React, { Component } from 'react';
import img from '../vendor/404.png';

export default class Error extends Component{
  render () {
    return (
      <div className={'error-page'}>
        <img src={img} alt={'404'}/>
        <style>{`
          .error-page{
            width:100%;
            height:100%;
            position:relative;
          }
          .error-page img{
            position:absolute;
            left:0;
            right:0;
            bottom:0;
            top:0;
            margin:auto;
          }
        `}</style>
      </div>
    )
  }
}
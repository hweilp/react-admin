import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom'
import Routes from './routes'

export default class router extends Component{
  render () {
    return (
      <Switch>
        {
          Routes.menu.map(item => {
            return <Route exact key={item.key} path={item.path} component={item.component}/>
          })
        }
        <Route path={Routes.errorPage.path} component={Routes.errorPage.component} />
      </Switch>
    )
  }
}
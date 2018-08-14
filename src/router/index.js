import React, { Component } from 'react';
import {Route, Switch, Redirect} from 'react-router-dom'
import Routes from './routes'
import Main from '../views/main'
import Index from '../views/index/index'
import Login from '../views/passport/login'
import Register from '../views/passport/register'
//

export default class router extends Component{
  render () {
    return (
      <Switch>
        <Route exact path={'/login'} component={Login}/>
        <Route exact path={'/register'} component={Register}/>
        <Route path='/' exact render={()=> ( <Redirect to={'/index'}/>)}/>
        <Main>
          <Route exact path={'/index'} component={Index}/>
        </Main>

        {/*{*/}
          {/*Routes.menu.map(item => {*/}
            {/*if (item.children) {*/}
              {/*return <Route exact key={item.key} path={item.path} component={item.component} >*/}
                {/*{*/}
                  {/*item.children.map(items => {*/}
                    {/*return <Route key={items.key} path={items.path} component={items.component}/>*/}
                  {/*})*/}
                {/*}*/}
              {/*</Route>*/}
            {/*} else {*/}
              {/*return <Route exact key={item.key} path={item.path} component={item.component}/>*/}
            {/*}*/}
          {/*})*/}
        {/*}*/}
        <Route path={Routes.errorPage.path} component={Routes.errorPage.component} />
      </Switch>
    )
  }
}
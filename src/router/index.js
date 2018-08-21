import React, { Component } from 'react'
import { connect } from 'react-redux'

import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'

import Routes from './routes'
import Login from '../views/passport/login'
import Register from '../views/passport/register'
import Error from '../views/error'

import HeaderTop from '../components/layout/header'
import SliderMenu from '../components/layout/sliderMenu'
import '../styles/layout.less'

const login = () => (
  <Switch>
    <Route exact path={'/login'} component={Login}/>
    <Route exact path={'/'} component={Login}/>
    <Route exact path={'/register'} component={Register}/>
    <Route exact path={'/error'} component={Error}/>
    <Redirect to={'/login'} />
  </Switch>
)

const loginIn = () => (
  <Switch>
    <Route exact path={'/'}  render={()=> ( <Redirect to={'/app/index'}/>)}/>
    <Route exact path={'/login'} component={Login}/>
    <Route exact path={'/register'} component={Register}/>
    <Route exact path={'/error'} component={Error}/>
    <Route
      path="/app"
      render={() =>
        <div className={'page-container'}>
          <HeaderTop />
          <div className={'page-content'}>
            <aside className={'page-aside'}>
              <SliderMenu/>
            </aside>
            <article className={'page-article'}>
                <Switch>
                  {
                    Routes.menu.map(item => {
                      const route = (r) => (
                        <Route exact path={r.path} component={r.component} key={r.key}/>
                      )
                      return item.component ? route(item) : item.children.map(r => route(r));
                    })
                  }
                  <Route render={()=> ( <Redirect to={'/error'}/>)}/>
                </Switch>
            </article>
          </div>
        </div>
      }
    />
    <Route render={()=> ( <Redirect to={'/error'}/>)}/>
  </Switch>
)

class router extends Component{
  constructor(props){
    super(props);
    this.state = {
    };
  }
  render () {
    return (
      <Router>
        {
          this.props.userInfo.user_name ? loginIn() : login()
        }
      </Router>
    )
  }
}


const mapStateToProps = (state) => {
  return { userInfo: state.LoginReducer.userInfo }
};

export default connect(mapStateToProps)(router)

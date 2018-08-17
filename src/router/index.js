import React, { Component } from 'react'
import { connect } from 'react-redux'

import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'

// import Routes from './routes'
// import Main from '../views/main'
import Login from '../views/passport/login'
import Register from '../views/passport/register'
import Error from '../views/error'
import Index from '../views/index/index'
import UserList from '../views/user/list'
import AdminList from '../views/admin/list'

import HeaderTop from '../components/layout/header'
import SliderMenu from '../components/layout/sliderMenu'
import '../styles/layout.less'

class Main extends Component{
  render () {
    return (
      <div className={'page-main'}>
        <HeaderTop />
        <div className={'page-content'}>
          <aside className={'page-aside'}>
            <SliderMenu/>
          </aside>
          <article className={'page-article'}>
            {this.props.children}
          </article>
        </div>
      </div>
    )
  }
}
const login = () => (
  <Switch>
    <Route exact path={'/login'} component={Login}/>
    <Route exact path={'/'} component={Login}/>
    <Route exact path={'/register'} component={Register}/>
    <Route exact path={'/404'} component={Error}/>
    <Redirect to={'/login'} />
  </Switch>
)

const loginIn = () => (
  <Switch>
    <Route exact path={'/'}  render={()=> ( <Redirect to={'/app/index'} push/>)}/>
    <Route exact path={'/login'} component={Login}/>
    <Route exact path={'/register'} component={Register}/>
    <Route exact path={'/404'} component={Error}/>
    <Main>
      <Route exact path={'/app/index'} component={Index}/>
      <Route exact path={'/app/user/list'} component={UserList}/>
      <Route exact path={'/app/admin/list'} component={AdminList}/>
    </Main>
    <Redirect from={'*'} to={'/404'} push/>
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
          this.props.userInfo.userName ? loginIn() : login()
        }
      </Router>
    )
  }
}


const mapStateToProps = (state) => {
  return { userInfo: state.LoginReducer.userInfo }
};

export default connect(mapStateToProps)(router)

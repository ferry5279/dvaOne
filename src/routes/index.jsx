import React from 'react';
import { Router, Route, Switch,Link } from 'dva/router'
import {Home,Login} from './assembly'

export default function RouterConfig({ history }) {

  return (
    <Router history={history}>
      <div>
        {/* <Link to='/login' >Login</Link>
        <Link to='/home/1' >Home1</Link>     
        <Link to='/home/2' >Home2</Link>         */}
        <Switch>
        <Route path='/login' component={Login} />
          <Route path='/home/:id' component={Home} />
        </Switch>
     </div>
    </Router>
  )
}

import React from 'react';

import Homepage from './Pages/Homepage/Homepage'
import Login from './Pages/Login/Login'
import CreateAccount from './Pages/CreateAccount/CreateAccount'

import {Link, BrowserRouter, Switch, Route} from 'react-router-dom'

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>


        <div>
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route path="/login" component={Login} />
            <Route path="/createaccount" component={CreateAccount} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;

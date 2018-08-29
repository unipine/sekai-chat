import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ChatApp from './components/ChatApp'
import LoginPage from './pages/LoginPage'
import LogoutPage from './pages/LogoutPage'
import SignInPage from './pages/SignInPage'
import Navbar from './containers/NavBarContainer'
import PrivateRoute from './containers/PrivateRouteContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <PrivateRoute path="/chat" component={ChatApp} />
          <Route path="/login" component={LoginPage} />
          <Route path="/logout" component={LogoutPage} />
          <Route path="/signin" component={SignInPage} />
        </Switch>
      </div>
    );
  }
}

export default App;

import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { withRouter, Route, NavLink, Link, Switch, Redirect } from 'react-router-dom'


const HomePage = () => (
  <Switch>
    <Route path="/login" component={(props) => <LoginPage authenticate={Authenticate} isAuthenticated={isAuthenticated} {...props} />} />
    <PrivateRoute exact path="/" component={() => <Redirect to="/chatroom"/>} />
    <PrivateRoute isAuthenticated={isAuthenticated} path="/chatroom" component={(props) => <ChatApp  {...props}/>} />
  </Switch>


export default HomePage

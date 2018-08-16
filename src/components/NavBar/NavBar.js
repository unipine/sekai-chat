import React, { Component } from 'react';
import { withRouter, Route, NavLink, Link, Switch, Redirect } from 'react-router-dom'
import AuthButton from './components/AuthButton'


const NavBar = ({isAuthenticated,SignOut}) => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <Link className="navbar-brand" to="/">Chat Project</Link>
    {isAuthenticated && (
    <div className="navbar-nav mr-auto mt-2 mt-lg-0">
      <NavLink className="nav-item nav-link" to="/chatroom">Chatroom</NavLink>
    </div>}
    <form className="form-inline my-2 my-lg-0">
      <AuthButton isAuthenticated={isAuthenticated} onSignedOut={SignOut} />
    </form>
  </nav>
)

export default NavBar

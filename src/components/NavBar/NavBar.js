import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

const Navbar = ({ isAuthenticated }) =>
  <nav className="navbar navbar-default">
    <div className="container">
      <ul className="nav navbar-nav">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/chat">Chat</Link>
        </li>
        {isAuthenticated ? (
          <li>
            <Link to="/logout">Logout</Link>
          </li>
        ) : (
          <Fragment>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/signin">Sign In</Link>
            </li>
          </Fragment>
        )}
      </ul>
    </div>
  </nav>

export default Navbar

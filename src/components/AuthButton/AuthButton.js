import React from 'react'
import PropTypes from 'prop-types'

const AuthButton = ({ isAuthenticated, onSignedOut }) => (
  isAuthenticated && (
    <button className="btn btn-outline-success my-2 my-sm-0" onClick={onSignedOut}>Cerrar Sesión</button>
  )
);

AuthButton.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  onSignedOut: PropTypes.func.isRequired,
};

export default AuthButton

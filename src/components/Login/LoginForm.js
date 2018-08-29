import React from 'react'
import { Field } from 'redux-form'
import { Redirect } from 'react-router'
import renderField from '../renderField'

const LoginForm = ({ handleSubmit, submitSucceeded, error, submitting }) =>
  submitSucceeded ? (
    <Redirect to="/chat" />
  ) : (
      <form className="form-signin" onSubmit={handleSubmit}>
         {error &&
           <div className="alert alert-danger">
           {error}
           </div>}
         <div className="form-group">
           <Field
           label="Username"
           component={renderField}
           name="username"
           type="text"
           className="form-control"
           autoFocus
           placeholder="Nombre de Usuario"
           />
         </div>
         <div className="form-group">
           <Field
           label="Password"
           component={renderField}
           name="password"
           type="password"
           className="form-control"
           autoFocus
           placeholder="Password de Usuario" />
         </div>
         <button className="btn btn-lg btn-primary btn-block" type="submit" disabled={submitting}>Login</button>
       </form>
     )

export default LoginForm

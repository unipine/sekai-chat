import React from 'react'
import { reduxForm, Field } from 'redux-form'
import {SubmissionError} from 'redux-form'
import {postUser,postAuth} from '../../actions/Actions'


const validate = values => {

  const errors = {}

  if (!values.username) {
    errors.username = 'Required'
  } else if (values.username > 8 ){
    errors.username = 'Mas de 8 caracteres...'
  }

  return errors

}

let LoginForm = ({error, handleSubmit, submitting}) =>
      <form className="form-signin" onSubmit={handleSubmit}>
         <h1 className="h3 mb-3 font-weight-normal">Por favor ingrese sus datos para el Login:</h1>
         {error && <div className="alert alert-danger">{error}</div>}
         <div className="form-group">
           <label htmlFor="username">Usuario</label>
           <Field component="input" name="username" type="text" className="form-control" autoFocus placeholder="Nombre de Usuario" />
         </div>
         <div className="form-group">
           <label htmlFor="password">Password</label>
           <Field component="input" name="password" type="password" className="form-control" autoFocus placeholder="Password de Usuario" />
         </div>
         <button className="btn btn-lg btn-primary btn-block" type="submit" disabled={submitting}>Login</button>
       </form>

const onSubmit = (values,dispatch,props) => {

   console.log('Login Page',values)

   return dispatch(postAuth(values))
      .catch(err => {
        throw new SubmissionError({_error:err.response.data.message})
      })

}

LoginForm = reduxForm({ form: 'login', validate, onSubmit}) (LoginForm)

export default LoginForm

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

let LoginForm = ({handleSubmit, submitting}) =>
      <form className="form-signin" onSubmit={handleSubmit}>
         <h1 className="h3 mb-3 font-weight-normal">Por favor ingrese sus datos</h1>
         <div>
           <label className="sr-only" htmlFor="email">Email</label>
           <Field component="input" name="email" type="email" className="form-control" autoFocus placeholder="Email de Usuario" />
         </div>
         <div>
           <label className="sr-only" htmlFor="username">Usuario</label>
           <Field component="input" name="username" type="text" className="form-control" autoFocus placeholder="Nombre de Usuario" />
         </div>
         <div>
           <label className="sr-only" htmlFor="password">Password</label>
           <Field component="input" name="password" type="password" className="form-control" autoFocus placeholder="Password de Usuario" />
         </div>
         <button className="btn btn-lg btn-primary btn-block" type="submit" disabled={submitting}>Login</button>
       </form>

  const onSubmit = (values,dispatch,props) => {

         console.log('Login Page',values)

         dispatch(postUser(values)).catch(err => {throw new SubmissionError({_error:err.message})})
         
       }

LoginForm = reduxForm({ form: 'login', validate, onSubmit}) (LoginForm)

export default LoginForm

import React from 'react'
import { Field } from 'redux-form'
import { Redirect } from 'react-router'
import renderField from '../renderField'


const SignInForm = ({ handleSubmit, submitSucceeded,  error, submitting, ...rest }) =>
         submitSucceeded ? (
           <Redirect to="/chat" />
         ) : (
           <form className="form-signin" onSubmit={handleSubmit} noValidate autoComplete="off">
             {error && (
               <div style={{ color: 'red' }}>
                 {error}
               </div>
             )}
             {submitting && <div>Submitting...</div>}
             <div>
               <Field
               label="Email"
               component={renderField}
               name="email"
               type="email"
               className="form-control"
               autoFocus
               placeholder="Email de Usuario" />
             </div>
             <div>
               <Field
               label="Username"
               component={renderField}
               name="username"
               type="text"
               className="form-control"
               autoFocus
               placeholder="Nombre de Usuario" />
             </div>
             <div>
               <Field
               label="Password"
               component={renderField}
               name="password"
               type="password"
               className="form-control"
               autoFocus
               placeholder="Password de Usuario" />
             </div>
             <div>
               <Field
               label="Confirm Password"
               component={renderField}
               name="confirm_password"
               type="password"
               className="form-control"
               autoFocus
               placeholder="Confirm Password de Usuario" />
             </div>
             <button className="btn btn-lg btn-primary btn-block" type="submit" disabled={submitting}>SignIn</button>
           </form>
         )


export default SignInForm
